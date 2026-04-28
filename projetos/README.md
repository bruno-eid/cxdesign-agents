# 📂 Guia de Projetos - CX Operating System

## 🎯 Visão Geral

Esta pasta contém todos os projetos gerenciados pelo CX Operating System. Cada projeto segue uma estrutura padronizada que facilita colaboração, documentação e execução das 5 fases do sistema.

---

## 📁 Estrutura de Pastas

```
projetos/
├── README.md              # 👈 Você está aqui
├── NOMENCLATURA.md        # Padrões de nomenclatura
├── _template/             # Template padrão para novos projetos
│   ├── README.md
│   ├── PROJETO.md
│   ├── briefing.md
│   ├── fase-0/
│   ├── fase-1/
│   ├── fase-2/
│   ├── fase-3/
│   ├── fase-4/
│   └── entrega-final/
├── sicoob-fun/            # Exemplo completo
└── [seu-projeto]/         # Seus projetos aqui
```

---

## 🚀 Criando um Novo Projeto

### Método 1: Copiar Template (Recomendado)

```bash
# 1. Copie o template
cp -r projetos/_template projetos/meu-projeto

# 2. Entre na pasta
cd projetos/meu-projeto

# 3. Edite os arquivos principais
# - README.md (informações do projeto)
# - briefing.md (briefing inicial)
# - PROJETO.md (documento principal)
```

### Método 2: Criar Manualmente

```bash
# 1. Crie a pasta
mkdir projetos/meu-projeto

# 2. Crie a estrutura
cd projetos/meu-projeto
mkdir fase-0 fase-1 fase-2 fase-3 fase-4 entrega-final

# 3. Crie os arquivos principais
touch README.md PROJETO.md briefing.md
```

---

## 📋 Estrutura Padrão de um Projeto

### Arquivos Principais

```
[nome-projeto]/
├── README.md              # Visão geral do projeto
├── PROJETO.md             # Documento principal (timeline, decisões)
├── briefing.md            # Briefing inicial
├── decisoes.md            # Log de decisões importantes
└── changelog.md           # Histórico de mudanças
```

### Pastas por Fase

```
[nome-projeto]/
├── fase-0/                # Estrategista
│   ├── contrato-escopo.md
│   ├── matriz-maturidade.json
│   ├── briefing-expandido.md
│   └── decisoes.md
│
├── fase-1/                # Pesquisador
│   ├── benchmark.md
│   ├── personas/
│   │   ├── persona-ana.json
│   │   └── persona-carlos.json
│   ├── jornadas-as-is/
│   │   └── jornada-compra-as-is.md
│   ├── empathy-maps/
│   │   └── empathy-map-ana.md
│   ├── golden-thread.md
│   ├── surveys/
│   │   └── survey-satisfacao.md
│   └── decisoes.md
│
├── fase-2/                # Arquiteto
│   ├── jornadas-to-be/
│   │   └── jornada-compra-to-be.md
│   ├── service-blueprint.md
│   ├── wireframes/
│   │   ├── wireframe-home.fig
│   │   └── wireframe-checkout.fig
│   ├── interactions/
│   │   └── interaction-specs.md
│   ├── content-strategy.md
│   └── decisoes.md
│
├── fase-3/                # Visual
│   ├── brand-strategy.md
│   ├── mockups/
│   │   ├── mockup-home-v1.fig
│   │   └── mockup-checkout-v1.fig
│   ├── ux-writing/
│   │   ├── microcopy.md
│   │   └── tone-of-voice.md
│   ├── motion-specs/
│   │   └── animations.md
│   ├── design-system/
│   │   └── components.fig
│   ├── prototipos/
│   │   └── prototipo-final-v1.fig
│   └── decisoes.md
│
├── fase-4/                # Validador
│   ├── usability-tests/
│   │   ├── teste-usuario-1.md
│   │   └── teste-usuario-2.md
│   ├── acessibilidade/
│   │   └── relatorio-wcag.md
│   ├── performance/
│   │   └── analise-performance.md
│   ├── relatorios/
│   │   └── relatorio-final.md
│   └── decisoes.md
│
└── entrega-final/         # Entrega
    ├── handoff-dev.md
    ├── documentacao-completa.md
    ├── assets/
    └── links.md
```

---

## 📝 Templates de Arquivos

### README.md do Projeto

```markdown
# [Nome do Projeto]

## 📊 Status
🟢 Em Andamento | Fase 2 de 5

## 📋 Informações Básicas

**Cliente:** [Nome do Cliente]  
**Tipo:** [App Mobile / Website / Design System / etc]  
**Prazo:** [Data de Entrega]  
**Orçamento:** [Valor ou N/A]

## 👥 Equipe

- **Product Owner:** [Nome]
- **Designer:** [Nome]
- **Developer:** [Nome]
- **Stakeholders:** [Nomes]

## 🎯 Objetivos

1. [Objetivo 1]
2. [Objetivo 2]
3. [Objetivo 3]

## 📈 Métricas de Sucesso

- [Métrica 1]: [Meta]
- [Métrica 2]: [Meta]
- [Métrica 3]: [Meta]

## 🔗 Links Rápidos

- [Briefing](briefing.md)
- [Documento Principal](PROJETO.md)
- [Figma](link)
- [Jira](link)
- [Drive](link)

## 📅 Timeline

| Fase | Status | Início | Fim | Quality Score |
|------|--------|--------|-----|---------------|
| Fase 0 | ✅ Completo | 01/04 | 05/04 | 87 |
| Fase 1 | 🔄 Em Andamento | 08/04 | - | - |
| Fase 2 | ⏳ Pendente | - | - | - |
| Fase 3 | ⏳ Pendente | - | - | - |
| Fase 4 | ⏳ Pendente | - | - | - |

## 📝 Notas

[Informações adicionais importantes]
```

### briefing.md

```markdown
# Briefing - [Nome do Projeto]

## 📋 Informações Básicas

**Data:** [Data]  
**Solicitante:** [Nome]  
**Tipo de Projeto:** [Tipo]

## 🎯 Contexto e Objetivos

### Contexto
[Descreva o contexto do projeto, problema a ser resolvido]

### Objetivos de Negócio
1. [Objetivo 1]
2. [Objetivo 2]
3. [Objetivo 3]

### Objetivos de UX
1. [Objetivo 1]
2. [Objetivo 2]
3. [Objetivo 3]

## 👥 Público-Alvo

**Primário:**
- Perfil: [Descrição]
- Idade: [Faixa etária]
- Comportamento: [Descrição]

**Secundário:**
- Perfil: [Descrição]
- Idade: [Faixa etária]
- Comportamento: [Descrição]

## 🎨 Referências e Inspirações

- [Link 1]: [Descrição]
- [Link 2]: [Descrição]
- [Link 3]: [Descrição]

## 🚫 Restrições

### Técnicas
- [Restrição 1]
- [Restrição 2]

### Negócio
- [Restrição 1]
- [Restrição 2]

### Design
- [Restrição 1]
- [Restrição 2]

## 📅 Prazos e Entregas

**Prazo Final:** [Data]

**Marcos Importantes:**
- [Marco 1]: [Data]
- [Marco 2]: [Data]
- [Marco 3]: [Data]

## 💰 Orçamento

**Valor Total:** [Valor ou N/A]  
**Distribuição:** [Como será distribuído]

## 📊 Métricas de Sucesso

**Como mediremos o sucesso?**
- [Métrica 1]: [Meta]
- [Métrica 2]: [Meta]
- [Métrica 3]: [Meta]

## 📎 Anexos

- [Documento 1]
- [Documento 2]
- [Documento 3]
```

### PROJETO.md (Documento Principal)

```markdown
# [Nome do Projeto] - Documento Principal

## 📊 Status Geral

**Versão:** 1.0  
**Última Atualização:** [Data]  
**Status:** 🟢 Em Andamento

---

## 📋 Índice

1. [Resumo Executivo](#resumo-executivo)
2. [Timeline Completo](#timeline-completo)
3. [Fases Completadas](#fases-completadas)
4. [Decisões Principais](#decisões-principais)
5. [Riscos e Mitigações](#riscos-e-mitigações)
6. [Métricas e KPIs](#métricas-e-kpis)
7. [Próximos Passos](#próximos-passos)

---

## 📝 Resumo Executivo

[Resumo do projeto, objetivos principais, status atual]

---

## 📅 Timeline Completo

### Fase 0: Estrategista
**Status:** ✅ Completo  
**Período:** 01/04 - 05/04  
**Quality Score:** 87/100

**Entregáveis:**
- ✅ Contrato de escopo
- ✅ Matriz de maturidade
- ✅ Briefing expandido

**Gateway 1:** ✅ Aprovado em 05/04

---

### Fase 1: Pesquisador
**Status:** 🔄 Em Andamento  
**Período:** 08/04 - [Em andamento]  
**Quality Score:** -

**Entregáveis:**
- ✅ Benchmark
- 🔄 Personas (em progresso)
- ⏳ Jornadas As-Is
- ⏳ Empathy Maps
- ⏳ Golden Thread
- ⏳ Surveys

**Gateway 2:** ⏳ Pendente

---

### Fase 2: Arquiteto
**Status:** ⏳ Pendente

---

### Fase 3: Visual
**Status:** ⏳ Pendente

---

### Fase 4: Validador
**Status:** ⏳ Pendente

---

## ✅ Fases Completadas

### Fase 0: Estrategista

**Principais Conquistas:**
- Escopo bem definido
- Restrições mapeadas
- Viabilidade confirmada

**Aprendizados:**
- [Aprendizado 1]
- [Aprendizado 2]

**Documentação:**
- [Link para fase-0/]

---

## 🎯 Decisões Principais

### Decisão 1: [Título]
**Data:** [Data]  
**Responsável:** [Nome]  
**Contexto:** [Por que essa decisão foi necessária]  
**Decisão:** [O que foi decidido]  
**Impacto:** [Impacto da decisão]

### Decisão 2: [Título]
**Data:** [Data]  
**Responsável:** [Nome]  
**Contexto:** [Por que essa decisão foi necessária]  
**Decisão:** [O que foi decidido]  
**Impacto:** [Impacto da decisão]

---

## ⚠️ Riscos e Mitigações

| Risco | Probabilidade | Impacto | Mitigação | Status |
|-------|---------------|---------|-----------|--------|
| [Risco 1] | Alta | Alto | [Como mitigar] | 🟢 Controlado |
| [Risco 2] | Média | Médio | [Como mitigar] | 🟡 Monitorando |
| [Risco 3] | Baixa | Alto | [Como mitigar] | 🟢 Controlado |

---

## 📊 Métricas e KPIs

### Quality Scores por Fase

| Fase | Score | Status |
|------|-------|--------|
| Fase 0 | 87 | ✅ Aprovado |
| Fase 1 | - | 🔄 Em andamento |
| Fase 2 | - | ⏳ Pendente |
| Fase 3 | - | ⏳ Pendente |
| Fase 4 | - | ⏳ Pendente |

### Métricas de Negócio

| Métrica | Meta | Atual | Status |
|---------|------|-------|--------|
| [Métrica 1] | [Meta] | [Valor] | 🟢 |
| [Métrica 2] | [Meta] | [Valor] | 🟡 |
| [Métrica 3] | [Meta] | [Valor] | 🔴 |

---

## 🚀 Próximos Passos

### Imediatos (Esta Semana)
- [ ] [Tarefa 1]
- [ ] [Tarefa 2]
- [ ] [Tarefa 3]

### Curto Prazo (Próximas 2 Semanas)
- [ ] [Tarefa 1]
- [ ] [Tarefa 2]

### Médio Prazo (Próximo Mês)
- [ ] [Tarefa 1]
- [ ] [Tarefa 2]

---

## 📎 Anexos e Links

- [Briefing](briefing.md)
- [Decisões](decisoes.md)
- [Changelog](changelog.md)
- [Figma](link)
- [Jira](link)

---

**Última Atualização:** [Data]  
**Próxima Revisão:** [Data]
```

---

## 🎯 Boas Práticas

### ✅ DO (Faça)

1. **Use o Template**
   - Sempre comece copiando `_template/`
   - Mantenha a estrutura padrão

2. **Documente Continuamente**
   - Atualize README.md semanalmente
   - Registre decisões em tempo real
   - Mantenha PROJETO.md atualizado

3. **Organize por Fase**
   - Cada fase tem sua pasta
   - Use subpastas para organizar entregáveis
   - Mantenha decisoes.md em cada fase

4. **Versione Corretamente**
   - Use v1, v2, v3 (não "final", "final2")
   - Nunca sobrescreva versões anteriores
   - Documente mudanças no changelog.md

5. **Nomeie Consistentemente**
   - Siga [NOMENCLATURA.md](NOMENCLATURA.md)
   - Use padrão: `[projeto]-[tipo]-[versao].[ext]`
   - Exemplo: `sicoob-fun-persona-ana-v1.json`

### ❌ DON'T (Não Faça)

1. **Não Misture Projetos**
   - Cada projeto em sua pasta
   - Não compartilhe arquivos entre projetos

2. **Não Pule Fases**
   - Siga a sequência: 0 → 1 → 2 → 3 → 4
   - Aguarde aprovação nos gateways

3. **Não Ignore Documentação**
   - Não deixe para documentar depois
   - Não omita decisões importantes

4. **Não Use Nomes Genéricos**
   - ❌ `arquivo.md`, `teste.fig`
   - ✅ `sicoob-fun-wireframe-home-v1.fig`

---

## 📊 Checklist de Projeto

### Início do Projeto

- [ ] Copiar template para nova pasta
- [ ] Renomear pasta com nome do projeto
- [ ] Preencher README.md
- [ ] Preencher briefing.md
- [ ] Criar PROJETO.md
- [ ] Adicionar equipe e stakeholders
- [ ] Definir métricas de sucesso

### Durante o Projeto

- [ ] Atualizar status semanalmente
- [ ] Documentar decisões importantes
- [ ] Manter changelog atualizado
- [ ] Registrar riscos e mitigações
- [ ] Atualizar quality scores
- [ ] Comunicar mudanças à equipe

### Fim de Cada Fase

- [ ] Revisar todos os entregáveis
- [ ] Calcular quality score
- [ ] Documentar decisões da fase
- [ ] Preparar para gateway
- [ ] Obter aprovação
- [ ] Fazer handoff para próxima fase

### Fim do Projeto

- [ ] Completar entrega-final/
- [ ] Criar handoff-dev.md
- [ ] Documentar lições aprendidas
- [ ] Arquivar projeto
- [ ] Compartilhar resultados

---

## 🔍 Encontrando Projetos

### Por Status

```bash
# Projetos em andamento
grep -r "🟢 Em Andamento" projetos/*/README.md

# Projetos completos
grep -r "✅ Completo" projetos/*/README.md
```

### Por Fase

```bash
# Projetos na Fase 1
grep -r "Fase 1" projetos/*/README.md | grep "Em Andamento"
```

### Por Equipe

```bash
# Projetos de um designer específico
grep -r "Designer: João" projetos/*/README.md
```

---

## 📚 Exemplos

### Projeto Completo

Veja [sicoob-fun/](sicoob-fun/) para um exemplo completo de projeto com todas as fases documentadas.

### Projetos por Tipo

**App Mobile:**
- [sicoob-fun/](sicoob-fun/) - App de investimentos

**Website:**
- *(adicione seus exemplos)*

**Design System:**
- *(adicione seus exemplos)*

---

## 🤝 Colaboração

### Trabalhando em Equipe

1. **Comunique Mudanças**
   - Atualize README.md
   - Notifique a equipe
   - Documente no changelog.md

2. **Use Comentários**
   ```markdown
   <!-- TODO: Validar com stakeholder -->
   <!-- FIXME: Dados desatualizados -->
   <!-- NOTE: Decisão tomada em reunião -->
   ```

3. **Compartilhe Contexto**
   - Mantenha PROJETO.md atualizado
   - Documente decisões
   - Explique o "porquê"

### Handoffs Entre Fases

Ao finalizar uma fase:

1. Complete todos os entregáveis
2. Documente decisões
3. Calcule quality score
4. Prepare resumo para próxima fase
5. Obtenha aprovação no gateway
6. Faça handoff formal

---

## 📞 Suporte

### Precisa de Ajuda?

1. **Documentação:** Consulte [INDEX.md](../INDEX.md)
2. **Best Practices:** Leia [BEST-PRACTICES.md](../BEST-PRACTICES.md)
3. **Nomenclatura:** Veja [NOMENCLATURA.md](NOMENCLATURA.md)
4. **Exemplo:** Analise [sicoob-fun/](sicoob-fun/)

### Problemas Comuns

**"Não sei por onde começar"**
→ Copie o template e preencha o briefing.md

**"Estrutura está confusa"**
→ Siga o template exatamente como está

**"Não sei como nomear arquivos"**
→ Consulte [NOMENCLATURA.md](NOMENCLATURA.md)

**"Quality score baixo"**
→ Revise [BEST-PRACTICES.md](../BEST-PRACTICES.md)

---

## 🎓 Recursos Adicionais

- [Getting Started](../GETTING-STARTED.md)
- [Arquitetura de Agentes](../ARQUITETURA-AGENTES.md)
- [Best Practices](../BEST-PRACTICES.md)
- [INDEX](../INDEX.md)

---

**Versão:** 1.0.0  
**Última Atualização:** 2026-04-23  
**Mantenedor:** CX Operating System Team

---

## 🚀 Comece Seu Projeto Agora!

```bash
# 1. Copie o template
cp -r projetos/_template projetos/meu-projeto

# 2. Entre na pasta
cd projetos/meu-projeto

# 3. Edite os arquivos
# - README.md
# - briefing.md
# - PROJETO.md

# 4. Comece pela Fase 0!
```

**Pronto para começar? Vamos criar experiências incríveis! 🎨✨**