'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Activity, Zap, Shield, Sparkles, Brain, Code2, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center bg-[#030303] min-h-screen text-slate-50 selection:bg-indigo-500/30">
      
      {/* ─── HERO SECTION (Immersive Deep Tech) ─── */}
      <section className="relative w-full min-h-[95vh] flex flex-col justify-center items-center overflow-hidden pt-20">
        
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Animated Mesh Gradients */}
          <motion.div 
            animate={{ 
              rotate: [0, 5, -5, 0],
              scale: [1, 1.05, 0.95, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-[10%] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-indigo-600/15 blur-[120px] mix-blend-screen" 
          />
          <motion.div 
            animate={{ 
              rotate: [0, -10, 10, 0],
              y: [0, 50, -50, 0]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-[120px] mix-blend-screen" 
          />
          {/* Noise Overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>

        <div className="container relative z-10 px-6 text-center max-w-5xl mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <Badge variant="outline" className="bg-white/[0.03] text-indigo-300 border-white/10 px-4 py-1.5 mb-8 text-xs font-medium tracking-widest uppercase backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(79,70,229,0.15)]">
              <Sparkles className="w-3.5 h-3.5 mr-2 inline" /> O Cérebro do Design Digital
            </Badge>
            
            <h1 className="text-6xl md:text-8xl lg:text-[100px] font-extrabold tracking-tighter mb-6 text-white leading-[0.95]">
              Arquitetura <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-400 to-emerald-400 italic font-light pr-4">
                cognitiva.
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
              Orquestre 7 squads de IA especializadas. Transforme pesquisas extensas, fluxos complexos e design systems inteiros de meses para minutos.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
              <Link href="/register" className="w-full sm:w-auto">
                <Button size="lg" className="group relative w-full h-16 px-10 text-lg bg-white text-black hover:bg-slate-200 font-bold rounded-2xl transition-all hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Iniciar Workspace <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                </Button>
              </Link>
              <Link href="#arquitetura" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full h-16 px-10 text-lg border-white/10 bg-white/[0.02] text-white hover:bg-white/5 backdrop-blur-md font-medium rounded-2xl transition-all">
                  Explorar Arquitetura
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Floating Dashboard Mockup Representation */}
          <motion.div 
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-6xl mt-20 relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-b from-indigo-500/20 to-transparent blur-2xl rounded-3xl" />
            <div className="relative rounded-3xl bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 shadow-2xl p-2 h-[300px] overflow-hidden flex flex-col">
              <div className="flex gap-2 p-3 border-b border-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              </div>
              <div className="flex-1 p-8 flex items-center justify-center opacity-40">
                <div className="w-full max-w-3xl space-y-4">
                  <div className="h-8 w-1/3 bg-white/5 rounded-lg animate-pulse" />
                  <div className="h-4 w-full bg-white/5 rounded-full" />
                  <div className="h-4 w-4/5 bg-white/5 rounded-full" />
                  <div className="grid grid-cols-4 gap-4 pt-6">
                    {[1,2,3,4].map(i => <div key={i} className="h-24 bg-white/5 rounded-xl border border-white/5" />)}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── BENTO GRID FEATURES (Agency Style) ─── */}
      <section className="w-full py-32 relative z-10" id="arquitetura">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-6">Poder. <br/>Sem a complexidade.</h2>
            <p className="text-xl text-slate-400 max-w-2xl font-light">Uma infraestrutura desenhada para escala. Esqueça prompts soltos; orquestre times inteiros em um ecossistema fechado e governado por você.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Bento Item 1 - Large */}
            <div className="md:col-span-2 md:row-span-2 rounded-3xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-10 flex flex-col justify-between overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[100px] rounded-full group-hover:bg-indigo-500/20 transition-colors duration-700" />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 flex items-center justify-center mb-8 border border-indigo-500/30">
                  <Cpu className="w-7 h-7 text-indigo-400" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight">7 Squads Autônomas</h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md font-light">
                  Business, UX Research, Service Design, Arquitetura de Informação, UX Writing, UI Design e Validação. Todas operando em paralelo com contexto compartilhado.
                </p>
              </div>
            </div>

            {/* Bento Item 2 */}
            <div className="rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-500/10 blur-[50px] group-hover:bg-cyan-500/20 transition-colors" />
              <div className="relative z-10">
                <Brain className="w-8 h-8 text-cyan-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">CX Brain</h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  Memória persistente. Seus agentes aprendem o tom de voz da marca e lembram de decisões tomadas em projetos passados.
                </p>
              </div>
            </div>

            {/* Bento Item 3 */}
            <div className="rounded-3xl bg-[#0A0A0A] border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-purple-500/10 blur-[50px] group-hover:bg-purple-500/20 transition-colors" />
              <div className="relative z-10">
                <Shield className="w-8 h-8 text-purple-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-3 tracking-tight">Gateways de Qualidade</h3>
                <p className="text-slate-400 text-sm font-light leading-relaxed">
                  Nada passa sem aprovação. Assuma o papel de Diretor de Arte enquanto a IA atua como time de produção.
                </p>
              </div>
            </div>
            
            {/* Bento Item 4 - Wide */}
            <div className="md:col-span-3 rounded-3xl bg-gradient-to-r from-[#0A0A0A] to-indigo-950/20 border border-white/10 p-10 flex flex-col md:flex-row items-center justify-between overflow-hidden">
              <div className="max-w-xl mb-8 md:mb-0">
                <Badge className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20 mb-4 uppercase tracking-widest text-[10px]">Fase 3: Em Breve</Badge>
                <h3 className="text-3xl font-bold text-white mb-4 tracking-tight flex items-center gap-3">
                  <Code2 className="w-8 h-8 text-emerald-400" /> Exportação Direta (MCP)
                </h3>
                <p className="text-slate-400 text-lg font-light">
                  Em breve, o sistema irá desenhar nativamente no seu Figma e exportar componentes React estruturados.
                </p>
              </div>
              <div className="flex -space-x-4">
                {['Figma', 'React', 'Next.js'].map((tech, i) => (
                  <div key={tech} className="w-20 h-20 rounded-full bg-[#111] border-4 border-[#030303] flex items-center justify-center shadow-xl">
                    <span className="text-xs font-bold text-white">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PRICING (Enterprise Feel) ─── */}
      <section className="w-full py-32 relative overflow-hidden border-t border-white/5" id="pricing">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/10 via-[#030303] to-[#030303]" />
        
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter">O custo de 1 licença.<br/>A entrega de 20 pessoas.</h2>
          <p className="text-xl text-slate-400 mb-16 max-w-2xl mx-auto font-light">
            Escale sua agência ou time de produto sem inchar a folha de pagamento.
          </p>
          
          <div className="rounded-[2.5rem] bg-[#0A0A0A]/80 backdrop-blur-xl border border-white/10 p-10 md:p-16 shadow-[0_0_50px_rgba(79,70,229,0.1)] relative">
            <div className="absolute inset-x-0 -top-px h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-white/10 pb-10">
              <div className="text-left mb-6 md:mb-0">
                <Badge className="bg-white text-black hover:bg-slate-200 mb-4">Plano Pro</Badge>
                <h3 className="text-3xl font-bold text-white">Agências & Times</h3>
              </div>
              <div className="text-left md:text-right">
                <p className="text-6xl font-extrabold text-white tracking-tighter">$199<span className="text-xl text-slate-500 font-light tracking-normal">/mês</span></p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-y-4 gap-x-8 mb-12 text-left">
              {[
                'Acesso completo a 7 Squads', '21 Agentes e 80+ Subagentes', 
                'Memória CX Brain (Ilimitada)', 'Integração com sua API Key (OpenAI)', 
                'Gateways Customizáveis', 'Suporte Prioritário Enterprise'
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <span className="text-slate-300 font-light text-lg">{item}</span>
                </div>
              ))}
            </div>

            <Link href="/register" className="block w-full">
              <Button className="w-full h-16 text-lg bg-white text-black hover:bg-slate-200 font-bold rounded-2xl transition-all hover:scale-[1.01]">
                Criar Workspace Grátis por 14 dias
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
