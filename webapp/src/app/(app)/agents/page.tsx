'use client';

import { useState } from 'react';
import {
  Sparkles,
  Search,
  Brain,
  Palette,
  Shield,
  Bot,
  Activity,
  CheckCircle2,
  Clock,
  Pause,
  Filter,
  MoreHorizontal,
  Play,
  Settings,
  Zap,
  ArrowRight,
  TrendingUp,
  Lightbulb
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

// Definição dos Macro Agentes, Sub-Agentes e propostas de melhoria
const macroAgents = [
  {
    id: 'strategist',
    name: 'Estrategista',
    icon: Sparkles,
    color: 'bg-purple-500',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
    glow: 'shadow-[0_0_20px_rgba(168,85,247,0.15)]',
    description: 'Define estratégia, OKRs e visão de negócio.',
    subAgents: [
      { id: 'sa1', name: 'Business Analyst', status: 'active', progress: 85, task: 'Análise de mercado', improvements: ['Adicionar integração RAG com relatórios do setor', 'Gerar matriz SWOT automaticamente'] },
      { id: 'sa2', name: 'Stakeholder Manager', status: 'active', progress: 92, task: 'Alinhamento de expectativas', improvements: ['Análise de sentimento baseada em e-mails', 'Painel de engajamento do cliente'] },
      { id: 'sa3', name: 'Vision Architect', status: 'completed', progress: 100, task: 'Definição de visão', improvements: ['Frameworks de inovação selecionáveis (Design Thinking, etc.)'] },
      { id: 'sa4', name: 'KPI Designer', status: 'active', progress: 78, task: 'Criação de métricas', improvements: ['Sugestão preditiva de metas baseadas no histórico'] },
      { id: 'sa5', name: 'Roadmap Planner', status: 'idle', progress: 0, task: 'Aguardando início', improvements: ['Conexão bidirecional com Jira/Linear', 'Ajuste dinâmico de cronograma'] },
    ],
  },
  {
    id: 'researcher',
    name: 'Pesquisador',
    icon: Search,
    color: 'bg-blue-500',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
    glow: 'shadow-[0_0_20px_rgba(59,130,246,0.15)]',
    description: 'Realiza descobertas com usuários e analisa concorrência.',
    subAgents: [
      { id: 'ra1', name: 'User Interviewer', status: 'active', progress: 65, task: 'Entrevistas em profundidade', improvements: ['Transcrição de áudio via Whisper', 'Identificação automática de dores/pains'] },
      { id: 'ra2', name: 'Survey Designer', status: 'active', progress: 45, task: 'Criação de questionários', improvements: ['Ajuste de tom dinâmico para diferentes públicos'] },
      { id: 'ra3', name: 'Data Analyst', status: 'idle', progress: 0, task: 'Aguardando dados', improvements: ['Visualização automática de gráficos (Charts)', 'Detecção de anomalias em respostas'] },
      { id: 'ra4', name: 'Persona Builder', status: 'active', progress: 55, task: 'Construção de personas', improvements: ['Geração de imagem da persona via Midjourney/DALL-E', 'Mapas de empatia interativos'] },
      { id: 'ra5', name: 'Journey Mapper', status: 'idle', progress: 0, task: 'Aguardando insights', improvements: ['Geração automática de fluxogramas Mermaid'] },
      { id: 'ra6', name: 'Competitor Analyst', status: 'completed', progress: 100, task: 'Análise concluída', improvements: ['Web scraping contínuo de concorrentes mapeados'] },
    ],
  },
  {
    id: 'architect',
    name: 'Arquiteto UX',
    icon: Brain,
    color: 'bg-cyan-500',
    textColor: 'text-cyan-400',
    borderColor: 'border-cyan-500/30',
    glow: 'shadow-[0_0_20px_rgba(6,182,212,0.15)]',
    description: 'Estrutura arquitetura de informação e fluxos de navegação.',
    subAgents: [
      { id: 'aa1', name: 'IA Specialist', status: 'active', progress: 70, task: 'Estrutura de conteúdo', improvements: ['Criação de Card Sorting virtual', 'Mapeamento de ontologias e metadados'] },
      { id: 'aa2', name: 'Flow Designer', status: 'active', progress: 60, task: 'Fluxos de navegação', improvements: ['Exportação direta para FigJam/Miro', 'Geração de sitemap interativo'] },
      { id: 'aa3', name: 'Content Strategist', status: 'idle', progress: 0, task: 'Aguardando estrutura', improvements: ['Sistema de controle de voz e tom global', 'Validação de microcopy A/B'] },
      { id: 'aa4', name: 'Wireframe Creator', status: 'active', progress: 50, task: 'Wireframes de baixa', improvements: ['Integração com v0.dev ou similares', 'Biblioteca de blocos modulares arrastáveis'] },
      { id: 'aa5', name: 'Prototype Builder', status: 'idle', progress: 0, task: 'Aguardando aprovação', improvements: ['Simulação de cliques automatizada', 'Geração de código Next.js esqueleto'] },
      { id: 'aa6', name: 'Interaction Designer', status: 'active', progress: 40, task: 'Padrões de interação', improvements: ['Repositório central de micro-animações catalogadas'] },
    ],
  },
  {
    id: 'visual',
    name: 'Diretor Visual',
    icon: Palette,
    color: 'bg-orange-500',
    textColor: 'text-orange-400',
    borderColor: 'border-orange-500/30',
    glow: 'shadow-[0_0_20px_rgba(249,115,22,0.15)]',
    description: 'Cria design visual, UI e define o Design System.',
    subAgents: [
      { id: 'va1', name: 'Brand Designer', status: 'idle', progress: 0, task: 'Aguardando briefing', improvements: ['Gerador de Moodboards inteligentes', 'Análise de psicologia das cores'] },
      { id: 'va2', name: 'UI Designer', status: 'idle', progress: 0, task: 'Aguardando wireframes', improvements: ['Sincronização bidirecional com Figma', 'Aplicação de temas dinâmicos (Dark/Light/Glass)'] },
      { id: 'va3', name: 'Design System Creator', status: 'idle', progress: 0, task: 'Aguardando definições', improvements: ['Criação automática de tokens no formato W3C', 'Geração de documentação Storybook'] },
      { id: 'va4', name: 'Icon Designer', status: 'idle', progress: 0, task: 'Aguardando sistema', improvements: ['Exportação de SVGs otimizados com variações de peso'] },
      { id: 'va5', name: 'Motion Designer', status: 'idle', progress: 0, task: 'Aguardando UI', improvements: ['Geração de código Framer Motion / Lottie'] },
      { id: 'va6', name: 'Accessibility Specialist', status: 'idle', progress: 0, task: 'Aguardando designs', improvements: ['Validação em tempo real WCAG 2.2 AA', 'Simulador de daltonismo integrado'] },
    ],
  },
  {
    id: 'validator',
    name: 'Validador QA',
    icon: Shield,
    color: 'bg-emerald-500',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
    glow: 'shadow-[0_0_20px_rgba(16,185,129,0.15)]',
    description: 'Valida soluções com testes automatizados e heurísticas.',
    subAgents: [
      { id: 'vl1', name: 'Usability Tester', status: 'idle', progress: 0, task: 'Aguardando protótipos', improvements: ['Agentes virtuais simulando usuários clicando', 'Geração de mapas de calor preditivos'] },
      { id: 'vl2', name: 'A/B Test Manager', status: 'idle', progress: 0, task: 'Aguardando variações', improvements: ['Integração com PostHog / Mixpanel', 'Análise estatística bayesiana automatizada'] },
      { id: 'vl3', name: 'Quality Assurance', status: 'idle', progress: 0, task: 'Aguardando entrega', improvements: ['Criação de scripts Cypress / Playwright autônomos'] },
      { id: 'vl4', name: 'Performance Analyst', status: 'idle', progress: 0, task: 'Aguardando implementação', improvements: ['Auditoria Lighthouse contínua no CI/CD', 'Sugestões de lazy loading'] },
      { id: 'vl5', name: 'Feedback Collector', status: 'idle', progress: 0, task: 'Aguardando lançamento', improvements: ['Categorização de reviews das lojas com LLM'] },
      { id: 'vl6', name: 'Iteration Planner', status: 'idle', progress: 0, task: 'Aguardando resultados', improvements: ['Priorização baseada na matriz RICE automatizada'] },
    ],
  },
];

const statusConfig = {
  active: { label: 'Processando', icon: Activity, color: 'text-brand-400', bg: 'bg-brand-500/10', border: 'border-brand-500/30' },
  idle: { label: 'Aguardando', icon: Clock, color: 'text-muted-foreground', bg: 'bg-white/5', border: 'border-white/10' },
  paused: { label: 'Pausado', icon: Pause, color: 'text-yellow-400', bg: 'bg-yellow-500/10', border: 'border-yellow-500/30' },
  completed: { label: 'Concluído', icon: CheckCircle2, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/30' },
};

export default function AgentsPage() {
  const [selectedMacro, setSelectedMacro] = useState<string>('all');

  const getTotalAgents = () => macroAgents.reduce((acc, macro) => acc + macro.subAgents.length, 0);
  const getActiveAgents = () => macroAgents.reduce((acc, macro) => acc + macro.subAgents.filter((sa) => sa.status === 'active').length, 0);
  const getCompletedAgents = () => macroAgents.reduce((acc, macro) => acc + macro.subAgents.filter((sa) => sa.status === 'completed').length, 0);
  const getAverageProgress = () => {
    const total = getTotalAgents();
    const sum = macroAgents.reduce((acc, macro) => acc + macro.subAgents.reduce((sum, sa) => sum + sa.progress, 0), 0);
    return Math.round(sum / total);
  };

  const filteredMacros = selectedMacro === 'all' ? macroAgents : macroAgents.filter((m) => m.id === selectedMacro);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-20">
      {/* Background Decorativo */}
      <div className="fixed inset-0 z-0 bg-grid-white opacity-20 pointer-events-none" />
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-brand-500/10 blur-[120px] pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1600px] mx-auto p-6 md:p-10 space-y-10">
        
        {/* Header Premium */}
        <div className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden relative">
          <div className="absolute right-0 top-0 opacity-10">
            <Brain className="w-64 h-64 text-brand-500" />
          </div>
          <div className="relative z-10">
            <Badge variant="outline" className="bg-brand-500/10 text-brand-400 border-brand-500/30 px-4 py-1.5 mb-4 font-semibold">
              <Zap className="w-4 h-4 mr-2 inline" /> Monitoramento Estrutural e Melhorias
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-3 text-gradient">
              Centro de Operações de Agentes
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed">
              Supervisione a execução, identifique gargalos e avalie as melhorias propostas para a arquitetura de cada subagente dentro do ecossistema inteligente.
            </p>
          </div>
          <div className="relative z-10 flex items-center gap-3 w-full md:w-auto">
            <Button variant="outline" className="bg-background/50 border-white/10 hover:bg-white/5 flex-1 md:flex-none">
              <Filter className="mr-2 h-4 w-4" /> Filtros
            </Button>
            <Button className="bg-brand-600 hover:bg-brand-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all flex-1 md:flex-none">
              <Settings className="mr-2 h-4 w-4" /> Configurar Ecossistema
            </Button>
          </div>
        </div>

        {/* Dashboards Stats */}
        <div className="grid gap-6 md:grid-cols-4">
          <Card className="glass-card bg-background/40 hover:bg-background/60 transition-colors border-white/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">População</CardTitle>
              <Bot className="h-5 w-5 text-brand-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-extrabold text-foreground">{getTotalAgents()}</div>
              <p className="text-sm text-muted-foreground mt-1">Subagentes especializados</p>
            </CardContent>
          </Card>

          <Card className="glass-card bg-background/40 hover:bg-background/60 transition-colors border-white/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Processando</CardTitle>
              <Activity className="h-5 w-5 text-cyan-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-extrabold text-cyan-400">{getActiveAgents()}</div>
              <p className="text-sm text-muted-foreground mt-1">Executando tarefas agora</p>
            </CardContent>
          </Card>

          <Card className="glass-card bg-background/40 hover:bg-background/60 transition-colors border-white/5">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Concluídos</CardTitle>
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-extrabold text-emerald-400">{getCompletedAgents()}</div>
              <p className="text-sm text-muted-foreground mt-1">Tarefas finalizadas</p>
            </CardContent>
          </Card>

          <Card className="glass-card bg-background/40 hover:bg-background/60 transition-colors border-white/5 relative overflow-hidden">
            <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-4 translate-y-4">
              <TrendingUp className="h-24 w-24 text-brand-500" />
            </div>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Progresso Geral</CardTitle>
              <Zap className="h-5 w-5 text-orange-400" />
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-4xl font-extrabold text-foreground">{getAverageProgress()}%</div>
              <Progress value={getAverageProgress()} className="h-2 mt-3 bg-white/10" />
            </CardContent>
          </Card>
        </div>

        {/* Navegação de Tabs */}
        <div className="flex justify-center md:justify-start">
          <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedMacro}>
            <TabsList className="bg-background/40 border border-white/10 p-1 h-auto flex flex-wrap gap-2 justify-start rounded-2xl w-full">
              <TabsTrigger value="all" className="rounded-xl px-6 py-2.5 data-[state=active]:bg-white/10 data-[state=active]:text-foreground data-[state=active]:shadow-md">
                Visão Global
              </TabsTrigger>
              {macroAgents.map((macro) => {
                const Icon = macro.icon;
                return (
                  <TabsTrigger 
                    key={macro.id} 
                    value={macro.id} 
                    className="rounded-xl px-5 py-2.5 gap-2 data-[state=active]:bg-white/10 data-[state=active]:text-foreground data-[state=active]:shadow-md transition-all"
                  >
                    <Icon className={`h-4 w-4 ${macro.textColor}`} />
                    {macro.name}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            <TabsContent value={selectedMacro} className="mt-8 space-y-12 animate-in fade-in duration-500">
              {filteredMacros.map((macro) => {
                const MacroIcon = macro.icon;
                const activeCount = macro.subAgents.filter((sa) => sa.status === 'active').length;
                const avgProgress = Math.round(macro.subAgents.reduce((sum, sa) => sum + sa.progress, 0) / macro.subAgents.length);

                return (
                  <div key={macro.id} className={`glass-panel rounded-3xl border ${macro.borderColor} ${macro.glow} overflow-hidden`}>
                    
                    {/* Cabeçalho do Macro Agente */}
                    <div className="p-8 border-b border-white/5 bg-background/20 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                      <div className="flex items-center gap-5">
                        <div className={`p-4 rounded-2xl shadow-inner ${macro.color} text-white`}>
                          <MacroIcon className="h-8 w-8" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold text-foreground flex items-center gap-3">
                            Squad: {macro.name}
                          </h2>
                          <p className="text-muted-foreground mt-1">{macro.description}</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-6 bg-background/50 px-6 py-4 rounded-2xl border border-white/5">
                        <div className="text-center">
                          <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider mb-1">Status</p>
                          <div className="flex gap-2">
                            <Badge variant="outline" className="border-brand-500/30 text-brand-400 bg-brand-500/10">{activeCount} em execução</Badge>
                          </div>
                        </div>
                        <div className="h-10 w-px bg-white/10 hidden md:block" />
                        <div className="text-center w-32">
                          <div className="flex justify-between text-xs font-bold mb-2">
                            <span className="text-muted-foreground">PROGRESSO</span>
                            <span className={macro.textColor}>{avgProgress}%</span>
                          </div>
                          <Progress value={avgProgress} className="h-2 bg-white/10" />
                        </div>
                      </div>
                    </div>

                    {/* Lista de Subagentes */}
                    <div className="p-8">
                      <h3 className="text-lg font-bold mb-6 text-foreground/90">Especialistas e Propostas de Evolução Estrutural</h3>
                      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {macro.subAgents.map((subAgent) => {
                          const statusData = statusConfig[subAgent.status as keyof typeof statusConfig];
                          const StatusIcon = statusData.icon;

                          return (
                            <Card key={subAgent.id} className="glass-card hover:-translate-y-1 hover:shadow-xl transition-all duration-300 border-white/5 group flex flex-col">
                              <CardContent className="p-6 flex flex-col h-full">
                                
                                {/* Header do Subagente */}
                                <div className="flex items-start justify-between mb-5">
                                  <div className="flex items-center gap-4">
                                    <Avatar className={`h-12 w-12 rounded-xl border border-white/10 ${macro.color} bg-opacity-20`}>
                                      <AvatarFallback className="text-white font-bold text-lg bg-transparent">
                                        {subAgent.name.split(' ').map((n) => n[0]).join('')}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <h4 className="font-bold text-foreground group-hover:text-brand-400 transition-colors">{subAgent.name}</h4>
                                      <Badge variant="outline" className={`mt-1.5 font-medium border-transparent ${statusData.bg} ${statusData.color}`}>
                                        <StatusIcon className="w-3 h-3 mr-1.5" />
                                        {statusData.label}
                                      </Badge>
                                    </div>
                                  </div>
                                  <DropdownMenu>
                                    <DropdownMenuTrigger asChild>
                                      <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10 rounded-lg">
                                        <MoreHorizontal className="h-4 w-4" />
                                      </Button>
                                    </DropdownMenuTrigger>
                                    <DropdownMenuContent align="end" className="glass-panel border-white/10">
                                      <DropdownMenuLabel>Ações de Controle</DropdownMenuLabel>
                                      <DropdownMenuSeparator className="bg-white/10" />
                                      <DropdownMenuItem className="focus:bg-white/10 cursor-pointer">
                                        <Play className="mr-2 h-4 w-4 text-emerald-400" /> Forçar Execução
                                      </DropdownMenuItem>
                                      <DropdownMenuItem className="focus:bg-white/10 cursor-pointer">
                                        <Pause className="mr-2 h-4 w-4 text-yellow-400" /> Pausar Atividade
                                      </DropdownMenuItem>
                                      <DropdownMenuItem className="focus:bg-white/10 cursor-pointer">
                                        <Settings className="mr-2 h-4 w-4" /> Ajustar Prompt
                                      </DropdownMenuItem>
                                    </DropdownMenuContent>
                                  </DropdownMenu>
                                </div>

                                {/* Tarefa Atual */}
                                <div className="mb-6">
                                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-2">Foco Atual</p>
                                  <p className="text-sm text-foreground/90 font-medium leading-relaxed bg-white/5 p-3 rounded-lg border border-white/5">
                                    {subAgent.task}
                                  </p>
                                </div>

                                {/* Melhorias Propostas (O que o usuário pediu) */}
                                <div className="mb-6 flex-1">
                                  <p className="text-xs uppercase tracking-wider text-muted-foreground font-bold mb-3 flex items-center gap-1.5">
                                    <Lightbulb className="w-3.5 h-3.5 text-yellow-400" /> Oportunidades de Evolução
                                  </p>
                                  <ul className="space-y-2.5">
                                    {subAgent.improvements.map((imp, idx) => (
                                      <li key={idx} className="text-sm flex items-start gap-2.5">
                                        <ArrowRight className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                                        <span className="text-foreground/80">{imp}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Progresso */}
                                <div className="mt-auto pt-5 border-t border-white/5">
                                  <div className="flex items-center justify-between text-xs font-bold mb-2">
                                    <span className="text-muted-foreground">PROGRESSO DA TAREFA</span>
                                    <span className={statusData.color}>{subAgent.progress}%</span>
                                  </div>
                                  <Progress value={subAgent.progress} className={`h-1.5 bg-background ${statusData.progressColor}`} />
                                </div>

                              </CardContent>
                            </Card>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}