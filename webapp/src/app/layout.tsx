import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppLayout } from '@/components/layout/AppLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CX Copilot - AI-First Design Operating System',
  description: 'Sistema operacional completo para gestão de projetos de Customer Experience com IA',
  keywords: ['CX', 'Design', 'UX', 'Customer Experience', 'Agentes', 'IA', 'AI'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}

// Made with Bob
