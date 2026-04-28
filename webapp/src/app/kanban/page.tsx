'use client';

import { useState } from 'react';
import {
  Sparkles,
  Search,
  Brain,
  Palette,
  Shield,
  Plus,
  MoreHorizontal,
  Clock,
  User,
  AlertCircle,
  CheckCircle2,
  Filter,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

// Definição das fases
const phases = [
  {
    id: 'strategist',
    name: 'Estrategista',
    icon: Sparkles,
    color: 'bg-purple-500',
    textColor: 'text-purple-700',
    bgLight: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    id: 'researcher',
    name: 'Pesquisador',
    icon: Search,
    color: 'bg-blue-500',
    textColor: 'text-blue-700',
    bgLight: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    id: 'architect',
    name: 'Arquiteto',
    icon: Brain,
    color: 'bg-cyan-500',
    textColor: 'text-cyan-700',
    bgLight: 'bg-cyan-50',
    borderColor: 'border-cyan-200',
  },
  {
    id: 'visual',
    name: 'Visual',
    icon: Palette,
    color: 'bg-green-500',
    textColor: 'text-green-700',
    bgLight: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    id: 'validator',
    name: 'Validador',
    icon: Shield,
    color: 'bg-orange-500',
    textColor: 'text-orange-700',
    bgLight: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
];

// Dados mockados de tarefas
const mockTasks = {
  strategist: [
    {
      id: '1',
      title: 'Definir objetivos do projeto',
      description: 'Alinhar expectativas com stakeholders',
      priority: 'high',
      assignee: 'João Silva',
      dueDate: '2024-05-15',
      status: 'in-progress',
    },
    {
      id: '2',
      title: 'Análise de concorrentes',
      description: 'Mapear principais players do mercado',
      priority: 'medium',
      assignee: 'Maria Santos',
      dueDate: '2024-05-18',
      status: 'todo',
    },
    {
      id: '3',
      title: 'Definir KPIs',
      description: 'Estabelecer métricas de sucesso',
      priority: 'high',
      assignee: 'Pedro Costa',
      dueDate: '2024-05-20',
      status: 'todo',
    },
  ],
  researcher: [
    {
      id: '4',
      title: 'Entrevistas com usuários',
      description: 'Realizar 10 entrevistas em profundidade',
      priority: 'high',
      assignee: 'Ana Lima',
      dueDate: '2024-05-22',
      status: 'in-progress',
    },
    {
      id: '5',
      title: 'Pesquisa quantitativa',
      description: 'Survey com 200+ respondentes',
      priority: 'medium',
      assignee: 'Carlos Souza',
      dueDate: '2024-05-25',
      status: 'todo',
    },
  ],
  architect: [
    {
      id: '6',
      title: 'Mapa de jornada',
      description: 'Documentar jornada atual do usuário',
      priority: 'high',
      assignee: 'Beatriz Alves',
      dueDate: '2024-05-28',
      status: 'done',
    },
    {
      id: '7',
      title: 'Arquitetura de informação',
      description: 'Estruturar hierarquia de conteúdo',
      priority: 'high',
      assignee: 'Rafael Dias',
      dueDate: '2024-06-01',
      status: 'in-progress',
    },
  ],
  visual: [
    {
      id: '8',
      title: 'Design System',
      description: 'Criar componentes base',
      priority: 'high',
      assignee: 'Juliana Rocha',
      dueDate: '2024-06-05',
      status: 'todo',
    },
  ],
  validator: [
    {
      id: '9',
      title: 'Testes de usabilidade',
      description: 'Validar protótipos com usuários',
      priority: 'medium',
      assignee: 'Lucas Martins',
      dueDate: '2024-06-10',
      status: 'todo',
    },
  ],
};

const priorityConfig = {
  high: { label: 'Alta', variant: 'destructive' as const },
  medium: { label: 'Média', variant: 'default' as const },
  low: { label: 'Baixa', variant: 'secondary' as const },
};

const statusConfig = {
  todo: { label: 'A Fazer', icon: AlertCircle, color: 'text-muted-foreground' },
  'in-progress': { label: 'Em Progresso', icon: Clock, color: 'text-blue-500' },
  done: { label: 'Concluído', icon: CheckCircle2, color: 'text-green-500' },
};

export default function KanbanPage() {
  const [tasks] = useState(mockTasks);
  const [selectedPhase, setSelectedPhase] = useState<string | null>(null);

  const getTaskCount = (phaseId: string) => {
    return tasks[phaseId as keyof typeof tasks]?.length || 0;
  };

  const getCompletedCount = (phaseId: string) => {
    return tasks[phaseId as keyof typeof tasks]?.filter(t => t.status === 'done').length || 0;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Kanban de Fases</h1>
          <p className="text-muted-foreground mt-2">
            Visualize e gerencie tarefas por fase do CX Operating System
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
          <Button size="sm">
            <Plus className="mr-2 h-4 w-4" />
            Nova Tarefa
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-5">
        {phases.map((phase) => {
          const Icon = phase.icon;
          const total = getTaskCount(phase.id);
          const completed = getCompletedCount(phase.id);
          const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

          return (
            <Card
              key={phase.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedPhase === phase.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedPhase(selectedPhase === phase.id ? null : phase.id)}
            >
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-lg ${phase.color} text-white`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-2xl font-bold">{total}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-medium mb-2">{phase.name}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>{completed} concluídas</span>
                  <span>{progress}%</span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Kanban Board */}
      <div className="flex gap-4 overflow-x-auto pb-4">
        {phases
          .filter((phase) => !selectedPhase || phase.id === selectedPhase)
          .map((phase) => {
            const Icon = phase.icon;
            const phaseTasks = tasks[phase.id as keyof typeof tasks] || [];

            return (
              <div key={phase.id} className="flex-shrink-0 w-80">
                <Card className={`${phase.borderColor} border-t-4`}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`p-1.5 rounded ${phase.color} text-white`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <span className="text-base">{phase.name}</span>
                      </div>
                      <Badge variant="secondary">{phaseTasks.length}</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {phaseTasks.length === 0 ? (
                      <div className="text-center py-8 text-muted-foreground">
                        <p className="text-sm">Nenhuma tarefa</p>
                      </div>
                    ) : (
                      phaseTasks.map((task) => {
                        const StatusIcon = statusConfig[task.status as keyof typeof statusConfig].icon;
                        return (
                          <Card
                            key={task.id}
                            className={`${phase.bgLight} border ${phase.borderColor} hover:shadow-md transition-shadow cursor-pointer`}
                          >
                            <CardContent className="p-4 space-y-3">
                              {/* Header */}
                              <div className="flex items-start justify-between">
                                <h4 className="font-semibold text-sm leading-tight flex-1">
                                  {task.title}
                                </h4>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" size="icon" className="h-6 w-6 -mt-1">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent align="end">
                                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem>Editar</DropdownMenuItem>
                                    <DropdownMenuItem>Mover</DropdownMenuItem>
                                    <DropdownMenuItem>Atribuir</DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem className="text-destructive">
                                      Excluir
                                    </DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </div>

                              {/* Description */}
                              <p className="text-xs text-muted-foreground line-clamp-2">
                                {task.description}
                              </p>

                              {/* Priority Badge */}
                              <div className="flex items-center gap-2">
                                <Badge
                                  variant={priorityConfig[task.priority as keyof typeof priorityConfig].variant}
                                  className="text-xs"
                                >
                                  {priorityConfig[task.priority as keyof typeof priorityConfig].label}
                                </Badge>
                                <div className={`flex items-center gap-1 text-xs ${statusConfig[task.status as keyof typeof statusConfig].color}`}>
                                  <StatusIcon className="h-3 w-3" />
                                  <span>{statusConfig[task.status as keyof typeof statusConfig].label}</span>
                                </div>
                              </div>

                              {/* Footer */}
                              <div className="flex items-center justify-between pt-2 border-t">
                                <div className="flex items-center gap-1.5">
                                  <Avatar className="h-6 w-6">
                                    <AvatarFallback className="text-xs">
                                      {task.assignee.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                  <span className="text-xs text-muted-foreground">
                                    {task.assignee.split(' ')[0]}
                                  </span>
                                </div>
                                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                  <Clock className="h-3 w-3" />
                                  {new Date(task.dueDate).toLocaleDateString('pt-BR', {
                                    day: '2-digit',
                                    month: 'short',
                                  })}
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })
                    )}

                    {/* Add Task Button */}
                    <Button
                      variant="ghost"
                      className={`w-full ${phase.textColor} hover:${phase.bgLight}`}
                      size="sm"
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Adicionar Tarefa
                    </Button>
                  </CardContent>
                </Card>
              </div>
            );
          })}
      </div>
    </div>
  );
}

// Made with Bob