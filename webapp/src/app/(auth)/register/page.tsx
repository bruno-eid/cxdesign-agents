'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function RegisterPage() {
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate register
    router.push('/dashboard');
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight mb-2">Comece Grátis</h1>
        <p className="text-sm text-muted-foreground">14 dias de teste grátis. Cancele a qualquer momento.</p>
      </div>

      <form onSubmit={handleRegister} className="space-y-4">
        <div>
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">Nome Completo</label>
          <input 
            type="text" 
            placeholder="Seu nome" 
            required
            className="w-full h-11 bg-background/50 border border-input rounded-xl px-4 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
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
          <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1 block">Senha</label>
          <input 
            type="password" 
            placeholder="••••••••" 
            required
            className="w-full h-11 bg-background/50 border border-input rounded-xl px-4 text-sm text-foreground outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>

        <Button type="submit" className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-[0_0_15px_rgba(99,102,241,0.2)] mt-2">
          <Sparkles className="w-4 h-4 mr-2" /> Criar Conta
        </Button>
      </form>

      <p className="text-xs text-center text-muted-foreground mt-6 leading-relaxed">
        Ao se registrar, você concorda com nossos <br/>
        <Link href="#" className="underline hover:text-foreground">Termos de Serviço</Link> e <Link href="#" className="underline hover:text-foreground">Política de Privacidade</Link>.
      </p>

      <p className="text-sm text-center text-muted-foreground mt-8">
        Já tem uma conta? <Link href="/login" className="text-primary hover:underline font-semibold">Fazer Login</Link>
      </p>
    </div>
  );
}
