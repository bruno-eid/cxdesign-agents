# 🔄 Fluxos de Trabalho

## Visão Geral

Esta seção documenta todos os fluxos de trabalho do sistema, desde o briefing inicial até a entrega final, incluindo cenários de iteração e tratamento de exceções.

## 📁 Conteúdo

### Fluxos Principais

- **complete-workflow.md** - Fluxo completo de ponta a ponta
- **phase-0-boundary-mapping.md** - Fase 0: Calibração e Fronteiras
- **phase-1-discovery.md** - Fase 1: Descoberta Cirúrgica
- **phase-2-architecture.md** - Fase 2: Arquitetura Sistêmica
- **phase-3-materialization.md** - Fase 3: Materialização e Branding
- **phase-4-validation.md** - Fase 4: Compliance e Validação

### Fluxos Especiais

- **iteration-flow.md** - Fluxo de iteração e refinamento
- **gateway-approval.md** - Processo de aprovação em gateways
- **exception-handling.md** - Tratamento de exceções e erros
- **emergency-stop.md** - Procedimentos de parada de emergência

## 🎯 Estrutura de um Fluxo

Cada documento de fluxo contém:

### 1. Objetivo da Fase
- Propósito principal
- Resultados esperados
- Critérios de sucesso

### 2. Agentes Envolvidos
- Macro agente coordenador
- Subagentes executores
- Dependências entre agentes

### 3. Inputs Necessários
- Dados de entrada
- Contexto requerido
- Artefatos anteriores

### 4. Processo de Execução
- Passo a passo detalhado
- Decisões e condicionais
- Pontos de validação

### 5. Outputs Gerados
- Entregáveis principais
- Documentação associada
- Métricas de qualidade

### 6. Gateway de Aprovação
- Critérios de aprovação
- Stakeholders envolvidos
- Ações em caso de rejeição

## 🔄 Fluxo Macro do Sistema

```
┌─────────────────────────────────────────────────────────────────┐
│                         BRIEFING INICIAL                         │
└────────────────────────────┬────────────────────────────────────┘
                             ↓
                    ┌────────────────┐
                    │   CX MASTER    │
                    └────────┬───────┘
                             ↓
┌────────────────────────────────────────────────────────────────┐
│ FASE 0: ESTRATEGISTA - Boundary Mapping                        │
│ Output: Contrato de Escopo + Matriz de Maturidade             │
└────────────────────────────┬───────────────────────────────────┘
                             ↓
                    [GATEWAY HUMANO 1]
                             ↓
┌────────────────────────────────────────────────────────────────┐
│ FASE 1: PESQUISADOR - Data & Emotion Mining                    │
│ Output: Personas + Jornada As-Is + Matriz de Fricções         │
└────────────────────────────┬───────────────────────────────────┘
                             ↓
                    [GATEWAY HUMANO 2]
                             ↓
┌────────────────────────────────────────────────────────────────┐
│ FASE 2: ARQUITETO - Logical UX                                 │
│ Output: Jornada To-Be + Wireframes Lógicos                    │
└────────────────────────────┬───────────────────────────────────┘
                             ↓
                    [GATEWAY HUMANO 3]
                             ↓
┌────────────────────────────────────────────────────────────────┐
│ FASE 3: VISUAL - The Render                                    │
│ Output: Design System + Protótipos Alta Fidelidade            │
└────────────────────────────┬───────────────────────────────────┘
                             ↓
                    [GATEWAY HUMANO 4]
                             ↓
┌────────────────────────────────────────────────────────────────┐
│ FASE 4: VALIDADOR - QA Implacável                             │
│ Output: Matriz de Risco Zerada + Handoff Técnico              │
└────────────────────────────┬───────────────────────────────────┘
                             ↓
                    [GATEWAY HUMANO 5]
                             ↓
                    ┌────────────────┐
                    │ ENTREGA FINAL  │
                    └────────────────┘
```

## ⚡ Cenários de Iteração

### Iteração Menor (Score 70-79)
- Ajustes dentro da mesma fase
- Não requer reaprovação de fases anteriores
- Máximo 2 iterações

### Iteração Média (Score < 70)
- Retorna para fase anterior
- Requer nova aprovação no gateway
- Máximo 3 iterações totais

### Iteração Crítica (Issues Críticas)
- Pode retornar até Fase 0
- Requer revisão completa do escopo
- Stakeholders são notificados

## 📊 Métricas de Fluxo

Cada fase monitora:

- **Tempo de Execução:** Duração real vs. estimada
- **Taxa de Aprovação:** % de aprovação no primeiro gateway
- **Número de Iterações:** Quantas vezes precisou iterar
- **Score de Qualidade:** Média dos scores de saída

---

**Status:** Em Desenvolvimento  
**Última Atualização:** 2026-04-16