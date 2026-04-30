'use client';

import { useState } from 'react';
import { Brain, ArrowRight, Activity, Users, Send, Loader2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function PoCPage() {
  const [briefing, setBriefing] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState('');

  const handleRunAgents = async () => {
    if (!briefing.trim()) return;
    
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const res = await fetch('/api/orchestrator', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ briefing }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || 'Erro ao executar os agentes');
      }

      setResult(data.flow);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20 pt-4">
      {/* Header */}
      <div className="relative rounded-3xl glass-panel p-8 md:p-12 overflow-hidden border border-white/10 shadow-2xl">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
          <Activity className="w-48 h-48 text-brand-500 animate-pulse-slow" />
        </div>
        
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-400 text-sm font-medium">
            <Sparkles className="w-4 h-4" /> Prova de Conceito (PoC)
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gradient">
            Orquestração de Agentes
          </h1>
          <p className="text-lg text-foreground/80 font-light">
            Digite um briefing abaixo para ver o <strong className="text-brand-400">CX Master</strong> delegando tarefas para o <strong className="text-blue-400">User Researcher</strong> em tempo real, usando a OpenAI.
          </p>
        </div>
      </div>

      {/* Input Section */}
      <div className="glass-card rounded-2xl p-6 border border-white/10">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Brain className="w-5 h-5 text-brand-400" /> Briefing do Projeto
        </h2>
        <div className="relative">
          <textarea 
            value={briefing}
            onChange={(e) => setBriefing(e.target.value)}
            placeholder="Ex: Quero criar um aplicativo mobile para um banco digital focado em adolescentes..."
            className="w-full h-32 bg-background/50 border border-white/10 rounded-xl p-4 text-foreground focus:ring-2 focus:ring-brand-500 focus:border-transparent outline-none resize-none placeholder:text-muted-foreground/50 transition-all"
          />
          <div className="absolute bottom-4 right-4">
            <Button 
              onClick={handleRunAgents} 
              disabled={loading || !briefing.trim()}
              className="bg-brand-600 hover:bg-brand-500 text-white shadow-lg"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Send className="w-4 h-4 mr-2" />
              )}
              Executar Agentes
            </Button>
          </div>
        </div>
        
        {error && (
          <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
            {error}
          </div>
        )}
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-6 animate-in slide-in-from-bottom-8 fade-in duration-700">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Activity className="w-6 h-6 text-emerald-400" /> Execução Concluída
          </h2>
          
          <div className="relative space-y-6 before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-500/50 before:to-transparent">
            
            {result.map((step: any, index: number) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                {/* Timeline dot */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-background bg-brand-500/20 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10 backdrop-blur-md text-brand-400">
                  {index === 0 ? <Brain className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                </div>
                
                {/* Card */}
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] glass-card p-6 rounded-2xl border-white/10 hover:border-brand-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-foreground">{step.agent}</h3>
                    <span className="text-xs font-medium text-brand-400 bg-brand-500/10 px-2 py-1 rounded-full">{step.role}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {step.action}
                    </p>
                    
                    {step.handoff && (
                      <div className="bg-background/50 border border-white/5 rounded-xl p-3 text-sm">
                        <span className="text-xs text-muted-foreground uppercase font-semibold mb-1 block">Instrução para próximo agente:</span>
                        <p className="text-blue-400 italic">"{step.handoff}"</p>
                      </div>
                    )}

                    {step.result && (
                      <div className="bg-background/50 border border-white/5 rounded-xl p-3">
                        <span className="text-xs text-muted-foreground uppercase font-semibold mb-2 block">Dores Encontradas:</span>
                        <ul className="space-y-2">
                          {step.result.map((item: string, i: number) => (
                            <li key={i} className="text-sm flex items-start gap-2">
                              <ArrowRight className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                              <span className="text-foreground/90">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      )}
    </div>
  );
}
