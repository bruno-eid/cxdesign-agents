'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login
    router.push('/dashboard');
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight mb-2">Bem-vindo de volta</h1>
        <p className="text-sm text-muted-foreground">Acesse sua conta para continuar orquestrando.</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">Email Profissional</label>
          <input 
            type="email" 
            placeholder="nome@agencia.com" 
            required
            className="w-full h-11 bg-background/50 border border-input rounded-xl px-4 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
        <div>
          <div className="flex justify-between items-center mb-1">
            <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider block">Senha</label>
            <Link href="#" className="text-xs text-primary hover:underline">Esqueceu a senha?</Link>
          </div>
          <input 
            type="password" 
            placeholder="••••••••" 
            required
            className="w-full h-11 bg-background/50 border border-input rounded-xl px-4 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>

        <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_15px_rgba(99,102,241,0.2)] mt-2">
          Entrar <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </form>

      <div className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
        <div className="h-px bg-border flex-1" />
        <span className="px-4">ou continue com</span>
        <div className="h-px bg-border flex-1" />
      </div>

      <div className="mt-6">
        <Button variant="outline" className="w-full h-11 font-medium bg-background/50 border-border hover:bg-accent">
          <Sparkles className="w-4 h-4 mr-2" /> Google
        </Button>
      </div>

      <p className="text-sm text-center text-muted-foreground mt-8">
        Não tem uma conta? <Link href="/register" className="text-primary hover:underline font-semibold">Criar Conta</Link>
      </p>
    </div>
  );
}
