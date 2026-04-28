# 🎨 Plano de Implementação: CX Copilot com shadcn/ui

## 📋 Status Atual

**Data:** 24/04/2026  
**Situação:** Aguardando conclusão da instalação do shadcn/ui  
**Comando em execução:** `npx shadcn@latest init -y` (Terminal 2)

---

## 🎯 Visão Geral

Transformar o CX Copilot em um **SaaS AI-first premium** com:
- ✨ Design moderno e clean
- 🌓 Dark/Light mode
- 🤖 Interface inteligente
- 📊 Visualizações ricas
- 🎭 Animações suaves

---

## 📦 FASE 1: Componentes shadcn/ui (30min)

### Componentes Essenciais

```bash
# Navegação e Layout
npx shadcn@latest add sidebar
npx shadcn@latest add breadcrumb
npx shadcn@latest add separator

# Conteúdo
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add avatar
npx shadcn@latest add skeleton

# Interação
npx shadcn@latest add button
npx shadcn@latest add tabs
npx shadcn@latest add dialog
npx shadcn@latest add sheet
npx shadcn@latest add dropdown-menu
npx shadcn@latest add alert-dialog

# Formulários
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add label
npx shadcn@latest add checkbox
npx shadcn@latest add radio-group

# Dados
npx shadcn@latest add table
npx shadcn@latest add data-table
npx shadcn@latest add progress
npx shadcn@latest add chart

# Feedback
npx shadcn@latest add toast
npx shadcn@latest add sonner
npx shadcn@latest add alert
```

**Total:** ~20 componentes

---

## 🏗️ FASE 2: Estrutura Base (1h)

### 2.1 Layout Principal com Sidebar

**Arquivo:** `src/components/layout/AppLayout.tsx`

```typescript
// Sidebar fixa com navegação
- Dashboard
- Projetos
- Kanban
- Agentes
- Relatórios
- Aprovações
- CX Brain
- Configurações
```

**Features:**
- Sidebar colapsável
- Ícones Lucide React
- Active state
- Breadcrumbs
- User menu

### 2.2 Theme Provider

**Arquivo:** `src/components/providers/ThemeProvider.tsx`

- Dark/Light mode
- Persistência no localStorage
- Toggle no header

### 2.3 Globals CSS

**Arquivo:** `src/app/globals.css`

- Remover Carbon Design
- Aplicar Tailwind
- CSS Variables do shadcn
- Animações customizadas

---

## 📊 FASE 3: Dashboard Executivo (2h)

### 3.1 Cards Inteligentes

**Componentes:**
- `ProjectsOverview` - Projetos ativos/em risco
- `PhaseProgress` - Fases em andamento
- `AgentsActivity` - Agentes mais usados
- `PendingApprovals` - Aprovações pendentes
- `AIInsights` - Insights da IA

**Layout:**
```
┌─────────────┬─────────────┬─────────────┐
│  Projetos   │   Fases     │   Agentes   │
│   Ativos    │ Andamento   │   Ativos    │
├─────────────┴─────────────┴─────────────┤
│         Aprovações Pendentes             │
├──────────────────────────────────────────┤
│            Insights da IA                │
└──────────────────────────────────────────┘
```

### 3.2 Dados Mockados

**Arquivo:** `src/data/mock-dashboard.ts`

- 5 projetos ativos
- 2 projetos em risco
- 15 fases em andamento
- 29 agentes com status
- 8 aprovações pendentes
- 10 insights da IA

---

## 📁 FASE 4: CRM de Projetos (2h)

### 4.1 Lista de Projetos

**Arquivo:** `src/app/projects/page.tsx`

**Features:**
- Data Table shadcn
- Filtros avançados (Status, Cliente, Fase, Designer)
- Busca em tempo real
- Ordenação por colunas
- Paginação
- Ações em massa

**Colunas:**
- Nome do Projeto
- Cliente
- Fase Atual
- Responsável
- Status (Badge)
- Score IA (Progress)
- Última Atualização
- Ações (Dropdown)

### 4.2 Filtros e Busca

**Componentes:**
- `ProjectFilters` - Select múltiplos
- `ProjectSearch` - Input com debounce
- `ProjectSort` - Dropdown de ordenação

---

## ➕ FASE 5: Criar Novo Projeto (2h)

### 5.1 Modal/Página de Criação

**Arquivo:** `src/app/projects/new/page.tsx`

**Wizard em 5 Steps:**

1. **Informações Básicas**
   - Nome do projeto
   - Cliente
   - Tipo de projeto (Select)
   - Objetivo estratégico (Textarea)

2. **Briefing Inicial**
   - Upload de arquivos
   - Descrição detalhada
   - Referências

3. **Equipe e Agentes**
   - Designers responsáveis (Multi-select)
   - Agentes sugeridos pela IA (Checkboxes)
   - Customizar agentes

4. **Planejamento**
   - Prazo estimado (Date picker)
   - Fases necessárias (Checkboxes)
   - Critérios de sucesso

5. **Revisão e Confirmação**
   - Resumo de tudo
   - Sugestões da IA
   - Riscos identificados
   - Botão "Criar Projeto"

**IA Sugere:**
- Fases necessárias baseado no tipo
- Agentes recomendados
- Riscos iniciais
- Primeiros entregáveis
- Timeline estimada

---

## 📄 FASE 6: Página Interna do Projeto (3h)

### 6.1 Estrutura de Abas

**Arquivo:** `src/app/projects/[id]/page.tsx`

```
┌─────────────────────────────────────────┐
│  Projeto: Sicoob Fun                    │
│  Fase: Visual | Score: 86% | Status: ✓  │
├─────────────────────────────────────────┤
│ Visão Geral | Kanban | Agentes | ...    │
└─────────────────────────────────────────┘
```

### 6.2 Aba: Visão Geral

**Componentes:**
- `ProjectSummary` - Card com resumo
- `CurrentPhase` - Fase atual com progresso
- `Timeline` - Linha do tempo visual
- `QualityScore` - Score com gráfico
- `NextSteps` - Próximos passos sugeridos pela IA

### 6.3 Aba: Kanban

**Colunas:**
```
Fase 0      Fase 1      Fase 2      Fase 3      Fase 4      Entrega
Estratégia  Pesquisa    Arquitetura Visual      Validação   Final
```

**Card do Kanban:**
- Nome da entrega
- Agente responsável (Avatar)
- Status (Badge)
- Score (Progress)
- Aprovação (Checkbox)
- Ações (Dropdown)

**Features:**
- Drag & Drop
- Filtros por agente
- Busca
- Adicionar nova entrega

### 6.4 Aba: Agentes

**Layout:** Grid de cards

**Card do Agente:**
```
┌─────────────────────┐
│  [Avatar] UI Designer│
│  Status: Ativo      │
│  Fase: Visual       │
│  Última: Mockup Home│
│  Score: 88%         │
│  [Ver Detalhes]     │
└─────────────────────┘
```

**Sheet Lateral (Detalhes):**
- Histórico de entregas
- Logs de atividade
- Configurações do agente
- Feedback recebido

### 6.5 Aba: Relatórios

**Lista de Relatórios:**
- Relatório da Fase 0 - Estratégia
- Relatório da Fase 1 - Pesquisa
- Relatório da Fase 2 - Arquitetura UX
- Relatório da Fase 3 - Visual
- Relatório da Fase 4 - Validação
- Relatório Final do Projeto

**Card do Relatório:**
- Título e data
- Resumo executivo
- Status (Gerado/Pendente)
- Ações: Ver, Exportar (PDF/DOCX/MD), Regenerar

**Dialog de Visualização:**
- Conteúdo completo
- Seções colapsáveis
- Botões de exportação

### 6.6 Aba: Aprovações

**Lista de Aprovações:**
- Filtros: Pendente, Aprovado, Ajustes, Reprovado
- Cards com entrega para aprovar

**Card de Aprovação:**
```
┌─────────────────────────────────┐
│ Mockup da Home - UI Designer    │
│ Fase: Visual | Data: 24/04/2026 │
│ [Preview da entrega]            │
│ ✓ Aprovar | ⚠ Ajustes | ✗ Reprovar│
└─────────────────────────────────┘
```

**Dialog de Aprovação:**
- Preview completo
- Comentários (Textarea)
- Checklist de critérios
- Botões de ação
- Toast de confirmação

### 6.7 Aba: Arquivos

**Upload Zone:**
- Drag & Drop
- Múltiplos arquivos
- Preview de imagens
- Organização por tipo

**Lista de Arquivos:**
- Data Table
- Filtros por tipo
- Busca
- Download/Delete

### 6.8 Aba: Memória (CX Brain)

**Timeline de Memórias:**
- Decisões importantes
- Regras de negócio
- Restrições técnicas
- Preferências visuais
- Histórico de aprendizado

**Card de Memória:**
```
┌─────────────────────────────────┐
│ 📌 Decisão: Paleta de Cores     │
│ Data: 20/04/2026                │
│ Fase: Visual                    │
│ Decidido usar verde Sicoob como │
│ cor primária em todos os CTAs   │
│ [Ver contexto completo]         │
└─────────────────────────────────┘
```

**Busca Semântica:**
- Input com IA
- Resultados relevantes
- Filtros por tipo/fase

---

## 🎨 FASE 7: Kanban Global (1h)

### 7.1 Página Kanban

**Arquivo:** `src/app/kanban/page.tsx`

**Features:**
- Visão de todos os projetos
- Filtros por projeto/fase/agente
- Drag & Drop entre fases
- Adicionar entregas rápidas

---

## 🤖 FASE 8: Painel de Agentes (2h)

### 8.1 Página de Agentes

**Arquivo:** `src/app/agents/page.tsx`

**Layout:** Grid de 29 agentes

**Categorias:**
- CX Master (1)
- Macro Agentes (5)
- Subagentes (23)

**Card do Agente:**
- Avatar com ícone
- Nome e categoria
- Status (Ativo/Inativo/Trabalhando)
- Projetos ativos
- Score médio
- Última atividade

**Dialog de Detalhes:**
- Descrição completa
- Habilidades
- Histórico de projetos
- Métricas de performance
- Configurações

---

## 📊 FASE 9: Relatórios (1h)

### 9.1 Página de Relatórios

**Arquivo:** `src/app/reports/page.tsx`

**Features:**
- Lista de todos os relatórios
- Filtros por projeto/fase/data
- Busca
- Exportação em massa

---

## ✅ FASE 10: Aprovações (1h)

### 10.1 Página de Aprovações

**Arquivo:** `src/app/approvals/page.tsx`

**Features:**
- Fila de aprovações pendentes
- Filtros por projeto/fase/agente
- Aprovação rápida
- Histórico de aprovações

---

## 🧠 FASE 11: CX Brain (2h)

### 11.1 Página CX Brain

**Arquivo:** `src/app/brain/page.tsx`

**Features:**
- Memória global de todos os projetos
- Busca semântica avançada
- Timeline interativa
- Insights da IA
- Exportar conhecimento

---

## ⚙️ FASE 12: Configurações (1h)

### 12.1 Página de Configurações

**Arquivo:** `src/app/settings/page.tsx`

**Seções:**
- Perfil do usuário
- Preferências de notificação
- Tema (Dark/Light)
- Integrações
- API Keys
- Equipe

---

## 🌓 FASE 13: Dark Mode (30min)

### 13.1 Implementação

- Theme Provider
- Toggle no header
- Persistência
- Transições suaves
- Cores otimizadas

---

## 📦 FASE 14: Dados Mockados (2h)

### 14.1 Arquivos de Mock

**Criar:**
- `src/data/mock-projects.ts` (20 projetos)
- `src/data/mock-agents.ts` (29 agentes)
- `src/data/mock-phases.ts` (100 entregas)
- `src/data/mock-reports.ts` (50 relatórios)
- `src/data/mock-approvals.ts` (30 aprovações)
- `src/data/mock-memories.ts` (100 memórias)

---

## ✨ FASE 15: Polimento Visual (2h)

### 15.1 Animações

- Framer Motion
- Transições de página
- Hover effects
- Loading states
- Skeleton screens

### 15.2 Micro-interações

- Botões com feedback
- Cards com hover
- Tooltips informativos
- Toasts elegantes

---

## 🧪 FASE 16: Testes (1h)

### 16.1 Validações

- Navegação completa
- Todos os fluxos
- Responsividade
- Dark mode
- Performance

---

## 📈 Cronograma Estimado

| Fase | Descrição | Tempo | Acumulado |
|------|-----------|-------|-----------|
| 1 | Componentes shadcn | 30min | 30min |
| 2 | Estrutura Base | 1h | 1h30 |
| 3 | Dashboard | 2h | 3h30 |
| 4 | CRM Projetos | 2h | 5h30 |
| 5 | Criar Projeto | 2h | 7h30 |
| 6 | Página Projeto | 3h | 10h30 |
| 7 | Kanban Global | 1h | 11h30 |
| 8 | Painel Agentes | 2h | 13h30 |
| 9 | Relatórios | 1h | 14h30 |
| 10 | Aprovações | 1h | 15h30 |
| 11 | CX Brain | 2h | 17h30 |
| 12 | Configurações | 1h | 18h30 |
| 13 | Dark Mode | 30min | 19h |
| 14 | Dados Mock | 2h | 21h |
| 15 | Polimento | 2h | 23h |
| 16 | Testes | 1h | **24h** |

**Total:** ~3 dias de trabalho focado

---

## 🎯 Prioridades

### Must Have (P0)
- ✅ Sidebar com navegação
- ✅ Dashboard executivo
- ✅ CRM de projetos
- ✅ Página interna do projeto
- ✅ Kanban por fases
- ✅ Painel de agentes
- ✅ Sistema de aprovações

### Should Have (P1)
- ✅ Relatórios por fase
- ✅ CX Brain
- ✅ Dark mode
- ✅ Criar novo projeto

### Nice to Have (P2)
- ⏳ Configurações
- ⏳ Busca semântica
- ⏳ Exportações
- ⏳ Integrações

---

## 🚀 Próximos Passos (Amanhã)

1. ✅ Verificar instalação do shadcn/ui completa
2. ▶️ Executar FASE 1: Adicionar todos os componentes
3. ▶️ Executar FASE 2: Criar estrutura base com Sidebar
4. ▶️ Executar FASE 3: Refatorar Dashboard
5. ▶️ Continuar fases seguintes...

---

## 📝 Notas Importantes

### Estilo Visual
- **Base:** Branco, preto, cinza
- **Acento:** Azul/Roxo tecnológico
- **Tom:** Profissional, inteligente, moderno
- **Layout:** Sidebar + Content area
- **Cards:** Bordas suaves, sombra leve, espaço em branco

### Componentes Chave
- Sidebar (navegação fixa)
- Card (conteúdo)
- Data Table (listas)
- Dialog/Sheet (modais)
- Tabs (organização)
- Badge (status)
- Progress (scores)
- Chart (métricas)

### Filosofia
> "Primeiro criar a casca visual navegável, depois conectar os agentes e automações."

---

## 📚 Referências

- [shadcn/ui Docs](https://ui.shadcn.com/docs)
- [shadcn/ui Components](https://ui.shadcn.com/docs/components)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/)
- [Lucide Icons](https://lucide.dev/)

---

**Documento criado em:** 24/04/2026  
**Última atualização:** 24/04/2026  
**Status:** 🟡 Aguardando instalação shadcn/ui  
**Próxima ação:** Adicionar componentes e iniciar FASE 2