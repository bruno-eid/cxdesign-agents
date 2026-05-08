'use client';

import { useState } from 'react';
import {
  FileText,
  Download,
  Filter,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  Calendar,
  Users,
  Clock,
  CheckCircle2,
  AlertCircle,
  Target,
  Zap,
  Award,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Dados mockados de relatórios
const mockData = {
  overview: {
    totalProjects: 24,
    activeProjects: 12,
    completedProjects: 8,
    pausedProjects: 4,
    totalAgents: 29,
    activeAgents: 18,
    avgProgress: 67,
    successRate: 94,
  },
  projectsByPhase: [
    { phase: 'Estrategista', count: 5, percentage: 21 },
    { phase: 'Pesquisador', count: 4, percentage: 17 },
    { phase: 'Arquiteto', count: 6, percentage: 25 },
    { phase: 'Visual', count: 3, percentage: 12 },
    { phase: 'Validador', count: 6, percentage: 25 },
  ],
  performanceMetrics: [
    { metric: 'Tempo Médio por Fase', value: '12 dias', trend: 'down', change: '-15%' },
    { metric: 'Taxa de Conclusão', value: '94%', trend: 'up', change: '+8%' },
    { metric: 'Satisfação do Cliente', value: '4.8/5', trend: 'up', change: '+0.3' },
    { metric: 'Eficiência dos Agentes', value: '89%', trend: 'up', change: '+5%' },
  ],
  recentReports: [
    {
      id: '1',
      title: 'Relatório Mensal - Abril 2024',
      type: 'Mensal',
      date: '2024-04-30',
      status: 'completed',
      size: '2.4 MB',
    },
    {
      id: '2',
      title: 'Análise de Performance Q1',
      type: 'Trimestral',
      date: '2024-03-31',
      status: 'completed',
      size: '5.1 MB',
    },
    {
      id: '3',
      title: 'Relatório Semanal - Semana 18',
      type: 'Semanal',
      date: '2024-05-05',
      status: 'processing',
      size: '-',
    },
  ],
  topProjects: [
    { name: 'Redesign App Mobile', progress: 92, status: 'active', client: 'Sicoob' },
    { name: 'Portal do Cliente', progress: 88, status: 'active', client: 'Banco XYZ' },
    { name: 'Dashboard Analytics', progress: 100, status: 'completed', client: 'Tech Corp' },
    { name: 'UX Research Platform', progress: 75, status: 'active', client: 'StartupABC' },
  ],
  agentPerformance: [
    { name: 'Business Analyst', tasks: 45, completion: 95, efficiency: 92 },
    { name: 'User Interviewer', tasks: 38, completion: 89, efficiency: 88 },
    { name: 'IA Specialist', tasks: 52, completion: 94, efficiency: 91 },
    { name: 'UI Designer', tasks: 41, completion: 87, efficiency: 85 },
    { name: 'Usability Tester', tasks: 33, completion: 91, efficiency: 89 },
  ],
};

export default function ReportsPage() {
  const [period, setPeriod] = useState('month');
  const [reportType, setReportType] = useState('all');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Relatórios</h1>
          <p className="text-muted-foreground mt-2">
            Análises e métricas de desempenho dos projetos
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={period} onValueChange={setPeriod}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">Esta Semana</SelectItem>
              <SelectItem value="month">Este Mês</SelectItem>
              <SelectItem value="quarter">Este Trimestre</SelectItem>
              <SelectItem value="year">Este Ano</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Exportar
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total de Projetos</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.overview.totalProjects}</div>
            <p className="text-xs text-muted-foreground">
              {mockData.overview.activeProjects} ativos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Sucesso</CardTitle>
            <Target className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {mockData.overview.successRate}%
            </div>
            <p className="text-xs text-muted-foreground">
              {mockData.overview.completedProjects} concluídos
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Agentes Ativos</CardTitle>
            <Zap className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {mockData.overview.activeAgents}/{mockData.overview.totalAgents}
            </div>
            <p className="text-xs text-muted-foreground">62% de utilização</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Progresso Médio</CardTitle>
            <TrendingUp className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockData.overview.avgProgress}%</div>
            <Progress value={mockData.overview.avgProgress} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="projects">Projetos</TabsTrigger>
          <TabsTrigger value="agents">Agentes</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>

        {/* Tab: Visão Geral */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {/* Projetos por Fase */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Projetos por Fase
                </CardTitle>
                <CardDescription>Distribuição atual dos projetos</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {mockData.projectsByPhase.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{item.phase}</span>
                      <span className="text-muted-foreground">
                        {item.count} ({item.percentage}%)
                      </span>
                    </div>
                    <Progress value={item.percentage * 4} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Métricas de Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Métricas de Performance
                </CardTitle>
                <CardDescription>Indicadores chave de desempenho</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {mockData.performanceMetrics.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium">{item.metric}</p>
                      <p className="text-2xl font-bold">{item.value}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.trend === 'up' ? (
                        <TrendingUp className="h-5 w-5 text-green-500" />
                      ) : (
                        <TrendingDown className="h-5 w-5 text-red-500" />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          item.trend === 'up' ? 'text-green-600' : 'text-red-600'
                        }`}
                      >
                        {item.change}
                      </span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Relatórios Recentes */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Relatórios Recentes
                  </CardTitle>
                  <CardDescription>Últimos relatórios gerados</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  Ver Todos
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {mockData.recentReports.map((report) => (
                  <div
                    key={report.id}
                    className="flex items-center justify-between p-4 rounded-lg border bg-card hover:bg-accent transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10">
                        <FileText className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{report.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary">{report.type}</Badge>
                          <span className="text-sm text-muted-foreground">
                            {new Date(report.date).toLocaleDateString('pt-BR')}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {report.status === 'completed' ? (
                        <>
                          <span className="text-sm text-muted-foreground">{report.size}</span>
                          <Button variant="ghost" size="icon">
                            <Download className="h-4 w-4" />
                          </Button>
                        </>
                      ) : (
                        <Badge variant="outline">Processando...</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Projetos */}
        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                Top Projetos
              </CardTitle>
              <CardDescription>Projetos com melhor desempenho</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.topProjects.map((project, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{project.name}</p>
                        <p className="text-sm text-muted-foreground">{project.client}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={project.status === 'completed' ? 'default' : 'secondary'}
                        >
                          {project.status === 'completed' ? 'Concluído' : 'Ativo'}
                        </Badge>
                        <span className="text-sm font-medium">{project.progress}%</span>
                      </div>
                    </div>
                    <Progress value={project.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Agentes */}
        <TabsContent value="agents" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Performance dos Agentes
              </CardTitle>
              <CardDescription>Top 5 agentes por desempenho</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockData.agentPerformance.map((agent, index) => (
                  <div key={index} className="space-y-3 pb-4 border-b last:border-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">{agent.name}</p>
                        <p className="text-sm text-muted-foreground">{agent.tasks} tarefas</p>
                      </div>
                      <Badge variant="default">{agent.efficiency}% eficiência</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Taxa de Conclusão</span>
                        <span className="font-medium">{agent.completion}%</span>
                      </div>
                      <Progress value={agent.completion} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Performance */}
        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Tempo Médio</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12 dias</div>
                <p className="text-sm text-muted-foreground mt-1">Por fase do projeto</p>
                <div className="flex items-center gap-2 mt-3">
                  <TrendingDown className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">-15% vs mês anterior</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Satisfação</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">4.8/5</div>
                <p className="text-sm text-muted-foreground mt-1">Avaliação dos clientes</p>
                <div className="flex items-center gap-2 mt-3">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">+0.3 vs mês anterior</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-base">Entregas no Prazo</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">89%</div>
                <p className="text-sm text-muted-foreground mt-1">Dos projetos</p>
                <div className="flex items-center gap-2 mt-3">
                  <TrendingUp className="h-4 w-4 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">+5% vs mês anterior</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Made with Bob