'use client';

import { useState } from 'react';
import {
  CheckCircle2,
  XCircle,
  Clock,
  AlertCircle,
  Eye,
  MessageSquare,
  Download,
  Filter,
  Search,
  ThumbsUp,
  ThumbsDown,
  MoreHorizontal,
  FileText,
  Image as ImageIcon,
  Video,
  File,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Dados mockados de aprovações
const mockApprovals = {
  pending: [
    {
      id: '1',
      title: 'Wireframes de Baixa Fidelidade',
      project: 'Redesign App Mobile',
      agent: 'Wireframe Creator',
      phase: 'Arquiteto',
      type: 'design',
      priority: 'high',
      submittedAt: '2024-05-08T10:30:00',
      description: 'Wireframes das principais telas do aplicativo mobile',
      files: 3,
      comments: 2,
    },
    {
      id: '2',
      title: 'Relatório de Pesquisa com Usuários',
      project: 'Portal do Cliente',
      agent: 'User Interviewer',
      phase: 'Pesquisador',
      type: 'document',
      priority: 'high',
      submittedAt: '2024-05-08T09:15:00',
      description: 'Insights de 15 entrevistas em profundidade',
      files: 1,
      comments: 5,
    },
    {
      id: '3',
      title: 'Protótipo Interativo',
      project: 'Dashboard Analytics',
      agent: 'Prototype Builder',
      phase: 'Arquiteto',
      type: 'prototype',
      priority: 'medium',
      submittedAt: '2024-05-07T16:45:00',
      description: 'Protótipo navegável no Figma',
      files: 1,
      comments: 1,
    },
    {
      id: '4',
      title: 'Design System - Componentes Base',
      project: 'UX Research Platform',
      agent: 'Design System Creator',
      phase: 'Visual',
      type: 'design',
      priority: 'high',
      submittedAt: '2024-05-07T14:20:00',
      description: 'Biblioteca de componentes reutilizáveis',
      files: 8,
      comments: 3,
    },
    {
      id: '5',
      title: 'Análise de Concorrentes',
      project: 'E-commerce Redesign',
      agent: 'Competitor Analyst',
      phase: 'Pesquisador',
      type: 'document',
      priority: 'medium',
      submittedAt: '2024-05-07T11:00:00',
      description: 'Benchmarking de 5 principais concorrentes',
      files: 2,
      comments: 0,
    },
  ],
  approved: [
    {
      id: '6',
      title: 'Mapa de Jornada do Usuário',
      project: 'Redesign App Mobile',
      agent: 'Journey Mapper',
      phase: 'Pesquisador',
      approvedAt: '2024-05-06T15:30:00',
      approvedBy: 'João Silva',
    },
    {
      id: '7',
      title: 'Arquitetura de Informação',
      project: 'Portal do Cliente',
      agent: 'IA Specialist',
      phase: 'Arquiteto',
      approvedAt: '2024-05-05T10:20:00',
      approvedBy: 'Maria Santos',
    },
  ],
  rejected: [
    {
      id: '8',
      title: 'Proposta de UI - Versão 1',
      project: 'Dashboard Analytics',
      agent: 'UI Designer',
      phase: 'Visual',
      rejectedAt: '2024-05-04T14:00:00',
      rejectedBy: 'Pedro Costa',
      reason: 'Não atende aos requisitos de acessibilidade',
    },
  ],
};

const priorityConfig = {
  high: { label: 'Alta', variant: 'destructive' as const },
  medium: { label: 'Média', variant: 'default' as const },
  low: { label: 'Baixa', variant: 'secondary' as const },
};

const typeIcons = {
  design: ImageIcon,
  document: FileText,
  prototype: Video,
  other: File,
};

const phaseColors = {
  Estrategista: 'bg-purple-100 text-purple-700',
  Pesquisador: 'bg-blue-100 text-blue-700',
  Arquiteto: 'bg-cyan-100 text-cyan-700',
  Visual: 'bg-green-100 text-green-700',
  Validador: 'bg-orange-100 text-orange-700',
};

export default function ApprovalsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterPhase, setFilterPhase] = useState('all');
  const [selectedApproval, setSelectedApproval] = useState<any>(null);
  const [reviewComment, setReviewComment] = useState('');

  const filteredPending = mockApprovals.pending.filter((approval) => {
    const matchesSearch =
      approval.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      approval.project.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPhase = filterPhase === 'all' || approval.phase === filterPhase;
    return matchesSearch && matchesPhase;
  });

  const handleApprove = (id: string) => {
    console.log('Aprovando:', id, 'Comentário:', reviewComment);
    setSelectedApproval(null);
    setReviewComment('');
  };

  const handleReject = (id: string) => {
    console.log('Rejeitando:', id, 'Comentário:', reviewComment);
    setSelectedApproval(null);
    setReviewComment('');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Aprovações</h1>
          <p className="text-muted-foreground mt-2">
            Revise e aprove entregas dos agentes de IA
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={filterPhase} onValueChange={setFilterPhase}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todas as Fases</SelectItem>
              <SelectItem value="Estrategista">Estrategista</SelectItem>
              <SelectItem value="Pesquisador">Pesquisador</SelectItem>
              <SelectItem value="Arquiteto">Arquiteto</SelectItem>
              <SelectItem value="Visual">Visual</SelectItem>
              <SelectItem value="Validador">Validador</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Mais Filtros
          </Button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pendentes</CardTitle>
            <Clock className="h-4 w-4 text-orange-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-orange-600">
              {mockApprovals.pending.length}
            </div>
            <p className="text-xs text-muted-foreground">Aguardando revisão</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Aprovadas</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">
              {mockApprovals.approved.length}
            </div>
            <p className="text-xs text-muted-foreground">Esta semana</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rejeitadas</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {mockApprovals.rejected.length}
            </div>
            <p className="text-xs text-muted-foreground">Requer ajustes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Aprovação</CardTitle>
            <ThumbsUp className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89%</div>
            <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Buscar por título ou projeto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="pending" className="space-y-4">
        <TabsList>
          <TabsTrigger value="pending" className="gap-2">
            <Clock className="h-4 w-4" />
            Pendentes ({mockApprovals.pending.length})
          </TabsTrigger>
          <TabsTrigger value="approved" className="gap-2">
            <CheckCircle2 className="h-4 w-4" />
            Aprovadas ({mockApprovals.approved.length})
          </TabsTrigger>
          <TabsTrigger value="rejected" className="gap-2">
            <XCircle className="h-4 w-4" />
            Rejeitadas ({mockApprovals.rejected.length})
          </TabsTrigger>
        </TabsList>

        {/* Tab: Pendentes */}
        <TabsContent value="pending" className="space-y-4">
          {filteredPending.length === 0 ? (
            <Card>
              <CardContent className="flex flex-col items-center justify-center py-12">
                <CheckCircle2 className="h-12 w-12 text-muted-foreground mb-4" />
                <p className="text-lg font-medium">Nenhuma aprovação pendente</p>
                <p className="text-sm text-muted-foreground">
                  {searchTerm || filterPhase !== 'all'
                    ? 'Tente ajustar os filtros'
                    : 'Todas as entregas foram revisadas'}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredPending.map((approval) => {
              const TypeIcon = typeIcons[approval.type as keyof typeof typeIcons];
              return (
                <Card key={approval.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4 flex-1">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <TypeIcon className="h-6 w-6 text-primary" />
                        </div>
                        <div className="flex-1 space-y-3">
                          {/* Header */}
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-semibold">{approval.title}</h3>
                              <Badge variant={priorityConfig[approval.priority as keyof typeof priorityConfig].variant}>
                                {priorityConfig[approval.priority as keyof typeof priorityConfig].label}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">{approval.description}</p>
                          </div>

                          {/* Meta Info */}
                          <div className="flex items-center gap-4 text-sm">
                            <div className="flex items-center gap-1.5">
                              <Avatar className="h-6 w-6">
                                <AvatarFallback className="text-xs">
                                  {approval.agent.split(' ').map(n => n[0]).join('')}
                                </AvatarFallback>
                              </Avatar>
                              <span className="text-muted-foreground">{approval.agent}</span>
                            </div>
                            <span className="text-muted-foreground">•</span>
                            <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${phaseColors[approval.phase as keyof typeof phaseColors]}`}>
                              {approval.phase}
                            </span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{approval.project}</span>
                          </div>

                          {/* Footer */}
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <File className="h-4 w-4" />
                              {approval.files} arquivo{approval.files !== 1 ? 's' : ''}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              {approval.comments} comentário{approval.comments !== 1 ? 's' : ''}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              {new Date(approval.submittedAt).toLocaleString('pt-BR', {
                                day: '2-digit',
                                month: 'short',
                                hour: '2-digit',
                                minute: '2-digit',
                              })}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setSelectedApproval(approval)}>
                              <Eye className="mr-2 h-4 w-4" />
                              Revisar
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-2xl">
                            <DialogHeader>
                              <DialogTitle>{approval.title}</DialogTitle>
                              <DialogDescription>{approval.description}</DialogDescription>
                            </DialogHeader>
                            <div className="space-y-4 py-4">
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <p className="font-medium mb-1">Projeto</p>
                                  <p className="text-muted-foreground">{approval.project}</p>
                                </div>
                                <div>
                                  <p className="font-medium mb-1">Agente</p>
                                  <p className="text-muted-foreground">{approval.agent}</p>
                                </div>
                                <div>
                                  <p className="font-medium mb-1">Fase</p>
                                  <Badge variant="secondary">{approval.phase}</Badge>
                                </div>
                                <div>
                                  <p className="font-medium mb-1">Prioridade</p>
                                  <Badge variant={priorityConfig[approval.priority as keyof typeof priorityConfig].variant}>
                                    {priorityConfig[approval.priority as keyof typeof priorityConfig].label}
                                  </Badge>
                                </div>
                              </div>
                              <div>
                                <p className="font-medium mb-2">Comentário da Revisão</p>
                                <Textarea
                                  placeholder="Adicione seus comentários sobre esta entrega..."
                                  value={reviewComment}
                                  onChange={(e) => setReviewComment(e.target.value)}
                                  rows={4}
                                />
                              </div>
                            </div>
                            <DialogFooter>
                              <Button variant="outline" onClick={() => handleReject(approval.id)}>
                                <XCircle className="mr-2 h-4 w-4" />
                                Rejeitar
                              </Button>
                              <Button onClick={() => handleApprove(approval.id)}>
                                <CheckCircle2 className="mr-2 h-4 w-4" />
                                Aprovar
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                              <Download className="mr-2 h-4 w-4" />
                              Baixar Arquivos
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <MessageSquare className="mr-2 h-4 w-4" />
                              Adicionar Comentário
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })
          )}
        </TabsContent>

        {/* Tab: Aprovadas */}
        <TabsContent value="approved" className="space-y-4">
          {mockApprovals.approved.map((approval) => (
            <Card key={approval.id}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-green-100">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{approval.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {approval.project} • {approval.agent}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-sm">
                    <p className="text-muted-foreground">Aprovado por {approval.approvedBy}</p>
                    <p className="text-muted-foreground">
                      {new Date(approval.approvedAt).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Tab: Rejeitadas */}
        <TabsContent value="rejected" className="space-y-4">
          {mockApprovals.rejected.map((approval) => (
            <Card key={approval.id}>
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-red-100">
                    <XCircle className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{approval.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {approval.project} • {approval.agent}
                    </p>
                    <div className="p-3 rounded-lg bg-red-50 border border-red-200">
                      <p className="text-sm font-medium text-red-900 mb-1">Motivo da Rejeição:</p>
                      <p className="text-sm text-red-700">{approval.reason}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Rejeitado por {approval.rejectedBy} em{' '}
                      {new Date(approval.rejectedAt).toLocaleDateString('pt-BR')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Made with Bob