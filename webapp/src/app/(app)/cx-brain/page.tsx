'use client';

import { Brain, Sparkles, Database, Cpu, Lock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function CXBrainPage() {
  return (
    <div className="max-w-4xl mx-auto pt-4 pb-20 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight flex items-center gap-3">
          <Brain className="w-8 h-8 text-primary" /> CX Brain
        </h1>
        <p className="text-muted-foreground text-sm mt-2">Sistema de memória global — contexto compartilhado entre todos os agentes.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          { icon: Cpu, title: 'Memória de Curto Prazo', desc: 'Contexto da sessão atual e interações recentes', tech: 'Redis', color: 'text-blue-400', bg: 'bg-blue-500/10' },
          { icon: Database, title: 'Memória de Longo Prazo', desc: 'Histórico de projetos, decisões e padrões aprendidos', tech: 'PostgreSQL', color: 'text-purple-400', bg: 'bg-purple-500/10' },
          { icon: Sparkles, title: 'Memória Semântica', desc: 'Busca por similaridade em contextos passados', tech: 'Qdrant', color: 'text-cyan-400', bg: 'bg-cyan-500/10' },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl bg-card/60 backdrop-blur border border-border p-6 space-y-3">
            <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg}`}>
              <item.icon className={`w-5 h-5 ${item.color}`} />
            </div>
            <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            <Badge variant="outline" className="text-[10px] text-muted-foreground">
              <Lock className="w-3 h-3 mr-1" /> {item.tech} · Em breve
            </Badge>
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-card/40 backdrop-blur border border-dashed border-border p-10 text-center">
        <Brain className="w-10 h-10 text-muted-foreground/30 mx-auto mb-3" />
        <p className="text-sm font-semibold text-muted-foreground">O CX Brain será ativado quando conectado ao backend.</p>
        <p className="text-xs text-muted-foreground/60 mt-1">Memória por projeto, padrões aprendidos e busca semântica.</p>
      </div>
    </div>
  );
}