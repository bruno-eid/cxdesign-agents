// ============================================================
// CX Operating System — Full Architecture Types
// 7 Squads · 21 Agents · 100+ Subagents
// Backend-agnostic: swap localStorage for REST when ready.
// ============================================================

// ─── Squad & Agent identity ────────────────────────────────

export type SquadId =
  | 'strategy'
  | 'research'
  | 'cx-service'
  | 'ux-architecture'
  | 'content'
  | 'ui-design-system'
  | 'validation-growth';

export type AgentStatus = 'idle' | 'running' | 'done' | 'error';
export type GatewayDecision = 'approved' | 'approved_with_conditions' | 'iterate' | 'paused' | 'rejected';
export type ProjectStatus = 'briefing' | 'in_progress' | 'completed' | 'paused';

// ─── Subagent ──────────────────────────────────────────────

export interface Subagent {
  id: string;
  name: string;
  role: string;
  status: AgentStatus;
  result: Record<string, any> | null;
  executedAt: string | null;
}

// ─── Agent ─────────────────────────────────────────────────

export interface Agent {
  id: string;
  name: string;
  description: string;
  llm: string; // recommended model
  subagents: Subagent[];
}

// ─── Squad ─────────────────────────────────────────────────

export interface Squad {
  id: SquadId;
  index: number;
  name: string;
  emoji: string;
  description: string;
  color: string; // tailwind color key
  agents: Agent[];
  gateway: GatewayRecord | null;
  status: 'locked' | 'active' | 'completed';
}

// ─── Gateway ───────────────────────────────────────────────

export interface GatewayRecord {
  gatewayId: string;
  decision: GatewayDecision;
  feedback: string;
  checklist: { label: string; checked: boolean }[];
  decidedBy: string;
  decidedAt: string;
}

// ─── Project ───────────────────────────────────────────────

export interface Project {
  id: string;
  name: string;
  client: string;
  briefing: string;
  status: ProjectStatus;
  currentSquadIndex: number;
  squads: Squad[];
  createdAt: string;
  updatedAt: string;
}

// ════════════════════════════════════════════════════════════
// BLUEPRINT — Static config for creating new projects
// ════════════════════════════════════════════════════════════

function sa(id: string, name: string, role: string): Subagent {
  return { id, name, role, status: 'idle', result: null, executedAt: null };
}

function agent(id: string, name: string, description: string, llm: string, subagents: Subagent[]): Agent {
  return { id, name, description, llm, subagents };
}

export const SQUAD_BLUEPRINT: Omit<Squad, 'gateway' | 'status'>[] = [
  // ── Squad 1: Estratégico ─────────────────────────────────
  {
    id: 'strategy',
    index: 0,
    name: 'Estratégia',
    emoji: '🎯',
    description: 'Negócio, mercado e direção do produto',
    color: 'blue',
    agents: [
      agent('business-strategist', 'Business Strategist', 'Contexto de negócio, briefing e stakeholders', 'Gemini 1.5 Pro', [
        sa('briefing-agent', 'Briefing Agent', 'Estruturar briefing do projeto'),
        sa('objectives-agent', 'Objetivos de Negócio', 'Definir objetivos mensuráveis'),
        sa('stakeholder-agent', 'Stakeholder Agent', 'Mapear stakeholders e interesses'),
        sa('risk-agent', 'Riscos e Premissas', 'Identificar riscos e premissas'),
      ]),
      agent('product-strategist', 'Product Strategist', 'Visão, proposta de valor e MVP', 'Gemini 1.5 Pro', [
        sa('vision-agent', 'Visão de Produto', 'Definir visão e norte estratégico'),
        sa('value-prop-agent', 'Proposta de Valor', 'Canvas de proposta de valor'),
        sa('mvp-agent', 'MVP Scope', 'Definir escopo mínimo viável'),
        sa('roadmap-agent', 'Roadmap Builder', 'Construir roadmap macro'),
      ]),
      agent('market-researcher', 'Market Researcher', 'Benchmark, tendências e concorrentes', 'Gemini 1.5 Flash', [
        sa('benchmark-direct', 'Benchmark Direto', 'Analisar concorrentes diretos'),
        sa('benchmark-indirect', 'Benchmark Indireto', 'Analisar concorrentes indiretos'),
        sa('trends-agent', 'Tendências', 'Mapear tendências de mercado'),
        sa('positioning-agent', 'Posicionamento', 'Recomendar posicionamento'),
      ]),
    ],
  },

  // ── Squad 2: Research & Discovery ────────────────────────
  {
    id: 'research',
    index: 1,
    name: 'Research & Discovery',
    emoji: '🔬',
    description: 'Investigar usuários, contexto e evidências',
    color: 'purple',
    agents: [
      agent('research-planner', 'Research Planner', 'Planejamento da pesquisa', 'Gemini 1.5 Flash', [
        sa('research-plan', 'Plano de Pesquisa', 'Definir objetivos e métodos'),
        sa('hypotheses-agent', 'Hipóteses', 'Formular hipóteses de pesquisa'),
        sa('interview-script', 'Roteiro de Entrevista', 'Criar roteiros de entrevista'),
        sa('survey-agent', 'Questionário', 'Criar questionários quanti/quali'),
      ]),
      agent('ux-researcher', 'UX Researcher', 'Pesquisa qualitativa e quantitativa', 'Gemini 1.5 Flash', [
        sa('qual-research', 'Pesquisa Qualitativa', 'Analisar entrevistas e observações'),
        sa('quant-research', 'Pesquisa Quantitativa', 'Analisar dados numéricos e surveys'),
        sa('pain-extractor', 'Extrator de Dores', 'Identificar dores e frustrações'),
        sa('behavior-analyst', 'Comportamentos', 'Mapear padrões comportamentais'),
      ]),
      agent('persona-creator', 'Persona Creator', 'Personas, JTBD e segmentação', 'Gemini 1.5 Flash', [
        sa('persona-builder', 'Persona Builder', 'Criar personas baseadas em dados'),
        sa('jtbd-agent', 'Jobs To Be Done', 'Identificar jobs do usuário'),
        sa('empathy-map', 'Mapa de Empatia', 'Criar mapas de empatia por persona'),
        sa('segmentation-agent', 'Segmentação', 'Segmentar por comportamento'),
      ]),
      agent('insight-extractor', 'Insight Extractor', 'Síntese, padrões e oportunidades', 'Gemini 1.5 Pro', [
        sa('clustering-agent', 'Clustering', 'Agrupar achados por afinidade'),
        sa('pattern-agent', 'Padrões', 'Identificar padrões recorrentes'),
        sa('hmw-agent', 'HMW Generator', 'Gerar perguntas How Might We'),
        sa('opportunity-agent', 'Oportunidades', 'Mapear oportunidades de design'),
      ]),
    ],
  },

  // ── Squad 3: CX & Service Design ────────────────────────
  {
    id: 'cx-service',
    index: 2,
    name: 'CX & Service Design',
    emoji: '🗺️',
    description: 'Jornadas, serviços, canais e operação',
    color: 'cyan',
    agents: [
      agent('journey-mapper', 'Journey Mapper', 'Mapear jornada do cliente', 'Gemini 1.5 Pro', [
        sa('current-journey', 'Jornada Atual', 'Mapear jornada as-is'),
        sa('ideal-journey', 'Jornada Ideal', 'Projetar jornada to-be'),
        sa('emotion-mapper', 'Mapa Emocional', 'Mapear emoções por etapa'),
        sa('moments-of-truth', 'Momentos da Verdade', 'Identificar momentos críticos'),
      ]),
      agent('service-blueprint', 'Service Blueprint', 'Blueprint operacional do serviço', 'Gemini 1.5 Pro', [
        sa('frontstage-agent', 'Frontstage', 'Mapear interações visíveis'),
        sa('backstage-agent', 'Backstage', 'Mapear processos internos'),
        sa('systems-agent', 'Sistemas', 'Identificar dependências sistêmicas'),
        sa('failure-agent', 'Pontos de Falha', 'Identificar riscos operacionais'),
      ]),
      agent('ecosystem-mapper', 'Ecosystem Mapper', 'Canais, atores e dependências', 'Gemini 1.5 Flash', [
        sa('channel-agent', 'Canais', 'Mapear todos os canais da experiência'),
        sa('omnichannel-agent', 'Omnichannel', 'Garantir consistência cross-canal'),
        sa('dependency-agent', 'Dependências', 'Mapear dependências entre áreas'),
      ]),
    ],
  },

  // ── Squad 4: UX Architecture ─────────────────────────────
  {
    id: 'ux-architecture',
    index: 3,
    name: 'UX Architecture',
    emoji: '🏗️',
    description: 'Estrutura, fluxos e organização',
    color: 'amber',
    agents: [
      agent('ia-architect', 'IA Architect', 'Arquitetura de informação', 'Gemini 1.5 Flash', [
        sa('sitemap-agent', 'Sitemap', 'Criar mapa do site/app'),
        sa('taxonomy-agent', 'Taxonomia', 'Definir categorias e rótulos'),
        sa('navigation-agent', 'Navegação', 'Projetar modelo de navegação'),
        sa('hierarchy-agent', 'Hierarquia', 'Definir hierarquia de conteúdo'),
      ]),
      agent('flow-designer', 'Flow Designer', 'User flows e task flows', 'Gemini 1.5 Flash', [
        sa('happy-path', 'Fluxo Feliz', 'Desenhar caminho principal'),
        sa('alt-flows', 'Fluxos Alternativos', 'Desenhar variações'),
        sa('error-states', 'Estados de Erro', 'Projetar tratamento de erros'),
        sa('edge-cases', 'Casos de Borda', 'Cobrir exceções e regras'),
      ]),
      agent('wireframe-agent', 'Wireframe Agent', 'Wireframes e estrutura visual', 'Gemini 1.5 Pro', [
        sa('wireframe-lofi', 'Wireframe Low-fi', 'Esboço rápido da estrutura'),
        sa('wireframe-midfi', 'Wireframe Mid-fi', 'Estrutura com mais detalhes'),
        sa('layout-agent', 'Layout', 'Definir grids e disposição'),
        sa('states-agent', 'Estados de Tela', 'Loading, empty, error, success'),
      ]),
    ],
  },

  // ── Squad 5: Content & Interaction ───────────────────────
  {
    id: 'content',
    index: 4,
    name: 'Content & Interaction',
    emoji: '✍️',
    description: 'Linguagem, comunicação e tom de voz',
    color: 'rose',
    agents: [
      agent('ux-writer', 'UX Writer', 'Microcopy e textos da interface', 'Gemini 1.5 Pro', [
        sa('microcopy-agent', 'Microcopy', 'Textos de botões, labels, hints'),
        sa('error-messages', 'Mensagens de Erro', 'Textos claros para erros'),
        sa('empty-states-copy', 'Empty States', 'Textos para estados vazios'),
        sa('onboarding-copy', 'Onboarding', 'Textos de onboarding'),
      ]),
      agent('content-strategist', 'Content Strategist', 'Voz, tom e arquitetura de conteúdo', 'Gemini 1.5 Pro', [
        sa('voice-tone', 'Voz e Tom', 'Definir personalidade textual'),
        sa('content-arch', 'Arquitetura de Conteúdo', 'Organizar hierarquia de mensagens'),
        sa('notification-agent', 'Notificações', 'Push, email, in-app messages'),
      ]),
      agent('conversational-designer', 'Conversational Designer', 'Design de experiências com IA', 'Gemini 1.5 Pro', [
        sa('intents-agent', 'Intenções', 'Mapear intenções do usuário'),
        sa('prompt-agent', 'Prompts', 'Criar prompts por contexto'),
        sa('fallback-agent', 'Fallbacks', 'Definir respostas de contingência'),
      ]),
    ],
  },

  // ── Squad 6: UI & Design System ──────────────────────────
  {
    id: 'ui-design-system',
    index: 5,
    name: 'UI & Design System',
    emoji: '🎨',
    description: 'Materialização visual e padronização',
    color: 'orange',
    agents: [
      agent('ui-designer', 'UI Designer', 'Direção visual e telas de alta fidelidade', 'Gemini 1.5 Pro', [
        sa('moodboard-agent', 'Moodboard', 'Definir referências visuais'),
        sa('color-agent', 'Paleta de Cores', 'Criar paleta cromática'),
        sa('typography-agent', 'Tipografia', 'Definir hierarquia tipográfica'),
        sa('hifi-agent', 'Telas Hi-fi', 'Criar telas de alta fidelidade'),
      ]),
      agent('design-system-agent', 'Design System Agent', 'Tokens, componentes e documentação', 'Gemini 1.5 Flash', [
        sa('token-agent', 'Tokens', 'Cores, espaçamento, tipografia'),
        sa('component-agent', 'Componentes', 'Botões, inputs, cards, modais'),
        sa('variant-agent', 'Variantes', 'Estados, tamanhos, temas'),
        sa('ds-docs-agent', 'Documentação', 'Guidelines e boas práticas'),
      ]),
      agent('visual-qa-agent', 'Visual QA', 'Qualidade visual e consistência', 'Gemini 1.5 Flash', [
        sa('consistency-agent', 'Consistência', 'Verificar coerência visual'),
        sa('responsive-agent', 'Responsividade', 'Validar breakpoints'),
        sa('contrast-agent', 'Contraste', 'Verificar WCAG AA'),
      ]),
    ],
  },

  // ── Squad 7: Validation, Delivery & Growth ───────────────
  {
    id: 'validation-growth',
    index: 6,
    name: 'Validação & Entrega',
    emoji: '🚀',
    description: 'Testes, handoff, métricas e evolução',
    color: 'emerald',
    agents: [
      agent('usability-tester', 'Usability Tester', 'Testes de usabilidade', 'Gemini 1.5 Flash', [
        sa('test-plan', 'Plano de Teste', 'Definir objetivos e tarefas'),
        sa('test-script', 'Roteiro de Teste', 'Criar roteiro moderado'),
        sa('test-analysis', 'Análise', 'Analisar resultados e severidade'),
      ]),
      agent('accessibility-agent', 'Accessibility Agent', 'Conformidade WCAG 2.1', 'Gemini 1.5 Flash', [
        sa('wcag-checker', 'WCAG Checker', 'Verificar critérios WCAG'),
        sa('keyboard-agent', 'Teclado', 'Testar navegação por teclado'),
        sa('screen-reader', 'Leitor de Tela', 'Validar compatibilidade'),
      ]),
      agent('handoff-agent', 'Handoff Agent', 'Preparação para desenvolvimento', 'Gemini 1.5 Flash', [
        sa('spec-agent', 'Specs', 'Especificações de interface'),
        sa('rules-agent', 'Regras de Negócio', 'Documentar regras'),
        sa('acceptance-agent', 'Critérios de Aceite', 'Definir Definition of Done'),
      ]),
      agent('analytics-agent', 'Analytics Agent', 'Métricas de produto e CX', 'Gemini 1.5 Flash', [
        sa('tracking-agent', 'Plano de Tracking', 'Definir eventos e métricas'),
        sa('funnel-agent', 'Funil', 'Modelar funis de conversão'),
        sa('cx-metrics', 'Métricas CX', 'CSAT, NPS, CES'),
      ]),
      agent('improvement-agent', 'Continuous Improvement', 'Evolução contínua do produto', 'Gemini 1.5 Pro', [
        sa('backlog-agent', 'Backlog Evolutivo', 'Priorizar melhorias'),
        sa('experiment-agent', 'Experimentos', 'Planejar A/B tests'),
        sa('learning-agent', 'Aprendizados', 'Documentar lições aprendidas'),
      ]),
    ],
  },
];

// ─── Gateway checklists per squad ──────────────────────────

export const GATEWAY_CHECKLISTS: Record<SquadId, string[]> = {
  strategy: [
    'Briefing está claro e completo',
    'Objetivos de negócio são mensuráveis',
    'Stakeholders estão alinhados',
    'Riscos foram mapeados',
    'Direção de produto está definida',
  ],
  research: [
    'Pesquisa foi bem planejada',
    'Dores do usuário estão validadas',
    'Personas são baseadas em dados',
    'Insights são acionáveis',
    'Oportunidades estão priorizadas',
  ],
  'cx-service': [
    'Jornada do cliente está mapeada',
    'Pontos de dor estão identificados',
    'Service blueprint é viável',
    'Experiência omnichannel está considerada',
    'Gaps operacionais foram endereçados',
  ],
  'ux-architecture': [
    'Arquitetura de informação é clara',
    'Fluxos cobrem cenários principais e de erro',
    'Wireframes estão validados',
    'Navegação é intuitiva',
    'Regras de negócio estão documentadas',
  ],
  content: [
    'Tom de voz está definido e consistente',
    'Microcopy é claro e empático',
    'Mensagens de erro ajudam o usuário',
    'Conteúdo está adaptado por contexto',
    'UX Writing foi revisado',
  ],
  'ui-design-system': [
    'Direção visual está aprovada',
    'Design system está documentado',
    'Contraste atende WCAG AA',
    'Componentes são reutilizáveis',
    'Protótipo é navegável',
  ],
  'validation-growth': [
    'Testes de usabilidade foram realizados',
    'Acessibilidade está conforme',
    'Handoff está pronto para dev',
    'Métricas de sucesso estão definidas',
    'Plano de evolução está documentado',
  ],
};

// ─── Squad visual config ───────────────────────────────────

export const SQUAD_COLORS: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  blue:    { text: 'text-blue-400',    bg: 'bg-blue-500/10',    border: 'border-blue-500/20',    glow: 'shadow-[0_0_12px_rgba(59,130,246,0.12)]' },
  purple:  { text: 'text-purple-400',  bg: 'bg-purple-500/10',  border: 'border-purple-500/20',  glow: 'shadow-[0_0_12px_rgba(139,92,246,0.12)]' },
  cyan:    { text: 'text-cyan-400',    bg: 'bg-cyan-500/10',    border: 'border-cyan-500/20',    glow: 'shadow-[0_0_12px_rgba(6,182,212,0.12)]' },
  amber:   { text: 'text-amber-400',   bg: 'bg-amber-500/10',   border: 'border-amber-500/20',   glow: 'shadow-[0_0_12px_rgba(245,158,11,0.12)]' },
  rose:    { text: 'text-rose-400',    bg: 'bg-rose-500/10',    border: 'border-rose-500/20',    glow: 'shadow-[0_0_12px_rgba(244,63,94,0.12)]' },
  orange:  { text: 'text-orange-400',  bg: 'bg-orange-500/10',  border: 'border-orange-500/20',  glow: 'shadow-[0_0_12px_rgba(249,115,22,0.12)]' },
  emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', glow: 'shadow-[0_0_12px_rgba(16,185,129,0.12)]' },
};
