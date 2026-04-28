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

// Definição dos Macro Agentes e seus Sub-Agentes
const macroAgents = [
  {
    id: 'strategist',
    name: 'Estrategista',
    icon: Sparkles,
    color: 'bg-purple-500',
    textColor: 'text-purple-700',
    bgLight: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Define estratégia e objetivos do projeto',
    subAgents: [
      { id: 'sa1', name: 'Business Analyst', status: 'active', progress: 85, task: 'Análise de mercado' },
      { id: 'sa2', name: 'Stakeholder Manager', status: 'active', progress: 92, task: 'Alinhamento de expectativas' },
      { id: 'sa3', name: 'Vision Architect', status: 'completed', progress: 100, task: 'Definição de visão' },
      { id: 'sa4', name: 'KPI Designer', status: 'active', progress: 78, task: 'Criação de métricas' },
      { id: 'sa5', name: 'Roadmap Planner', status: 'idle', progress: 0, task: 'Aguardando início' },
    ],
  },
  {
    id: 'researcher',
    name: 'Pesquisador',
    icon: Search,
    color: 'bg-blue-500',
    textColor: 'text-blue-700',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'Realiza pesquisas com usuários e mercado',
    subAgents: [
      { id: 'ra1', name: 'User Interviewer', status: 'active', progress: 65, task: 'Entrevistas em profundidade' },
      { id: 'ra2', name: 'Survey Designer', status: 'active', progress: 45, task: 'Criação de questionários' },
      { id: 'ra3', name: 'Data Analyst', status: 'idle', progress: 0, task: 'Aguardando dados' },
      { id: 'ra4', name: 'Persona Builder', status: 'active', progress: 55, task: 'Construção de personas' },
      { id: 'ra5', name: 'Journey Mapper', status: 'idle', progress: 0, task: 'Aguardando insights' },
      { id: 'ra6', name: 'Competitor Analyst', status: 'completed', progress: 100, task: 'Análise concluída' },
    ],
  },
  {
    id: 'architect',
    name: 'Arquiteto',
    icon: Brain,
    color: 'bg-cyan-500',
    textColor: 'text-cyan-700',
    bgLight: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
    description: 'Estrutura arquitetura de informação',
    subAgents: [
      { id: 'aa1', name: 'IA Specialist', status: 'active', progress: 70, task: 'Estrutura de conteúdo' },
      { id: 'aa2', name: 'Flow Designer', status: 'active', progress: 60, task: 'Fluxos de navegação' },
      { id: 'aa3', name: 'Content Strategist', status: 'idle', progress: 0, task: 'Aguardando estrutura' },
      { id: 'aa4', name: 'Wireframe Creator', status: 'active', progress: 50, task: 'Wireframes de baixa' },
      { id: 'aa5', name: 'Prototype Builder', status: 'idle', progress: 0, task: 'Aguardando aprovação' },
      { id: 'aa6', name: 'Interaction Designer', status: 'active', progress: 40, task: 'Padrões de interação' },
    ],
  },
  {
    id: 'visual',
    name: 'Visual',
    icon: Palette,
    color: 'bg-green-500',
    textColor: 'text-green-700',
    bgLight: 'bg-green-50',
    borderColor: 'border-green-200',
    description: 'Cria design visual e interfaces',
    subAgents: [
      { id: 'va1', name: 'Brand Designer', status: 'idle', progress: 0, task: 'Aguardando briefing' },
      { id: 'va2', name: 'UI Designer', status: 'idle', progress: 0, task: 'Aguardando wireframes' },
      { id: 'va3', name: 'Design System Creator', status: 'idle', progress: 0, task: 'Aguardando definições' },
      { id: 'va4', name: 'Icon Designer', status: 'idle', progress: 0, task: 'Aguardando sistema' },
      { id: 'va5', name: 'Motion Designer', status: 'idle', progress: 0, task: 'Aguardando UI' },
      { id: 'va6', name: 'Accessibility Specialist', status: 'idle', progress: 0, task: 'Aguardando designs' },
    ],
  },
  {
    id: 'validator',
    name: 'Validador',
    icon: Shield,
    color: 'bg-orange-500',
    textColor: 'text-orange-700',
    bgLight: 'bg-orange-50',
    borderColor: 'border-orange-200',
    description: 'Valida e testa soluções',
    subAgents: [
      { id: 'vl1', name: 'Usability Tester', status: 'idle', progress: 0, task: 'Aguardando protótipos' },
      { id: 'vl2', name: 'A/B Test Manager', status: 'idle', progress: 0, task: 'Aguardando variações' },
      { id: 'vl3', name: 'Quality Assurance', status: 'idle', progress: 0, task: 'Aguardando entrega' },
      { id: 'vl4', name: 'Performance Analyst', status: 'idle', progress: 0, task: 'Aguardando implementação' },
      { id: 'vl5', name: 'Feedback Collector', status: 'idle', progress: 0, task: 'Aguardando lançamento' },
      { id: 'vl6', name: 'Iteration Planner', status: 'idle', progress: 0, task: 'Aguardando resultados' },
    ],
  },
];

const statusConfig = {
  active: { label: 'Ativo', icon: Activity, color: 'text-green-500', variant: 'default' as const },
  idle: { label: 'Aguardando', icon: Clock, color: 'text-yellow-500', variant: 'secondary' as const },
  paused: { label: 'Pausado', icon: Pause, color: 'text-gray-500', variant: 'outline' as const },
  completed: { label: 'Concluído', icon: CheckCircle2, color: 'text-blue-500', variant: 'default' as const },
};

export default function AgentsPage() {
  const [selectedMacro, setSelectedMacro] = useState<string>('all');

  const getTotalAgents = () => {
    return macroAgents.reduce((acc, macro) => acc + macro.subAgents.length, 0);
  };

  const getActiveAgents = () => {
    return macroAgents.reduce(
      (acc, macro) => acc + macro.subAgents.filter((sa) => sa.status === 'active').length,
      0
    );
  };

  const getCompletedAgents = () => {
    return macroAgents.reduce(
      (acc, macro) => acc + macro.subAgents.filter((sa) => sa.status === 'completed').length,
      0
    );
  };

  const getAverageProgress = () => {
    const total = getTotalAgents();
    const sum = macroAgents.reduce(
      (acc, macro) => acc + macro.subAgents.reduce((sum, sa) => sum + sa.progress, 0),
      0
    );
    return Math.round(sum / total);
  };

  const filteredMacros =
    selectedMacro === 'all' ? macroAgents : macroAgents.filter((m) => m.id === selectedMacro);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Agentes de IA</h1>
          <p className="text-muted-foreground mt-2">
            Gerencie os 29 agentes do CX Operating System
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
          <Button size="sm">
            <Settings className="mr-2 h-4 w-4" />
            Configurações
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Agentes</CardTitle>
            <Bot className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{getTotalAgents()}</div>
            <p className="text-xs text-muted-foreground">5 macro agentes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Agentes Ativos</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{getActiveAgents()}</div>
            <p className="text-xs text-muted-foreground">Trabalhando agora</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Concluídos</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-blue-600">{getCompletedAgents()}</div>
            <p className="text-xs text-muted-foreground">Tarefas finalizadas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progresso Médio</CardTitle>
            <Zap className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{getAverageProgress()}%</div>
            <Progress value={getAverageProgress()} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="all" className="space-y-4" onValueChange={setSelectedMacro}>
        <TabsList>
          <TabsTrigger value="all">Todos</TabsTrigger>
          {macroAgents.map((macro) => {
            const Icon = macro.icon;
            return (
              <TabsTrigger key={macro.id} value={macro.id} className="gap-2">
                <Icon className="h-4 w-4" />
                {macro.name}
              </TabsTrigger>
            );
          })}
        </TabsList>

        <TabsContent value={selectedMacro} className="space-y-4">
          {filteredMacros.map((macro) => {
            const MacroIcon = macro.icon;
            const activeCount = macro.subAgents.filter((sa) => sa.status === 'active').length;
            const avgProgress = Math.round(
              macro.subAgents.reduce((sum, sa) => sum + sa.progress, 0) / macro.subAgents.length
            );

            return (
              <Card key={macro.id} className={`${macro.borderColor} border-l-4`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-3 rounded-lg ${macro.color} text-white`}>
                        <MacroIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{macro.name}</CardTitle>
                        <CardDescription>{macro.description}</CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="default">{activeCount} ativos</Badge>
                        <Badge variant="secondary">{macro.subAgents.length} total</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Progress value={avgProgress} className="w-24" />
                        <span className="text-sm font-medium">{avgProgress}%</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {macro.subAgents.map((subAgent) => {
                      const StatusIcon = statusConfig[subAgent.status as keyof typeof statusConfig].icon;
                      return (
                        <Card
                          key={subAgent.id}
                          className={`${macro.bgLight} border ${macro.borderColor} hover:shadow-md transition-all`}
                        >
                          <CardContent className="p-4 space-y-3">
                            {/* Header */}
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                  <AvatarFallback className={`${macro.color} text-white text-xs`}>
                                    {subAgent.name
                                      .split(' ')
                                      .map((n) => n[0])
                                      .join('')}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <h4 className="font-semibold text-sm">{subAgent.name}</h4>
                                  <div className={`flex items-center gap-1 text-xs ${statusConfig[subAgent.status as keyof typeof statusConfig].color}`}>
                                    <StatusIcon className="h-3 w-3" />
                                    <span>{statusConfig[subAgent.status as keyof typeof statusConfig].label}</span>
                                  </div>
                                </div>
                              </div>
                              <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-6 w-6">
                                    <MoreHorizontal className="h-4 w-4" />
                                  </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent align="end">
                                  <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                  <DropdownMenuSeparator />
                                  <DropdownMenuItem>
                                    <Play className="mr-2 h-4 w-4" />
                                    Iniciar
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Pause className="mr-2 h-4 w-4" />
                                    Pausar
                                  </DropdownMenuItem>
                                  <DropdownMenuItem>
                                    <Settings className="mr-2 h-4 w-4" />
                                    Configurar
                                  </DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>

                            {/* Task */}
                            <p className="text-xs text-muted-foreground">{subAgent.task}</p>

                            {/* Progress */}
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-xs">
                                <span className="text-muted-foreground">Progresso</span>
                                <span className="font-medium">{subAgent.progress}%</span>
                              </div>
                              <Progress value={subAgent.progress} className="h-1.5" />
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Made with Bob