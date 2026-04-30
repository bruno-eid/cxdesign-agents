-- Estrutura inicial do Banco de Dados CX Operating System

-- 1. Projetos (Substitui a store Zustand local)
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL, -- Dono do projeto
  name TEXT NOT NULL,
  client TEXT NOT NULL,
  briefing TEXT NOT NULL,
  status TEXT DEFAULT 'briefing' NOT NULL,
  current_squad_index INTEGER DEFAULT 0 NOT NULL,
  squads JSONB NOT NULL, -- Vamos armazenar o blueprint em JSONB para flexibilidade inicial
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Habilitar RLS (Segurança de Linha)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

-- Política: Usuário só vê e edita os próprios projetos
CREATE POLICY "Users can view own projects" ON projects
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own projects" ON projects
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own projects" ON projects
  FOR UPDATE USING (auth.uid() = user_id);

-- 2. Gateways (Aprovações e Histórico)
CREATE TABLE gateways (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  project_id UUID REFERENCES projects(id) ON DELETE CASCADE NOT NULL,
  squad_id TEXT NOT NULL,
  decision TEXT NOT NULL,
  feedback TEXT,
  checklist JSONB NOT NULL,
  decided_by UUID REFERENCES auth.users(id) NOT NULL,
  decided_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

ALTER TABLE gateways ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view gateways of their projects" ON gateways
  FOR SELECT USING (EXISTS (SELECT 1 FROM projects WHERE projects.id = gateways.project_id AND projects.user_id = auth.uid()));

CREATE POLICY "Users can create gateways for their projects" ON gateways
  FOR INSERT WITH CHECK (EXISTS (SELECT 1 FROM projects WHERE projects.id = gateways.project_id AND projects.user_id = auth.uid()));
