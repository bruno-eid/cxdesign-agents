'use client';

import { Sidebar } from './Sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground relative">
      {/* Ambient background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[30%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute -bottom-[30%] -right-[10%] w-[60%] h-[60%] rounded-full bg-cyan-500/10 blur-[120px]" />
      </div>

      <Sidebar />
      <main className="flex-1 overflow-y-auto relative z-10 scroll-smooth">
        <div className="container mx-auto p-6 md:p-8 lg:p-10 max-w-[1600px]">
          {children}
        </div>
      </main>
    </div>
  );
}
