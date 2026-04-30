'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sparkles, Activity } from 'lucide-react';

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#030303] flex flex-col relative overflow-hidden text-slate-50 selection:bg-indigo-500/30">
      {/* Marketing Header */}
      <header className="fixed top-0 z-50 w-full bg-[#030303]/50 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight">CX Copilot</span>
          </Link>

          <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-400">
            <Link href="#arquitetura" className="hover:text-white transition-colors">Arquitetura</Link>
            <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#enterprise" className="hover:text-white transition-colors">Enterprise</Link>
          </nav>

          <div className="flex items-center gap-6">
            <Link href="/login">
              <Button variant="ghost" className="text-slate-300 hover:text-white font-medium hover:bg-white/5">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-white text-black hover:bg-slate-200 font-bold rounded-xl px-6">Começar Grátis</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        {children}
      </main>

      {/* Minimal Footer */}
      <footer className="border-t border-white/5 bg-[#0A0A0A] py-12">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-slate-600" />
            <span className="text-sm font-medium text-slate-600">© 2024 CX Copilot OS. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-8 text-sm text-slate-600 font-medium">
            <Link href="#" className="hover:text-white transition-colors">Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
