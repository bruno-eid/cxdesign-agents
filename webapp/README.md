# 🚀 CX Operating System - Web Application

## 📋 Visão Geral

Aplicação web completa e interativa para o CX Operating System, permitindo que usuários:

- ✅ Iniciem e gerenciem projetos visualmente
- ✅ Façam upload de arquivos e documentos
- ✅ Acompanhem agentes trabalhando em tempo real
- ✅ Visualizem progresso por fase
- ✅ Gerem relatórios automaticamente
- ✅ Naveguem por toda a documentação

---

## 🏗️ Arquitetura da Aplicação

### Stack Tecnológico

**Frontend:**
- **Framework:** Next.js 14 (React 18)
- **Design System:** IBM Carbon Components React
- **State Management:** Zustand
- **API Client:** Axios
- **Real-time:** Socket.io Client
- **Charts:** Recharts
- **File Upload:** React Dropzone
- **Markdown:** React Markdown

**Backend (Recomendado):**
- **Runtime:** Node.js 20+
- **Framework:** Express.js
- **Real-time:** Socket.io
- **Database:** PostgreSQL (CX Brain)
- **Cache:** Redis
- **Vector DB:** Qdrant
- **AI:** OpenAI API / Anthropic Claude

---

## 📁 Estrutura do Projeto

```
webapp/
├── public/
│   ├── favicon.ico
│   ├── logo.svg
│   └── assets/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx
│   │   ├── page.tsx           # Dashboard
│   │   ├── projects/
│   │   │   ├── page.tsx       # Lista de projetos
│   │   │   ├── new/
│   │   │   │   └── page.tsx   # Novo projeto
│   │   │   └── [id]/
│   │   │       ├── page.tsx   # Detalhes do projeto
│   │   │       ├── phase-0/   # Fase Estrategista
│   │   │       ├── phase-1/   # Fase Pesquisador
│   │   │       ├── phase-2/   # Fase Arquiteto
│   │   │       ├── phase-3/   # Fase Visual
│   │   │       └── phase-4/   # Fase Validador
│   │   ├── agents/
│   │   │   └── page.tsx       # Visualização de agentes
│   │   ├── templates/
│   │   │   └── page.tsx       # Biblioteca de templates
│   │   ├── reports/
│   │   │   └── page.tsx       # Relatórios gerados
│   │   └── docs/
│   │       └── page.tsx       # Documentação
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── Footer.tsx
│   │   ├── project/
│   │   │   ├── ProjectCard.tsx
│   │   │   ├── ProjectWizard.tsx
│   │   │   ├── PhaseProgress.tsx
│   │   │   └── GatewayApproval.tsx
│   │   ├── agents/
│   │   │   ├── AgentCard.tsx
│   │   │   ├── AgentStatus.tsx
│   │   │   ├── AgentWorkflow.tsx
│   │   │   └── AgentLogs.tsx
│   │   ├── upload/
│   │   │   ├── FileUploader.tsx
│   │   │   └── FileManager.tsx
│   │   ├── reports/
│   │   │   ├── ReportViewer.tsx
│   │   │   └── ReportGenerator.tsx
│   │   └── common/
│   │       ├── Loading.tsx
│   │       ├── ErrorBoundary.tsx
│   │       └── Toast.tsx
│   ├── services/
│   │   ├── api.ts             # API client
│   │   ├── projects.ts        # Project services
│   │   ├── agents.ts          # Agent services
│   │   ├── files.ts           # File services
│   │   └── websocket.ts       # Real-time services
│   ├── stores/
│   │   ├── projectStore.ts
│   │   ├── agentStore.ts
│   │   └── userStore.ts
│   ├── types/
│   │   ├── project.ts
│   │   ├── agent.ts
│   │   └── report.ts
│   ├── utils/
│   │   ├── formatters.ts
│   │   ├── validators.ts
│   │   └── helpers.ts
│   └── styles/
│       └── globals.css
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md (este arquivo)
```

---

## 🎨 Páginas e Funcionalidades

### 1. Dashboard (/)
**Funcionalidades:**
- Overview de todos os projetos
- Estatísticas gerais (29 agentes, 12 templates, etc)
- Projetos recentes
- Agentes ativos
- Notificações e alertas

**Componentes:**
- StatsCards (5 cards com métricas)
- ProjectsList (lista de projetos)
- AgentsStatus (status dos agentes)
- RecentActivity (atividades recentes)

---

### 2. Projetos (/projects)

#### 2.1 Lista de Projetos (/projects)
**Funcionalidades:**
- Grid/Lista de todos os projetos
- Filtros (fase, status, data)
- Busca
- Ordenação
- Ações rápidas (editar, deletar, duplicar)

**Componentes:**
- ProjectCard (card de projeto)
- ProjectFilters (filtros)
- ProjectSearch (busca)

#### 2.2 Novo Projeto (/projects/new)
**Funcionalidades:**
- Wizard de criação em 5 etapas
- Upload de briefing
- Seleção de templates
- Configuração inicial
- Alocação de recursos

**Componentes:**
- ProjectWizard (wizard multi-step)
- BriefingUploader (upload de briefing)
- TemplateSelector (seleção de templates)
- ResourceAllocator (alocação de recursos)

#### 2.3 Detalhes do Projeto (/projects/[id])
**Funcionalidades:**
- Overview do projeto
- Progresso por fase
- Timeline visual
- Arquivos do projeto
- Equipe alocada
- Gateways de aprovação

**Componentes:**
- ProjectHeader (cabeçalho)
- PhaseTimeline (timeline de fases)
- FileManager (gerenciador de arquivos)
- TeamMembers (membros da equipe)
- GatewayStatus (status dos gateways)

---

### 3. Fases do Projeto (/projects/[id]/phase-X)

#### Fase 0: Estrategista (/projects/[id]/phase-0)
**Funcionalidades:**
- Boundary Mapper em ação
- Scope Validator trabalhando
- Upload de documentos
- Visualização de restrições
- Matriz de maturidade
- Gateway 1 de aprovação

**Componentes:**
- BoundaryMapViewer (visualização de boundary map)
- MaturityMatrix (matriz de maturidade)
- ScopeValidator (validador de escopo)
- Gateway1Approval (aprovação gateway 1)

#### Fase 1: Pesquisador (/projects/[id]/phase-1)
**Funcionalidades:**
- 7 agentes trabalhando
- Upload de pesquisas
- Visualização de personas
- Jornadas do usuário
- Empathy maps
- Golden threads
- Gateway 2 de aprovação

**Componentes:**
- PersonaCards (cards de personas)
- JourneyMap (mapa de jornada)
- EmpathyMapViewer (visualização de empathy map)
- SurveyResults (resultados de pesquisa)
- Gateway2Approval (aprovação gateway 2)

#### Fase 2: Arquiteto (/projects/[id]/phase-2)
**Funcionalidades:**
- 5 agentes trabalhando
- Visualização de wireframes
- Arquitetura de informação
- Fluxos de usuário
- Estratégia de conteúdo
- Gateway 3 de aprovação

**Componentes:**
- WireframeViewer (visualização de wireframes)
- IADiagram (diagrama de IA)
- FlowChart (fluxograma)
- ContentStrategy (estratégia de conteúdo)
- Gateway3Approval (aprovação gateway 3)

#### Fase 3: Visual (/projects/[id]/phase-3)
**Funcionalidades:**
- 7 agentes trabalhando
- Visualização de mockups
- Design system
- Protótipos interativos
- UX writing
- Motion design
- Gateway 4 de aprovação

**Componentes:**
- MockupGallery (galeria de mockups)
- DesignSystemViewer (visualização de design system)
- PrototypePlayer (player de protótipo)
- UXWritingEditor (editor de UX writing)
- Gateway4Approval (aprovação gateway 4)

#### Fase 4: Validador (/projects/[id]/phase-4)
**Funcionalidades:**
- 5 agentes trabalhando
- Testes de usabilidade
- Análise de performance
- Validação de acessibilidade
- Relatórios de QA
- Gateway 5 de aprovação

**Componentes:**
- UsabilityTestResults (resultados de testes)
- PerformanceMetrics (métricas de performance)
- AccessibilityReport (relatório de acessibilidade)
- QAChecklist (checklist de QA)
- Gateway5Approval (aprovação gateway 5)

---

### 4. Agentes (/agents)
**Funcionalidades:**
- Visualização de todos os 29 agentes
- Status em tempo real
- Logs de atividade
- Métricas de performance
- Histórico de trabalho

**Componentes:**
- AgentGrid (grid de agentes)
- AgentDetail (detalhes do agente)
- AgentLogs (logs do agente)
- AgentMetrics (métricas do agente)

---

### 5. Templates (/templates)
**Funcionalidades:**
- Biblioteca de 12 templates
- Preview de templates
- Download de templates
- Uso em projetos
- Customização

**Componentes:**
- TemplateGrid (grid de templates)
- TemplatePreview (preview de template)
- TemplateEditor (editor de template)

---

### 6. Relatórios (/reports)
**Funcionalidades:**
- Geração automática de relatórios
- Visualização de relatórios
- Export (PDF, DOCX, MD)
- Compartilhamento
- Histórico

**Componentes:**
- ReportGenerator (gerador de relatórios)
- ReportViewer (visualizador de relatórios)
- ReportExporter (exportador de relatórios)

---

### 7. Documentação (/docs)
**Funcionalidades:**
- Navegação por toda documentação
- Busca full-text
- Favoritos
- Histórico de leitura
- Modo escuro

**Componentes:**
- DocsSidebar (sidebar de navegação)
- DocsContent (conteúdo markdown)
- DocsSearch (busca)

---

## 🔄 Fluxo de Trabalho do Usuário

### 1. Criar Novo Projeto
```
Dashboard → Novo Projeto → Wizard (5 etapas) → Projeto Criado
```

### 2. Executar Fase
```
Projeto → Fase X → Upload Arquivos → Agentes Trabalham → 
Visualizar Resultados → Gateway Aprovação → Próxima Fase
```

### 3. Acompanhar Progresso
```
Dashboard → Projeto → Timeline → Ver Agentes → Ver Logs → 
Ver Relatórios
```

### 4. Gerar Relatório
```
Projeto → Relatórios → Selecionar Tipo → Gerar → 
Visualizar → Exportar
```

---

## 🎨 Componentes Visuais Principais

### 1. Agent Workflow Visualizer
**Descrição:** Visualização em tempo real dos agentes trabalhando

**Funcionalidades:**
- Animação de agentes ativos
- Progresso por agente
- Logs em tempo real
- Status (idle, working, completed, error)

**Tecnologia:** React + Socket.io + Framer Motion

---

### 2. Phase Progress Timeline
**Descrição:** Timeline visual do progresso do projeto

**Funcionalidades:**
- 5 fases visualizadas
- Progresso por fase
- Gateways marcados
- Status atual destacado

**Tecnologia:** React + Recharts

---

### 3. File Upload & Manager
**Descrição:** Upload e gestão de arquivos do projeto

**Funcionalidades:**
- Drag & drop
- Preview de arquivos
- Organização por fase
- Versionamento
- Download

**Tecnologia:** React Dropzone + IBM Carbon

---

### 4. Report Generator
**Descrição:** Gerador automático de relatórios

**Funcionalidades:**
- Seleção de tipo de relatório
- Customização de conteúdo
- Preview em tempo real
- Export múltiplos formatos

**Tecnologia:** React + jsPDF + Docx.js

---

## 🚀 Como Iniciar o Desenvolvimento

### 1. Instalar Dependências

```bash
cd webapp
npm install
```

### 2. Configurar Variáveis de Ambiente

```bash
cp .env.example .env.local
```

Edite `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:3001
NEXT_PUBLIC_WS_URL=ws://localhost:3001
OPENAI_API_KEY=your_key
DATABASE_URL=postgresql://...
REDIS_URL=redis://...
```

### 3. Rodar em Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:3000

---

## 📦 Dependências Principais

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "@carbon/react": "^1.40.0",
    "@carbon/icons-react": "^11.30.0",
    "zustand": "^4.4.0",
    "axios": "^1.6.0",
    "socket.io-client": "^4.6.0",
    "react-dropzone": "^14.2.0",
    "react-markdown": "^9.0.0",
    "recharts": "^2.10.0",
    "framer-motion": "^10.16.0",
    "jspdf": "^2.5.0",
    "docx": "^8.5.0",
    "date-fns": "^2.30.0"
  },
  "devDependencies": {
    "@types/node": "^20.0.0",
    "@types/react": "^18.2.0",
    "typescript": "^5.3.0",
    "eslint": "^8.55.0",
    "prettier": "^3.1.0"
  }
}
```

---

## 🎯 Roadmap de Implementação

### Sprint 1: Setup e Estrutura (1 semana)
- [ ] Setup Next.js + TypeScript
- [ ] Configurar IBM Carbon
- [ ] Criar estrutura de pastas
- [ ] Setup de stores (Zustand)
- [ ] Configurar API client

### Sprint 2: Dashboard e Projetos (2 semanas)
- [ ] Página de Dashboard
- [ ] Lista de projetos
- [ ] Criar novo projeto (wizard)
- [ ] Detalhes do projeto
- [ ] File upload

### Sprint 3: Fases e Agentes (3 semanas)
- [ ] Páginas das 5 fases
- [ ] Visualização de agentes
- [ ] Agent workflow visualizer
- [ ] Real-time updates (Socket.io)
- [ ] Gateways de aprovação

### Sprint 4: Relatórios e Docs (2 semanas)
- [ ] Gerador de relatórios
- [ ] Visualizador de relatórios
- [ ] Export (PDF, DOCX)
- [ ] Navegação de documentação
- [ ] Busca full-text

### Sprint 5: Polish e Testes (1 semana)
- [ ] Testes unitários
- [ ] Testes E2E
- [ ] Performance optimization
- [ ] Acessibilidade
- [ ] Documentação

---

## 🔐 Segurança

- [ ] Autenticação (NextAuth.js)
- [ ] Autorização (RBAC)
- [ ] Validação de inputs
- [ ] Sanitização de dados
- [ ] Rate limiting
- [ ] CORS configurado
- [ ] HTTPS obrigatório

---

## 📊 Métricas e Monitoramento

- [ ] Google Analytics
- [ ] Sentry (error tracking)
- [ ] LogRocket (session replay)
- [ ] Performance monitoring
- [ ] User analytics

---

## 🚀 Deploy

### Opções de Hosting

**Frontend:**
- Vercel (recomendado para Next.js)
- Netlify
- AWS Amplify

**Backend:**
- Railway
- Render
- AWS ECS
- DigitalOcean

---

## 📞 Suporte

Para dúvidas sobre a implementação:
1. Revise este README
2. Consulte a documentação do Next.js
3. Consulte a documentação do IBM Carbon
4. Entre em contato com a equipe de desenvolvimento

---

**Versão:** 1.0  
**Última Atualização:** 2026-04-24  
**Status:** Planejamento Completo - Pronto para Implementação