'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Edit,
  Pause,
  Play,
  Archive,
  MoreHorizontal,
  Calendar,
  Users,
  Tag as TagIcon,
  FileText,
  Activity,
  CheckCircle2,
  Clock,
  TrendingUp,
  Sparkles,
  Search,
  Brain,
  Palette,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { projectService } from '@/services/projects';
import { Project, ProjectStatus } from '@/types';

const statusConfig: Record<ProjectStatus, { label: string; variant: 'default' | 'secondary' | 'destructive' | 'outline' }> = {
  [ProjectStatus.DRAFT]: { label: 'Rascunho', variant: 'secondary' },
  [ProjectStatus.ACTIVE]: { label: 'Ativo', variant: 'default' },
  [ProjectStatus.PAUSED]: { label: 'Pausado', variant: 'outline' },
  [ProjectStatus.COMPLETED]: { label: 'Concluído', variant: 'default' },
  [ProjectStatus.ARCHIVED]: { label: 'Arquivado', variant: 'secondary' },
};

const phaseData = [
  { id: 0, name: 'Estrategista', icon: Sparkles, color: 'bg-purple-500', description: 'Definição de estratégia e objetivos' },
  { id: 1, name: 'Pesquisador', icon: Search, color: 'bg-blue-500', description: 'Pesquisa de usuários e mercado' },
  { id: 2, name: 'Arquiteto', icon: Brain, color: 'bg-cyan-500', description: 'Arquitetura de informação' },
  { id: 3, name: 'Visual', icon: Palette, color: 'bg-green-500', description: 'Design visual e interfaces' },
  { id: 4, name: 'Validador', icon: Shield, color: 'bg-orange-500', description: 'Testes e validação' },
];

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const projectId = params?.id as string;
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProject();
  }, [projectId]);

  const loadProject = async () => {
    setLoading(true);
    try {
      const mockProjects = await projectService.getMockProjects();
      const foundProject = mockProjects.find(p => p.id === projectId);
      setProject(foundProject || null);
    } catch (error) {
      console.error('Erro ao carregar projeto:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center space-y-4">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto" />
          <p className="text-muted-foreground">Carregando projeto...</p>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Projeto não encontrado</CardTitle>
            <CardDescription>
              O projeto que você está procurando não existe ou foi removido.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/projects')} className="w-full">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Projetos
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const currentPhaseData = phaseData[project.currentPhase];
  const PhaseIcon = currentPhaseData.icon;

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/projects" className="hover:text-foreground transition-colors">
          Projetos
        </Link>
        <span>/</span>
        <span className="text-foreground font-medium">{project.name}</span>
      </div>

      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-bold tracking-tight">{project.name}</h1>
            <Badge variant={statusConfig[project.status].variant}>
              {statusConfig[project.status].label}
            </Badge>
          </div>
          <p className="text-xl text-muted-foreground">{project.client}</p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Editar
          </Button>
          {project.status === ProjectStatus.ACTIVE ? (
            <Button variant="outline" size="sm">
              <Pause className="mr-2 h-4 w-4" />
              Pausar
            </Button>
          ) : (
            <Button variant="outline" size="sm">
              <Play className="mr-2 h-4 w-4" />
              Retomar
            </Button>
          )}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Ações</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Archive className="mr-2 h-4 w-4" />
                Arquivar
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                Excluir Projeto
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Progress Card */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Progresso Geral</CardTitle>
              <CardDescription>Acompanhe o andamento do projeto</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-primary">{project.progress}%</div>
              <p className="text-sm text-muted-foreground">Concluído</p>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Progress value={project.progress} className="h-3" />
          <div className="mt-4 flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <PhaseIcon className={`h-5 w-5 ${currentPhaseData.color.replace('bg-', 'text-')}`} />
              <span className="font-medium">Fase Atual: {currentPhaseData.name}</span>
            </div>
            <span className="text-muted-foreground">{currentPhaseData.description}</span>
          </div>
        </CardContent>
      </Card>

      {/* Phase Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Fases do Projeto</CardTitle>
          <CardDescription>Progresso por fase do CX Operating System</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {phaseData.map((phase, index) => {
              const Icon = phase.icon;
              const isCompleted = index < project.currentPhase;
              const isCurrent = index === project.currentPhase;
              const phaseProgress = isCompleted ? 100 : isCurrent ? project.progress : 0;

              return (
                <div key={phase.id} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center justify-center w-10 h-10 rounded-full ${phase.color} text-white`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium">{phase.name}</p>
                        <p className="text-sm text-muted-foreground">{phase.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {isCompleted && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                      {isCurrent && <Clock className="h-5 w-5 text-blue-500" />}
                      <span className="text-sm font-medium">{phaseProgress}%</span>
                    </div>
                  </div>
                  <Progress value={phaseProgress} className="h-2" />
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Visão Geral</TabsTrigger>
          <TabsTrigger value="team">Equipe</TabsTrigger>
          <TabsTrigger value="files">Arquivos</TabsTrigger>
          <TabsTrigger value="activity">Atividades</TabsTrigger>
        </TabsList>

        {/* Tab: Visão Geral */}
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Descrição
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5" />
                  Informações
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Cliente</p>
                  <p className="text-base">{project.client}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Criado em</p>
                  <p className="text-base">{new Date(project.createdAt).toLocaleDateString('pt-BR')}</p>
                </div>
                <Separator />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Última atualização</p>
                  <p className="text-base">{new Date(project.updatedAt).toLocaleDateString('pt-BR')}</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {project.tags && project.tags.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TagIcon className="h-5 w-5" />
                  Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Métricas do Projeto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Dias Decorridos</p>
                  <p className="text-2xl font-bold">
                    {Math.floor((Date.now() - new Date(project.createdAt).getTime()) / (1000 * 60 * 60 * 24))}
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Fase Atual</p>
                  <p className="text-2xl font-bold">{project.currentPhase + 1}/5</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Progresso</p>
                  <p className="text-2xl font-bold">{project.progress}%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Equipe */}
        <TabsContent value="team" className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Membros da Equipe
                  </CardTitle>
                  <CardDescription>
                    {project.team?.length || 0} membro{(project.team?.length || 0) !== 1 ? 's' : ''}
                  </CardDescription>
                </div>
                <Button size="sm">
                  <Users className="mr-2 h-4 w-4" />
                  Adicionar Membro
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              {project.team && project.team.length > 0 ? (
                <div className="space-y-3">
                  {project.team.map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-card hover:bg-accent transition-colors">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{member.split(' ').map(n => n[0]).join('').toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{member}</p>
                          <p className="text-sm text-muted-foreground">Membro da equipe</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground">Nenhum membro adicionado ainda</p>
                  <Button className="mt-4" size="sm">Adicionar Primeiro Membro</Button>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Arquivos */}
        <TabsContent value="files" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Arquivos do Projeto</CardTitle>
              <CardDescription>Documentos, designs e outros arquivos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <FileText className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground mb-4">Nenhum arquivo enviado ainda</p>
                <Button size="sm">Fazer Upload</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab: Atividades */}
        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Timeline de Atividades
              </CardTitle>
              <CardDescription>Histórico de ações e atualizações</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-0.5 h-full bg-border" />
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="font-medium">Projeto criado</p>
                    <p className="text-sm text-muted-foreground">
                      {new Date(project.createdAt).toLocaleDateString('pt-BR')} às{' '}
                      {new Date(project.createdAt).toLocaleTimeString('pt-BR')}
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div className="w-0.5 h-full bg-border" />
                  </div>
                  <div className="flex-1 pb-4">
                    <p className="font-medium">Fase {currentPhaseData.name} iniciada</p>
                    <p className="text-sm text-muted-foreground">Agentes trabalhando automaticamente</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-2 h-2 rounded-full bg-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-muted-foreground">Mais atividades aparecerão aqui</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Made with Bob
