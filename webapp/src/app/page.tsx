'use client';

import Link from 'next/link';
import {
  LayoutDashboard,
  FolderKanban,
  Users,
  FileText,
  CheckSquare,
  TrendingUp,
  Clock,
  AlertCircle,
  ArrowRight,
  Sparkles,
  Brain,
  Zap,
  Rocket,
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const stats = [
    { 
      label: 'Projetos Ativos', 
      value: '12', 
      change: '+3 este mês',
      trend: 'up',
      icon: FolderKanban,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    { 
      label: 'Agentes Trabalhando', 
      value: '29', 
      change: '100% disponíveis',
      trend: 'stable',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
    { 
      label: 'Aprovações Pendentes', 
      value: '8', 
      change: 'Requer atenção',
      trend: 'attention',
      icon: CheckSquare,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
    },
    { 
      label: 'Taxa de Sucesso', 
      value: '94%', 
      change: '+2% vs mês anterior',
      trend: 'up',
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
    },
  ];

  const recentProjects = [
    {
      name: 'Sicoob Fun',
      phase: 'Visual',
      progress: 75,
      status: 'active',
      daysLeft: 5,
    },
    {
      name: 'Portal Cooperado',
      phase: 'Pesquisa',
      progress: 40,
      status: 'active',
      daysLeft: 12,
    },
    {
      name: 'App Mobile',
      phase: 'Arquitetura UX',
      progress: 60,
      status: 'review',
      daysLeft: 8,
    },
  ];

  const aiInsights = [
    {
      title: 'Otimização Detectada',
      description: 'O projeto Sicoob Fun pode economizar 2 dias com automação de testes',
      type: 'success',
      icon: Sparkles,
    },
    {
      title: 'Atenção Necessária',
      description: '3 aprovações pendentes há mais de 48h',
      type: 'warning',
      icon: AlertCircle,
    },
    {
      title: 'Novo Padrão Identificado',
      description: 'Componente de formulário reutilizável criado automaticamente',
      type: 'info',
      icon: Brain,
    },
  ];

  const quickActions = [
    {
      title: 'Novo Projeto',
      description: 'Inicie um projeto com IA',
      href: '/projects/new',
      icon: FolderKanban,
      color: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      title: 'Ver Agentes',
      description: '29 agentes disponíveis',
      href: '/agents',
      icon: Users,
      color: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
    {
      title: 'Aprovações',
      description: '8 itens aguardando',
      href: '/approvals',
      icon: CheckSquare,
      color: 'bg-gradient-to-br from-orange-500 to-orange-600',
    },
    {
      title: 'CX Brain',
      description: 'Memória e insights',
      href: '/brain',
      icon: Brain,
      color: 'bg-gradient-to-br from-green-500 to-green-600',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-16 pb-20">
      {/* Hero Section - Clean and Minimal */}
      <div className="pt-8 pb-12">
        <div className="flex items-center gap-2 mb-6">
          <Badge variant="secondary" className="text-xs font-medium px-3 py-1">
            v2.0
          </Badge>
          <span className="text-sm text-muted-foreground">29 Agentes Especializados</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
          CX Operating System
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-8 leading-relaxed">
          Sistema multiagentes autônomo para engenharia de Customer Experience.
          Transforme ideias em experiências excepcionais através de 5 fases sequenciais com IA.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link href="/projects/new">
            <Button size="lg" className="h-12 px-6 text-base font-medium">
              Criar Novo Projeto
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/agents">
            <Button size="lg" variant="outline" className="h-12 px-6 text-base font-medium">
              Explorar Agentes
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats Grid - Clean Design */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="group p-6 rounded-xl border bg-card hover:bg-accent/5 transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-2.5 rounded-lg ${stat.bgColor}`}>
                  <Icon className={`h-5 w-5 ${stat.color}`} />
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold tracking-tight">{stat.value}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  {stat.trend === 'up' && <TrendingUp className="h-3 w-3 text-green-600" />}
                  {stat.change}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Recent Projects - 2 columns */}
        <div className="lg:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Projetos Recentes</h2>
            <p className="text-muted-foreground">
              Acompanhe o progresso dos seus projetos ativos
            </p>
          </div>
          
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div
                key={project.name}
                className="p-5 rounded-lg border bg-card hover:bg-accent/5 transition-colors"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{project.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      Fase: {project.phase}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={project.status === 'active' ? 'default' : 'secondary'}>
                      {project.status === 'active' ? 'Ativo' : 'Revisão'}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{project.daysLeft}d</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Progresso</span>
                    <span className="font-medium">{project.progress}%</span>
                  </div>
                  <Progress value={project.progress} className="h-2" />
                </div>
              </div>
            ))}
          </div>
          
          <Link href="/projects">
            <Button variant="outline" className="w-full">
              Ver Todos os Projetos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* AI Insights - 1 column */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Insights da IA</h2>
            <p className="text-muted-foreground">
              Recomendações inteligentes
            </p>
          </div>
          
          <div className="space-y-3">
            {aiInsights.map((insight, index) => {
              const Icon = insight.icon;
              const colors: Record<string, string> = {
                success: 'bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800',
                warning: 'bg-orange-50 dark:bg-orange-950 border-orange-200 dark:border-orange-800',
                info: 'bg-blue-50 dark:bg-blue-950 border-blue-200 dark:border-blue-800',
              };
              const iconColors: Record<string, string> = {
                success: 'text-green-600 dark:text-green-400',
                warning: 'text-orange-600 dark:text-orange-400',
                info: 'text-blue-600 dark:text-blue-400',
              };
              
              return (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${colors[insight.type]}`}
                >
                  <div className="flex gap-3">
                    <Icon className={`h-5 w-5 mt-0.5 flex-shrink-0 ${iconColors[insight.type]}`} />
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm mb-1">{insight.title}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {insight.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold mb-6">Comece Agora</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.title} href={action.href}>
                <div className="group p-6 rounded-lg border bg-card hover:bg-accent/5 transition-colors h-full">
                  <div className="mb-4">
                    <div className={`inline-flex p-3 rounded-lg ${action.color.replace('bg-gradient-to-br', 'bg-gradient-to-r')}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-base mb-2">
                    {action.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {action.description}
                  </p>
                  <div className="flex items-center text-sm font-medium text-primary">
                    Acessar
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {/* System Info */}
      <div className="border-t pt-12">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">Como Funciona</h2>
          <div className="space-y-4 text-muted-foreground">
            <p className="leading-relaxed">
              O CX Operating System é um sistema multiagentes que automatiza o processo de design de experiências.
              Com <strong className="text-foreground">29 agentes especializados</strong> trabalhando em 5 fases sequenciais,
              cada projeto passa por um processo rigoroso de validação.
            </p>
            <div className="grid gap-3 sm:grid-cols-5 pt-4">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-blue-600 dark:text-blue-400">1</span>
                </div>
                <p className="text-xs font-medium">Estratégia</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-purple-600 dark:text-purple-400">2</span>
                </div>
                <p className="text-xs font-medium">Pesquisa</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-green-600 dark:text-green-400">3</span>
                </div>
                <p className="text-xs font-medium">Arquitetura</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-orange-100 dark:bg-orange-900 flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-orange-600 dark:text-orange-400">4</span>
                </div>
                <p className="text-xs font-medium">Visual</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mx-auto mb-2">
                  <span className="font-bold text-red-600 dark:text-red-400">5</span>
                </div>
                <p className="text-xs font-medium">Validação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Made with Bob
