import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <Toaster position="bottom-right" theme="dark" richColors toastOptions={{
            style: { background: 'rgba(10, 10, 10, 0.8)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }
          }} />
        </ThemeProvider>
      </body>
    </html>
  );
}
