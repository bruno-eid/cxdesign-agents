# 📌 Outputs - Fase 0: Estrategista

## 🎯 Objetivo da Fase

Mapear fronteiras, validar viabilidade e estabelecer o contrato de escopo técnico **ANTES** de qualquer trabalho criativo começar.

## 📁 Estrutura

```
estrategista/
├── README.md (este arquivo)
├── contratos/          # Contratos de escopo técnico
├── matrizes/           # Matrizes de maturidade
└── analises/           # Análises de viabilidade e riscos
```

## 📋 Entregáveis

### 1. Contratos de Escopo (`contratos/`)

**Descrição:** Documentos que definem escopo, restrições e critérios de sucesso do projeto.

**Conteúdo:**
- Informações do projeto
- Objetivos de negócio
- Restrições técnicas, de negócio e design
- O que está FORA do escopo
- Critérios de sucesso
- Riscos e mitigações

**Formato:** Markdown (.md)

**Template:** [contrato-escopo-template.md](../../templates/fase-0/contrato-escopo.md)

**Exemplo:**
```
contratos/
└── sicoob-fun-contrato-escopo-v1.md
```

### 2. Matrizes de Maturidade (`matrizes/`)

**Descrição:** Avaliação do nível de maturidade em 3 dimensões: Design, Técnica e UX.

**Conteúdo:**
- Avaliação de maturidade (níveis 1-5)
- Justificativas por dimensão
- Recomendações de evolução
- Score de viabilidade geral

**Formato:** Markdown (.md)

**Template:** [matriz-maturidade-template.md](../../templates/fase-0/matriz-maturidade.md)

**Exemplo:**
```
matrizes/
└── sicoob-fun-matriz-maturidade-v1.md
```

### 3. Análises de Viabilidade (`analises/`)

**Descrição:** Análises detalhadas de viabilidade técnica, riscos e recomendações estratégicas.

**Conteúdo:**
- Análise de viabilidade técnica
- Identificação de riscos (críticos, altos, médios)
- Recomendações estratégicas
- Plano de mitigação de riscos

**Formato:** Markdown (.md)

**Exemplo:**
```
analises/
├── sicoob-fun-analise-viabilidade-v1.md
└── sicoob-fun-analise-riscos-v1.md
```

## 🔄 Workflow

```
Briefing Inicial
    ↓
CX Master → Estrategista
    ↓
Boundary Mapper + Scope Validator
    ↓
Gera Entregáveis
    ↓
Salva em outputs/estrategista/
    ↓
Gateway 1 (Aprovação Humana)
```

## ✅ Checklist de Qualidade

Antes de submeter para Gateway 1, verifique:

- [ ] Contrato de escopo completo e assinado
- [ ] Todas as restrições mapeadas (técnicas, negócio, design)
- [ ] Matriz de maturidade calculada (3 dimensões)
- [ ] Viabilidade avaliada (aprovado/ressalvas/reprovado)
- [ ] Riscos identificados e categorizados
- [ ] Recomendações estratégicas fornecidas
- [ ] Documentação clara e objetiva
- [ ] Quality score ≥ 80/100

## 📊 Critérios de Sucesso

| Critério | Peso | Meta |
|----------|------|------|
| Completude | 30% | 100% dos entregáveis presentes |
| Profundidade | 30% | >10 restrições mapeadas |
| Viabilidade | 25% | Score ≥ 80/100 |
| Clareza | 15% | Fácil de entender |

## 🎯 Outputs Esperados

### Mínimo Viável
- 1 Contrato de escopo
- 1 Matriz de maturidade
- 1 Análise de viabilidade

### Completo
- Contrato de escopo detalhado
- Matriz de maturidade com justificativas
- Análise de viabilidade com riscos
- Documento de restrições separado
- Recomendações estratégicas

## 📚 Recursos

- [Template Contrato](../../templates/fase-0/contrato-escopo.md)
- [Template Matriz](../../templates/fase-0/matriz-maturidade.md)
- [Checklist Fase 0](../../templates/fase-0/checklist.md)
- [Metaprompt Estrategista](../../docs/metaprompts/fase-0-estrategista/)

---

**Fase:** 0 - Estrategista  
**Duração Média:** 3-5 dias  
**Iterações Médias:** 1