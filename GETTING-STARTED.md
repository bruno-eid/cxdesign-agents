# 🚀 Getting Started - CX Operating System

## ⏱️ Início Rápido em 5 Minutos

Este guia vai te ajudar a começar a usar o CX Operating System rapidamente. Siga os passos abaixo e você estará pronto para criar seu primeiro projeto.

---

## 📋 Pré-requisitos

Antes de começar, certifique-se de ter:

- [ ] **Figma Desktop** instalado e rodando
- [ ] **Acesso** à pasta "Agentes Design"
- [ ] **Briefing** do projeto (mesmo que básico)
- [ ] **5 minutos** de tempo disponível

---

## 🎯 Passo 1: Entenda a Estrutura (1 min)

O sistema funciona em **5 fases sequenciais**:

```
Briefing → Fase 0 → Fase 1 → Fase 2 → Fase 3 → Fase 4 → Entrega
           ↓        ↓        ↓        ↓        ↓
        Gateway  Gateway  Gateway  Gateway  Gateway
        (Você)   (Você)   (Você)   (Você)   (Você)
```

**Cada fase:**
1. Agentes executam tarefas
2. Geram outputs
3. Você aprova ou solicita ajustes
4. Sistema avança para próxima fase

---

## 📁 Passo 2: Navegue pela Estrutura (1 min)

```
Agentes Design/
├── 📖 INDEX.md              ← Índice completo (comece aqui!)
├── 🚀 GETTING-STARTED.md    ← Você está aqui
├── 🏗️ ARQUITETURA-AGENTES.md ← 29 agentes detalhados
│
├── 🎯 projetos/             ← SEUS PROJETOS AQUI
│   ├── _template/           ← Copie para novo projeto
│   └── sicoob-fun/          ← Exemplo completo
│
├── 📦 outputs/              ← Resultados dos agentes
│   ├── estrategista/
│   ├── pesquisador/
│   ├── arquiteto/
│   ├── visual/
│   └── validador/
│
├── 📋 templates/            ← Templates de entregáveis
│   └── deliverables/
│       ├── fase-0/
│       ├── fase-1/
│       ├── fase-2/
│       ├── fase-3/
│       └── fase-4/
│
└── 📚 docs/                 ← Documentação técnica
    ├── metaprompts/         ← Prompts dos agentes
    ├── architecture/        ← Arquitetura do sistema
    └── workflows/           ← Fluxos de trabalho
```

**Dica:** Use o [INDEX.md](INDEX.md) para encontrar qualquer coisa rapidamente!

---

## 🆕 Passo 3: Crie Seu Primeiro Projeto (2 min)

### 3.1 Copie o Template

```bash
cd "Agentes Design/projetos"
cp -r _template/ meu-primeiro-projeto/
cd meu-primeiro-projeto/
```

### 3.2 Preencha o Briefing

Edite `briefing.md` com informações básicas:

```markdown
# Briefing - Meu Primeiro Projeto

## Contexto
[Descreva em 2-3 linhas o que precisa ser feito]

## Objetivos
- Objetivo 1
- Objetivo 2

## Público-Alvo
[Quem vai usar?]

## Restrições
- Técnicas: [Ex: React Native, Node.js]
- Negócio: [Ex: R$ 50k, 8 semanas]
- Design: [Ex: WCAG AA, marca existente]
```

**Exemplo Real:**
```markdown
# Briefing - App de Delivery

## Contexto
Criar app mobile para delivery de comida com foco em restaurantes locais.

## Objetivos
- Facilitar pedidos
- Aumentar ticket médio
- Fidelizar clientes

## Público-Alvo
Pessoas de 25-45 anos que pedem comida regularmente.

## Restrições
- Técnicas: React Native, Firebase
- Negócio: R$ 80k, 12 semanas
- Design: WCAG AA, marca já existe
```

---

## ▶️ Passo 4: Execute a Fase 0 (1 min)

### 4.1 Inicie o CX Master

O **CX Master** vai ler seu briefing e acionar o **Estrategista** (Fase 0).

**O que acontece:**
1. **Boundary Mapper** mapeia todas as restrições
2. **Scope Validator** valida viabilidade
3. Geram 3 documentos:
   - Contrato de Escopo
   - Matriz de Maturidade
   - Análise de Viabilidade

### 4.2 Revise os Outputs

Os documentos estarão em:
```
outputs/estrategista/
├── contratos/meu-projeto-contrato-v1.md
├── matrizes/meu-projeto-matriz-v1.md
└── analises/meu-projeto-analise-v1.md
```

### 4.3 Aprove no Gateway 1

**Checklist de Aprovação:**
- [ ] Contrato de escopo está completo?
- [ ] Restrições estão corretas?
- [ ] Viabilidade foi aprovada?
- [ ] Quality score ≥ 80?

**Decisão:**
- ✅ **Aprovar** → Avança para Fase 1
- ⚠️ **Aprovar com ressalvas** → Avança com ajustes menores
- ❌ **Reprovar** → Solicita iteração

---

## 🎉 Pronto! Você Completou o Setup

Agora você sabe:
- ✅ Como a estrutura funciona
- ✅ Onde encontrar recursos
- ✅ Como criar um projeto
- ✅ Como executar a primeira fase

---

## 📚 Próximos Passos

### Aprofunde seu Conhecimento

| Recurso | Quando Usar | Link |
|---------|-------------|------|
| **Arquitetura de Agentes** | Entender todos os 29 agentes | [ARQUITETURA-AGENTES.md](ARQUITETURA-AGENTES.md) |
| **INDEX** | Encontrar qualquer recurso | [INDEX.md](INDEX.md) |
| **Best Practices** | Aprender boas práticas | [BEST-PRACTICES.md](BEST-PRACTICES.md) |
| **FAQ** | Resolver dúvidas comuns | [FAQ.md](FAQ.md) |

### Explore as Fases

| Fase | O Que Faz | Duração | Link |
|------|-----------|---------|------|
| **Fase 0** | Mapeia fronteiras e valida viabilidade | 3-5 dias | [docs/metaprompts/fase-0-estrategista/](docs/metaprompts/fase-0-estrategista/) |
| **Fase 1** | Pesquisa usuários e cria personas | 1-2 semanas | [docs/metaprompts/fase-1-pesquisador/](docs/metaprompts/fase-1-pesquisador/) |
| **Fase 2** | Desenha arquitetura e service design | 2-3 semanas | [docs/metaprompts/fase-2-arquiteto/](docs/metaprompts/fase-2-arquiteto/) |
| **Fase 3** | Cria design system e protótipos | 2-3 semanas | [docs/metaprompts/fase-3-visual/](docs/metaprompts/fase-3-visual/) |
| **Fase 4** | Valida qualidade e acessibilidade | 1 semana | [docs/metaprompts/fase-4-validador/](docs/metaprompts/fase-4-validador/) |

### Veja um Exemplo Completo

Explore o projeto **Sicoob Fun** para ver um exemplo real de ponta a ponta:

```bash
cd "Agentes Design/projetos/sicoob-fun"
```

**O que você vai encontrar:**
- Briefing completo
- Todas as 5 fases executadas
- Outputs de cada agente
- Decisões documentadas
- Lições aprendidas

---

## 🔍 Entendendo os 29 Agentes

### Visão Geral

O sistema possui **29 agentes especializados**:

```
1 CX Master (orquestrador)
  ↓
5 Macro Agentes (coordenadores de fase)
  ↓
23 Subagentes (executores especializados)
```

### Por Fase

**Fase 0: Estrategista (2 subagentes)**
- Boundary Mapper
- Scope Validator

**Fase 1: Pesquisador (7 subagentes)** ⭐
- Benchmark Analyst
- User Researcher
- Persona Crafter
- Journey Mapper
- Empathy Map Creator (novo)
- Golden Thread Generator (novo)
- Survey Designer (novo)

**Fase 2: Arquiteto (5 subagentes)** ⭐
- UX Designer
- Service Designer
- IA Architect
- Interaction Designer (novo)
- Content Strategist (novo)

**Fase 3: Visual (7 subagentes)** ⭐
- Brand Strategist (novo)
- UI Designer
- Design System Manager
- UX Writer (novo)
- Motion Designer (novo)
- Prototyper
- Visual QA (novo)

**Fase 4: Validador (5 subagentes)** ⭐
- Requirements Validator
- Accessibility Validator
- Usability Tester (novo)
- Performance Analyst (novo)
- QA Analyst

**Total:** 29 agentes (10 novos na v2.0)

---

## 💡 Dicas Importantes

### ✅ DO (Faça)

1. **Documente decisões**
   - Use `decisoes.md` em cada fase
   - Explique o "porquê" de cada escolha

2. **Aprove com atenção**
   - Revise todos os outputs
   - Valide quality scores
   - Dê feedback específico

3. **Use templates**
   - Copie de `templates/`
   - Adapte para seu contexto
   - Mantenha estrutura

4. **Versione arquivos**
   - Use v1, v2, v3...
   - Não sobrescreva versões
   - Mantenha histórico

5. **Consulte exemplos**
   - Veja Sicoob Fun
   - Use como referência
   - Adapte para seu caso

### ❌ DON'T (Não Faça)

1. **Não pule gateways**
   - Aprovação humana é obrigatória
   - Não avance sem revisar

2. **Não ignore quality scores**
   - Score < 70 = iteração obrigatória
   - Score < 80 = atenção necessária

3. **Não misture projetos**
   - Um projeto = uma pasta
   - Mantenha isolamento

4. **Não sobrescreva versões**
   - Crie nova versão
   - Preserve histórico

5. **Não ignore documentação**
   - Cada fase deve ser documentada
   - Decisões devem ser registradas

---

## 🆘 Precisa de Ajuda?

### Recursos de Suporte

| Problema | Solução | Link |
|----------|---------|------|
| **Dúvida geral** | Consulte o FAQ | [FAQ.md](FAQ.md) |
| **Não sei onde está algo** | Use o índice | [INDEX.md](INDEX.md) |
| **Quero ver exemplo** | Veja Sicoob Fun | [projetos/sicoob-fun/](projetos/sicoob-fun/) |
| **Preciso de template** | Veja templates | [templates/](templates/) |
| **Erro técnico** | Veja troubleshooting | [FAQ.md#troubleshooting](FAQ.md) |

### Perguntas Frequentes

**P: Quanto tempo leva um projeto completo?**
R: 6-9 semanas em média (varia por complexidade)

**P: Posso pular uma fase?**
R: Não. As fases são sequenciais e dependentes.

**P: Posso usar apenas alguns agentes?**
R: Sim, mas recomendamos o fluxo completo para melhor resultado.

**P: Como funciona a integração com Figma?**
R: Via MCP (Model Context Protocol). Veja [integrations/figma/](integrations/figma/)

**P: Preciso aprovar em todos os gateways?**
R: Sim. Aprovação humana é obrigatória entre fases.

---

## 📊 Métricas de Sucesso

### Como Saber se Está Indo Bem?

| Métrica | Meta | Como Medir |
|---------|------|------------|
| **Quality Score** | ≥ 85/100 | Média de todas as fases |
| **Tempo por Fase** | Dentro do estimado | Compare com tabela de duração |
| **Iterações** | ≤ 2 por fase | Conte quantas vezes precisou iterar |
| **Taxa de Aprovação** | 100% | Todos os gateways aprovados |
| **Satisfação** | ≥ 4.5/5 | Survey pós-projeto |

### Benchmarks

| Fase | Duração Ideal | Iterações Médias | Score Mínimo |
|------|---------------|------------------|--------------|
| Fase 0 | 3-5 dias | 1 | 80 |
| Fase 1 | 1-2 semanas | 1-2 | 80 |
| Fase 2 | 2-3 semanas | 1-2 | 80 |
| Fase 3 | 2-3 semanas | 1-2 | 85 |
| Fase 4 | 1 semana | 1 | 90 |

---

## 🎯 Checklist de Início

Antes de começar seu projeto, verifique:

### Preparação
- [ ] Li este guia completo
- [ ] Entendi a estrutura de 5 fases
- [ ] Tenho Figma Desktop rodando
- [ ] Tenho acesso à pasta "Agentes Design"
- [ ] Tenho briefing (mesmo que básico)

### Estrutura
- [ ] Copiei template para meu projeto
- [ ] Preenchi briefing.md
- [ ] Criei README.md do projeto
- [ ] Iniciei PROJETO.md

### Conhecimento
- [ ] Sei onde encontrar templates
- [ ] Sei onde ficam os outputs
- [ ] Entendi o sistema de gateways
- [ ] Sei como aprovar/reprovar

### Próximos Passos
- [ ] Executar Fase 0
- [ ] Revisar outputs
- [ ] Aprovar Gateway 1
- [ ] Avançar para Fase 1

---

## 🚀 Comece Agora!

Você está pronto para criar seu primeiro projeto com o CX Operating System!

**Próxima ação:**
```bash
cd "Agentes Design/projetos"
cp -r _template/ meu-projeto/
cd meu-projeto/
# Edite briefing.md e comece!
```

**Boa sorte! 🎉**

---

## 📚 Recursos Adicionais

### Documentação Completa
- [Arquitetura de Agentes](ARQUITETURA-AGENTES.md) - 29 agentes detalhados
- [Índice Completo](INDEX.md) - Navegação completa
- [Plano Mestre](PLANO-MESTRE.md) - Roadmap e estratégia
- [Best Practices](BEST-PRACTICES.md) - Boas práticas
- [FAQ](FAQ.md) - Perguntas frequentes

### Exemplos e Templates
- [Projeto Sicoob Fun](projetos/sicoob-fun/) - Exemplo completo
- [Template de Projeto](projetos/_template/) - Template base
- [Templates por Fase](templates/) - Todos os templates

### Integrações
- [Figma MCP](integrations/figma/) - Integração com Figma
- [CX Brain](core/cx-brain/) - Sistema de memória
- [Gateways](core/gateways/) - Sistema de aprovação

---

**Versão:** 2.0.0  
**Última Atualização:** 2026-04-23  
**Tempo de Leitura:** 5 minutos  
**Nível:** Iniciante