'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Plus, ArrowRight, FolderKanban, CheckCircle2, Clock, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useProjectStore } from '@/lib/store';
import { SQUAD_COLORS } from '@/lib/types';

export default function ProjectsPage() {
  const { projects, init, deleteProject } = useProjectStore();
  useEffect(() => { init(); }, [init]);

  return (
    <div className="max-w-5xl mx-auto pt-4 pb-20 space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Projetos</h1>
          <p className="text-muted-foreground text-sm mt-1">Gerencie todos os seus projetos de design.</p>
        </div>
        <Link href="/projects/new"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"><Plus className="w-4 h-4 mr-2" /> Novo Projeto</Button></Link>
      </div>

      {projects.length === 0 ? (
        <div className="rounded-2xl bg-card/40 backdrop-blur border border-dashed border-border p-16 text-center">
          <FolderKanban className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-muted-foreground mb-2">Sem projetos</h3>
          <Link href="/projects/new"><Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold"><Plus className="w-4 h-4 mr-2" /> Criar Projeto</Button></Link>
        </div>
      ) : (
        <div className="space-y-3">
          {projects.map(project => {
            const completedSquads = project.squads.filter(s => s.status === 'completed').length;
            const currentSquad = project.squads[project.currentSquadIndex];
            const colors = SQUAD_COLORS[currentSquad?.color || 'blue'];

            return (
              <div key={project.id} className="group rounded-2xl bg-card/60 backdrop-blur border border-border hover:border-primary/20 transition-all">
                <Link href={`/project/${project.id}`} className="block p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="text-base font-bold text-foreground truncate">{project.name}</h3>
                        {project.status === 'completed' ? (
                          <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 text-[10px]"><CheckCircle2 className="w-3 h-3 mr-0.5" /> Concluído</Badge>
                        ) : (
                          <Badge variant="outline" className="text-[10px] text-muted-foreground"><Clock className="w-3 h-3 mr-0.5" /> Em andamento</Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-3">{project.client} · {new Date(project.createdAt).toLocaleDateString('pt-BR')}</p>
                      <div className="flex items-center gap-1.5">
                        {project.squads.map(sq => (
                          <div key={sq.id} className={`w-5 h-1 rounded-full ${sq.status === 'completed' ? 'bg-emerald-400' : sq.status === 'active' ? 'bg-primary' : 'bg-muted'}`} />
                        ))}
                        <span className="text-[10px] font-bold text-muted-foreground ml-1">{completedSquads}/7</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-red-400 opacity-0 group-hover:opacity-100" onClick={(e) => { e.preventDefault(); deleteProject(project.id); }}>
                        <Trash2 className="w-4 h-4" />
                      </Button>
                      <span className={`text-lg ${colors.text}`}>{currentSquad?.emoji}</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
