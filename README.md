# 🎨 CX Operating System - Sistema Multiagentes de Design

## 📋 Visão Geral

Sistema multiagentes autônomo projetado para atuar como uma esteira de engenharia de Customer Experience, substituindo o "achismo" linear por uma arquitetura Hub & Spoke com **29 agentes especializados** organizados em 5 fases sequenciais.

**Versão:** 2.0.0  
**Status:** 🟢 Pronto para Testes  
**Última Atualização:** 2026-04-23

---

## 🚀 Quick Start

**Novo no sistema?** Comece aqui:

1. 📖 Leia o [Getting Started](GETTING-STARTED.md) (5 minutos)
2. 🏗️ Entenda a [Arquitetura de Agentes](ARQUITETURA-AGENTES.md) (29 agentes)
3. 💡 Consulte as [Best Practices](BEST-PRACTICES.md)
4. 🗂️ Use o [INDEX](INDEX.md) para navegar

**Quer começar um projeto?**
```bash
# 1. Copie o template
cp -r projetos/_template projetos/meu-projeto

# 2. Preencha o briefing
# 3. Execute Fase 0 (Estrategista)
# 4. Siga o fluxo sequencial
```

---

## 🏗️ Arquitetura Expandida

### Sistema de 3 Níveis

```
Nível 1: CX Master (Orquestrador)
    ↓
Nível 2: 5 Macro Agentes (Coordenadores de Fase)
    ↓
Nível 3: 23 Subagentes (Executores Especializados)
```

### 29 Agentes Organizados em 5 Fases

```
CX Operating System (29 Agentes)
│
├── 👑 CX Master (Orquestrador Central)
│
├── 📌 Fase 0: Estrategista (Boundary Mapping)
│   ├── Boundary Mapper
│   └── Scope Validator
│
├── 🔎 Fase 1: Pesquisador (Data & Emotion Mining)
│   ├── Benchmark Analyst
│   ├── Extrator de Dores
│   ├── Criador de Personas
│   ├── 🆕 Empathy Map Creator
│   ├── 🆕 Golden Thread Generator
│   ├── 🆕 Survey Designer
│   └── Validador de Ideias
│
├── 🏗️ Fase 2: Arquiteto (Logical UX)
│   ├── Journey Mapper
│   ├── 🆕 Service Designer (Enhanced)
│   ├── 🆕 Interaction Designer
│   ├── 🆕 Content Strategist
│   ├── UX Designer
│   └── IA Architect
│
├── 🎨 Fase 3: Visual (The Render)
│   ├── 🆕 Brand Strategist
│   ├── UI Designer
│   ├── 🆕 UX Writer
│   ├── 🆕 Motion Designer
│   ├── Design System Manager
│   ├── Prototyper
│   └── 🆕 Visual QA
│
└── 🛡️ Fase 4: Validador (QA Implacável)
    ├── 🆕 Usability Tester
    ├── Verificador de Requisitos
    ├── Validador de Acessibilidade
    ├── 🆕 Performance Analyst
    └── QA Analyst
```

**🆕 10 Novos Subagentes Adicionados:**
- **Fase 1:** Empathy Map Creator, Golden Thread Generator, Survey Designer
- **Fase 2:** Service Designer (enhanced), Interaction Designer, Content Strategist
- **Fase 3:** Brand Strategist, UX Writer, Motion Designer, Visual QA
- **Fase 4:** Usability Tester, Performance Analyst

📖 [Documentação Completa dos 29 Agentes](ARQUITETURA-AGENTES.md)

---

## 🎯 Três Pilares Arquiteturais

### 🧠 CX Brain (Memória Global Contínua)
Memória vetorial que mantém contexto de:
- Restrições técnicas
- Decisões de branding
- Regras de negócio
- Histórico de decisões

### ❤️ Motor de Inteligência Emocional (EQ)
- Análise de sentimentos em dados qualitativos
- Mapeamento de Picos de Estresse
- Identificação de Momentos de Alívio
- Criação de mapas de empatia profundos

### 🛑 Gateways de Aprovação (Human-in-the-loop)
5 pontos de aprovação obrigatória:
1. **Gateway 1:** Após Fase 0 (Estrategista)
2. **Gateway 2:** Após Fase 1 (Pesquisador)
3. **Gateway 3:** Após Fase 2 (Arquiteto)
4. **Gateway 4:** Após Fase 3 (Visual)
5. **Gateway 5:** Após Fase 4 (Validador)

---

## 📁 Estrutura do Projeto

```
Agentes Design/
├── README.md                  # 👈 Você está aqui
├── INDEX.md                   # 🗂️ Navegação completa
├── GETTING-STARTED.md         # 🚀 Guia de início rápido
├── ARQUITETURA-AGENTES.md     # 🏗️ 29 agentes detalhados
├── BEST-PRACTICES.md          # 💡 Boas práticas e padrões
├── .mcp.json                  # Configuração MCP (Figma)
├── .gitignore
│
├── 📂 docs/
│   ├── architecture/          # Arquitetura do sistema
│   ├── metaprompts/          # Prompts de cada agente
│   ├── workflows/            # Fluxos de trabalho
│   └── integration/          # Integrações externas
│
├── 📂 core/
│   ├── cx-master/            # Orquestrador central
│   ├── cx-brain/             # Sistema de memória
│   └── handoff/              # Sistema de comunicação
│
├── 📂 agents/
│   ├── fase-0-estrategista/
│   ├── fase-1-pesquisador/
│   ├── fase-2-arquiteto/
│   ├── fase-3-visual/
│   └── fase-4-validador/
│
├── 📂 templates/
│   ├── deliverables/         # Templates de entregáveis
│   ├── gateways/             # Templates de aprovação
│   ├── fase-0/               # Templates Fase 0
│   ├── fase-1/               # Templates Fase 1 (novos!)
│   ├── fase-2/               # Templates Fase 2 (novos!)
│   ├── fase-3/               # Templates Fase 3 (novos!)
│   └── fase-4/               # Templates Fase 4 (novos!)
│
├── 📂 integrations/
│   ├── figma/                # Integração Figma MCP
│   └── tools/                # Outras ferramentas
│
├── 📤 outputs/               # Saída de resultados
│   ├── estrategista/         # Fase 0: Contratos, matrizes
│   │   ├── contratos/
│   │   ├── matrizes/
│   │   ├── briefings/
│   │   └── decisoes/
│   ├── pesquisador/          # Fase 1: Benchmarks, personas
│   │   ├── benchmarks/
│   │   ├── personas/
│   │   ├── jornadas-as-is/
│   │   ├── empathy-maps/    # 🆕
│   │   ├── golden-threads/  # 🆕
│   │   └── surveys/         # 🆕
│   ├── arquiteto/            # Fase 2: Wireframes, fluxos
│   │   ├── jornadas-to-be/
│   │   ├── service-blueprints/ # 🆕
│   │   ├── wireframes/
│   │   ├── interactions/    # 🆕
│   │   └── content-strategy/ # 🆕
│   ├── visual/               # Fase 3: Mockups, protótipos
│   │   ├── brand-strategy/  # 🆕
│   │   ├── mockups/
│   │   ├── ux-writing/      # 🆕
│   │   ├── motion-specs/    # 🆕
│   │   ├── design-system/
│   │   └── prototipos/
│   └── validador/            # Fase 4: Testes, métricas
│       ├── usability-tests/ # 🆕
│       ├── acessibilidade/
│       ├── performance/     # 🆕
│       └── relatorios/
│
└── 📂 projetos/              # 🆕 Projetos da equipe
    ├── _template/            # Template padrão
    │   ├── README.md
    │   ├── briefing.md
    │   ├── fase-0/
    │   ├── fase-1/
    │   ├── fase-2/
    │   ├── fase-3/
    │   ├── fase-4/
    │   └── entrega-final/
    └── sicoob-fun/           # Exemplo completo
```

📖 [Documentação completa da estrutura](outputs/README.md)

---

## 🔌 Integração MCP (Model Context Protocol)

O sistema está configurado para usar **Figma Desktop** via MCP, permitindo:

- ✅ **Sincronização automática** de entregáveis com o Figma
- ✅ **Versionamento** de designs e documentos
- ✅ **Colaboração em tempo real** com a equipe
- ✅ **Export/Import** de componentes e assets

### Configuração

O arquivo `.mcp.json` na raiz do projeto configura dois servidores:

```json
{
  "mcpServers": {
    "figma": {
      "type": "sse",
      "url": "http://127.0.0.1:3845/mcp"
    },
    "figma-desktop": {
      "type": "http",
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

---

## 📚 Documentação Completa

### 🎯 Essenciais (Comece Aqui)

| Documento | Descrição | Linhas |
|-----------|-----------|--------|
| [GETTING-STARTED.md](GETTING-STARTED.md) | Guia de início rápido (5 min) | 545 |
| [ARQUITETURA-AGENTES.md](ARQUITETURA-AGENTES.md) | 29 agentes detalhados | 876 |
| [BEST-PRACTICES.md](BEST-PRACTICES.md) | Boas práticas e padrões | 1087 |
| [INDEX.md](INDEX.md) | Navegação completa | 424 |

### 📖 Por Categoria

#### Arquitetura e Sistema
- [Arquitetura Completa](docs/architecture/README.md)
- [CX Master (Orquestrador)](core/cx-master/README.md)
- [CX Brain (Memória)](core/cx-brain/README.md)
- [Sistema de Handoff](core/handoff/README.md)

#### Agentes e Workflows
- [Guia de Metaprompts](docs/metaprompts/README.md)
- [Fluxos de Trabalho](docs/workflows/README.md)
- [Agentes por Fase](agents/README.md)

#### Outputs e Projetos
- [Guia de Outputs](outputs/README.md)
- [Fase 0: Estrategista](outputs/estrategista/README.md)
- [Guia de Projetos](projetos/README.md) *(em breve)*
- [Nomenclatura](projetos/NOMENCLATURA.md) *(em breve)*

#### Integrações
- [Integração Figma](integrations/figma/README.md)
- [Outras Integrações](docs/integration/README.md)

---

## 🎯 Fluxo de Trabalho

### Visão Geral

```
Briefing → Fase 0 → Gateway 1 → Fase 1 → Gateway 2 → 
Fase 2 → Gateway 3 → Fase 3 → Gateway 4 → Fase 4 → 
Gateway 5 → Entrega Final
```

### Timeline Típico

| Fase | Duração | Entregáveis Principais |
|------|---------|------------------------|
| **Fase 0: Estrategista** | 3-5 dias | Contrato de escopo, Matriz de maturidade |
| **Gateway 1** | 1 dia | Aprovação de viabilidade |
| **Fase 1: Pesquisador** | 1-2 semanas | Benchmark, Personas, Jornadas As-Is, Empathy Maps, Golden Thread |
| **Gateway 2** | 1 dia | Validação de pesquisa |
| **Fase 2: Arquiteto** | 2-3 semanas | Jornadas To-Be, Service Blueprint, Wireframes, Interactions |
| **Gateway 3** | 1 dia | Aprovação de arquitetura |
| **Fase 3: Visual** | 2-3 semanas | Brand Strategy, Mockups, UX Writing, Motion, Protótipos |
| **Gateway 4** | 1 dia | Aprovação visual |
| **Fase 4: Validador** | 1 semana | Testes de usabilidade, WCAG, Performance, Handoff |
| **Gateway 5** | 1 dia | Aprovação final |

**Total:** 6-10 semanas (dependendo da complexidade)

---

## 🆕 Novidades da Versão 2.0

### Expansão de Agentes (+45%)

**De 20 para 29 agentes**, com 10 novos subagentes especializados:

#### Fase 1: Pesquisador (+3)
- **Empathy Map Creator:** Mapas de empatia profundos (O que pensa? O que sente? O que faz? O que diz?)
- **Golden Thread Generator:** Conecta dor → solução → benefício
- **Survey Designer:** Pesquisas quantitativas e qualitativas

#### Fase 2: Arquiteto (+3)
- **Service Designer (Enhanced):** Service blueprints completos (As-Is → To-Be)
- **Interaction Designer:** Microinterações e estados
- **Content Strategist:** Arquitetura de informação e conteúdo

#### Fase 3: Visual (+4)
- **Brand Strategist:** Posicionamento e aplicação de marca
- **UX Writer:** Microcopy, tom de voz, conteúdo
- **Motion Designer:** Animações e transições
- **Visual QA:** Garantia de qualidade visual

#### Fase 4: Validador (+2)
- **Usability Tester:** Testes com usuários reais
- **Performance Analyst:** Otimização e métricas

### Nova Documentação (2,424 linhas)

- ✅ **ARQUITETURA-AGENTES.md** (876 linhas) - Arquitetura completa
- ✅ **INDEX.md** (424 linhas) - Navegação completa
- ✅ **GETTING-STARTED.md** (545 linhas) - Quick start
- ✅ **BEST-PRACTICES.md** (1087 linhas) - Boas práticas
- ✅ **outputs/README.md** (434 linhas) - Guia de outputs
- ✅ **outputs/estrategista/README.md** (145 linhas) - Fase 0

### Nova Estrutura de Pastas

- ✅ **outputs/** reorganizado com subpastas por tipo de entregável
- ✅ **projetos/** criado com template e exemplo (sicoob-fun)
- ✅ **templates/** expandido com novos templates por fase

---

## 💡 Casos de Uso

### 1. Redesign de Aplicativo Mobile
```
Fase 0: Mapear restrições técnicas e de negócio
Fase 1: Pesquisar usuários atuais, criar personas, mapear jornada As-Is
Fase 2: Redesenhar jornada To-Be, criar service blueprint, wireframes
Fase 3: Aplicar branding, criar protótipos, definir animações
Fase 4: Testar com usuários, validar acessibilidade, otimizar performance
```

### 2. Novo Design System
```
Fase 0: Definir escopo e componentes necessários
Fase 1: Benchmarking de design systems, identificar necessidades
Fase 2: Arquitetar estrutura de componentes e tokens
Fase 3: Criar componentes visuais, documentar uso, motion
Fase 4: Validar acessibilidade, performance, documentação
```

### 3. Landing Page de Conversão
```
Fase 0: Definir objetivos de conversão e métricas
Fase 1: Pesquisar público-alvo, criar golden thread (dor→solução→benefício)
Fase 2: Estruturar conteúdo, definir CTAs, wireframes
Fase 3: Design visual, microcopy persuasivo, animações
Fase 4: Testes A/B, otimização de performance, validação
```

---

## 🎓 Aprendendo o Sistema

### Para Iniciantes

1. **Dia 1:** Leia [GETTING-STARTED.md](GETTING-STARTED.md)
2. **Dia 2:** Explore [ARQUITETURA-AGENTES.md](ARQUITETURA-AGENTES.md)
3. **Dia 3:** Estude [BEST-PRACTICES.md](BEST-PRACTICES.md)
4. **Dia 4:** Analise o exemplo [sicoob-fun](projetos/sicoob-fun/)
5. **Dia 5:** Crie seu primeiro projeto usando o template

### Para Avançados

- Customize metaprompts em `docs/metaprompts/`
- Crie novos templates em `templates/`
- Integre ferramentas em `integrations/`
- Contribua com melhorias

---

## 🤝 Contribuindo

### Como Contribuir

1. **Reporte Issues:** Encontrou um problema? Abra uma issue
2. **Sugira Melhorias:** Tem ideias? Compartilhe
3. **Crie Templates:** Novos templates são sempre bem-vindos
4. **Documente:** Melhore a documentação
5. **Compartilhe Projetos:** Mostre seus casos de uso

### Padrões de Contribuição

- Siga as [Best Practices](BEST-PRACTICES.md)
- Use a nomenclatura padrão
- Documente suas mudanças
- Teste antes de submeter

---

## 📊 Métricas e KPIs

### Quality Scores

| Score | Classificação | Ação |
|-------|---------------|------|
| 90-100 | Excelente | Pronto para uso |
| 80-89 | Bom | Pequenos ajustes opcionais |
| 70-79 | Aceitável | Melhorias recomendadas |
| < 70 | Insuficiente | Iteração obrigatória |

### Metas por Fase

- **Fase 0-2:** Quality score ≥ 80
- **Fase 3:** Quality score ≥ 85
- **Fase 4:** Quality score ≥ 90

---

## 🛠️ Ferramentas e Integrações

### Integradas

- ✅ **Figma** (via MCP)
- ✅ **Markdown** (documentação)
- ✅ **JSON** (dados estruturados)

### Planejadas

- ⏳ **Notion** (documentação colaborativa)
- ⏳ **Jira** (gestão de projetos)
- ⏳ **Slack** (notificações)
- ⏳ **Analytics** (métricas de uso)

---

## 📞 Suporte e Contato

### Precisa de Ajuda?

1. **Documentação:** Consulte o [INDEX.md](INDEX.md)
2. **FAQ:** *(em breve)*
3. **Issues:** Abra uma issue no repositório
4. **Comunidade:** Junte-se ao canal de discussão

### Feedback

Seu feedback é essencial! Compartilhe:
- O que funcionou bem
- O que pode melhorar
- Sugestões de novos recursos
- Casos de uso interessantes

---

## 📅 Roadmap

### ✅ Versão 2.0 (Atual)
- [x] Expansão para 29 agentes
- [x] Documentação completa (2,424 linhas)
- [x] Estrutura de projetos
- [x] Best practices
- [x] Templates básicos

### 🔄 Versão 2.1 (Próxima)
- [ ] Templates completos para todas as fases
- [ ] Metaprompts para novos agentes
- [ ] FAQ completo
- [ ] Mais exemplos de projetos

### 🔮 Versão 3.0 (Futuro)
- [ ] Automação de workflows
- [ ] Integrações adicionais
- [ ] Dashboard de métricas
- [ ] API para integração externa

---

## 📜 Licença

Este projeto é baseado em frameworks open-source e metodologias consolidadas:
- IBM Orchestrate
- DexLab
- Framework CX Master

---

## 🙏 Agradecimentos

Desenvolvido com base em anos de experiência em CX, UX e Design Systems.

Agradecimentos especiais a todos que contribuíram com feedback e melhorias.

---

**Versão:** 2.0.0  
**Criado em:** 2026-04-16  
**Última Atualização:** 2026-04-23  
**Mantenedor:** CX Operating System Team

---

## 🚀 Comece Agora!

```bash
# 1. Clone ou baixe o repositório
# 2. Leia o Getting Started
open GETTING-STARTED.md

# 3. Crie seu primeiro projeto
cp -r projetos/_template projetos/meu-projeto

# 4. Comece pela Fase 0
cd projetos/meu-projeto
# Preencha o briefing.md e execute!
```

**Pronto para transformar a experiência dos seus usuários? Vamos começar! 🎨✨**