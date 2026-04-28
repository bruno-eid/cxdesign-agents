# 💡 Best Practices - CX Operating System

## 🎯 Visão Geral

Este documento consolida as melhores práticas para usar o CX Operating System de forma eficiente e profissional. Siga estas diretrizes para garantir qualidade, consistência e escalabilidade em seus projetos.

---

## 📋 Índice

1. [Organização de Projetos](#organização-de-projetos)
2. [Nomenclatura e Padrões](#nomenclatura-e-padrões)
3. [Documentação](#documentação)
4. [Uso dos Agentes](#uso-dos-agentes)
5. [Gateways e Aprovações](#gateways-e-aprovações)
6. [Versionamento](#versionamento)
7. [Colaboração](#colaboração)
8. [Qualidade](#qualidade)
9. [Performance](#performance)
10. [Segurança e Privacidade](#segurança-e-privacidade)

---

## 📁 Organização de Projetos

### ✅ DO (Faça)

#### 1. Use a Estrutura Padrão

```
[nome-projeto]/
├── README.md                  # Visão geral
├── PROJETO.md                 # Documento principal
├── briefing.md                # Briefing inicial
├── fase-0/                    # Outputs da fase
├── fase-1/
├── fase-2/
├── fase-3/
├── fase-4/
└── entrega-final/
```

**Por quê:** Facilita navegação e colaboração.

#### 2. Mantenha Um Projeto Por Pasta

```
✅ CORRETO:
projetos/
├── app-delivery/
├── redesign-site/
└── dashboard-admin/

❌ ERRADO:
projetos/
└── todos-os-projetos/
    ├── app-delivery/
    ├── redesign-site/
    └── dashboard-admin/
```

**Por quê:** Isolamento e organização clara.

#### 3. Documente Desde o Início

```markdown
# README.md do Projeto

## Status
🟢 Em Andamento | Fase 2 de 5

## Equipe
- Product Owner: Maria Silva
- Designer: João Santos
- Developer: Ana Costa

## Links Rápidos
- [Briefing](briefing.md)
- [Figma](link)
- [Jira](link)
```

**Por quê:** Contexto sempre disponível.

### ❌ DON'T (Não Faça)

#### 1. Não Misture Projetos

```
❌ ERRADO:
outputs/pesquisador/personas/
├── app-delivery-persona-ana.json
├── redesign-site-persona-carlos.json  # Misturado!
└── app-delivery-persona-maria.json
```

**Por quê:** Confusão e dificuldade de manutenção.

#### 2. Não Pule a Estrutura

```
❌ ERRADO:
meu-projeto/
├── arquivos-aleatorios.md
├── pasta1/
└── pasta2/
```

**Por quê:** Dificulta colaboração e uso dos agentes.

---

## 🏷️ Nomenclatura e Padrões

### Padrão Geral

```
[projeto]-[tipo]-[versao].[extensao]
```

### Exemplos Corretos

```
✅ Arquivos:
sicoob-fun-contrato-escopo-v1.md
sicoob-fun-persona-ana-v2.json
sicoob-fun-wireframe-home-v3.fig
sicoob-fun-prototipo-final-v1.fig

✅ Pastas:
fase-0-estrategista/
fase-1-pesquisador/
design-system/
entrega-final/
```

### Regras de Nomenclatura

#### 1. Use Minúsculas

```
✅ CORRETO: meu-projeto
❌ ERRADO: Meu-Projeto, MEU-PROJETO
```

#### 2. Use Hífens (não underscores)

```
✅ CORRETO: contrato-escopo.md
❌ ERRADO: contrato_escopo.md
```

#### 3. Seja Descritivo

```
✅ CORRETO: sicoob-fun-persona-ana-consistente-v1.json
❌ ERRADO: persona1.json
```

#### 4. Sempre Versione

```
✅ CORRETO: wireframe-home-v1.fig, wireframe-home-v2.fig
❌ ERRADO: wireframe-home.fig, wireframe-home-final.fig
```

#### 5. Use Datas em Logs

```
✅ CORRETO: decisoes-2026-04-23.md
❌ ERRADO: decisoes.md
```

### Nomenclatura por Tipo

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| **Contrato** | `[projeto]-contrato-escopo-v[N].md` | `app-delivery-contrato-escopo-v1.md` |
| **Persona** | `[projeto]-persona-[nome]-v[N].json` | `app-delivery-persona-ana-v1.json` |
| **Wireframe** | `[projeto]-wireframe-[tela]-v[N].fig` | `app-delivery-wireframe-home-v2.fig` |
| **Protótipo** | `[projeto]-prototipo-[tipo]-v[N].fig` | `app-delivery-prototipo-mobile-v1.fig` |
| **Relatório** | `[projeto]-relatorio-[tipo]-v[N].md` | `app-delivery-relatorio-validacao-v1.md` |

---

## 📝 Documentação

### Princípios

1. **Documente Decisões, Não Apenas Resultados**
2. **Explique o "Porquê", Não Apenas o "O Quê"**
3. **Mantenha Atualizado**
4. **Seja Conciso mas Completo**

### Documentos Obrigatórios

#### 1. README.md do Projeto

**Conteúdo Mínimo:**
- Status atual
- Descrição breve
- Equipe
- Links rápidos
- Histórico de versões

**Atualize:** A cada mudança significativa

#### 2. PROJETO.md (Documento Principal)

**Conteúdo Mínimo:**
- Timeline completo
- Fases completadas
- Decisões principais
- Riscos e mitigações
- Métricas

**Atualize:** Semanalmente

#### 3. decisoes.md (Por Fase)

**Formato:**
```markdown
## Decisão: [Título]
**Data:** 2026-04-23
**Responsável:** [Nome]

### Contexto
[Por que essa decisão foi necessária?]

### Alternativas Consideradas
1. Opção A: [descrição]
2. Opção B: [descrição]

### Decisão
[Opção escolhida e justificativa]

### Impacto
- Positivo: [benefícios]
- Negativo: [trade-offs]
- Riscos: [riscos]
```

**Atualize:** Sempre que tomar uma decisão importante

### Boas Práticas de Escrita

#### ✅ DO

1. **Use Markdown Estruturado**
```markdown
# Título Principal
## Seção
### Subseção

- Lista
- De
- Itens

**Negrito** para ênfase
*Itálico* para termos técnicos
```

2. **Adicione Metadados**
```markdown
---
projeto: sicoob-fun
fase: fase-1
tipo: persona
versao: v1
data: 2026-04-23
autor: pesquisador-agent
quality_score: 88
---
```

3. **Use Tabelas para Comparações**
```markdown
| Opção | Prós | Contras | Score |
|-------|------|---------|-------|
| A     | X, Y | Z       | 85    |
| B     | W    | V, U    | 72    |
```

4. **Inclua Links Relativos**
```markdown
Ver [Briefing](../briefing.md)
Ver [Fase 0](../fase-0/contrato-escopo.md)
```

#### ❌ DON'T

1. **Não Use Linguagem Vaga**
```
❌ "Melhorar a experiência"
✅ "Reduzir tempo de checkout em 30%"
```

2. **Não Documente Apenas Sucessos**
```
❌ Só documentar o que funcionou
✅ Documentar também o que não funcionou e por quê
```

3. **Não Deixe Para Depois**
```
❌ "Vou documentar no final"
✅ Documente enquanto faz
```

---

## 🤖 Uso dos Agentes

### Entendendo a Hierarquia

```
CX Master (Orquestrador)
    ↓
Macro Agente (Coordenador de Fase)
    ↓
Subagentes (Executores Especializados)
```

### Boas Práticas por Fase

#### Fase 0: Estrategista

**✅ DO:**
- Forneça briefing completo
- Liste todas as restrições conhecidas
- Seja realista sobre orçamento e prazo
- Documente premissas

**❌ DON'T:**
- Não omita restrições importantes
- Não subestime complexidade
- Não pule esta fase

**Tempo Ideal:** 3-5 dias

#### Fase 1: Pesquisador

**✅ DO:**
- Forneça dados reais quando possível
- Valide personas com stakeholders
- Documente fontes de dados
- Crie mapas de empatia profundos
- Use Golden Thread para conectar dor → solução → benefício

**❌ DON'T:**
- Não crie personas baseadas em suposições
- Não pule pesquisa com usuários
- Não ignore dados qualitativos

**Tempo Ideal:** 1-2 semanas

**Novos Subagentes:**
- **Empathy Map Creator:** Use para entender profundamente o usuário
- **Golden Thread Generator:** Use para validar proposta de valor
- **Survey Designer:** Use para coletar dados quantitativos e qualitativos

#### Fase 2: Arquiteto

**✅ DO:**
- Referencie jornadas As-Is da Fase 1
- Documente gaps identificados
- Crie service blueprint completo
- Justifique mudanças propostas
- Defina interações detalhadamente

**❌ DON'T:**
- Não ignore as jornadas As-Is
- Não pule o service design
- Não crie wireframes sem contexto

**Tempo Ideal:** 2-3 semanas

**Novos Subagentes:**
- **Service Designer:** Use para mapear processos end-to-end
- **Interaction Designer:** Use para definir microinterações
- **Content Strategist:** Use para estruturar conteúdo

#### Fase 3: Visual

**✅ DO:**
- Aplique branding consistentemente
- Use design system
- Documente decisões visuais
- Crie microcopy claro
- Especifique animações

**❌ DON'T:**
- Não ignore guidelines de marca
- Não crie componentes sem documentar
- Não pule acessibilidade visual

**Tempo Ideal:** 2-3 semanas

**Novos Subagentes:**
- **Brand Strategist:** Use para aplicar posicionamento de marca
- **UX Writer:** Use para criar microcopy e conteúdo
- **Motion Designer:** Use para definir animações
- **Visual QA:** Use para garantir consistência visual

#### Fase 4: Validador

**✅ DO:**
- Teste com usuários reais
- Valide WCAG 2.1 AA
- Meça performance
- Documente todos os testes
- Crie handoff completo

**❌ DON'T:**
- Não pule testes de usabilidade
- Não ignore acessibilidade
- Não entregue sem validar

**Tempo Ideal:** 1 semana

**Novos Subagentes:**
- **Usability Tester:** Use para testar com usuários
- **Performance Analyst:** Use para otimizar performance

### Dicas de Uso

#### 1. Confie nos Agentes, Mas Valide

```
✅ Agente gera output → Você valida → Aprova/Ajusta
❌ Você faz tudo manualmente
```

#### 2. Use Feedback Específico

```
✅ "A persona Ana precisa de objetivos mais específicos e citações reais"
❌ "Melhorar personas"
```

#### 3. Itere Quando Necessário

```
✅ Score < 80 → Solicite iteração com feedback claro
❌ Aceite qualidade baixa para "ganhar tempo"
```

---

## 🛑 Gateways e Aprovações

### Princípios

1. **Aprovação Humana é Obrigatória**
2. **Revise com Atenção**
3. **Dê Feedback Específico**
4. **Documente Decisão**

### Checklist de Aprovação

#### Gateway 1 (Fase 0)

- [ ] Contrato de escopo completo?
- [ ] Todas as restrições mapeadas?
- [ ] Viabilidade aprovada?
- [ ] Matriz de maturidade calculada?
- [ ] Quality score ≥ 80?
- [ ] Sem issues críticas?

#### Gateway 2 (Fase 1)

- [ ] Benchmark realizado?
- [ ] Personas validadas?
- [ ] Jornadas As-Is mapeadas?
- [ ] Mapas de empatia criados?
- [ ] Golden Thread documentado?
- [ ] Quality score ≥ 80?

#### Gateway 3 (Fase 2)

- [ ] Jornadas As-Is analisadas?
- [ ] Gaps identificados?
- [ ] Jornada To-Be desenhada?
- [ ] Service blueprint completo?
- [ ] Wireframes criados?
- [ ] Quality score ≥ 80?

#### Gateway 4 (Fase 3)

- [ ] Branding aplicado?
- [ ] Design system criado/atualizado?
- [ ] Protótipos finalizados?
- [ ] Microcopy criado?
- [ ] Animações especificadas?
- [ ] Quality score ≥ 85?

#### Gateway 5 (Fase 4)

- [ ] Testes de usabilidade realizados?
- [ ] WCAG 2.1 AA validado?
- [ ] Performance testada?
- [ ] Documentação completa?
- [ ] Handoff preparado?
- [ ] Quality score ≥ 90?

### Decisões de Gateway

#### ✅ Aprovar

**Quando:**
- Quality score ≥ 80 (≥ 85 Fase 3, ≥ 90 Fase 4)
- Todos os entregáveis presentes
- Sem issues críticas
- Alinhado com objetivos

**Ação:** Avança para próxima fase

#### ⚠️ Aprovar com Ressalvas

**Quando:**
- Quality score 70-79
- Pequenos ajustes necessários
- Issues não-críticas
- Prazo apertado

**Ação:** Avança com lista de ajustes

#### ❌ Reprovar

**Quando:**
- Quality score < 70
- Issues críticas presentes
- Entregáveis faltando
- Desalinhado com objetivos

**Ação:** Solicita iteração com feedback

### Documentando Aprovações

```markdown
# Gateway [N] - [Fase]

## Decisão
✅ Aprovado

## Justificativa
- Quality score: 87/100
- Todos os entregáveis presentes
- Sem issues críticas
- Alinhado com objetivos

## Feedback
- Excelente trabalho nas personas
- Service blueprint muito detalhado
- Sugestão: adicionar mais exemplos de uso

## Próximos Passos
- Avançar para Fase [N+1]
- Implementar sugestões (opcional)

**Aprovado por:** [Nome]
**Data:** 2026-04-23
```

---

## 🔄 Versionamento

### Princípios

1. **Sempre Versione**
2. **Nunca Sobrescreva**
3. **Documente Mudanças**
4. **Mantenha Histórico**

### Sistema de Versões

```
v1 → v2 → v3 → v4 ...
```

**Não use:**
- `final`, `final2`, `final-final`
- `novo`, `antigo`
- Datas no nome (use metadados)

### Quando Criar Nova Versão

#### ✅ Crie Nova Versão Quando:

1. **Mudança Significativa**
```
v1: Persona básica
v2: Persona com objetivos específicos e citações
```

2. **Iteração Solicitada**
```
v1: Reprovado no gateway
v2: Ajustado conforme feedback
```

3. **Mudança de Escopo**
```
v1: MVP
v2: Versão completa
```

#### ❌ Não Crie Nova Versão Para:

1. **Correções Mínimas**
```
Typos, formatação → Edite a versão atual
```

2. **Metadados**
```
Adicionar tags, categorias → Edite a versão atual
```

### Changelog

Documente mudanças entre versões:

```markdown
## Changelog

### v3 (2026-04-25)
- Adicionado objetivos específicos
- Incluído citações reais de entrevistas
- Refinado contexto de uso

### v2 (2026-04-23)
- Ajustado perfil demográfico
- Adicionado frustrações principais

### v1 (2026-04-20)
- Versão inicial
```

---

## 👥 Colaboração

### Princípios

1. **Comunique Claramente**
2. **Documente Decisões**
3. **Respeite Processos**
4. **Compartilhe Conhecimento**

### Trabalhando em Equipe

#### ✅ DO

1. **Comunique Mudanças**
```markdown
## Atualização - 2026-04-23

**Mudança:** Alterado escopo para priorizar iOS

**Motivo:** 70% do público usa iOS

**Impacto:** Reduz timeline em 2 semanas

**Ação Necessária:** Revisar wireframes Android
```

2. **Use Comentários**
```markdown
<!-- TODO: Validar com stakeholder -->
<!-- FIXME: Dados de NPS desatualizados -->
<!-- NOTE: Decisão tomada em reunião 23/04 -->
```

3. **Compartilhe Contexto**
```markdown
## Contexto da Decisão

**Situação:** Precisávamos escolher entre React e Vue

**Participantes:** João (Dev), Maria (PO), Ana (Designer)

**Decisão:** React

**Por quê:** Equipe já tem experiência, ecossistema maior
```

#### ❌ DON'T

1. **Não Faça Mudanças Sem Comunicar**
2. **Não Delete Versões Antigas**
3. **Não Ignore Feedback**

### Handoffs Entre Fases

#### Fase N → Fase N+1

**Checklist:**
- [ ] Todos os outputs documentados
- [ ] Decisões registradas
- [ ] Contexto preservado
- [ ] Links funcionando
- [ ] Gateway aprovado

**Template de Handoff:**
```markdown
# Handoff: Fase [N] → Fase [N+1]

## Outputs Gerados
- [Lista de arquivos]

## Decisões Principais
- [Lista de decisões]

## Contexto Importante
- [Informações críticas]

## Próximos Passos
- [O que a próxima fase deve fazer]

## Contato
**Responsável Fase [N]:** [Nome]
**Responsável Fase [N+1]:** [Nome]
```

---

## ✨ Qualidade

### Princípios

1. **Qualidade > Velocidade**
2. **Itere Quando Necessário**
3. **Valide Continuamente**
4. **Aprenda com Erros**

### Quality Scores

| Score | Classificação | Ação |
|-------|---------------|------|
| 90-100 | Excelente | Pronto para uso |
| 80-89 | Bom | Pequenos ajustes opcionais |
| 70-79 | Aceitável | Melhorias recomendadas |
| < 70 | Insuficiente | Iteração obrigatória |

### Critérios de Qualidade

#### 1. Completude (25%)

**Perguntas:**
- Todos os entregáveis estão presentes?
- Todas as seções foram preenchidas?
- Há gaps de informação?

#### 2. Qualidade (35%)

**Perguntas:**
- Atende aos critérios de sucesso?
- Está bem fundamentado?
- É acionável?

#### 3. Consistência (20%)

**Perguntas:**
- Alinhado com fases anteriores?
- Usa nomenclatura padrão?
- Segue guidelines?

#### 4. Viabilidade (20%)

**Perguntas:**
- É implementável?
- Está dentro do escopo?
- É realista?

### Melhorando Quality Scores

#### Se Score < 70

1. **Identifique Gaps**
```
O que está faltando?
O que está incompleto?
O que está errado?
```

2. **Priorize Correções**
```
Crítico → Alto → Médio → Baixo
```

3. **Itere com Feedback Claro**
```
"Adicionar objetivos específicos nas personas"
"Incluir citações reais de entrevistas"
"Validar dados de NPS com fonte"
```

4. **Valide Novamente**
```
Score melhorou?
Gaps foram preenchidos?
Qualidade aumentou?
```

---

## ⚡ Performance

### Princípios

1. **Otimize Processos**
2. **Reutilize Recursos**
3. **Automatize Quando Possível**
4. **Monitore Métricas**

### Otimizando Tempo

#### Por Fase

| Fase | Tempo Ideal | Como Otimizar |
|------|-------------|---------------|
| Fase 0 | 3-5 dias | Briefing completo desde o início |
| Fase 1 | 1-2 semanas | Dados reais disponíveis |
| Fase 2 | 2-3 semanas | Jornadas As-Is bem documentadas |
| Fase 3 | 2-3 semanas | Design system existente |
| Fase 4 | 1 semana | Testes planejados antecipadamente |

#### Dicas

1. **Prepare Dados Antecipadamente**
```
✅ Tenha dados de usuários prontos antes da Fase 1
✅ Tenha brand guidelines prontos antes da Fase 3
```

2. **Reutilize Templates**
```
✅ Use templates existentes
✅ Adapte de projetos anteriores
```

3. **Paraleliz quando Possível**
```
✅ Subagentes trabalham em paralelo
❌ Não pule fases para "ganhar tempo"
```

### Métricas de Performance

**Monitore:**
- Tempo por fase
- Número de iterações
- Taxa de aprovação em gateways
- Quality score médio

**Meta:**
- Tempo dentro do estimado
- ≤ 2 iterações por fase
- 100% aprovação em gateways
- Quality score ≥ 85

---

## 🔒 Segurança e Privacidade

### Princípios

1. **Proteja Dados Sensíveis**
2. **Respeite LGPD**
3. **Documente Consentimentos**
4. **Anonimize Quando Possível**

### Boas Práticas

#### ✅ DO

1. **Anonimize Dados de Usuários**
```
✅ "Usuário A, 32 anos, analista"
❌ "João Silva, CPF 123.456.789-00"
```

2. **Obtenha Consentimento**
```
✅ Termo de consentimento assinado
✅ Gravações autorizadas
✅ Dados anonimizados
```

3. **Proteja Informações Confidenciais**
```
✅ Não compartilhe dados financeiros
✅ Não exponha estratégias de negócio
✅ Use NDAs quando necessário
```

#### ❌ DON'T

1. **Não Exponha Dados Pessoais**
2. **Não Compartilhe Sem Autorização**
3. **Não Ignore LGPD**

---

## 📚 Recursos Adicionais

### Documentação
- [Arquitetura de Agentes](ARQUITETURA-AGENTES.md)
- [Getting Started](GETTING-STARTED.md)
- [INDEX](INDEX.md)
- [FAQ](FAQ.md)

### Templates
- [Templates por Fase](templates/)
- [Template de Projeto](projetos/_template/)

### Exemplos
- [Sicoob Fun](projetos/sicoob-fun/)

---

**Versão:** 2.0.0  
**Última Atualização:** 2026-04-23  
**Mantenedor:** CX Operating System Team  
**Feedback:** Sempre bem-vindo!