import api from './api';
import { Project, ProjectStatus, Phase, ApiResponse, PaginatedResponse } from '@/types';

export interface CreateProjectData {
  name: string;
  description: string;
  client: string;
  team?: string[];
  tags?: string[];
}

export interface UpdateProjectData {
  name?: string;
  description?: string;
  client?: string;
  status?: ProjectStatus;
  currentPhase?: Phase;
  team?: string[];
  tags?: string[];
}

class ProjectService {
  private basePath = '/api/projects';

  async getAll(page = 1, pageSize = 10): Promise<ApiResponse<PaginatedResponse<Project>>> {
    return api.get<PaginatedResponse<Project>>(`${this.basePath}?page=${page}&pageSize=${pageSize}`);
  }

  async getById(id: string): Promise<ApiResponse<Project>> {
    return api.get<Project>(`${this.basePath}/${id}`);
  }

  async create(data: CreateProjectData): Promise<ApiResponse<Project>> {
    return api.post<Project>(this.basePath, data);
  }

  async update(id: string, data: UpdateProjectData): Promise<ApiResponse<Project>> {
    return api.put<Project>(`${this.basePath}/${id}`, data);
  }

  async delete(id: string): Promise<ApiResponse<void>> {
    return api.delete<void>(`${this.basePath}/${id}`);
  }

  async updateStatus(id: string, status: ProjectStatus): Promise<ApiResponse<Project>> {
    return api.put<Project>(`${this.basePath}/${id}/status`, { status });
  }

  async updatePhase(id: string, phase: Phase): Promise<ApiResponse<Project>> {
    return api.put<Project>(`${this.basePath}/${id}/phase`, { phase });
  }

  async getByStatus(status: ProjectStatus): Promise<ApiResponse<Project[]>> {
    return api.get<Project[]>(`${this.basePath}/status/${status}`);
  }

  async search(query: string): Promise<ApiResponse<Project[]>> {
    return api.get<Project[]>(`${this.basePath}/search?q=${encodeURIComponent(query)}`);
  }

  // Mock data para desenvolvimento (remover quando backend estiver pronto)
  async getMockProjects(): Promise<Project[]> {
    return [
      {
        id: '1',
        name: 'Sicoob Fun',
        description: 'Redesign da experiência do aplicativo Sicoob Fun',
        client: 'Sicoob',
        status: ProjectStatus.ACTIVE,
        currentPhase: Phase.RESEARCHER,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        progress: 35,
        team: ['João Silva', 'Maria Santos'],
        tags: ['mobile', 'banking', 'ux'],
      },
      {
        id: '2',
        name: 'Portal Corporativo',
        description: 'Novo portal de serviços corporativos',
        client: 'Empresa XYZ',
        status: ProjectStatus.ACTIVE,
        currentPhase: Phase.STRATEGIST,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        progress: 15,
        team: ['Pedro Costa'],
        tags: ['web', 'b2b'],
      },
    ];
  }
}

export const projectService = new ProjectService();
export default projectService;

// Made with Bob
