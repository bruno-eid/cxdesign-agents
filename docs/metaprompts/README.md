# 🎭 Metaprompts dos Agentes

## Visão Geral

Esta seção contém os metaprompts detalhados de cada agente do sistema, incluindo instruções, comportamentos esperados, formatos de entrada/saída e exemplos.

## 📁 Estrutura

```
metaprompts/
├── README.md (este arquivo)
├── cx-master.md                    # Orquestrador Central
├── fase-0-estrategista/
│   ├── macro-agent.md              # Coordenador da Fase 0
│   ├── boundary-mapper.md          # Subagente
│   └── scope-validator.md          # Subagente
├── fase-1-pesquisador/
│   ├── macro-agent.md              # Coordenador da Fase 1
│   ├── extrator-dores.md           # Subagente
│   ├── criador-personas.md         # Subagente
│   └── validador-ideias.md         # Subagente
├── fase-2-arquiteto/
│   ├── macro-agent.md              # Coordenador da Fase 2
│   ├── ux-designer.md              # Subagente
│   ├── service-designer.md         # Subagente
│   └── ia-architect.md             # Subagente
├── fase-3-visual/
│   ├── macro-agent.md              # Coordenador da Fase 3
│   ├── ui-designer.md              # Subagente
│   ├── design-system-manager.md    # Subagente
│   └── prototyper.md               # Subagente
└── fase-4-validador/
    ├── macro-agent.md              # Coordenador da Fase 4
    ├── verificador-requisitos.md   # Subagente
    ├── validador-acessibilidade.md # Subagente
    └── qa-analyst.md               # Subagente
```

## 🎯 Estrutura Padrão de Metaprompt

Cada metaprompt segue esta estrutura:

### 1. Identidade e Papel
- Nome do agente
- Função principal
- Responsabilidades

### 2. Contexto de Operação
- Quando é acionado
- Inputs esperados
- Outputs gerados

### 3. Instruções Detalhadas
- Passo a passo de execução
- Critérios de qualidade
- Restrições e limitações

### 4. Formato de Comunicação
- Estrutura de handoff (entrada)
- Estrutura de output (saída)
- Exemplos práticos

### 5. Casos de Uso
- Cenários típicos
- Exemplos de execução
- Tratamento de exceções

## 🔄 Fluxo de Handoff

Todos os agentes seguem o mesmo padrão de comunicação:

```json
{
  "handoff_id": "uuid",
  "timestamp": "ISO-8601",
  "fase_atual": "string",
  "agente_acionado": "string",
  "contexto_acumulado": {},
  "inputs_disponiveis": {},
  "output_esperado": {},
  "prioridade": "alta|media|baixa"
}
```

## 📊 Sistema de Qualidade

Cada agente deve retornar um score de qualidade:

- **90-100:** Excelente - Pronto para produção
- **80-89:** Bom - Pequenos ajustes opcionais
- **70-79:** Aceitável - Melhorias recomendadas
- **< 70:** Insuficiente - Requer iteração

## 🚀 Como Usar

1. Escolha o metaprompt do agente desejado
2. Adapte o contexto para seu caso de uso
3. Forneça os inputs no formato especificado
4. Valide o output contra os critérios de qualidade
5. Itere se necessário

---

**Status:** Em Desenvolvimento  
**Última Atualização:** 2026-04-16