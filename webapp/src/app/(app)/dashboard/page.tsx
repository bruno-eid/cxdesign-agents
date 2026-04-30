'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Plus, ArrowRight, FolderKanban, CheckCircle2, Clock, Activity } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useProjectStore } from '@/lib/store';
import { SQUAD_COLORS } from '@/lib/types';

export default function Home() {
  const { projects, init } = useProjectStore();
  useEffect(() => { init(); }, [init]);

  const active = projects.filter(p => p.status === 'in_progress');
  const completed = projects.filter(p => p.status === 'completed');

  const totalAgents = 21;
  const totalSubagents = projects.length > 0
    ? projects[0].squads.reduce((s, sq) => s + sq.agents.reduce((a, ag) => a + ag.subagents.length, 0), 0)
    : 0;

  return (
    <div className="max-w-6xl mx-auto space-y-10 pb-20 pt-4">
      {/* Hero */}
      <div className="relative rounded-3xl bg-card/50 backdrop-blur-xl border border-border p-10 md:p-14 overflow-hidden">
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -left-10 -bottom-10 w-60 h-60 rounded-full bg-cyan-500/5 blur-3xl" />
        <div className="relative z-10 max-w-2xl">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 px-3 py-1 mb-5 text-xs font-semibold">
            <Activity className="w-3.5 h-3.5 mr-1.5 inline" /> CX Operating System · End-to-End
          </Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-foreground">
            Design de Produto<br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 via-cyan-400 via-amber-400 via-rose-400 via-orange-400 to-emerald-400">
              orquestrado por IA.
            </span>
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-xl">
            7 squads especializadas, {totalAgents} agentes e mais de 80 subagentes trabalham em conjunto
            — da estratégia à evolução contínua.
          </p>
          <Link href="/projects/new">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all">
              <Plus className="w-5 h-5 mr-2" /> Novo Projeto
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: 'Projetos Ativos', value: active.length, color: 'text-blue-400' },
          { label: 'Concluídos', value: completed.length, color: 'text-emerald-400' },
          { label: 'Squads', value: 7, color: 'text-purple-400' },
          { label: 'Agentes', value: totalAgents, color: 'text-orange-400' },
        ].map(s => (
          <div key={s.label} className="rounded-2xl bg-card/60 backdrop-blur border border-border p-5">
            <p className="text-sm text-muted-foreground mb-1">{s.label}</p>
            <p className={`text-3xl font-extrabold ${s.color}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Project List */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-foreground">Meus Projetos</h2>
          <Link href="/projects/new">
            <Button variant="outline" size="sm"><Plus className="w-4 h-4 mr-1.5" /> Criar</Button>
          </Link>
        </div>

        {projects.length === 0 ? (
          <div className="rounded-2xl bg-card/40 backdrop-blur border border-dashed border-border p-16 text-center">
            <FolderKanban className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-muted-foreground mb-2">Nenhum projeto ainda</h3>
            <p className="text-sm text-muted-foreground/70 mb-6">Crie seu primeiro projeto para ativar as 7 squads.</p>
            <Link href="/projects/new"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"><Plus className="w-4 h-4 mr-2" /> Criar Projeto</Button></Link>
          </div>
        ) : (
          <div className="grid gap-4">
            {projects.map(project => {
              const completedSquads = project.squads.filter(s => s.status === 'completed').length;
              const progress = (completedSquads / 7) * 100;
              const currentSquad = project.squads[project.currentSquadIndex];
              const colors = SQUAD_COLORS[currentSquad?.color || 'blue'];

              return (
                <Link key={project.id} href={`/project/${project.id}`}>
                  <div className="group rounded-2xl bg-card/60 backdrop-blur border border-border hover:border-primary/30 p-6 transition-all hover:shadow-lg cursor-pointer">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-bold text-foreground truncate">{project.name}</h3>
                          {project.status === 'completed' ? (
                            <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-xs"><CheckCircle2 className="w-3 h-3 mr-1" /> Concluído</Badge>
                          ) : (
                            <Badge variant="outline" className="text-xs text-muted-foreground"><Clock className="w-3 h-3 mr-1" /> Em andamento</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3 truncate">{project.client} · {project.briefing.slice(0, 80)}...</p>

                        {/* Squad progress dots */}
                        <div className="flex items-center gap-1.5">
                          {project.squads.map(sq => (
                            <div key={sq.id} className={`w-6 h-1.5 rounded-full transition-all ${sq.status === 'completed' ? 'bg-emerald-400' : sq.status === 'active' ? 'bg-primary' : 'bg-muted'}`} title={sq.name} />
                          ))}
                          <span className="text-[10px] font-bold text-muted-foreground ml-2">{completedSquads}/7</span>
                        </div>
                      </div>

                      <div className={`flex items-center gap-2 shrink-0 text-sm font-medium ${colors.text}`}>
                        <span className="text-lg">{currentSquad?.emoji}</span>
                        <span className="hidden md:inline text-xs">{currentSquad?.name}</span>
                        <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
