'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft, CheckCircle2, Loader2, Play, ChevronDown,
  ChevronRight, Activity, FileText, AlertTriangle, Zap, Bot, FastForward
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useProjectStore } from '@/lib/store';
import { Squad, SquadId, GATEWAY_CHECKLISTS, SQUAD_COLORS, Agent } from '@/lib/types';
import { toast } from 'sonner';

const THINKING_MESSAGES = [
  'Conectando ao modelo...',
  'Lendo briefing e contexto...',
  'Processando dados...',
  'Analisando cenários possíveis...',
  'Estruturando o resultado...',
  'Finalizando artefato...'
];

export default function ProjectPage() {
  const params = useParams();
  const projectId = params?.id as string;
  const { init, getProject, setSubagentResult, setSubagentStatus, recordGateway, apiKey } = useProjectStore();

  const [expandedSquad, setExpandedSquad] = useState<string | null>(null);
  const [expandedAgent, setExpandedAgent] = useState<string | null>(null);
  
  // Track running states
  const [runningAgent, setRunningAgent] = useState<string | null>(null); // To block buttons
  const [batchRunningAgentId, setBatchRunningAgentId] = useState<string | null>(null); // For the "Fast Forward" button
  const [thinkingMessage, setThinkingMessage] = useState<Record<string, string>>({}); // msg per subagent

  const [showGateway, setShowGateway] = useState<string | null>(null);
  const [gatewayChecklist, setGatewayChecklist] = useState<boolean[]>([]);
  const [gatewayFeedback, setGatewayFeedback] = useState('');

  useEffect(() => { init(); }, [init]);

  const project = getProject(projectId);

  useEffect(() => {
    if (project) {
      const active = project.squads.find(s => s.status === 'active');
      if (active) setExpandedSquad(active.id);
    }
  }, [project?.currentSquadIndex]);

  if (!project) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
      </div>
    );
  }

  const completedSquads = project.squads.filter(s => s.status === 'completed').length;
  const progress = (completedSquads / 7) * 100;

  const runSubagent = async (squad: Squad, agentId: string, subagentId: string) => {
    const agent = squad.agents.find(a => a.id === agentId);
    const subagent = agent?.subagents.find(sa => sa.id === subagentId);
    if (!agent || !subagent || subagent.status === 'done') return;

    const key = `${agentId}/${subagentId}`;
    setRunningAgent(key);
    setSubagentStatus(projectId, squad.id, agentId, subagentId, 'running');

    // Start Thinking State loop
    let msgIndex = 0;
    setThinkingMessage(prev => ({ ...prev, [key]: THINKING_MESSAGES[0] }));
    const msgInterval = setInterval(() => {
      msgIndex = (msgIndex + 1) % THINKING_MESSAGES.length;
      setThinkingMessage(prev => ({ ...prev, [key]: THINKING_MESSAGES[msgIndex] }));
    }, 800);

    try {
      const context = `Projeto: ${project.name}\nBriefing: ${project.briefing}\nSquad: ${squad.name}\nAgente: ${agent.name}\nSubagente: ${subagent.name}\nFunção: ${subagent.role}\nLLM recomendado: ${agent.llm}`;

      const headers: Record<string, string> = { 'Content-Type': 'application/json' };
      if (apiKey) {
        headers['Authorization'] = `Bearer ${apiKey}`;
      }

      const res = await fetch('/api/orchestrator', {
        method: 'POST',
        headers,
        body: JSON.stringify({ briefing: context, phase: squad.id }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);

      setSubagentResult(projectId, squad.id, agentId, subagentId, data.result);
      toast.success(`${subagent.name} concluído!`);
    } catch (err: any) {
      setSubagentStatus(projectId, squad.id, agentId, subagentId, 'error');
      toast.error('Erro na IA', { description: err.message });
    } finally {
      clearInterval(msgInterval);
      setRunningAgent(null);
      setThinkingMessage(prev => { const n = { ...prev }; delete n[key]; return n; });
    }
  };

  const runEntireAgent = async (squad: Squad, agent: Agent) => {
    setBatchRunningAgentId(agent.id);
    setExpandedAgent(agent.id); // Auto-expand to see the magic
    
    for (const sa of agent.subagents) {
      if (sa.status !== 'done') {
        await runSubagent(squad, agent.id, sa.id);
      }
    }
    setBatchRunningAgentId(null);
  };

  const isSquadReady = (squad: Squad) =>
    squad.agents.every(ag => ag.subagents.every(sa => sa.status === 'done'));

  const getSquadProgress = (squad: Squad) => {
    const total = squad.agents.reduce((sum, ag) => sum + ag.subagents.length, 0);
    const done = squad.agents.reduce((sum, ag) => sum + ag.subagents.filter(sa => sa.status === 'done').length, 0);
    return { done, total };
  };

  const openGateway = (squadId: string) => {
    const checklist = GATEWAY_CHECKLISTS[squadId as SquadId] || [];
    setGatewayChecklist(new Array(checklist.length).fill(false));
    setGatewayFeedback('');
    setShowGateway(squadId);
  };

  const submitGateway = (squadId: string, decision: 'approved' | 'iterate') => {
    recordGateway(projectId, squadId, {
      gatewayId: `gw-${squadId}-${Date.now()}`,
      decision,
      feedback: gatewayFeedback,
      checklist: (GATEWAY_CHECKLISTS[squadId as SquadId] || []).map((label, i) => ({ label, checked: gatewayChecklist[i] })),
      decidedBy: 'Designer',
      decidedAt: new Date().toISOString(),
    });
    setShowGateway(null);
    toast.success(decision === 'approved' ? 'Gateway Aprovado com Sucesso!' : 'Iteração solicitada.');
  };

  return (
    <div className="max-w-5xl mx-auto pb-20 pt-4 space-y-8">
      <Link href="/projects"><Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground transition-colors"><ArrowLeft className="w-4 h-4 mr-1.5" /> Projetos</Button></Link>

      {/* Header Premium */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-3xl bg-card/50 backdrop-blur-xl border border-border p-8 relative overflow-hidden">
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse-slow" />
        <div className="relative z-10">
          <Badge variant="outline" className="text-xs mb-3 text-muted-foreground font-medium">{project.client}</Badge>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight mb-1">{project.name}</h1>
          <p className="text-muted-foreground text-sm max-w-xl leading-relaxed mb-6">{project.briefing.slice(0, 200)}{project.briefing.length > 200 ? '...' : ''}</p>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 1, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 via-cyan-500 via-amber-500 via-rose-500 via-orange-500 to-emerald-500 rounded-full" 
              />
            </div>
            <span className="text-sm font-bold text-muted-foreground">{completedSquads}/7 squads</span>
          </div>
        </div>
      </motion.div>

      {/* Pipeline Principal */}
      <div className="space-y-3">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2 mb-4"><Activity className="w-5 h-5 text-primary" /> Pipeline de Execução</h2>

        {project.squads.map((squad) => {
          const colors = SQUAD_COLORS[squad.color] || SQUAD_COLORS.blue;
          const isExpanded = expandedSquad === squad.id;
          const isLocked = squad.status === 'locked';
          const isCompleted = squad.status === 'completed';
          const isActive = squad.status === 'active';
          const { done, total } = getSquadProgress(squad);
          const allDone = done === total;

          return (
            <div key={squad.id} className={`rounded-2xl border transition-all duration-300 ${isActive ? `${colors.border} ${colors.glow}` : 'border-border'} ${isLocked ? 'opacity-40' : ''}`}>
              {/* Header da Squad */}
              <button onClick={() => !isLocked && setExpandedSquad(isExpanded ? null : squad.id)} disabled={isLocked} className="w-full flex items-center gap-4 p-5 text-left group">
                <div className={`flex h-10 w-10 items-center justify-center rounded-xl shrink-0 text-lg transition-colors ${isCompleted ? 'bg-emerald-500/10' : isActive ? colors.bg : 'bg-muted'}`}>
                  {isCompleted ? <CheckCircle2 className="w-5 h-5 text-emerald-400" /> : <span>{squad.emoji}</span>}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className={`font-bold transition-colors ${isActive ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'}`}>{squad.name}</h3>
                    <span className="text-xs text-muted-foreground hidden md:inline">· {squad.description}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="w-24 h-1 bg-muted rounded-full overflow-hidden">
                      <motion.div initial={false} animate={{ width: `${(done / total) * 100}%` }} className={`h-full rounded-full ${isCompleted ? 'bg-emerald-400' : 'bg-primary'}`} />
                    </div>
                    <span className="text-[10px] text-muted-foreground font-medium">{done}/{total} concluídos</span>
                  </div>
                </div>
                {isActive && allDone && !squad.gateway && (
                  <Badge className={`shrink-0 ${colors.bg} ${colors.text} border ${colors.border} text-xs font-bold animate-pulse`}>
                    <Zap className="w-3 h-3 mr-1" /> Gateway Aberto
                  </Badge>
                )}
                {!isLocked && (isExpanded ? <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" /> : <ChevronRight className="w-5 h-5 text-muted-foreground shrink-0" />)}
              </button>

              {/* Area dos Agentes */}
              <AnimatePresence>
                {isExpanded && !isLocked && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} 
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 space-y-4 pt-2">
                      {squad.agents.map((agent) => {
                        const agentDone = agent.subagents.filter(sa => sa.status === 'done').length;
                        const agentExpanded = expandedAgent === agent.id;
                        const isBatchRunning = batchRunningAgentId === agent.id;
                        const isAllDone = agentDone === agent.subagents.length;

                        return (
                          <div key={agent.id} className="rounded-xl border border-border/50 bg-card/30 overflow-hidden shadow-sm">
                            {/* Header do Agente */}
                            <div className="flex items-center justify-between p-4 hover:bg-accent/30 transition-colors">
                              <button onClick={() => setExpandedAgent(agentExpanded ? null : agent.id)} className="flex-1 flex items-center gap-3 text-left">
                                <Bot className={`w-4 h-4 shrink-0 ${isAllDone ? 'text-emerald-400' : colors.text}`} />
                                <div className="flex-1 min-w-0">
                                  <span className="text-sm font-semibold text-foreground">{agent.name}</span>
                                  <Badge variant="outline" className="ml-2 text-[9px] font-normal text-muted-foreground bg-background/50">{agent.llm}</Badge>
                                </div>
                                <span className="text-[10px] font-medium text-muted-foreground px-2">{agentDone}/{agent.subagents.length}</span>
                                {agentExpanded ? <ChevronDown className="w-4 h-4 text-muted-foreground" /> : <ChevronRight className="w-4 h-4 text-muted-foreground" />}
                              </button>

                              {/* Botão Batch Run */}
                              {isActive && !isAllDone && (
                                <Button 
                                  size="sm" variant="secondary" 
                                  onClick={() => runEntireAgent(squad, agent)} disabled={isBatchRunning || !!runningAgent}
                                  className="ml-4 h-8 text-xs font-semibold bg-primary/10 hover:bg-primary/20 text-primary border border-primary/10 transition-all shadow-sm"
                                >
                                  {isBatchRunning ? <><Loader2 className="w-3.5 h-3.5 mr-1.5 animate-spin" />Processando Agente...</> : <><FastForward className="w-3.5 h-3.5 mr-1.5" />Executar Todos</>}
                                </Button>
                              )}
                            </div>

                            {/* Área dos Subagentes */}
                            <AnimatePresence>
                              {agentExpanded && (
                                <motion.div 
                                  initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }}
                                  className="overflow-hidden bg-background/20"
                                >
                                  <div className="px-4 pb-4 grid gap-3 md:grid-cols-2 pt-2 border-t border-border/50">
                                    {agent.subagents.map((sa) => {
                                      const saKey = `${agent.id}/${sa.id}`;
                                      const isRunning = runningAgent === saKey;
                                      const isDone = sa.status === 'done';
                                      const currentMsg = thinkingMessage[saKey];

                                      return (
                                        <div key={sa.id} className={`rounded-lg border p-4 transition-all duration-300 ${isDone ? 'bg-emerald-500/5 border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)]' : isRunning ? `border-primary/40 bg-primary/5 ${colors.glow}` : 'bg-card/50 border-border/60 hover:border-border'}`}>
                                          <div className="flex items-start justify-between gap-2 mb-2">
                                            <h5 className="text-sm font-bold text-foreground">{sa.name}</h5>
                                            {isDone && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
                                            {isRunning && <Loader2 className="w-4 h-4 text-primary animate-spin shrink-0" />}
                                          </div>
                                          <p className="text-[11px] text-muted-foreground leading-relaxed mb-3">{sa.role}</p>

                                          {/* Mock Data Vis - The Output */}
                                          {isDone && sa.result && (
                                            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="bg-background/80 rounded-md p-3 border border-border/40 mb-3 backdrop-blur shadow-sm">
                                              <p className="text-[11px] font-bold text-foreground mb-1.5">{sa.result.title || 'Artefato Gerado'}</p>
                                              <div className="space-y-1.5">
                                                {Object.entries(sa.result).slice(0, 2).map(([k, v]) => {
                                                  if (k === 'title') return null;
                                                  return (
                                                    <div key={k}>
                                                      <span className="text-[9px] uppercase tracking-wider text-muted-foreground font-semibold">{k.replace('_', ' ')}</span>
                                                      <p className="text-[11px] text-foreground/90 truncate">{Array.isArray(v) ? v[0] : String(v)}</p>
                                                    </div>
                                                  );
                                                })}
                                              </div>
                                            </motion.div>
                                          )}

                                          {/* Labor Illusion - Thinking State */}
                                          <AnimatePresence mode="wait">
                                            {isRunning && currentMsg && (
                                              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[11px] text-primary font-medium flex items-center mb-3 h-4">
                                                <motion.span initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} transition={{ repeat: Infinity, duration: 0.8, direction: 'alternate' }}>{currentMsg}</motion.span>
                                              </motion.div>
                                            )}
                                          </AnimatePresence>

                                          {/* Single Execute Button */}
                                          {isActive && !isDone && !isRunning && !batchRunningAgentId && (
                                            <Button size="sm" onClick={() => runSubagent(squad, agent.id, sa.id)} className="w-full h-8 text-[11px] font-semibold bg-accent hover:bg-accent/80 text-foreground border border-border transition-colors">
                                              <Play className="w-3 h-3 mr-1.5" /> Executar Subagente
                                            </Button>
                                          )}
                                          
                                          {isDone && (
                                            <Button size="sm" variant="ghost" className="w-full h-8 text-[10px] text-muted-foreground hover:text-foreground">
                                              <FileText className="w-3 h-3 mr-1.5" /> Ver Detalhes Completos
                                            </Button>
                                          )}
                                        </div>
                                      );
                                    })}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        );
                      })}

                      {/* Gateway Ceremony */}
                      <AnimatePresence>
                        {isActive && allDone && !squad.gateway && (
                          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={`rounded-xl border-2 border-dashed ${colors.border} bg-background/50 p-8 text-center mt-6 relative overflow-hidden`}>
                            <div className={`absolute inset-0 ${colors.bg} opacity-50`} />
                            <div className="relative z-10">
                              <div className={`w-12 h-12 rounded-full ${colors.bg} mx-auto flex items-center justify-center mb-3`}>
                                <AlertTriangle className={`w-6 h-6 ${colors.text}`} />
                              </div>
                              <p className="text-lg font-bold text-foreground mb-1">Squad Concluída — Cerimônia de Gateway</p>
                              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">A IA finalizou o trabalho desta fase. Revise os artefatos visuais e assine a aprovação para desbloquear a próxima squad.</p>
                              <Button onClick={() => openGateway(squad.id)} className={`shadow-lg hover:shadow-xl transition-shadow ${colors.text} bg-primary/10 border border-primary/20 hover:bg-primary/20 font-bold px-6`}>
                                <FileText className="w-4 h-4 mr-2" /> Iniciar Gateway
                              </Button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {squad.gateway && (
                        <div className="rounded-xl bg-emerald-500/10 border border-emerald-500/20 p-4 flex items-center gap-3">
                          <div className="bg-emerald-500/20 p-1.5 rounded-full"><CheckCircle2 className="w-5 h-5 text-emerald-400" /></div>
                          <div>
                            <span className="font-bold text-emerald-400 text-sm block">Gateway Aprovado</span>
                            {squad.gateway.feedback && <span className="text-xs text-muted-foreground mt-0.5 block">Nota: "{squad.gateway.feedback}"</span>}
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* Modal do Gateway (Mantido) */}
      <AnimatePresence>
        {showGateway && (() => {
          const squad = project.squads.find(s => s.id === showGateway);
          if (!squad) return null;
          const colors = SQUAD_COLORS[squad.color] || SQUAD_COLORS.blue;
          const checklistLabels = GATEWAY_CHECKLISTS[showGateway as SquadId] || [];
          const allChecked = gatewayChecklist.every(Boolean);

          return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={() => setShowGateway(null)}>
              <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="bg-card border border-border rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl relative" onClick={(e) => e.stopPropagation()}>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className={`h-12 w-12 rounded-2xl flex items-center justify-center text-2xl shadow-inner ${colors.bg}`}>{squad.emoji}</div>
                  <div>
                    <h2 className="text-2xl font-extrabold text-foreground tracking-tight">Gateway: {squad.name}</h2>
                    <p className="text-sm text-muted-foreground">Responsabilidade Humana: Revise antes de avançar.</p>
                  </div>
                </div>

                <div className="bg-background/80 rounded-xl border border-border p-4 mb-6 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-0.5">Resumo da Execução</p>
                    <p className="text-xs text-muted-foreground">{squad.agents.length} agentes, {squad.agents.reduce((s, a) => s + a.subagents.length, 0)} subagentes concluídos com sucesso.</p>
                  </div>
                  <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 font-bold">100% Finalizado</Badge>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-sm font-semibold text-foreground">Critérios de Aprovação (Checklist)</p>
                  <div className="grid gap-3">
                    {checklistLabels.map((label, i) => (
                      <label key={i} className={`flex items-start gap-3 cursor-pointer p-3 rounded-lg border transition-colors ${gatewayChecklist[i] ? 'bg-primary/5 border-primary/30' : 'bg-background/50 border-border hover:border-primary/50'}`}>
                        <input type="checkbox" checked={gatewayChecklist[i]} onChange={() => { const n = [...gatewayChecklist]; n[i] = !n[i]; setGatewayChecklist(n); }} className="mt-0.5 h-4 w-4 rounded border-border text-primary focus:ring-primary bg-background" />
                        <span className={`text-sm ${gatewayChecklist[i] ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>{label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <label className="text-sm font-semibold text-foreground block mb-2">Feedback de Iteração (Opcional)</label>
                  <textarea value={gatewayFeedback} onChange={(e) => setGatewayFeedback(e.target.value)} placeholder="Ex: Adicionar uma persona mais jovem; Focar mais no onboarding..." className="w-full h-24 bg-background border border-input rounded-xl px-4 py-3 text-sm text-foreground outline-none resize-none focus:ring-2 focus:ring-primary/50 transition-shadow" />
                </div>

                <div className="flex gap-4">
                  <Button variant="outline" onClick={() => submitGateway(showGateway, 'iterate')} className="flex-1 h-12 rounded-xl">Solicitar Iteração na Squad</Button>
                  <Button onClick={() => submitGateway(showGateway, 'approved')} disabled={!allChecked} className="flex-1 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold disabled:opacity-40 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                    <CheckCircle2 className="w-5 h-5 mr-2" /> Aprovar e Avançar Pipeline
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
