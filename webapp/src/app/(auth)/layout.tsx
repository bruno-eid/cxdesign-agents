import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#030303] flex flex-col md:flex-row relative text-slate-50 selection:bg-indigo-500/30">
      
      {/* Left Pane - Auth Form */}
      <div className="w-full md:w-1/2 lg:w-[480px] flex flex-col relative z-10 bg-[#0A0A0A]/90 backdrop-blur-2xl border-r border-white/5 shadow-2xl">
        <div className="p-10">
          <Link href="/" className="flex items-center gap-3 w-fit hover:opacity-80 transition-opacity">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight text-white">CX Copilot</span>
          </Link>
        </div>
        
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-[360px]">
            {children}
          </div>
        </div>
      </div>

      {/* Right Pane - Visual / Brand */}
      <div className="hidden md:flex flex-1 relative overflow-hidden bg-[#030303] items-center justify-center p-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[20%] left-[20%] w-[600px] h-[600px] rounded-full bg-indigo-600/15 blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-[120px] mix-blend-screen" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
        
        <div className="relative z-10 max-w-xl text-center bg-[#0A0A0A]/40 backdrop-blur-2xl border border-white/5 p-16 rounded-[2.5rem] shadow-2xl">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-indigo-500/10 text-indigo-400 mb-8 border border-indigo-500/20">
            <Sparkles className="w-10 h-10" />
          </div>
          <h2 className="text-4xl font-extrabold text-white mb-6 tracking-tighter">A Arquitetura Cognitiva do Design.</h2>
          <p className="text-xl text-slate-400 leading-relaxed font-light">
            Orquestre times inteiros de IAs especializadas em um ambiente fechado, escalável e focado em excelência.
          </p>
        </div>
      </div>
      
    </div>
  );
}
