'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  FolderKanban,
  Brain,
  Settings,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Bot,
  Workflow,
  TestTube2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { useState } from 'react';

const navigation = [
  { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Projetos', href: '/projects', icon: FolderKanban },
  { name: 'Pipeline AI', href: '/kanban', icon: Workflow },
  { name: 'Agentes', href: '/agents', icon: Bot },
  { name: 'PoC', href: '/poc', icon: TestTube2 },
  { name: 'CX Brain', href: '/cx-brain', icon: Brain },
  { name: 'Configurações', href: '/settings', icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href) ?? false;
  };

  return (
    <div
      className={cn(
        'relative flex h-screen flex-col border-r border-border/50 bg-sidebar transition-all duration-300',
        collapsed ? 'w-[68px]' : 'w-[260px]'
      )}
    >
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 px-4">
        {!collapsed && (
          <div className="flex items-center gap-2.5 flex-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-[0_0_12px_rgba(99,102,241,0.4)]">
              <Sparkles className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-foreground">CX Copilot</span>
              <span className="text-[10px] text-muted-foreground font-medium">7 Squads · 21 Agentes</span>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-[0_0_12px_rgba(99,102,241,0.4)] mx-auto">
            <Sparkles className="h-5 w-5 text-primary-foreground" />
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="mx-3 h-px bg-border/50" />

      {/* Nav */}
      <nav className="flex-1 space-y-1 p-2 mt-2">
        {navigation.map((item) => {
          const active = isActive(item.href);
          const Icon = item.icon;

          return (
            <Link key={item.name} href={item.href}>
              <div
                className={cn(
                  'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-all',
                  collapsed && 'justify-center px-2',
                  active
                    ? 'bg-primary/10 text-primary shadow-sm'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                )}
              >
                <Icon className={cn('h-[18px] w-[18px] shrink-0', active && 'text-primary')} />
                {!collapsed && <span>{item.name}</span>}
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-3 space-y-2">
        <div className="flex items-center justify-center gap-1">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCollapsed(!collapsed)}
            className="h-8 w-8 text-muted-foreground"
          >
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>
      </div>
    </div>
  );
}
