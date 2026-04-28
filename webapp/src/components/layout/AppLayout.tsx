'use client';

import { Sidebar } from './Sidebar';

interface AppLayoutProps {
  children: React.ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 overflow-y-auto bg-muted/10">
        <div className="container mx-auto p-6">
          {children}
        </div>
      </main>
    </div>
  );
}

// Made with Bob
