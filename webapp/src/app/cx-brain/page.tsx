'use client';

import { useState } from 'react';
import {
  Brain,
  Send,
  Sparkles,
  TrendingUp,
  AlertCircle,
  Lightbulb,
  Target,
  Users,
  BarChart3,
  MessageSquare,
  Zap,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

// Sugestões rápidas
const quickSuggestions = [
  'Como está o progresso geral dos projetos?',
  'Quais agentes precisam de atenção?',
  'Sugira melhorias para o projeto X',
  'Analise a performance da última semana',
];

// Insights mockados
const mockInsights = [
  {
    id: '1',
    type: 'optimization',
    icon: Zap,
    color: 'text-orange-500',
    bgColor: 'bg-orange-50',
    title: 'Oportunidade de Otimização',
    description: 'O projeto "Redesign App Mobile" pode acelerar 15% movendo recursos do Validador para o Visual.',
    impact: 'high',
    action: 'Realocar recursos',
  },
  {
    id: '2',
    type: 'alert',
    icon: AlertCircle,
    color: 'text-red-500',
    bgColor: 'bg-red-50',
    title: 'Atenção Necessária',
    description: '3 aprovações pendentes há mais de 48h podem atrasar entregas.',
    impact: 'high',
    action: 'Revisar aprovações',
  },
  {
    id: '3',
    type: 'success',
    icon: CheckCircle2,
    color: 'text-green-500',
    bgColor: 'bg-green-50',
    title: 'Padrão de Sucesso Identificado',
    description: 'Projetos com pesquisa prévia têm 40% mais taxa de aprovação na primeira iteração.',
    impact: 'medium',
    action: 'Aplicar padrão',
  },
  {
    id: '4',
    type: 'insight',
    icon: Lightbulb,
    color: 'text-blue-500',
    bgColor: 'bg-blue-50',
    title: 'Insight de Performance',
    description: 'O agente "IA Specialist" está 25% acima da média de eficiência. Considere replicar suas práticas.',
    impact: 'medium',
    action: 'Ver detalhes',
  },
];

// Conversas mockadas
const mockConversations = [
  {
    id: '1',
    role: 'user',
    content: 'Como está o progresso do projeto Redesign App Mobile?',
    timestamp: new Date(Date.now() - 3600000),
  },
  {
    id: '2',
    role: 'assistant',
    content: 'O projeto "Redesign App Mobile" está com 92% de progresso, atualmente na fase Visual. Principais destaques:\n\n• ✅ Pesquisa com usuários concluída (15 entrevistas)\n• ✅ Arquitetura de informação aprovada\n• 🔄 Design System em desenvolvimento (78%)\n• ⏳ Testes de usabilidade agendados\n\nPrevisão de conclusão: 5 dias. O projeto está 2 dias adiantado em relação ao cronograma original.',
    timestamp: new Date(Date.now() - 3500000),
  },
  {
    id: '3',
    role: 'user',
    content: 'Quais são os principais riscos?',
    timestamp: new Date(Date.now() - 3400000),
  },
  {
    id: '4',
    role: 'assistant',
    content: 'Identifiquei 2 riscos principais:\n\n🔴 **Alto Risco:**\nDependência de aprovação do Design System. Se houver rejeição, pode atrasar 3-5 dias.\n\n🟡 **Médio Risco:**\nRecursos do agente Motion Designer compartilhados com outro projeto. Pode gerar gargalo na fase de animações.\n\n**Recomendações:**\n1. Agendar revisão prévia do Design System com stakeholders\n2. Priorizar animações críticas primeiro\n3. Ter plano B para animações secundárias',
    timestamp: new Date(Date.now() - 3300000),
  },
];

export default function CXBrainPage() {
  const [messages, setMessages] = useState(mockConversations);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Adiciona mensagem do usuário
    const userMessage = {
      id: Date.now().toString(),
      role: 'user' as const,
      content: inputMessage,
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simula resposta da IA
    setTimeout(() => {
      const aiMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant' as const,
        content: 'Entendi sua pergunta. Estou analisando os dados dos projetos e agentes para fornecer a melhor resposta possível. Esta é uma demonstração do CX Brain em ação! 🧠✨',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  const handleQuickSuggestion = (suggestion: string) => {
    setInputMessage(suggestion);
  };

  return (
    <div className="space-y-8">
      <section className="relative overflow-hidden rounded-3xl border border-white/40 bg-gradient-to-br from-slate-950 via-purple-950 to-blue-950 p-8 text-white shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.28),transparent_35%)]" />
        <div className="relative flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                <Brain className="h-8 w-8" />
              </div>
              <Badge className="gap-2 border border-white/15 bg-white/10 px-3 py-1 text-white hover:bg-white/10">
                <Sparkles className="h-3 w-3" />
                IA ativa em tempo real
              </Badge>
            </div>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              CX Brain
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/75 sm:text-lg">
              Inteligência aplicada à operação de design para antecipar riscos, sugerir ações e
              responder perguntas críticas com contexto de projetos, agentes e aprovações.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                size="sm"
                className="bg-white text-slate-900 hover:bg-white/90"
                onClick={() => handleQuickSuggestion('Como está o progresso geral dos projetos?')}
              >
                Ver panorama geral
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                onClick={() => handleQuickSuggestion('Quais agentes precisam de atenção?')}
              >
                Priorizar agentes
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 xl:w-[480px]">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Insights</p>
              <p className="mt-2 text-3xl font-semibold">127</p>
              <p className="mt-1 text-xs text-emerald-300">+18% no mês</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Precisão</p>
              <p className="mt-2 text-3xl font-semibold">94%</p>
              <p className="mt-1 text-xs text-sky-300">Previsões corretas</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-white/60">Alertas</p>
              <p className="mt-2 text-3xl font-semibold">08</p>
              <p className="mt-1 text-xs text-amber-300">Demandam revisão</p>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card className="border-0 bg-gradient-to-br from-amber-50 to-white shadow-md shadow-amber-100/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Insights Gerados</CardTitle>
            <div className="rounded-xl bg-amber-100 p-2">
              <Lightbulb className="h-4 w-4 text-amber-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">Este mês</p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-blue-50 to-white shadow-md shadow-blue-100/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recomendações</CardTitle>
            <div className="rounded-xl bg-blue-100 p-2">
              <Target className="h-4 w-4 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">43</div>
            <p className="text-xs text-muted-foreground">Ativas</p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-emerald-50 to-white shadow-md shadow-emerald-100/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Taxa de Acerto</CardTitle>
            <div className="rounded-xl bg-emerald-100 p-2">
              <TrendingUp className="h-4 w-4 text-emerald-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">Previsões corretas</p>
          </CardContent>
        </Card>

        <Card className="border-0 bg-gradient-to-br from-purple-50 to-white shadow-md shadow-purple-100/60">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Conversas</CardTitle>
            <div className="rounded-xl bg-purple-100 p-2">
              <MessageSquare className="h-4 w-4 text-purple-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">Total</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.6fr_0.9fr]">
        <div className="space-y-4">
          <Card className="overflow-hidden border-0 bg-white/90 shadow-xl shadow-slate-200/70">
            <CardHeader className="border-b bg-slate-50/80">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                    Conversa com CX Brain
                  </CardTitle>
                  <CardDescription>
                    Faça perguntas sobre seus projetos e receba insights em tempo real
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="w-fit gap-2 rounded-full px-3 py-1">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  Assistente online
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="flex h-[680px] flex-col p-0">
              <div className="flex-1 space-y-4 overflow-y-auto bg-[linear-gradient(180deg,#fafbff_0%,#f8fafc_100%)] px-6 py-6">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-end gap-3 ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.role === 'assistant' && (
                      <Avatar className="h-10 w-10 border border-purple-100 shadow-sm">
                        <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                          <Brain className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl px-4 py-3 shadow-sm ${
                        message.role === 'user'
                          ? 'rounded-br-md bg-gradient-to-br from-blue-600 to-violet-600 text-white'
                          : 'rounded-bl-md border border-slate-200 bg-white'
                      }`}
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wide opacity-70">
                          {message.role === 'user' ? 'Você' : 'CX Brain'}
                        </span>
                      </div>
                      <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                      <p className="mt-3 text-[11px] opacity-60">
                        {message.timestamp.toLocaleTimeString('pt-BR', {
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </p>
                    </div>

                    {message.role === 'user' && (
                      <Avatar className="h-10 w-10 border border-slate-200 shadow-sm">
                        <AvatarFallback className="bg-slate-100 text-slate-700">VC</AvatarFallback>
                      </Avatar>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="flex items-end gap-3">
                    <Avatar className="h-10 w-10 border border-purple-100 shadow-sm">
                      <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                        <Brain className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                    <div className="rounded-2xl rounded-bl-md border border-slate-200 bg-white px-4 py-3 shadow-sm">
                      <div className="flex gap-1 text-slate-500">
                        <div className="h-2 w-2 rounded-full bg-current animate-bounce" />
                        <div className="h-2 w-2 rounded-full bg-current animate-bounce delay-100" />
                        <div className="h-2 w-2 rounded-full bg-current animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t bg-white px-6 py-5">
                <div className="mb-4">
                  <p className="mb-3 text-sm font-medium text-slate-700">Sugestões rápidas</p>
                  <div className="flex flex-wrap gap-2">
                    {quickSuggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        size="sm"
                        onClick={() => handleQuickSuggestion(suggestion)}
                        className="rounded-full border-slate-200 bg-slate-50 text-xs hover:bg-slate-100"
                      >
                        {suggestion}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Textarea
                    placeholder="Digite sua pergunta..."
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault();
                        handleSendMessage();
                      }
                    }}
                    rows={2}
                    className="min-h-[72px] resize-none rounded-2xl border-slate-200 bg-slate-50 px-4 py-3"
                  />
                  <Button
                    onClick={handleSendMessage}
                    size="icon"
                    className="h-auto rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 px-4 shadow-lg shadow-blue-200"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="border-0 bg-slate-950 text-white shadow-xl shadow-slate-300/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-cyan-300" />
                Insights Recentes
              </CardTitle>
              <CardDescription className="text-slate-300">
                Recomendações baseadas em IA
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {mockInsights.map((insight) => {
                const Icon = insight.icon;
                return (
                  <div
                    key={insight.id}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`rounded-xl bg-white p-2 ${insight.color}`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-white">{insight.title}</h4>
                        <p className="mt-1 text-xs leading-relaxed text-slate-300">
                          {insight.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-3">
                      <Badge
                        variant={insight.impact === 'high' ? 'destructive' : 'secondary'}
                        className="text-xs"
                      >
                        {insight.impact === 'high' ? 'Alto Impacto' : 'Médio Impacto'}
                      </Badge>
                      <Button variant="ghost" size="sm" className="h-7 text-xs text-white hover:bg-white/10 hover:text-white">
                        {insight.action}
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          <Card className="border-0 bg-white shadow-lg shadow-slate-200/70">
            <CardHeader>
              <CardTitle className="text-base">Capacidades do CX Brain</CardTitle>
              <CardDescription>Áreas onde a IA gera maior valor operacional</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-2xl bg-blue-50 p-4">
                <div className="flex items-start gap-3">
                  <BarChart3 className="mt-0.5 h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium text-sm">Análise Preditiva</p>
                    <p className="text-xs text-muted-foreground">
                      Prevê riscos, gargalos e oportunidades antes que impactem a entrega.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-emerald-50 p-4">
                <div className="flex items-start gap-3">
                  <Users className="mt-0.5 h-5 w-5 text-emerald-500" />
                  <div>
                    <p className="font-medium text-sm">Otimização de Recursos</p>
                    <p className="text-xs text-muted-foreground">
                      Sugere alocação mais eficiente entre agentes e etapas de projeto.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-amber-50 p-4">
                <div className="flex items-start gap-3">
                  <Target className="mt-0.5 h-5 w-5 text-amber-500" />
                  <div>
                    <p className="font-medium text-sm">Recomendações Personalizadas</p>
                    <p className="text-xs text-muted-foreground">
                      Ajusta as próximas ações com base em histórico, risco e contexto.
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-2xl bg-purple-50 p-4">
                <div className="flex items-start gap-3">
                  <Zap className="mt-0.5 h-5 w-5 text-purple-500" />
                  <div>
                    <p className="font-medium text-sm">Automação Inteligente</p>
                    <p className="text-xs text-muted-foreground">
                      Aprende padrões operacionais para reduzir tarefas repetitivas.
                    </p>
                  </div>
                </div>
              </div>
              <Separator />
              <div className="rounded-2xl bg-slate-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Recomendação do dia
                </p>
                <p className="mt-2 text-sm font-medium text-slate-900">
                  Concentre a revisão do Design System nas próximas 24h para evitar atraso em cadeia.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

// Made with Bob