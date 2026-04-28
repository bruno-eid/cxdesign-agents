# 🔎 Outputs - Fase 1: Pesquisador

## Visão Geral

Esta pasta contém todos os entregáveis da **Fase 1 - Pesquisador**, responsável por descobrir dores, validar hipóteses e mapear a jornada do usuário através de dados quantitativos e qualitativos.

## 🎯 Agentes Responsáveis

### 1. Benchmark Analyst
**Função:** Análise competitiva e identificação de GAPs de mercado

**Entregáveis:**
- `benchmark-competitivo.md` - Análise de concorrentes
- `analise-gap.md` - Oportunidades de mercado
- `sintese-executiva.md` - Resumo consolidado

### 2. User Researcher
**Função:** Coleta e análise de dados de usuários

**Entregáveis:**
- `roteiro-entrevistas.md` - Roteiro de pesquisa qualitativa
- `formulario-pesquisa.md` - Questionário online
- `dados-brutos.csv` - Dados coletados
- `analise-resultados.md` - Insights da pesquisa

### 3. Persona Crafter
**Função:** Criação de personas baseadas em dados reais

**Entregáveis:**
- `persona-[nome].md` - Documento de persona
- `matriz-personas.md` - Comparação entre personas
- `validacao-personas.md` - Validação com stakeholders

### 4. Journey Mapper
**Função:** Mapeamento de jornadas do usuário

**Entregáveis:**
- `jornada-as-is.md` - Jornada atual (estado presente)
- `jornada-to-be.md` - Jornada futura (estado desejado)
- `matriz-friccoes.md` - Pontos de dor e oportunidades

## 📁 Estrutura de Pastas

```
pesquisador/
├── benchmarks/             # Análises competitivas
│   ├── [projeto]-sintese-executiva-[data].md
│   ├── [projeto]-categoria-1-[data].md
│   └── [projeto]-categoria-2-[data].md
├── pesquisas/              # Dados de usuários
│   ├── [projeto]-roteiro-[data].md
│   ├── [projeto]-formulario-[data].md
│   ├── [projeto]-dados-[data].csv
│   └── [projeto]-analise-[data].md
├── personas/               # Personas documentadas
│   ├── [projeto]-persona-1-[data].md
│   ├── [projeto]-persona-2-[data].md
│   └── [projeto]-matriz-personas-[data].md
└── jornadas/               # Mapas de jornada
    ├── [projeto]-jornada-as-is-[data].md
    ├── [projeto]-jornada-to-be-[data].md
    └── [projeto]-matriz-friccoes-[data].md
```

## 📝 Nomenclatura de Arquivos

Padrão: `[projeto]-[tipo]-[data].md`

Exemplos:
- `sicoob-fun-benchmark-fan-engagement-2026-04-22.md`
- `sicoob-fun-formulario-pesquisa-2026-04-22.md`
- `sicoob-fun-persona-cooperado-engajado-2026-04-25.md`
- `sicoob-fun-jornada-as-is-2026-04-26.md`

## ✅ Checklist de Entregáveis

Antes de passar pelo **Gateway 2**, certifique-se de que:

- [ ] Benchmark competitivo completo (mínimo 3 concorrentes)
- [ ] Pesquisa com usuários realizada (mínimo 100 respostas)
- [ ] Dados analisados e insights documentados
- [ ] Personas criadas (mínimo 2, máximo 5)
- [ ] Jornada As-Is mapeada
- [ ] Jornada To-Be projetada
- [ ] Matriz de fricções identificada
- [ ] Hipóteses validadas/invalidadas

## 🚪 Gateway 2: Aprovação de Insights

**Aprovadores:** Product Owner, UX Lead

**Critérios de Aprovação:**
- Pesquisa com amostra representativa (n ≥ 100)
- Personas baseadas em dados reais
- Jornada As-Is validada com usuários
- Fricções priorizadas (impacto x esforço)
- Insights acionáveis documentados

**Duração:** 90 minutos

## 📊 Exemplo Real: Sicoob Fun

### Benchmark Competitivo (✅ Completo)

```
pesquisador/benchmarks/
├── sicoob-fun-00-sintese-executiva-2026-04-22.md (600 linhas)
├── sicoob-fun-01-fan-engagement-2026-04-22.md (130 linhas)
├── sicoob-fun-02-gamificacao-2026-04-22.md (350 linhas)
└── sicoob-fun-03-fidelidade-2026-04-22.md (350 linhas)
```

**Principais Descobertas:**
- ✅ GAP identificado: Nenhum app combina fan engagement + gamificação + benefícios
- ✅ Fórmula validada: OneFootball + Duolingo + Nubank + Cartola
- ✅ Score de viabilidade: 8.2/10

### Pesquisa com Usuários (✅ Completo)

```
pesquisador/pesquisas/
├── sicoob-fun-README-2026-04-22.md (350 linhas)
├── sicoob-fun-roteiro-geral-2026-04-22.md (650 linhas)
└── sicoob-fun-formulario-pesquisa-2026-04-22.md (700 linhas) 👈 RECOMENDADO
```

**Método Escolhido:** Formulário online (10-15 min)  
**Meta:** 100-200 respostas em 2 semanas  
**Status:** Pronto para implementar

### Personas (⏳ Pendente)

Aguardando coleta de dados da pesquisa para criar:
- Persona 1: Cooperado Engajado
- Persona 2: Não Cooperado Curioso
- Persona 3: Produtor/Servidor

### Jornadas (⏳ Pendente)

Aguardando personas para mapear:
- Jornada As-Is: Como é hoje
- Jornada To-Be: Como será com Sicoob Fun
- Matriz de Fricções: Pontos de dor vs oportunidades

**Status Atual:** Fase 1 em andamento  
**Próximo Passo:** Implementar formulário e coletar dados

## 🔄 Fluxo de Trabalho

```
1. Gateway 1 aprovado → Fase 1 inicia
2. Benchmark Analyst executa
   → Analisa 21 apps em 6 categorias
   → Identifica GAP de mercado
   → Salva em outputs/pesquisador/benchmarks/
3. User Researcher executa
   → Cria instrumentos de pesquisa
   → Coleta dados (100-200 respostas)
   → Analisa resultados
   → Salva em outputs/pesquisador/pesquisas/
4. Persona Crafter executa
   → Cria personas baseadas em dados
   → Valida com stakeholders
   → Salva em outputs/pesquisador/personas/
5. Journey Mapper executa
   → Mapeia jornada As-Is
   → Projeta jornada To-Be
   → Identifica fricções
   → Salva em outputs/pesquisador/jornadas/
6. MCP sincroniza tudo com Figma
7. Gateway 2: Aprovação de Insights
8. Se aprovado → Fase 2
   Se rejeitado → Ajustes necessários
```

## 💡 Dicas

### Benchmark
- **Analise concorrentes diretos e indiretos** - Amplie o olhar
- **Identifique padrões de UX** - O que funciona bem?
- **Documente GAPs claros** - Onde está a oportunidade?
- **Use scores objetivos** - Design, Gamificação, Benefícios

### Pesquisa
- **Prefira formulários online** - Mais escalável que entrevistas
- **Mantenha curto** - 10-15 minutos máximo
- **Use lógica de pulos** - Não pergunte o que não é relevante
- **Valide hipóteses específicas** - Não faça perguntas genéricas

### Personas
- **Base em dados reais** - Não invente
- **Máximo 5 personas** - Foco é melhor que abrangência
- **Inclua citações reais** - Dá vida às personas
- **Documente comportamentos** - Não apenas demografia

### Jornadas
- **Mapeie o estado atual primeiro** - As-Is antes de To-Be
- **Identifique momentos críticos** - Picos de estresse e alívio
- **Priorize fricções** - Impacto x Esforço
- **Valide com usuários reais** - Não assuma

## 🔗 Links Úteis

- [Template de Benchmark](../../templates/deliverables/benchmark-template.md)
- [Template de Persona](../../templates/deliverables/persona-template.md)
- [Template de Jornada](../../templates/deliverables/jornada-template.md)
- [Metaprompt do Benchmark Analyst](../../docs/metaprompts/fase-1/benchmark-analyst.md)
- [Metaprompt do User Researcher](../../docs/metaprompts/fase-1/user-researcher.md)
- [Metaprompt do Persona Crafter](../../docs/metaprompts/fase-1/persona-crafter.md)
- [Metaprompt do Journey Mapper](../../docs/metaprompts/fase-1/journey-mapper.md)

## 📈 Métricas de Sucesso

- **Benchmark:** Mínimo 15 apps analisados, GAP claro identificado
- **Pesquisa:** Mínimo 100 respostas, 16 hipóteses validadas
- **Personas:** 2-5 personas, baseadas em clusters reais
- **Jornadas:** As-Is validado, To-Be com fricções priorizadas

---

**Última atualização:** 2026-04-23  
**Mantido por:** CX Operating System  
**Exemplo Real:** Sicoob Fun (3.500+ linhas documentadas)