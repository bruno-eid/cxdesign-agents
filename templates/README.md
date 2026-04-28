# 📋 Templates e Modelos

## Visão Geral

Esta seção contém templates reutilizáveis para entregáveis de cada fase e modelos de gateways de aprovação.

## 📁 Estrutura

```
templates/
├── README.md (este arquivo)
├── deliverables/
│   ├── fase-0/
│   │   ├── contrato-escopo.md
│   │   └── matriz-maturidade.md
│   ├── fase-1/
│   │   ├── matriz-friccoes.md
│   │   ├── persona-template.md
│   │   └── jornada-as-is.md
│   ├── fase-2/
│   │   ├── jornada-to-be.md
│   │   ├── wireframe-template.md
│   │   └── service-blueprint.md
│   ├── fase-3/
│   │   ├── design-system-doc.md
│   │   ├── prototipo-spec.md
│   │   └── tokens-template.json
│   └── fase-4/
│       ├── matriz-risco.md
│       ├── relatorio-validacao.md
│       └── handoff-tecnico.md
└── gateways/
    ├── gateway-template.md
    ├── criterios-aprovacao.md
    └── feedback-form.md
```

## 📦 Templates de Entregáveis

### Fase 0: Estrategista

#### Contrato de Escopo Técnico
```markdown
# Contrato de Escopo Técnico

## Informações do Projeto
- **Nome:** [Nome do Projeto]
- **Cliente:** [Nome do Cliente]
- **Data:** [Data]
- **Versão:** [Versão]

## Objetivos de Negócio
1. [Objetivo 1]
2. [Objetivo 2]
3. [Objetivo 3]

## Restrições Técnicas
- **Tecnologias:** [Lista de tecnologias]
- **Integrações:** [Sistemas a integrar]
- **Performance:** [Requisitos de performance]
- **Segurança:** [Requisitos de segurança]

## Restrições de Negócio
- **Orçamento:** [Valor]
- **Prazo:** [Data limite]
- **Recursos:** [Equipe disponível]

## Fora do Escopo
- [Item 1]
- [Item 2]

## Critérios de Sucesso
- [ ] [Critério 1]
- [ ] [Critério 2]
```

#### Matriz de Maturidade
```markdown
# Matriz de Maturidade

## Dimensões Avaliadas

### 1. Maturidade de Design
- [ ] Nível 1: Ad-hoc
- [ ] Nível 2: Emergente
- [ ] Nível 3: Estruturado
- [ ] Nível 4: Integrado
- [ ] Nível 5: Otimizado

### 2. Maturidade Técnica
- [ ] Nível 1: Legado
- [ ] Nível 2: Modernização Inicial
- [ ] Nível 3: Arquitetura Moderna
- [ ] Nível 4: Cloud Native
- [ ] Nível 5: Inovação Contínua

### 3. Maturidade de UX
- [ ] Nível 1: Sem processo
- [ ] Nível 2: Pesquisa básica
- [ ] Nível 3: Processo definido
- [ ] Nível 4: Data-driven
- [ ] Nível 5: Cultura de UX
```

### Fase 1: Pesquisador

#### Template de Persona
```markdown
# Persona: [Nome]

## Informações Demográficas
- **Idade:** [Faixa etária]
- **Ocupação:** [Profissão]
- **Localização:** [Cidade/Região]
- **Renda:** [Faixa de renda]

## Perfil Psicográfico
- **Objetivos:** [Lista de objetivos]
- **Motivações:** [O que motiva]
- **Frustrações:** [Principais dores]
- **Comportamentos:** [Padrões de comportamento]

## Contexto de Uso
- **Quando usa:** [Contexto de uso]
- **Onde usa:** [Ambiente de uso]
- **Como usa:** [Dispositivos e canais]

## Citação
> "[Frase que representa a persona]"

## Necessidades
1. [Necessidade 1]
2. [Necessidade 2]
3. [Necessidade 3]

## Oportunidades de Design
- [Oportunidade 1]
- [Oportunidade 2]
```

### Fase 2: Arquiteto

#### Service Blueprint Template
```markdown
# Service Blueprint: [Nome do Serviço]

## Evidências Físicas
| Touchpoint | Descrição | Responsável |
|------------|-----------|-------------|
| [Nome]     | [Desc]    | [Quem]      |

## Ações do Cliente
| Etapa | Ação | Emoção | Duração |
|-------|------|--------|---------|
| 1     | [Ação] | 😊/😐/😞 | [Tempo] |

## Ações Frontstage (Visíveis)
| Etapa | Ação | Responsável | Sistema |
|-------|------|-------------|---------|
| 1     | [Ação] | [Quem]    | [Qual]  |

## Ações Backstage (Invisíveis)
| Etapa | Processo | Sistema | Dados |
|-------|----------|---------|-------|
| 1     | [Proc]   | [Sist]  | [Dados] |

## Processos de Suporte
| Processo | Descrição | SLA |
|----------|-----------|-----|
| [Nome]   | [Desc]    | [Tempo] |

## Pontos de Falha Identificados
- ⚠️ [Ponto de falha 1]
- ⚠️ [Ponto de falha 2]

## Oportunidades de Melhoria
- 💡 [Oportunidade 1]
- 💡 [Oportunidade 2]
```

### Fase 3: Visual

#### Design System Documentation
```markdown
# Design System: [Nome]

## Fundamentos

### Cores
```json
{
  "primary": {
    "50": "#...",
    "100": "#...",
    "500": "#...",
    "900": "#..."
  },
  "secondary": {...},
  "neutral": {...}
}
```

### Tipografia
- **Família:** [Font Family]
- **Pesos:** [Weights]
- **Escala:** [Scale]

### Espaçamento
- **Base:** 8px
- **Escala:** 0.5x, 1x, 1.5x, 2x, 3x, 4x, 6x, 8x

### Elevação
- **Nível 1:** [Shadow]
- **Nível 2:** [Shadow]
- **Nível 3:** [Shadow]

## Componentes

### Button
- **Variantes:** Primary, Secondary, Tertiary
- **Estados:** Default, Hover, Active, Disabled
- **Tamanhos:** Small, Medium, Large
```

### Fase 4: Validador

#### Relatório de Validação
```markdown
# Relatório de Validação

## Resumo Executivo
- **Score Geral:** [0-100]
- **Status:** ✅ Aprovado / ⚠️ Com Ressalvas / ❌ Reprovado
- **Data:** [Data]

## Validação de Requisitos
| Requisito | Status | Observações |
|-----------|--------|-------------|
| [Req 1]   | ✅/❌  | [Obs]       |

## Validação de Acessibilidade (WCAG 2.1 AA)
| Critério | Status | Severidade | Ação |
|----------|--------|------------|------|
| 1.1.1    | ✅/❌  | Alta/Média/Baixa | [Ação] |

## Issues Identificadas
### Críticas (Bloqueantes)
- [ ] [Issue 1]

### Altas (Importantes)
- [ ] [Issue 2]

### Médias (Desejáveis)
- [ ] [Issue 3]

### Baixas (Nice-to-have)
- [ ] [Issue 4]

## Recomendações
1. [Recomendação 1]
2. [Recomendação 2]

## Próximos Passos
- [ ] [Passo 1]
- [ ] [Passo 2]
```

## 🛑 Templates de Gateway

### Gateway de Aprovação
```markdown
# Gateway de Aprovação - Fase [N]

## Informações
- **Fase:** [Nome da Fase]
- **Data:** [Data]
- **Revisor:** [Nome]

## Entregáveis para Aprovação
- [ ] [Entregável 1]
- [ ] [Entregável 2]
- [ ] [Entregável 3]

## Critérios de Aprovação
- [ ] Todos os entregáveis presentes
- [ ] Qualidade mínima: 80/100
- [ ] Sem issues críticas
- [ ] Alinhado com objetivos de negócio

## Decisão
- [ ] ✅ Aprovado - Prosseguir para próxima fase
- [ ] ⚠️ Aprovado com ressalvas - Ajustes menores necessários
- [ ] ❌ Reprovado - Requer iteração

## Feedback
[Comentários do revisor]

## Ações Necessárias
- [ ] [Ação 1]
- [ ] [Ação 2]

## Assinatura
**Nome:** [Nome]  
**Data:** [Data]  
**Cargo:** [Cargo]
```

## 🎯 Como Usar os Templates

1. **Escolha o template** apropriado para a fase
2. **Copie o template** para o projeto
3. **Preencha as seções** com informações específicas
4. **Valide completude** antes de submeter
5. **Revise qualidade** contra critérios

---

**Status:** Em Desenvolvimento  
**Última Atualização:** 2026-04-16