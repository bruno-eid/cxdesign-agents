// Mock data para o Dashboard do CX Operating System

export interface DashboardStats {
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'stable' | 'attention';
  icon: string;
  color: string;
  bgColor: string;
}

export interface Project {
  id: string;
  name: string;
  client: string;
  phase: string;
  phaseNumber: number;
  progress: number;
  status: 'active' | 'review' | 'blocked' | 'completed';
  daysLeft: number;
  score: number;
  lastUpdate: string;
  team: string[];
  description: string;
}

export interface AIInsight {
  id: string;
  title: string;
  description: string;
  type: 'success' | 'warning' | 'info' | 'error';
  icon: string;
  priority: 'high' | 'medium' | 'low';
  actionable: boolean;
  timestamp: string;
}

export interface AgentActivity {
  id: string;
  name: string;
  phase: string;
  status: 'working' | 'idle' | 'completed' | 'error';
  currentTask: string;
  progress: number;
  projectId: string;
  projectName: string;
}

export const mockStats: DashboardStats[] = [
  {
    label: 'Projetos Ativos',
    value: '12',
    change: '+3 este mês',
    trend: 'up',
    icon: 'FolderKanban',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    label: 'Agentes Trabalhando',
    value: '29',
    change: '100% disponíveis',
    trend: 'stable',
    icon: 'Users',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    label: 'Aprovações Pendentes',
    value: '8',
    change: 'Requer atenção',
    trend: 'attention',
    icon: 'CheckSquare',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    label: 'Taxa de Sucesso',
    value: '94%',
    change: '+2% vs mês anterior',
    trend: 'up',
    icon: 'TrendingUp',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
  },
];

export const mockProjects: Project[] = [
  {
    id: 'proj-001',
    name: 'Sicoob Fun',
    client: 'Sicoob',
    phase: 'Visual',
    phaseNumber: 3,
    progress: 75,
    status: 'active',
    daysLeft: 5,
    score: 88,
    lastUpdate: '2 horas atrás',
    team: ['UI Designer', 'Design System Manager', 'Prototyper'],
    description: 'Plataforma de engajamento para torcedores do Sicoob Atlético',
  },
  {
    id: 'proj-002',
    name: 'Portal Cooperado',
    client: 'Sicoob',
    phase: 'Pesquisa',
    phaseNumber: 1,
    progress: 40,
    status: 'active',
    daysLeft: 12,
    score: 92,
    lastUpdate: '5 horas atrás',
    team: ['User Researcher', 'Persona Crafter', 'Journey Mapper'],
    description: 'Portal de autoatendimento para cooperados',
  },
  {
    id: 'proj-003',
    name: 'App Mobile Banking',
    client: 'Banco Digital',
    phase: 'Arquitetura UX',
    phaseNumber: 2,
    progress: 60,
    status: 'review',
    daysLeft: 8,
    score: 85,
    lastUpdate: '1 dia atrás',
    team: ['UX Designer', 'IA Architect', 'Service Designer'],
    description: 'Aplicativo mobile para operações bancárias',
  },
  {
    id: 'proj-004',
    name: 'E-commerce B2B',
    client: 'Indústria XYZ',
    phase: 'Validação',
    phaseNumber: 4,
    progress: 90,
    status: 'active',
    daysLeft: 3,
    score: 96,
    lastUpdate: '30 minutos atrás',
    team: ['QA Analyst', 'Usability Tester', 'Accessibility Validator'],
    description: 'Plataforma de vendas B2B com catálogo inteligente',
  },
  {
    id: 'proj-005',
    name: 'Dashboard Analytics',
    client: 'Startup Tech',
    phase: 'Estratégia',
    phaseNumber: 0,
    progress: 25,
    status: 'active',
    daysLeft: 15,
    score: 78,
    lastUpdate: '3 horas atrás',
    team: ['Boundary Mapper', 'Scope Validator'],
    description: 'Dashboard de analytics para SaaS',
  },
];

export const mockAIInsights: AIInsight[] = [
  {
    id: 'insight-001',
    title: 'Otimização Detectada',
    description: 'O projeto Sicoob Fun pode economizar 2 dias com automação de testes de usabilidade',
    type: 'success',
    icon: 'Sparkles',
    priority: 'medium',
    actionable: true,
    timestamp: '2 horas atrás',
  },
  {
    id: 'insight-002',
    title: 'Atenção Necessária',
    description: '3 aprovações pendentes há mais de 48h no Gateway 3',
    type: 'warning',
    icon: 'AlertCircle',
    priority: 'high',
    actionable: true,
    timestamp: '4 horas atrás',
  },
  {
    id: 'insight-003',
    title: 'Novo Padrão Identificado',
    description: 'Componente de formulário reutilizável criado automaticamente no projeto Portal Cooperado',
    type: 'info',
    icon: 'Brain',
    priority: 'low',
    actionable: false,
    timestamp: '1 dia atrás',
  },
  {
    id: 'insight-004',
    title: 'Melhoria de Performance',
    description: 'Design System do Sicoob Fun pode ser otimizado reduzindo 30% do tamanho dos assets',
    type: 'success',
    icon: 'Zap',
    priority: 'medium',
    actionable: true,
    timestamp: '6 horas atrás',
  },
  {
    id: 'insight-005',
    title: 'Risco Identificado',
    description: 'Projeto App Mobile Banking está 15% acima do prazo estimado',
    type: 'error',
    icon: 'AlertTriangle',
    priority: 'high',
    actionable: true,
    timestamp: '1 hora atrás',
  },
];

export const mockAgentActivity: AgentActivity[] = [
  {
    id: 'agent-001',
    name: 'UI Designer',
    phase: 'Visual',
    status: 'working',
    currentTask: 'Criando mockups da tela de perfil',
    progress: 65,
    projectId: 'proj-001',
    projectName: 'Sicoob Fun',
  },
  {
    id: 'agent-002',
    name: 'User Researcher',
    phase: 'Pesquisa',
    status: 'working',
    currentTask: 'Analisando resultados de entrevistas',
    progress: 40,
    projectId: 'proj-002',
    projectName: 'Portal Cooperado',
  },
  {
    id: 'agent-003',
    name: 'IA Architect',
    phase: 'Arquitetura',
    status: 'completed',
    currentTask: 'Sitemap finalizado',
    progress: 100,
    projectId: 'proj-003',
    projectName: 'App Mobile Banking',
  },
  {
    id: 'agent-004',
    name: 'Usability Tester',
    phase: 'Validação',
    status: 'working',
    currentTask: 'Executando testes com usuários',
    progress: 80,
    projectId: 'proj-004',
    projectName: 'E-commerce B2B',
  },
  {
    id: 'agent-005',
    name: 'Boundary Mapper',
    phase: 'Estratégia',
    status: 'working',
    currentTask: 'Mapeando restrições técnicas',
    progress: 30,
    projectId: 'proj-005',
    projectName: 'Dashboard Analytics',
  },
  {
    id: 'agent-006',
    name: 'Design System Manager',
    phase: 'Visual',
    status: 'idle',
    currentTask: 'Aguardando aprovação',
    progress: 0,
    projectId: 'proj-001',
    projectName: 'Sicoob Fun',
  },
];

export const mockPendingApprovals = [
  {
    id: 'approval-001',
    projectId: 'proj-001',
    projectName: 'Sicoob Fun',
    phase: 'Visual',
    gateway: 'Gateway 4',
    deliverable: 'Design System v1.0',
    agent: 'Design System Manager',
    submittedAt: '2 dias atrás',
    priority: 'high',
    score: 88,
  },
  {
    id: 'approval-002',
    projectId: 'proj-003',
    projectName: 'App Mobile Banking',
    phase: 'Arquitetura',
    gateway: 'Gateway 3',
    deliverable: 'Wireframes de 15 telas',
    agent: 'UX Designer',
    submittedAt: '3 dias atrás',
    priority: 'high',
    score: 85,
  },
  {
    id: 'approval-003',
    projectId: 'proj-002',
    projectName: 'Portal Cooperado',
    phase: 'Pesquisa',
    gateway: 'Gateway 2',
    deliverable: 'Personas e Jornadas',
    agent: 'Persona Crafter',
    submittedAt: '1 dia atrás',
    priority: 'medium',
    score: 92,
  },
];

export const mockRecentActivity = [
  {
    id: 'activity-001',
    type: 'project_created',
    message: 'Novo projeto "Dashboard Analytics" criado',
    timestamp: '3 horas atrás',
    user: 'Bruno Eid',
  },
  {
    id: 'activity-002',
    type: 'gateway_approved',
    message: 'Gateway 4 aprovado no projeto "E-commerce B2B"',
    timestamp: '5 horas atrás',
    user: 'Maria Silva',
  },
  {
    id: 'activity-003',
    type: 'agent_completed',
    message: 'IA Architect finalizou sitemap do "App Mobile Banking"',
    timestamp: '6 horas atrás',
    user: 'Sistema',
  },
  {
    id: 'activity-004',
    type: 'deliverable_submitted',
    message: 'Design System v1.0 submetido para aprovação',
    timestamp: '2 dias atrás',
    user: 'Design System Manager',
  },
];

// Função helper para obter projetos por status
export function getProjectsByStatus(status: Project['status']) {
  return mockProjects.filter(p => p.status === status);
}

// Função helper para obter insights por prioridade
export function getInsightsByPriority(priority: AIInsight['priority']) {
  return mockAIInsights.filter(i => i.priority === priority);
}

// Função helper para obter agentes por status
export function getAgentsByStatus(status: AgentActivity['status']) {
  return mockAgentActivity.filter(a => a.status === status);
}

// Made with Bob
