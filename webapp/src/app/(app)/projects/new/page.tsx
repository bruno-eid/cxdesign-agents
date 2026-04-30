'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Sparkles, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useProjectStore } from '@/lib/store';
import Link from 'next/link';

export default function NewProjectPage() {
  const router = useRouter();
  const { createProject } = useProjectStore();
  const [name, setName] = useState('');
  const [client, setClient] = useState('');
  const [briefing, setBriefing] = useState('');

  const handleCreate = () => {
    if (!name.trim() || !briefing.trim()) return;
    const id = createProject(name, client || 'Sem cliente', briefing);
    router.push(`/project/${id}`);
  };

  return (
    <div className="max-w-3xl mx-auto pt-6 pb-20">
      {/* Back */}
      <Link href="/">
        <Button variant="ghost" size="sm" className="text-muted-foreground mb-6">
          <ArrowLeft className="w-4 h-4 mr-1.5" /> Voltar
        </Button>
      </Link>

      {/* Card */}
      <div className="rounded-3xl bg-card/60 backdrop-blur-xl border border-border p-8 md:p-12">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary shadow-[0_0_15px_rgba(99,102,241,0.3)]">
            <Sparkles className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-foreground">Novo Projeto</h1>
            <p className="text-sm text-muted-foreground">Descreva o desafio. Os 29 agentes farão o resto.</p>
          </div>
        </div>

        <div className="space-y-6">
          {/* Name */}
          <div>
            <label className="text-sm font-semibold text-foreground block mb-2">Nome do Projeto</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: App Financeiro Gen Z"
              className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Client */}
          <div>
            <label className="text-sm font-semibold text-foreground block mb-2">Cliente <span className="text-muted-foreground font-normal">(opcional)</span></label>
            <input
              type="text"
              value={client}
              onChange={(e) => setClient(e.target.value)}
              placeholder="Ex: Banco Digital XYZ"
              className="w-full bg-background border border-input rounded-xl px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Briefing */}
          <div>
            <label className="text-sm font-semibold text-foreground block mb-2">Briefing do Projeto</label>
            <textarea
              value={briefing}
              onChange={(e) => setBriefing(e.target.value)}
              placeholder="Descreva o desafio de design, o público-alvo, objetivos de negócio, restrições técnicas e qualquer contexto relevante..."
              className="w-full h-40 bg-background border border-input rounded-xl px-4 py-3 text-sm text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all outline-none resize-none leading-relaxed placeholder:text-muted-foreground/50"
            />
          </div>

          {/* Submit */}
          <Button
            onClick={handleCreate}
            disabled={!name.trim() || !briefing.trim()}
            size="lg"
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all disabled:opacity-40"
          >
            <Send className="w-4 h-4 mr-2" /> Iniciar Projeto com CX Master
          </Button>
        </div>
      </div>
    </div>
  );
}
