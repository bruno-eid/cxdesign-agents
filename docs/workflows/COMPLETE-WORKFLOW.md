# 🔄 Fluxo Completo de Trabalho - CX Operating System

## 🎯 Visão Geral

Este documento descreve o fluxo completo de trabalho do CX Operating System, desde o briefing inicial até a entrega final para desenvolvimento. O sistema opera através de 6 fases sequenciais, cada uma com seu Macro Agente coordenador e Subagentes especializados.

---

## 📊 Arquitetura do Sistema

```
BRIEFING INICIAL
       ↓
┌──────────────────────────────────────────────────────────┐
│                     CX MASTER                             │
│              (Orquestrador Central)                       │
│                                                           │
│  • Recebe briefing                                       │
│  • Roteia para fases                                     │
│  • Coordena handoffs                                     │
│  • Gerencia gateways                                     │
│  • Mantém qualidade                                      │
└──────────────────────────────────────────────────────────┘
       ↓
┌──────────────────────────────────────────────────────────┐
│              FASE 0: ESTRATEGISTA                         │
│         (Validação e Definição de Escopo)                │
│                                                           │
│  Macro Agente: Estrategista                              │
│  Subagentes:                                             │
│    • Boundary Mapper                                     │
│    • Viability Analyst                                   │
│                                                           │
│  Entregáveis:                                            │
│    ✓ Contrato de Escopo                                 │
│    ✓ Matriz de Maturidade                               │
│    ✓ Análise de Viabilidade                             │
└──────────────────────────────────────────────────────────┘
       ↓
   [🛑 GATEWAY 1: Aprovação de Escopo]
       ↓
┌──────────────────────────────────────────────────────────┐
│              FASE 1: PESQUISADOR                          │
│         (Pesquisa e Descoberta de Insights)              │
│                                                           │
│  Macro Agente: Pesquisador                               │
│  Subagentes:                                             │
│    • User Researcher                                     │
│    • Data Analyst                                        │
│    • Competitor Analyst                                  │
│                                                           │
│  Entregáveis:                                            │
│    ✓ Matriz de Fricções                                 │
│    ✓ Personas                                            │
│    ✓ Jornada As-Is                                      │
│    ✓ Insights Estratégicos                              │
└──────────────────────────────────────────────────────────┘
       ↓
   [🛑 GATEWAY 2: Aprovação de Insights]
       ↓
┌──────────────────────────────────────────────────────────┐
│              FASE 2: ARQUITETO                            │
│         (Estruturação e Otimização)                      │
│                                                           │
│  Macro Agente: Arquiteto                                 │
│  Subagentes:                                             │
│    • UX Designer                                         │
│    • Service Designer                                    │
│    • IA Architect                                        │
│                                                           │
│  Entregáveis:                                            │
│    ✓ Arquitetura de Informação                          │
│    ✓ User Flows Otimizados                              │
│    ✓ Service Blueprint                                   │
│    ✓ Wireframes                                          │
└──────────────────────────────────────────────────────────┘
       ↓
   [🛑 GATEWAY 3: Aprovação de Arquitetura]
       ↓
┌──────────────────────────────────────────────────────────┐
│              FASE 3: VISUAL                               │
│         (Design Visual e Prototipagem)                   │
│                                                           │
│  Macro Agente: Visual                                    │
│  Subagentes:                                             │
│    • UI Designer                                         │
│    • Design System Manager                               │
│    • Prototyper                                          │
│                                                           │
│  Entregáveis:                                            │
│    ✓ Telas de Alta Fidelidade                           │
│    ✓ Design System Completo                             │
│    ✓ Protótipo Interativo                               │
│    ✓ Specs para Desenvolvimento                         │
└──────────────────────────────────────────────────────────┘
       ↓
   [🛑 GATEWAY 4: Aprovação de Design]
       ↓
┌──────────────────────────────────────────────────────────┐
│              FASE 4: VALIDADOR                            │
│         (Validação e Garantia de Qualidade)              │
│                                                           │
│  Macro Agente: Validador                                 │
│  Subagentes:                                             │
│    • Verificador de Requisitos                           │
│    • Validador de Acessibilidade                         │
│    • QA Analyst                                          │
│                                                           │
│  Entregáveis:                                            │
│    ✓ Relatório de Validação                             │
│    ✓ Relatório de Acessibilidade                        │
│    ✓ Relatório de QA                                    │
│    ✓ Quality Score Final                                │
└──────────────────────────────────────────────────────────┘
       ↓
   [🛑 GATEWAY 5: Aprovação Final]
       ↓
   DESENVOLVIMENTO
```

---

## 👤 CX Master - Orquestrador Central

### Responsabilidades

O CX Master é o cérebro do sistema, responsável por:

1. **Recepção e Análise de Briefing**
   - Recebe briefing inicial do usuário
   - Analisa complexidade e escopo
   - Define estratégia de execução

2. **Roteamento Inteligente**
   - Decide qual fase executar
   - Seleciona agentes apropriados
   - Gerencia transições entre fases

3. **Coordenação de Handoffs**
   - Prepara inputs para cada agente
   - Valida outputs recebidos
   - Garante continuidade de contexto

4. **Gestão de Gateways**
   - Prepara apresentações para aprovação
   - Coleta feedback de stakeholders
   - Implementa ajustes solicitados

5. **Garantia de Qualidade**
   - Monitora quality scores
   - Identifica gaps e problemas
   - Aciona re-trabalho quando necessário

### Matriz de Decisão

O CX Master usa esta matriz para rotear tarefas:

| Tipo de Tarefa | Fase | Agente |
|----------------|------|--------|
| Definir escopo | 0 | Estrategista |
| Pesquisar usuários | 1 | Pesquisador |
| Criar fluxos | 2 | Arquiteto |
| Desenhar telas | 3 | Visual |
| Validar qualidade | 4 | Validador |

### Exemplo de Execução

```
1. Recebe briefing: "Criar app de fitness"
2. Analisa: Projeto médio, 12 semanas
3. Inicia Fase 0: Estrategista
4. Aguarda Gateway 1
5. Continua para Fase 1: Pesquisador
6. ... (repete até Fase 4)
7. Entrega final para desenvolvimento
```

---

## 📋 FASE 0: Estrategista

### Macro Agente: Estrategista

**Papel:** Validar viabilidade e definir escopo claro do projeto.

**Responsabilidades:**
- Mapear boundaries do projeto
- Avaliar maturidade (Design, Técnica, UX)
- Analisar viabilidade técnica e de negócio
- Criar contrato de escopo detalhado
- Identificar riscos e restrições

**Inputs:**
- Briefing inicial do usuário
- Contexto de negócio
- Restrições conhecidas

**Outputs:**
- Contrato de Escopo (320 linhas)
- Matriz de Maturidade (450 linhas)
- Análise de Viabilidade
- Mapa de Riscos

**Quality Score:** Mínimo 80/100

---

### Subagente: Boundary Mapper

**Papel:** Mapear limites e fronteiras do projeto.

**Responsabilidades:**
- Definir o que está IN/OUT do escopo
- Mapear requisitos funcionais e não-funcionais
- Identificar dependências externas
- Documentar premissas e restrições

**Técnicas:**
- Análise de requisitos
- Mapeamento de stakeholders
- Análise de dependências

**Entregável:** Contrato de Escopo completo

---

### Subagente: Viability Analyst

**Papel:** Avaliar viabilidade do projeto.

**Responsabilidades:**
- Avaliar maturidade em 3 dimensões (Design, Técnica, UX)
- Analisar viabilidade técnica
- Estimar esforço e prazo
- Recomendar abordagem (MVP/Faseamento/Completo)

**Técnicas:**
- Matriz de Maturidade (0-10 por dimensão)
- Análise de risco
- Estimativa de esforço

**Entregável:** Matriz de Maturidade + Análise de Viabilidade

---

### Gateway 1: Aprovação de Escopo

**Aprovadores:** Product Owner, Stakeholders de Negócio  
**Tempo:** 30-60 min

**Decisão:**
- ✅ Aprovar → Avançar para Fase 1
- 🔄 Iterar → Ajustar escopo
- ❌ Rejeitar → Cancelar projeto
- ⏸️ Pausar → Aguardar informações

---

## 🔍 FASE 1: Pesquisador

### Macro Agente: Pesquisador

**Papel:** Entender profundamente usuários e identificar oportunidades.

**Responsabilidades:**
- Coordenar pesquisa qualitativa e quantitativa
- Aplicar Motor EQ para análise emocional
- Sintetizar insights acionáveis
- Priorizar fricções por impacto
- Criar personas baseadas em dados

**Inputs:**
- Contrato de Escopo (Fase 0)
- Objetivos de negócio
- Público-alvo definido

**Outputs:**
- Matriz de Fricções (300 linhas)
- Personas (3-5)
- Jornada As-Is
- Insights Estratégicos
- Análise de Concorrentes

**Quality Score:** Mínimo 85/100

---

### Subagente: User Researcher

**Papel:** Conduzir pesquisa com usuários.

**Responsabilidades:**
- Planejar e executar entrevistas
- Conduzir testes de usabilidade
- Aplicar surveys quantitativos
- Sintetizar descobertas

**Técnicas:**
- Entrevistas em profundidade
- Testes de usabilidade
- Surveys (NPS, CSAT, CES)
- Observação contextual

**Entregável:** Relatório de Pesquisa + Personas

---

### Subagente: Data Analyst

**Papel:** Analisar dados quantitativos.

**Responsabilidades:**
- Analisar analytics (GA, Mixpanel, etc)
- Identificar padrões de comportamento
- Calcular métricas de UX
- Validar hipóteses com dados

**Técnicas:**
- Análise de funis
- Heatmaps e session recordings
- Análise de coortes
- Testes A/B

**Entregável:** Relatório de Analytics + Insights

---

### Subagente: Competitor Analyst

**Papel:** Analisar concorrentes e mercado.

**Responsabilidades:**
- Mapear concorrentes diretos e indiretos
- Analisar features e diferenciais
- Identificar best practices
- Encontrar oportunidades de diferenciação

**Técnicas:**
- Análise competitiva
- Benchmarking
- SWOT analysis
- Feature comparison matrix

**Entregável:** Análise de Concorrentes

---

### Motor EQ (Emotional Intelligence)

**Papel:** Adicionar camada de inteligência emocional à análise.

**Responsabilidades:**
- Analisar sentimentos em feedback
- Mapear emoções na jornada
- Identificar picos de estresse/alívio
- Recomendar soluções emocionalmente inteligentes

**Técnicas:**
- Sentiment analysis
- Emotion mapping
- Análise de linguagem

---

### Gateway 2: Aprovação de Insights

**Aprovadores:** UX Lead, Product Owner, Stakeholders  
**Tempo:** 45-90 min

**Decisão:**
- ✅ Aprovar → Avançar para Fase 2
- 🔄 Iterar → Coletar mais dados
- 🎯 Pivotar → Mudar direção
- ⏸️ Pausar → Validar hipóteses

---

## 🏗️ FASE 2: Arquiteto

### Macro Agente: Arquiteto

**Papel:** Estruturar solução e otimizar fluxos.

**Responsabilidades:**
- Criar arquitetura de informação
- Otimizar user flows
- Desenhar service blueprint
- Criar wireframes (ASCII art)
- Validar viabilidade técnica

**Inputs:**
- Matriz de Fricções (Fase 1)
- Personas e Jornada
- Insights Estratégicos

**Outputs:**
- Arquitetura de Informação
- User Flows Otimizados (5-10)
- Service Blueprint
- Wireframes (15-20 telas)
- Análise de Viabilidade Técnica

**Quality Score:** Mínimo 85/100

---

### Subagente: UX Designer

**Papel:** Criar fluxos otimizados e wireframes.

**Responsabilidades:**
- Aplicar Leis de UX (Hick, Fitts, Miller, etc)
- Otimizar fluxos para reduzir fricções
- Criar wireframes de baixa fidelidade
- Validar usabilidade

**Técnicas:**
- User flow mapping
- Wireframing (ASCII art)
- Card sorting
- Tree testing
- Leis de UX (10 principais)

**Entregável:** User Flows + Wireframes

---

### Subagente: Service Designer

**Papel:** Mapear serviço completo (front + back).

**Responsabilidades:**
- Criar service blueprint
- Mapear integrações necessárias
- Definir APIs e serviços
- Garantir resiliência e performance

**Técnicas:**
- Service blueprinting
- API design
- Integration mapping
- Performance planning

**Entregável:** Service Blueprint completo

---

### Subagente: IA Architect

**Papel:** Estruturar informação de forma lógica.

**Responsabilidades:**
- Criar taxonomia MECE
- Definir navegação
- Otimizar findability
- Estruturar conteúdo

**Técnicas:**
- Taxonomia MECE
- Card sorting
- Tree testing
- Information scent

**Entregável:** Arquitetura de Informação

---

### Gateway 3: Aprovação de Arquitetura

**Aprovadores:** UX Lead, Tech Lead, Product Owner  
**Tempo:** 60-90 min

**Decisão:**
- ✅ Aprovar → Avançar para Fase 3
- 🔄 Iterar → Ajustar fluxos
- 🔧 Revisar Técnico → Validar com dev team
- ⏸️ Pausar → Prototipar fluxo crítico

---

## 🎨 FASE 3: Visual

### Macro Agente: Visual

**Papel:** Criar interface visual e design system.

**Responsabilidades:**
- Coordenar criação de telas de alta fidelidade
- Garantir consistência visual
- Criar design system completo
- Prototipar interações
- Preparar specs para desenvolvimento

**Inputs:**
- Wireframes (Fase 2)
- User Flows
- Arquitetura de Informação

**Outputs:**
- Telas de Alta Fidelidade (15-20)
- Design System Completo
- Protótipo Interativo
- Guia de Estilo
- Specs para Desenvolvimento

**Quality Score:** Mínimo 90/100

**Integração Figma MCP:** ALTA (usa todas as 10 ferramentas)

---

### Subagente: UI Designer

**Papel:** Criar telas de alta fidelidade.

**Responsabilidades:**
- Aplicar princípios de design visual
- Criar telas pixel-perfect
- Garantir acessibilidade (WCAG 2.1 AA)
- Usar design systems (Material, HIG, Fluent)
- Aplicar Atomic Design

**Técnicas:**
- Design visual (cores, tipografia, espaçamento)
- Figma avançado (Auto Layout, Components, Variants)
- Atomic Design (átomos → organismos)
- Design Systems (Material Design 3, HIG, Fluent)
- Acessibilidade (contraste, tamanho, navegação)

**Ferramentas Figma MCP:**
- `get_design_context` - Extrair código
- `get_screenshot` - Documentação
- `get_variable_defs` - Tokens

**Entregável:** Telas de Alta Fidelidade (Figma)

---

### Subagente: Design System Manager

**Papel:** Criar e manter design system.

**Responsabilidades:**
- Criar tokens semânticos
- Documentar componentes
- Exportar para código (JSON, CSS, SCSS, TS)
- Garantir consistência

**Técnicas:**
- Design tokens (cores, tipografia, espaçamento)
- Documentação técnica
- Exportação para código
- Versionamento

**Ferramentas Figma MCP:**
- `get_variable_defs` - Extrair tokens
- `add_code_connect_map` - Mapear componentes
- `create_design_system_rules` - Regras

**Entregável:** Design System Completo

---

### Subagente: Prototyper

**Papel:** Criar protótipo interativo.

**Responsabilidades:**
- Adicionar microinterações
- Criar transições (Smart Animate)
- Garantir 60fps
- Validar usabilidade

**Técnicas:**
- Prototipagem avançada (Figma)
- Microinterações
- Motion design (easing, duration)
- Smart Animate

**Ferramentas Figma MCP:**
- `get_design_context` - Contexto de interações
- `get_screenshot` - Documentação de estados

**Entregável:** Protótipo Interativo

---

### Gateway 4: Aprovação de Design

**Aprovadores:** Design Lead, Product Owner, Stakeholders  
**Tempo:** 60-120 min

**Decisão:**
- ✅ Aprovar → Avançar para Fase 4
- 🔄 Iterar → Ajustar design
- 🎨 Revisar Branding → Alinhar com marca
- 🧪 Testar → Validar com usuários

---

## ✅ FASE 4: Validador

### Macro Agente: Validador

**Papel:** Validar qualidade e conformidade.

**Responsabilidades:**
- Verificar cobertura de requisitos
- Validar acessibilidade (WCAG 2.1 AA)
- Executar QA de design
- Calcular quality score final
- Preparar entrega para desenvolvimento

**Inputs:**
- Todos os entregáveis das fases anteriores
- Contrato de Escopo (Fase 0)
- Requisitos funcionais e não-funcionais

**Outputs:**
- Relatório de Validação
- Relatório de Acessibilidade
- Relatório de QA
- Matriz de Rastreabilidade
- Quality Score Final (0-100)

**Quality Score:** Mínimo 85/100

---

### Subagente: Verificador de Requisitos

**Papel:** Validar cobertura de requisitos.

**Responsabilidades:**
- Criar matriz de rastreabilidade
- Verificar cobertura 100%
- Identificar gaps
- Validar critérios de aceitação

**Técnicas:**
- Matriz de rastreabilidade
- Análise de cobertura
- Validação de critérios

**Entregável:** Relatório de Requisitos + Matriz

---

### Subagente: Validador de Acessibilidade

**Papel:** Garantir conformidade WCAG 2.1 AA.

**Responsabilidades:**
- Validar contraste (4.5:1 texto, 3:1 UI)
- Testar navegação por teclado
- Validar com leitores de tela
- Verificar tamanhos de toque (44x44px)

**Técnicas:**
- Testes de contraste
- Navegação por teclado
- Leitores de tela (NVDA, JAWS, VoiceOver)
- Validação WCAG 2.1 AA

**Entregável:** Relatório de Acessibilidade

---

### Subagente: QA Analyst

**Papel:** Executar QA de design.

**Responsabilidades:**
- Validar implementabilidade
- Verificar specs técnicas
- Testar fluxos completos
- Identificar bugs e inconsistências

**Técnicas:**
- Matriz de testes
- Validação de specs
- Testes funcionais
- Análise de implementabilidade

**Entregável:** Relatório de QA

---

### Gateway 5: Aprovação Final

**Aprovadores:** Product Owner, Tech Lead, Design Lead, Stakeholders  
**Tempo:** 90-120 min

**Decisão:**
- ✅ Aprovar → Iniciar desenvolvimento
- 🔄 Iterar → Corrigir issues
- 🧪 Testar → Validar com usuários
- ❌ Rejeitar → Retrabalho (raro)

---

## 📊 Métricas de Qualidade

### Quality Score por Fase

| Fase | Score Mínimo | Peso | Componentes |
|------|--------------|------|-------------|
| Fase 0 | 80/100 | 10% | Escopo, Viabilidade |
| Fase 1 | 85/100 | 20% | Pesquisa, Insights |
| Fase 2 | 85/100 | 20% | Arquitetura, Fluxos |
| Fase 3 | 90/100 | 30% | Design, Protótipo |
| Fase 4 | 85/100 | 20% | Validação, QA |

### Quality Score Final

```
Score Final = (Fase0 × 0.1) + (Fase1 × 0.2) + 
              (Fase2 × 0.2) + (Fase3 × 0.3) + 
              (Fase4 × 0.2)
```

**Interpretação:**
- 90-100: Excelente - Pronto para desenvolvimento
- 85-89: Muito Bom - Pequenos ajustes
- 80-84: Bom - Ajustes necessários
- 75-79: Aceitável - Retrabalho significativo
- < 75: Insuficiente - Não recomendado

---

## ⏱️ Estimativas de Tempo

### Por Fase

| Fase | Duração | Gateways | Total |
|------|---------|----------|-------|
| Fase 0 | 3-5 dias | 1h | 4-6 dias |
| Fase 1 | 5-10 dias | 1.5h | 6-11 dias |
| Fase 2 | 5-10 dias | 1.5h | 6-11 dias |
| Fase 3 | 10-15 dias | 2h | 11-16 dias |
| Fase 4 | 3-5 dias | 2h | 4-6 dias |
| **TOTAL** | **26-45 dias** | **8h** | **31-50 dias** |

### Projeto Típico (12 semanas)

```
Semana 1-2:   Fase 0 + Fase 1
Semana 3-4:   Fase 2
Semana 5-7:   Fase 3
Semana 8:     Fase 4
Semana 9-12:  Desenvolvimento
```

---

## 🔄 Handoffs Entre Fases

### Formato de Handoff

Cada transição usa formato JSON padronizado:

```json
{
  "handoff_id": "uuid",
  "from_phase": "fase_1",
  "to_phase": "fase_2",
  "timestamp": "2026-04-17T10:00:00Z",
  "context": {
    "project_id": "uuid",
    "deliverables": [...],
    "quality_score": 88,
    "key_insights": [...]
  },
  "instructions": "...",
  "constraints": [...]
}
```

Ver [Protocolo de Comunicação](../architecture/communication-protocol.md) para detalhes.

---

## 🎯 Casos de Uso

### Caso 1: App de Fitness (Projeto Médio)

**Duração:** 12 semanas  
**Equipe:** 1 designer, 2 devs  
**Orçamento:** R$ 150k

**Fluxo:**
1. Fase 0 (1 semana): Escopo validado
2. Gateway 1: Aprovado
3. Fase 1 (2 semanas): 50 entrevistas, 200 surveys
4. Gateway 2: Aprovado com ajustes
5. Fase 2 (2 semanas): 5 fluxos, 15 telas
6. Gateway 3: Aprovado
7. Fase 3 (3 semanas): Design system + protótipo
8. Gateway 4: Aprovado
9. Fase 4 (1 semana): Quality score 88/100
10. Gateway 5: Aprovado com condições
11. Desenvolvimento (4 semanas)

---

### Caso 2: E-commerce (Projeto Grande)

**Duração:** 20 semanas  
**Equipe:** 3 designers, 5 devs  
**Orçamento:** R$ 500k

**Fluxo:**
1. Fase 0 (2 semanas): Escopo complexo
2. Gateway 1: Iterado 1x
3. Fase 1 (4 semanas): Pesquisa extensa
4. Gateway 2: Aprovado
5. Fase 2 (4 semanas): 15 fluxos, 40 telas
6. Gateway 3: Aprovado
7. Fase 3 (6 semanas): Design system robusto
8. Gateway 4: Iterado 1x
9. Fase 4 (2 semanas): Quality score 92/100
10. Gateway 5: Aprovado
11. Desenvolvimento (8 semanas)

---

## 📚 Recursos Adicionais

### Documentação Relacionada
- [Metaprompts](../metaprompts/README.md)
- [Sistema de Gateways](../../core/gateways/README.md)
- [Protocolo de Comunicação](../architecture/communication-protocol.md)
- [CX Brain](../../core/cx-brain/SPECIFICATIONS.md)
- [Integração Figma MCP](../../integrations/figma/FIGMA-MCP-INTEGRATION.md)

### Templates
- [Templates de Entregáveis](../../templates/deliverables/README.md)
- [Templates de Gateways](../../core/gateways/templates/README.md)

---

**Última Atualização:** 2026-04-17  
**Versão:** 1.0.0  
**Status:** ✅ Completo