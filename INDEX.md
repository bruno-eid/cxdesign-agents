# 📑 Índice de Navegação - CX Operating System

## 🎯 Visão Geral

Este é o índice completo de navegação do CX Operating System. Use este documento para encontrar rapidamente qualquer recurso, documentação ou template do sistema.

---

## 🚀 Início Rápido

| Documento | Descrição | Link |
|-----------|-----------|------|
| **README Principal** | Visão geral do sistema | [README.md](README.md) |
| **Getting Started** | Guia de início rápido (5 min) | [GETTING-STARTED.md](GETTING-STARTED.md) |
| **Quick Start** | Setup e primeiro projeto | [QUICKSTART.md](QUICKSTART.md) |
| **Arquitetura de Agentes** | 29 agentes detalhados | [ARQUITETURA-AGENTES.md](ARQUITETURA-AGENTES.md) |
| **Plano Mestre** | Roadmap e estratégia | [PLANO-MESTRE.md](PLANO-MESTRE.md) |
| **Progresso** | Status da implementação | [PROGRESSO.md](PROGRESSO.md) |

---

## 📚 Documentação Técnica

### Arquitetura

| Documento | Descrição | Link |
|-----------|-----------|------|
| **System Overview** | Visão geral da arquitetura | [docs/architecture/README.md](docs/architecture/README.md) |
| **System Overview Detalhado** | Arquitetura completa | [docs/architecture/system-overview.md](docs/architecture/system-overview.md) |
| **Communication Protocol** | Protocolo de comunicação | [docs/architecture/communication-protocol.md](docs/architecture/communication-protocol.md) |

### Metaprompts

| Agente | Descrição | Link |
|--------|-----------|------|
| **Índice de Metaprompts** | Todos os metaprompts | [docs/metaprompts/README.md](docs/metaprompts/README.md) |
| **CX Master** | Orquestrador central | [docs/metaprompts/cx-master.md](docs/metaprompts/cx-master.md) |
| **Fase 0: Estrategista** | Boundary mapping | [docs/metaprompts/fase-0-estrategista/](docs/metaprompts/fase-0-estrategista/) |
| **Fase 1: Pesquisador** | Data & emotion mining | [docs/metaprompts/fase-1-pesquisador/](docs/metaprompts/fase-1-pesquisador/) |
| **Fase 2: Arquiteto** | Logical UX | [docs/metaprompts/fase-2-arquiteto/](docs/metaprompts/fase-2-arquiteto/) |
| **Fase 3: Visual** | The render | [docs/metaprompts/fase-3-visual/](docs/metaprompts/fase-3-visual/) |
| **Fase 4: Validador** | QA implacável | [docs/metaprompts/fase-4-validador/](docs/metaprompts/fase-4-validador/) |

### Workflows

| Documento | Descrição | Link |
|-----------|-----------|------|
| **Índice de Workflows** | Todos os fluxos | [docs/workflows/README.md](docs/workflows/README.md) |
| **Complete Workflow** | Fluxo completo end-to-end | [docs/workflows/COMPLETE-WORKFLOW.md](docs/workflows/COMPLETE-WORKFLOW.md) |

### Integrações

| Documento | Descrição | Link |
|-----------|-----------|------|
| **Índice de Integrações** | Todas as integrações | [docs/integration/README.md](docs/integration/README.md) |
| **Figma MCP** | Integração com Figma | [integrations/figma/README.md](integrations/figma/README.md) |
| **Figma MCP Detalhado** | Especificações completas | [integrations/figma/FIGMA-MCP-INTEGRATION.md](integrations/figma/FIGMA-MCP-INTEGRATION.md) |

---

## ⚙️ Componentes Core

### CX Master

| Documento | Descrição | Link |
|-----------|-----------|------|
| **Orquestrador** | Lógica de orquestração | [core/README.md](core/README.md) |
| **Metaprompt** | Prompt do CX Master | [docs/metaprompts/cx-master.md](docs/metaprompts/cx-master.md) |

### CX Brain

| Documento | Descrição | Link |
|-----------|-----------|------|
| **Especificações** | Sistema de memória | [core/cx-brain/SPECIFICATIONS.md](core/cx-brain/SPECIFICATIONS.md) |
| **Arquitetura** | 3 camadas de memória | [core/cx-brain/](core/cx-brain/) |

### Gateways

| Documento | Descrição | Link |
|-----------|-----------|------|
| **Sistema de Gateways** | Aprovação humana | [core/gateways/README.md](core/gateways/README.md) |
| **Especificações** | Sistema completo | [core/gateways/SYSTEM-SPECIFICATION.md](core/gateways/SYSTEM-SPECIFICATION.md) |
| **Templates** | Templates de gateway | [core/gateways/templates/](core/gateways/templates/) |

---

## 🤖 Agentes Especializados

### Visão Geral

| Documento | Descrição | Link |
|-----------|-----------|------|
| **Arquitetura Completa** | 29 agentes detalhados | [ARQUITETURA-AGENTES.md](ARQUITETURA-AGENTES.md) |
| **Índice de Agentes** | Todos os agentes | [agents/README.md](agents/README.md) |

### Por Fase

| Fase | Macro Agente | Subagentes | Link |
|------|--------------|------------|------|
| **Fase 0** | Estrategista | 2 | [agents/fase-0-estrategista/](agents/fase-0-estrategista/) |
| **Fase 1** | Pesquisador | 7 | [agents/fase-1-pesquisador/](agents/fase-1-pesquisador/) |
| **Fase 2** | Arquiteto | 5 | [agents/fase-2-arquiteto/](agents/fase-2-arquiteto/) |
| **Fase 3** | Visual | 7 | [agents/fase-3-visual/](agents/fase-3-visual/) |
| **Fase 4** | Validador | 5 | [agents/fase-4-validador/](agents/fase-4-validador/) |

### Novos Subagentes (v2.0)

| Subagente | Fase | Função | Link |
|-----------|------|--------|------|
| **Empathy Map Creator** | 1 | Mapas de empatia | [ARQUITETURA-AGENTES.md#empathy-map-creator](ARQUITETURA-AGENTES.md) |
| **Golden Thread Generator** | 1 | Dor → Solução → Benefício | [ARQUITETURA-AGENTES.md#golden-thread-generator](ARQUITETURA-AGENTES.md) |
| **Survey Designer** | 1 | Questionários | [ARQUITETURA-AGENTES.md#survey-designer](ARQUITETURA-AGENTES.md) |
| **Interaction Designer** | 2 | Microinterações | [ARQUITETURA-AGENTES.md#interaction-designer](ARQUITETURA-AGENTES.md) |
| **Content Strategist** | 2 | Estratégia de conteúdo | [ARQUITETURA-AGENTES.md#content-strategist](ARQUITETURA-AGENTES.md) |
| **Brand Strategist** | 3 | Posicionamento de marca | [ARQUITETURA-AGENTES.md#brand-strategist](ARQUITETURA-AGENTES.md) |
| **UX Writer** | 3 | Microcopy e tom de voz | [ARQUITETURA-AGENTES.md#ux-writer](ARQUITETURA-AGENTES.md) |
| **Motion Designer** | 3 | Animações | [ARQUITETURA-AGENTES.md#motion-designer](ARQUITETURA-AGENTES.md) |
| **Visual QA** | 3 | Qualidade visual | [ARQUITETURA-AGENTES.md#visual-qa](ARQUITETURA-AGENTES.md) |
| **Usability Tester** | 4 | Testes de usabilidade | [ARQUITETURA-AGENTES.md#usability-tester](ARQUITETURA-AGENTES.md) |
| **Performance Analyst** | 4 | Performance | [ARQUITETURA-AGENTES.md#performance-analyst](ARQUITETURA-AGENTES.md) |

---

## 📋 Templates

### Índice de Templates

| Documento | Descrição | Link |
|-----------|-----------|------|
| **Índice Geral** | Todos os templates | [templates/README.md](templates/README.md) |
| **Deliverables** | Templates de entregáveis | [templates/deliverables/](templates/deliverables/) |

### Por Fase

| Fase | Templates Disponíveis | Link |
|------|----------------------|------|
| **Fase 0** | Contrato, Matriz, Checklist | [templates/deliverables/fase-0/](templates/deliverables/fase-0/) |
| **Fase 1** | Persona, Jornada, Benchmark, Empathy Map, Golden Thread, Survey | [templates/deliverables/fase-1/](templates/deliverables/fase-1/) |
| **Fase 2** | Wireframe, Service Blueprint, Interaction, Content Strategy | [templates/deliverables/fase-2/](templates/deliverables/fase-2/) |
| **Fase 3** | Design System, Protótipo, Brand, UX Writing, Motion | [templates/deliverables/fase-3/](templates/deliverables/fase-3/) |
| **Fase 4** | Validação, WCAG, Usability, Performance, Handoff | [templates/deliverables/fase-4/](templates/deliverables/fase-4/) |

### Templates Especiais

| Template | Descrição | Link |
|----------|-----------|------|
| **Gateway** | Template de aprovação | [templates/gateways/](templates/gateways/) |
| **Projeto** | Template de projeto completo | [projetos/_template/](projetos/_template/) |

---

## 📦 Outputs

### Estrutura de Outputs

| Documento | Descrição | Link |
|-----------|-----------|------|
| **Índice de Outputs** | Estrutura completa | [outputs/README.md](outputs/README.md) |

### Por Fase

| Fase | Subpastas | Link |
|------|-----------|------|
| **Estrategista** | contratos, matrizes, analises | [outputs/estrategista/](outputs/estrategista/) |
| **Pesquisador** | benchmarks, personas, jornadas, pesquisas | [outputs/pesquisador/](outputs/pesquisador/) |
| **Arquiteto** | wireframes, fluxos, sitemap, especificacoes | [outputs/arquiteto/](outputs/arquiteto/) |
| **Visual** | design-system, prototipos, mockups, assets | [outputs/visual/](outputs/visual/) |
| **Validador** | relatorios, testes, metricas, melhorias | [outputs/validador/](outputs/validador/) |

---

## 🎯 Projetos

### Estrutura de Projetos

| Documento | Descrição | Link |
|-----------|-----------|------|
| **Índice de Projetos** | Como usar projetos | [projetos/README.md](projetos/README.md) |
| **Nomenclatura** | Padrões de nomes | [projetos/NOMENCLATURA.md](projetos/NOMENCLATURA.md) |
| **Template** | Template completo | [projetos/_template/](projetos/_template/) |

### Exemplos

| Projeto | Descrição | Status | Link |
|---------|-----------|--------|------|
| **Sicoob Fun** | App de engajamento | Completo | [projetos/sicoob-fun/](projetos/sicoob-fun/) |

---

## 📖 Guias e Boas Práticas

### Guias Principais

| Documento | Descrição | Link |
|-----------|-----------|------|
| **Getting Started** | Início rápido (5 min) | [GETTING-STARTED.md](GETTING-STARTED.md) |
| **Best Practices** | Boas práticas | [BEST-PRACTICES.md](BEST-PRACTICES.md) |
| **FAQ** | Perguntas frequentes | [FAQ.md](FAQ.md) |
| **Contributing** | Como contribuir | [CONTRIBUTING.md](CONTRIBUTING.md) |

### Guias Específicos

| Guia | Descrição | Link |
|------|-----------|------|
| **Nomenclatura** | Padrões de nomes | [projetos/NOMENCLATURA.md](projetos/NOMENCLATURA.md) |
| **Outputs** | Como usar outputs | [outputs/README.md](outputs/README.md) |
| **Templates** | Como usar templates | [templates/README.md](templates/README.md) |

---

## 🔍 Busca Rápida

### Por Tipo de Conteúdo

| Tipo | Onde Encontrar |
|------|----------------|
| **Metaprompts** | [docs/metaprompts/](docs/metaprompts/) |
| **Templates** | [templates/](templates/) |
| **Outputs** | [outputs/](outputs/) |
| **Projetos** | [projetos/](projetos/) |
| **Integrações** | [integrations/](integrations/) |
| **Core** | [core/](core/) |
| **Agentes** | [agents/](agents/) |

### Por Fase

| Fase | Metaprompts | Templates | Outputs | Agentes |
|------|-------------|-----------|---------|---------|
| **0** | [📄](docs/metaprompts/fase-0-estrategista/) | [📋](templates/deliverables/fase-0/) | [📦](outputs/estrategista/) | [🤖](agents/fase-0-estrategista/) |
| **1** | [📄](docs/metaprompts/fase-1-pesquisador/) | [📋](templates/deliverables/fase-1/) | [📦](outputs/pesquisador/) | [🤖](agents/fase-1-pesquisador/) |
| **2** | [📄](docs/metaprompts/fase-2-arquiteto/) | [📋](templates/deliverables/fase-2/) | [📦](outputs/arquiteto/) | [🤖](agents/fase-2-arquiteto/) |
| **3** | [📄](docs/metaprompts/fase-3-visual/) | [📋](templates/deliverables/fase-3/) | [📦](outputs/visual/) | [🤖](agents/fase-3-visual/) |
| **4** | [📄](docs/metaprompts/fase-4-validador/) | [📋](templates/deliverables/fase-4/) | [📦](outputs/validador/) | [🤖](agents/fase-4-validador/) |

### Por Subagente

| Subagente | Metaprompt | Template | Fase |
|-----------|------------|----------|------|
| Boundary Mapper | [📄](docs/metaprompts/fase-0-estrategista/) | [📋](templates/deliverables/fase-0/) | 0 |
| Scope Validator | [📄](docs/metaprompts/fase-0-estrategista/) | [📋](templates/deliverables/fase-0/) | 0 |
| Benchmark Analyst | [📄](docs/metaprompts/fase-1-pesquisador/) | [📋](templates/deliverables/fase-1/) | 1 |
| User Researcher | [📄](docs/metaprompts/fase-1-pesquisador/) | [📋](templates/deliverables/fase-1/) | 1 |
| Persona Crafter | [📄](docs/metaprompts/fase-1-pesquisador/) | [📋](templates/deliverables/fase-1/) | 1 |
| Journey Mapper | [📄](docs/metaprompts/fase-1-pesquisador/) | [📋](templates/deliverables/fase-1/) | 1 |
| Empathy Map Creator | [📄](ARQUITETURA-AGENTES.md) | [📋](templates/deliverables/fase-1/) | 1 |
| Golden Thread Generator | [📄](ARQUITETURA-AGENTES.md) | [📋](templates/deliverables/fase-1/) | 1 |
| Survey Designer | [📄](ARQUITETURA-AGENTES.md) | [📋](templates/deliverables/fase-1/) | 1 |
| UX Designer | [📄](docs/metaprompts/fase-2-arquiteto/) | [📋](templates/deliverables/fase-2/) | 2 |
| Service Designer | [📄](docs/metaprompts/fase-2-arquiteto/subagente-service-designer.md) | [📋](templates/deliverables/fase-2/) | 2 |
| IA Architect | [📄](docs/metaprompts/fase-2-arquiteto/subagente-ia-architect.md) | [📋](templates/deliverables/fase-2/) | 2 |
| Interaction Designer | [📄](ARQUITETURA-AGENTES.md) | [📋](templates/deliverables/fase-2/) | 2 |
| Content Strategist | [📄](ARQUITETURA-AGENTES.md) | [📋](templates/deliverables/fase-2/) | 2 |
| Brand Strategist | [📄](ARQUITETURA-AGENTES.md) | [📋](templates/deliverables/fase-3/) | 3 |
| UI Designer | [📄](docs/metaprompts/fase-3-visual/subagente-ui-designer.md) | [📋](templates/deliverables/fase-3/) | 3 |
| Design System Manager | [📄](docs/metaprompts/fase-3-visual/subagente-design-system-manager.md) | [📋](templates/deliverables/fase-3/) | 3 |
| UX Writer | [📄](ARQUITETURA-AGENTES.md) | [📋](templates/deliverables/fase-3/) | 3 |
| Motion Designer | [📄](ARQUITETURA-AGENTES.md) | [📋](templates/deliverables/fase-3/) | 3 |
| Prototyper | [📄](docs/metaprompts/fase-3-visual/subagente-prototyper.md) | [📋](templates/deliverables/fase-3/) | 3 |
| Visual QA | [📄](ARQUITETURA-AGENTES.md) | [📋](templates/deliverables/fase-3/) | 3 |
| Requirements Validator | [📄](docs/metaprompts/fase-4-validador/) | [📋](templates/deliverables/fase-4/) | 4 |
| Accessibility Validator | [📄](docs/metaprompts/fase-4-validador/) | [📋](templates/deliverables/fase-4/) | 4 |
| Usability Tester | [📄](ARQUITETURA-AGENTES.md) | [📋](templates/deliverables/fase-4/) | 4 |
| Performance Analyst | [📄](ARQUITETURA-AGENTES.md) | [📋](templates/deliverables/fase-4/) | 4 |
| QA Analyst | [📄](docs/metaprompts/fase-4-validador/) | [📋](templates/deliverables/fase-4/) | 4 |

---

## 🆘 Ajuda e Suporte

### Documentação de Ajuda

| Recurso | Descrição | Link |
|---------|-----------|------|
| **FAQ** | Perguntas frequentes | [FAQ.md](FAQ.md) |
| **Troubleshooting** | Solução de problemas | [FAQ.md#troubleshooting](FAQ.md) |
| **Best Practices** | Boas práticas | [BEST-PRACTICES.md](BEST-PRACTICES.md) |

### Exemplos Práticos

| Exemplo | Descrição | Link |
|---------|-----------|------|
| **Sicoob Fun** | Projeto completo | [projetos/sicoob-fun/](projetos/sicoob-fun/) |
| **Templates** | Exemplos de uso | [templates/](templates/) |

---

## 📊 Estatísticas do Sistema

### Arquitetura
- **Total de Agentes:** 29 (1 Master + 5 Macro + 23 Sub)
- **Fases:** 5
- **Gateways:** 5
- **Pilares:** 3 (CX Brain, Motor EQ, Gateways)

### Documentação
- **Linhas de Código/Docs:** 18.000+
- **Metaprompts:** 20+
- **Templates:** 30+
- **Diagramas:** 10+

### Versão
- **Versão Atual:** 2.0.0
- **Última Atualização:** 2026-04-23
- **Status:** Em Desenvolvimento Ativo

---

## 🔗 Links Externos

### Ferramentas
- [Figma Desktop](https://www.figma.com/downloads/)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [Figma MCP Server](https://github.com/figma/mcp-server-figma)

### Referências
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Design System Checklist](https://www.designsystemchecklist.com/)
- [Service Design Tools](https://www.servicedesigntools.org/)

---

**Última Atualização:** 2026-04-23  
**Versão:** 2.0.0  
**Mantenedor:** CX Operating System Team