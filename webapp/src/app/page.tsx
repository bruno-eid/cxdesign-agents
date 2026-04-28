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
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          Bem-vindo ao CX Copilot - Seu sistema operacional de design com IA
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <Card key={stat.label} className="hover:shadow-lg transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.label}
                </CardTitle>
                <div className={`${stat.bgColor} p-2 rounded-lg`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Projects */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderKanban className="h-5 w-5" />
              Projetos Recentes
            </CardTitle>
            <CardDescription>
              Acompanhe o progresso dos seus projetos ativos
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentProjects.map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{project.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Fase: {project.phase}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant={project.status === 'active' ? 'default' : 'secondary'}>
                      {project.status === 'active' ? 'Ativo' : 'Revisão'}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {project.daysLeft}d
                    </div>
                  </div>
                </div>
                <Progress value={project.progress} className="h-2" />
              </div>
            ))}
            <Separator />
            <Link href="/projects">
              <Button variant="ghost" className="w-full">
                Ver Todos os Projetos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* AI Insights */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-yellow-500" />
              Insights da IA
            </CardTitle>
            <CardDescription>
              Recomendações inteligentes para otimizar seu trabalho
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {aiInsights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <div key={index} className="flex gap-3">
                  <div className={`
                    p-2 rounded-lg h-fit
                    ${insight.type === 'success' ? 'bg-green-50' : ''}
                    ${insight.type === 'warning' ? 'bg-orange-50' : ''}
                    ${insight.type === 'info' ? 'bg-blue-50' : ''}
                  `}>
                    <Icon className={`h-4 w-4
                      ${insight.type === 'success' ? 'text-green-600' : ''}
                      ${insight.type === 'warning' ? 'text-orange-600' : ''}
                      ${insight.type === 'info' ? 'text-blue-600' : ''}
                    `} />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-sm">{insight.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {insight.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Ações Rápidas</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.title} href={action.href}>
                <Card className="hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer h-full">
                  <CardContent className="pt-6">
                    <div className={`${action.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-1">{action.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {action.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// Made with Bob
