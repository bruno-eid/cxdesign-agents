'use client';

import { useState } from 'react';
import {
  Sparkles,
  Search,
  Brain,
  Palette,
  Shield,
  ArrowRight,
  CheckCircle2,
  Loader2,
  Activity,
  Zap,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';

// As 5 Fases do Pipeline
const phases = [
  { id: 'strategist', name: '01. Estratégia', icon: Sparkles, color: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/10', glow: 'shadow-[0_0_15px_rgba(59,130,246,0.1)]' },
  { id: 'researcher', name: '02. Pesquisa', icon: Search, color: 'text-brand-400', border: 'border-brand-500/30', bg: 'bg-brand-500/10', glow: 'shadow-[0_0_15px_rgba(139,92,246,0.1)]' },
  { id: 'architect', name: '03. Arquitetura', icon: Brain, color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10', glow: 'shadow-[0_0_15px_rgba(6,182,212,0.1)]' },
  { id: 'visual', name: '04. Visual', icon: Palette, color: 'text-orange-400', border: 'border-orange-500/30', bg: 'bg-orange-500/10', glow: 'shadow-[0_0_15px_rgba(249,115,22,0.1)]' },
  { id: 'validator', name: '05. Validação', icon: Shield, color: 'text-emerald-400', border: 'border-emerald-500/30', bg: 'bg-emerald-500/10', glow: 'shadow-[0_0_15px_rgba(16,185,129,0.1)]' },
];

export default function KanbanAgentsPage() {
  const [projectInput, setProjectInput] = useState('');
  const [currentPhaseIdx, setCurrentPhaseIdx] = useState(0);
  const [loadingPhase, setLoadingPhase] = useState<string | null>(null);
  
  // Estado para guardar o histórico de outputs dos agentes
  const [pipelineData, setPipelineData] = useState<Record<string, any>>({});
  
  const [error, setError] = useState('');

  // Roda o agente correspondente à fase atual
  const runAgentForPhase = async (phaseIdx: number) => {
    const phaseId = phases[phaseIdx].id;
    setLoadingPhase(phaseId);
    setError('');

    // Prepara o contexto: envia o briefing inicial + handoffs anteriores
    let contextToAgent = `Projeto Original: ${projectInput}\n`;
    if (phaseIdx > 0) {
      const prevPhaseId = phases[phaseIdx - 1].id;
      const prevOutput = pipelineData[prevPhaseId];
      if (prevOutput?.handoff) {
         contextToAgent += `\nInstruções da fase anterior: ${prevOutput.handoff}`;
      }
    }

    try {
      const res = await fetch('/api/orchestrator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ briefing: contextToAgent, phase: phaseId }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Erro na execução do agente');

      setPipelineData((prev) => ({
        ...prev,
        [phaseId]: data.result
      }));

      toast.success(`Agente ${phases[phaseIdx].name} concluiu a tarefa!`);

    } catch (err: any) {
      setError(err.message);
      toast.error('Ocorreu um erro ao acionar o agente.', { description: err.message });
    } finally {
      setLoadingPhase(null);
    }
  };

  const approveAndNext = () => {
    if (currentPhaseIdx < phases.length - 1) {
      setCurrentPhaseIdx(prev => prev + 1);
      toast.info('Gateway Aprovado!', { description: 'Handoff enviado para a próxima fase.' });
    } else {
      toast.success('Projeto Finalizado com Sucesso!', { description: 'Todas as fases do pipeline foram aprovadas.' });
    }
  };

  return (
    <div className="max-w-[1600px] mx-auto space-y-8 pb-20 pt-4">
      {/* Header */}
      <div className="glass-panel p-8 rounded-3xl border-white/10 relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10">
          <Activity className="w-64 h-64 text-brand-500" />
        </div>
        <div className="relative z-10 max-w-3xl">
          <Badge variant="outline" className="bg-brand-500/10 text-brand-400 border-brand-500/30 px-3 py-1 mb-4">
            <Zap className="w-4 h-4 mr-1 inline" /> Pipeline Multiagentes End-to-End
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight mb-3 text-gradient">
            CRM de Design com IA
          </h1>
          <p className="text-muted-foreground text-lg">
            Descreva seu projeto no primeiro card e acompanhe a execução dos agentes por cada fase. Aprove os artefatos (Gateways) para avançar.
          </p>
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400">
          {error}
        </div>
      )}

      {/* Kanban Board Horizontal Scroll */}
      <div className="flex gap-6 overflow-x-auto pb-8 snap-x scroll-smooth custom-scrollbar">
        {phases.map((phase, idx) => {
          const Icon = phase.icon;
          const isActive = idx === currentPhaseIdx;
          const isPast = idx < currentPhaseIdx;
          const isFuture = idx > currentPhaseIdx;
          const phaseData = pipelineData[phase.id];
          const isLoading = loadingPhase === phase.id;

          return (
            <div 
              key={phase.id} 
              className={`flex-shrink-0 w-[420px] snap-center flex flex-col gap-4 transition-all duration-700 ease-in-out ${isFuture ? 'opacity-40 grayscale blur-[1px]' : 'opacity-100'} ${isActive ? 'scale-100' : 'scale-[0.98]'}`}
            >
              {/* Column Header */}
              <div className={`p-4 rounded-2xl border ${isActive ? phase.border : 'border-white/5'} ${isActive ? phase.bg : 'bg-white/5'} ${isActive ? phase.glow : ''} backdrop-blur-md shadow-lg flex items-center justify-between transition-colors`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-background shadow-inner ${phase.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className={`font-bold ${isActive ? 'text-foreground' : 'text-muted-foreground'}`}>{phase.name}</h3>
                </div>
                {isPast && <CheckCircle2 className="w-5 h-5 text-emerald-400 animate-in zoom-in" />}
              </div>

              {/* Column Content Area */}
              <div className={`flex-1 glass-card p-6 rounded-2xl border-white/10 flex flex-col gap-4 min-h-[450px] transition-all ${isActive ? 'ring-1 ring-white/10 shadow-xl' : ''}`}>
                
                {/* 1. Input Box (Only for Phase 0 if not started, or context display for others) */}
                {idx === 0 && !phaseData && !isLoading && (
                  <div className="flex-1 flex flex-col animate-in fade-in slide-in-from-bottom-4">
                    <label className="text-sm font-semibold mb-2 text-brand-400 flex items-center gap-2">
                      Descreva seu Desafio:
                    </label>
                    <textarea 
                      value={projectInput}
                      onChange={(e) => setProjectInput(e.target.value)}
                      placeholder="Ex: Quero criar um aplicativo de finanças focado em gamificação para o público jovem da geração Z..."
                      className="flex-1 bg-background/60 border border-white/10 rounded-xl p-4 text-sm text-foreground focus:ring-2 focus:ring-brand-500/50 focus:border-brand-500/50 focus:shadow-[0_0_20px_rgba(139,92,246,0.15)] transition-all outline-none resize-none leading-relaxed"
                    />
                  </div>
                )}

                {/* 2. Loading State */}
                {isLoading && (
                  <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in">
                    <div className="relative">
                      <div className={`absolute inset-0 blur-2xl opacity-40 ${phase.bg.replace('10', '50')}`} />
                      <Loader2 className={`w-12 h-12 animate-spin relative z-10 ${phase.color}`} />
                    </div>
                    <div>
                      <p className={`font-bold text-lg ${phase.color}`}>Processando Inteligência...</p>
                      <p className="text-sm text-muted-foreground mt-2">Correlacionando contexto e gerando artefatos</p>
                    </div>
                  </div>
                )}

                {/* 3. Output State (Agent Response) */}
                {phaseData && !isLoading && (
                  <div className="flex-1 space-y-5 overflow-y-auto pr-2 custom-scrollbar animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <h4 className="font-extrabold text-xl text-foreground mb-4 border-b border-white/5 pb-2">{phaseData.title}</h4>
                    
                    {/* Render dynamic properties based on the JSON response */}
                    {Object.entries(phaseData).map(([key, value]) => {
                      if (key === 'title' || key === 'handoff' || key === 'decision') return null;
                      
                      return (
                        <div key={key} className="bg-background/40 hover:bg-background/60 transition-colors rounded-xl p-4 border border-white/5">
                          <span className="text-xs text-muted-foreground uppercase font-bold mb-3 block tracking-widest flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${phase.bg.replace('10', '100')} ${phase.color}`} />
                            {key.replace('_', ' ')}
                          </span>
                          {Array.isArray(value) ? (
                            <ul className="space-y-2.5">
                              {value.map((item, i) => (
                                <li key={i} className="text-sm flex items-start gap-3 group">
                                  <ArrowRight className="w-4 h-4 text-brand-400 mt-0.5 shrink-0 transition-transform group-hover:translate-x-1" />
                                  <span className="text-foreground/90 leading-relaxed group-hover:text-foreground transition-colors">{item}</span>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p className="text-sm text-foreground/90 font-medium leading-relaxed">{String(value)}</p>
                          )}
                        </div>
                      );
                    })}

                    {(phaseData.handoff || phaseData.decision) && (
                      <div className={`rounded-xl p-5 mt-6 border ${phase.border} ${phase.bg} relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full" />
                        <span className="text-xs font-bold uppercase tracking-wider block mb-2 opacity-80">Gateway (Handoff)</span>
                        <p className={`text-sm font-medium leading-relaxed ${phase.color}`}>
                          "{phaseData.decision || phaseData.handoff}"
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* 4. Action Buttons */}
                <div className="mt-auto pt-5 border-t border-white/5">
                  {!phaseData && isActive && (
                    <Button 
                      onClick={() => runAgentForPhase(idx)}
                      disabled={idx === 0 && !projectInput.trim()}
                      className={`w-full font-bold shadow-lg text-white transition-all hover:scale-[1.02] ${idx === 0 ? 'bg-blue-600 hover:bg-blue-500' : 'bg-brand-600 hover:bg-brand-500'}`}
                      size="lg"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Acionar Agente {phase.name.split('.')[1]}
                    </Button>
                  )}
                  
                  {phaseData && isActive && (
                    <div className="flex gap-3 animate-in slide-in-from-bottom-4">
                      <Button variant="outline" className="w-1/3 bg-background/50 hover:bg-red-500/10 hover:text-red-400 border-white/10 hover:border-red-500/30">
                        Recusar
                      </Button>
                      <Button 
                        onClick={approveAndNext}
                        className="w-2/3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all"
                      >
                        Aprovar Gateway <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  )}

                  {isPast && (
                    <div className="text-center p-3 text-sm font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-xl flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-5 h-5" /> Fase Concluída e Aprovada
                    </div>
                  )}
                </div>

              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}