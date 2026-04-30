// ============================================================
// CX Operating System — Project Store (Zustand + localStorage)
// 7 Squads architecture. Replace localStorage with fetch()
// to connect to a real backend.
// ============================================================

import { create } from 'zustand';
import { Project, Squad, SQUAD_BLUEPRINT, AgentStatus, GatewayRecord } from './types';

const STORAGE_KEY = 'cx-os-projects-v2';

function createFreshSquads(): Squad[] {
  return SQUAD_BLUEPRINT.map((bp, i) => ({
    ...bp,
    agents: bp.agents.map((ag) => ({
      ...ag,
      subagents: ag.subagents.map((sa) => ({ ...sa })),
    })),
    gateway: null,
    status: i === 0 ? 'active' : 'locked',
  }));
}

function loadProjects(): Project[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveProjects(projects: Project[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
}

interface ProjectStore {
  projects: Project[];
  initialized: boolean;
  init: () => void;
  createProject: (name: string, client: string, briefing: string) => string;
  getProject: (id: string) => Project | undefined;
  deleteProject: (id: string) => void;
  setSubagentStatus: (projectId: string, squadId: string, agentId: string, subagentId: string, status: AgentStatus) => void;
  setSubagentResult: (projectId: string, squadId: string, agentId: string, subagentId: string, result: any) => void;
  recordGateway: (projectId: string, squadId: string, record: GatewayRecord) => void;
  apiKey: string | null;
  setApiKey: (key: string) => void;
}

export const useProjectStore = create<ProjectStore>((set, get) => ({
  projects: [],
  initialized: false,
  apiKey: null,

  init: () => {
    if (get().initialized) return;
    const storedApiKey = typeof window !== 'undefined' ? localStorage.getItem('cx-os-api-key') : null;
    set({ projects: loadProjects(), apiKey: storedApiKey, initialized: true });
  },

  setApiKey: (key: string) => {
    if (typeof window !== 'undefined') localStorage.setItem('cx-os-api-key', key);
    set({ apiKey: key });
  },

  createProject: (name, client, briefing) => {
    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    const project: Project = {
      id, name, client, briefing,
      status: 'in_progress',
      currentSquadIndex: 0,
      squads: createFreshSquads(),
      createdAt: now,
      updatedAt: now,
    };
    const updated = [...get().projects, project];
    set({ projects: updated });
    saveProjects(updated);
    return id;
  },

  getProject: (id) => get().projects.find((p) => p.id === id),

  deleteProject: (id) => {
    const updated = get().projects.filter((p) => p.id !== id);
    set({ projects: updated });
    saveProjects(updated);
  },

  setSubagentStatus: (projectId, squadId, agentId, subagentId, status) => {
    const projects = get().projects.map((p) => {
      if (p.id !== projectId) return p;
      return {
        ...p, updatedAt: new Date().toISOString(),
        squads: p.squads.map((sq) => {
          if (sq.id !== squadId) return sq;
          return {
            ...sq,
            agents: sq.agents.map((ag) => {
              if (ag.id !== agentId) return ag;
              return {
                ...ag,
                subagents: ag.subagents.map((sa) => {
                  if (sa.id !== subagentId) return sa;
                  return { ...sa, status, executedAt: status === 'done' ? new Date().toISOString() : sa.executedAt };
                }),
              };
            }),
          };
        }),
      };
    });
    set({ projects });
    saveProjects(projects);
  },

  setSubagentResult: (projectId, squadId, agentId, subagentId, result) => {
    const projects = get().projects.map((p) => {
      if (p.id !== projectId) return p;
      return {
        ...p, updatedAt: new Date().toISOString(),
        squads: p.squads.map((sq) => {
          if (sq.id !== squadId) return sq;
          return {
            ...sq,
            agents: sq.agents.map((ag) => {
              if (ag.id !== agentId) return ag;
              return {
                ...ag,
                subagents: ag.subagents.map((sa) => {
                  if (sa.id !== subagentId) return sa;
                  return { ...sa, result, status: 'done' as AgentStatus, executedAt: new Date().toISOString() };
                }),
              };
            }),
          };
        }),
      };
    });
    set({ projects });
    saveProjects(projects);
  },

  recordGateway: (projectId, squadId, record) => {
    const projects = get().projects.map((p) => {
      if (p.id !== projectId) return p;
      const sqIdx = p.squads.findIndex((sq) => sq.id === squadId);
      if (sqIdx === -1) return p;

      const newSquads = [...p.squads];
      newSquads[sqIdx] = { ...newSquads[sqIdx], gateway: record, status: 'completed' };

      const isApproved = record.decision === 'approved' || record.decision === 'approved_with_conditions';
      if (isApproved && sqIdx + 1 < newSquads.length) {
        newSquads[sqIdx + 1] = { ...newSquads[sqIdx + 1], status: 'active' };
      }

      return {
        ...p,
        currentSquadIndex: isApproved ? Math.min(p.currentSquadIndex + 1, 6) : p.currentSquadIndex,
        status: (isApproved && sqIdx === 6) ? 'completed' as const : p.status,
        squads: newSquads,
        updatedAt: new Date().toISOString(),
      };
    });
    set({ projects });
    saveProjects(projects);
  },
}));
