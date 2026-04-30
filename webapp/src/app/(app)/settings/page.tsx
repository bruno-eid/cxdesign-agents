'use client';

import { useEffect, useState } from 'react';
import { Settings, Key, Palette, Users, Bell, CheckCircle2, Eye, EyeOff } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useProjectStore } from '@/lib/store';
import { toast } from 'sonner';

export default function SettingsPage() {
  const { apiKey, setApiKey, init } = useProjectStore();
  const [localKey, setLocalKey] = useState('');
  const [showKey, setShowKey] = useState(false);

  useEffect(() => {
    init();
  }, [init]);

  useEffect(() => {
    if (apiKey) setLocalKey(apiKey);
  }, [apiKey]);

  const handleSaveKey = () => {
    if (localKey.length > 0 && localKey.length < 20) {
      toast.error('Chave inválida', { description: 'A chave da API Gemini parece ser muito curta.' });
      return;
    }
    setApiKey(localKey);
    toast.success('Chave salva com sucesso!', { description: 'Os agentes agora usarão a sua API do Google Gemini.' });
  };

  return (
    <div className="max-w-4xl mx-auto pt-4 pb-20 space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight flex items-center gap-3">
          <Settings className="w-8 h-8 text-primary" /> Configurações
        </h1>
        <p className="text-muted-foreground text-sm mt-2">Configure o acesso à IA, permissões e preferências.</p>
      </div>

      <div className="space-y-4">
        {/* API Key Section */}
        <div className="rounded-2xl bg-card/60 backdrop-blur border border-primary/30 shadow-[0_0_20px_rgba(99,102,241,0.05)] p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <Key className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-foreground">Chave de Acesso Google Gemini (API Key)</h3>
              <p className="text-xs text-muted-foreground">Obrigatório para executar os agentes. A chave fica salva apenas no seu navegador.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 mt-4">
            <div className="relative flex-1 max-w-lg">
              <input
                type={showKey ? 'text' : 'password'}
                value={localKey}
                onChange={(e) => setLocalKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full h-11 bg-background border border-input rounded-xl pl-4 pr-10 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
              />
              <button 
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
            <Button onClick={handleSaveKey} className="h-11 bg-primary hover:bg-primary/90 font-bold px-6">
              Salvar Chave
            </Button>
          </div>
          {apiKey ? (
            <p className="text-xs text-emerald-400 mt-3 flex items-center"><CheckCircle2 className="w-3 h-3 mr-1" /> Chave configurada e ativa.</p>
          ) : (
            <p className="text-xs text-amber-400 mt-3">Você está rodando no Modo Mock (Simulação). Adicione uma chave para dados reais.</p>
          )}
        </div>

        {/* Other Sections */}
        {[
          { icon: Palette, title: 'Aparência', desc: 'Tema, cores e preferências visuais', items: ['Dark Mode (ativo)', 'Idioma: Português BR'] },
          { icon: Users, title: 'Equipe', desc: 'Gerencie membros e roles do projeto', items: ['Designer', 'Product Owner', 'Tech Lead'] },
          { icon: Bell, title: 'Notificações', desc: 'Preferências de notificação e alertas', items: ['Gateway pendente', 'Agente concluído', 'Erro de execução'] },
        ].map((section) => (
          <div key={section.title} className="rounded-2xl bg-card/60 backdrop-blur border border-border p-6 opacity-60">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-muted">
                <section.icon className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-foreground">{section.title}</h3>
                <p className="text-xs text-muted-foreground">{section.desc}</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {section.items.map((item) => (
                <Badge key={item} variant="outline" className="text-[10px] text-muted-foreground">{item}</Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
