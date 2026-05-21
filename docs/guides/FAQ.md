# ❓ FAQ - CX Operating System

## 📋 Perguntas Frequentes

Respostas rápidas para as dúvidas mais comuns sobre o CX Operating System.

---

## 🎯 Geral

### O que é o CX Operating System?

É um sistema multiagentes com **29 agentes especializados** que trabalham em conjunto para entregar experiências excepcionais. O sistema é organizado em **3 níveis hierárquicos** (CX Master, Macro Agentes e Subagentes) e opera em **5 fases sequenciais** com **5 Human Gateways** de aprovação.

### Qual a diferença entre v1.0 e v2.0?

**v1.0:**
- 20 agentes
- Documentação básica
- Poucos templates

**v2.0 (atual):**
- 29 agentes (+45%)
- 16.388+ linhas de documentação
- 12 templates profissionais
- Estrutura completa e organizada

### Por onde começar?

1. Leia o [GETTING-STARTED.md](GETTING-STARTED.md) (5 minutos)
2. Navegue pelo [INDEX.md](INDEX.md)
3. Revise a [ARQUITETURA-AGENTES.md](ARQUITETURA-AGENTES.md)
4. Escolha um template e comece!

---

## 🏗️ Arquitetura

### Quantos agentes existem no sistema?

**29 agentes no total:**
- 1 CX Master (Nível 1 - Orquestração)
- 5 Macro Agentes (Nível 2 - Coordenação)
- 23 Subagentes (Nível 3 - Execução)

### Quais são as 5 fases do processo?

1. **Fase 0 - Estrategista:** Boundary mapping e validação de escopo
2. **Fase 1 - Pesquisador:** Descoberta e pesquisa com usuários
3. **Fase 2 - Arquiteto:** Arquitetura de informação e UX
4. **Fase 3 - Visual:** Design visual e prototipagem
5. **Fase 4 - Validador:** Testes e validação de qualidade

### O que são os Human Gateways?

São **5 checkpoints obrigatórios** entre as fases onde humanos aprovam o trabalho antes de avançar. Garantem que o projeto está no caminho certo e evitam retrabalho.

**Gateways:**
- Gateway 1: Estratégia → Pesquisa
- Gateway 2: Pesquisa → Arquitetura
- Gateway 3: Arquitetura → Visual
- Gateway 4: Visual → Validação
- Gateway 5: Validação → Entrega

### O que é o CX Brain?

É o **sistema de memória** do CX Operating System com 3 camadas:
- **Short-Term Memory (Redis):** Contexto da sessão atual
- **Long-Term Memory (PostgreSQL):** Histórico de projetos
- **Semantic Memory (Qdrant):** Busca por similaridade

### O que é o EQ Motor?

É o **motor de inteligência emocional** que garante que todas as decisões considerem:
- Empatia com usuários
- Contexto emocional
- Impacto na experiência
- Dores e necessidades reais

---

## 📁 Estrutura e Organização

### Como está organizada a pasta do projeto?

```
Agentes Design/
├── README.md - Visão geral
├── ARQUITETURA-AGENTES.md - 29 agentes
├── INDEX.md - Navegação
├── GETTING-STARTED.md - Onboarding
├── BEST-PRACTICES.md - Melhores práticas
├── PROGRESSO.md - Status
├── FAQ.md - Este arquivo
├── templates/ - Templates reutilizáveis
├── projetos/ - Gestão de projetos
└── outputs/ - Entregas organizadas
```

### Onde ficam os templates?

Em `templates/` organizados por fase:
- `fase-0/` - Estratégia (2 templates)
- `fase-1/` - Pesquisa (3 templates)
- `fase-2/` - Arquitetura (2 templates)
- `fase-3/` - Visual (3 templates)
- `fase-4/` - Validação (2 templates)
- `checklists/` - Checklists de validação

### Como organizar um novo projeto?

1. Copie `projetos/_template/`
2. Renomeie para seu projeto
3. Siga a estrutura:
   ```
   seu-projeto/
   ├── 00-estrategia/
   ├── 01-pesquisa/
   ├── 02-arquitetura/
   ├── 03-visual/
   ├── 04-validacao/
   └── docs/
   ```

### Qual a nomenclatura padrão?

Consulte [projetos/NOMENCLATURA.md](projetos/NOMENCLATURA.md) para:
- Nomenclatura de arquivos
- Nomenclatura de pastas
- Versionamento
- Padrões de commits

---

## 📝 Templates

### Quantos templates existem?

**12 templates profissionais:**
- Fase 0: 2 templates (1.196 linhas)
- Fase 1: 3 templates (1.836 linhas)
- Fase 2: 2 templates (1.790 linhas)
- Fase 3: 3 templates (2.804 linhas)
- Fase 4: 2 templates (1.784 linhas)

### Como usar um template?

1. Navegue até `templates/fase-X/`
2. Copie o template desejado
3. Cole em `projetos/seu-projeto/0X-fase/`
4. Preencha as seções
5. Valide com o checklist

### Os templates são obrigatórios?

**Recomendado mas não obrigatório.** Os templates garantem:
- Consistência entre projetos
- Qualidade dos entregáveis
- Documentação completa
- Facilidade de revisão

Você pode adaptá-los às necessidades do projeto.

### Posso criar meus próprios templates?

Sim! Siga a estrutura dos templates existentes:
- Metadados no topo
- Objetivos claros
- Seções bem definidas
- Exemplos práticos
- Checklists de validação

---

## 🚀 Uso Prático

### Como iniciar um novo projeto?

```bash
# 1. Copie o template
cp -r projetos/_template projetos/meu-projeto

# 2. Inicie pela Fase 0
cd projetos/meu-projeto/00-estrategia

# 3. Use os templates
cp ../../templates/fase-0/boundary-map-template.md .
cp ../../templates/fase-0/scope-validation-template.md .

# 4. Preencha e documente
```

### Qual a ordem de execução?

**Sequencial e obrigatória:**
```
Fase 0 → Gateway 1 → Fase 1 → Gateway 2 → 
Fase 2 → Gateway 3 → Fase 3 → Gateway 4 → 
Fase 4 → Gateway 5 → Entrega
```

Não pule fases ou gateways!

### Posso trabalhar em múltiplos projetos?

Sim! A estrutura suporta múltiplos projetos simultâneos:
```
projetos/
├── projeto-a/
├── projeto-b/
├── projeto-c/
└── _template/
```

### Como validar a qualidade?

Use os **checklists de validação** em `templates/checklists/`:
1. Checklist da fase atual
2. Valide todos os itens críticos (🔴)
3. Complete itens importantes (🟡)
4. Documente exceções
5. Prepare para o Gateway

---

## 👥 Equipe e Colaboração

### Quantas pessoas são necessárias?

**Mínimo recomendado:**
- 1 UX Designer
- 1 UI Designer
- 1 Researcher
- 1 Developer (para validação técnica)

**Ideal:**
- Equipe multidisciplinar de 5-8 pessoas
- Papéis especializados por fase
- Product Owner para aprovações

### Como dividir o trabalho?

**Por fase:**
- Fase 0: Product Owner + UX Lead
- Fase 1: Researcher + UX Designer
- Fase 2: UX Designer + IA Architect
- Fase 3: UI Designer + Motion Designer
- Fase 4: QA + Accessibility Specialist

### Como fazer handoff entre fases?

1. Complete todos os entregáveis da fase
2. Valide com o checklist
3. Prepare documentação para Gateway
4. Apresente no Gateway
5. Obtenha aprovação
6. Faça handoff para próxima fase

### Como documentar decisões?

Use a estrutura:
```markdown
## Decisão: [Título]
**Data:** YYYY-MM-DD
**Participantes:** [Lista]
**Contexto:** [Descrição]
**Opções Consideradas:**
1. Opção A - Prós/Contras
2. Opção B - Prós/Contras
**Decisão:** [Escolhida]
**Justificativa:** [Razão]
**Impacto:** [Descrição]
```

---

## 🎨 Design e Desenvolvimento

### Preciso usar Figma?

**Recomendado mas não obrigatório.** O sistema foi projetado para integração com Figma MCP, mas você pode usar outras ferramentas.

### Como integrar com Design System?

1. Documente o Design System em `templates/deliverables/fase-3/`
2. Use o template `design-system-template.md`
3. Mantenha sincronizado com Figma
4. Versione mudanças

### Como garantir acessibilidade?

Use o **Accessibility Validator** (Fase 4):
- Checklist WCAG 2.1 AA
- Testes com screen readers
- Validação de contraste
- Navegação por teclado
- ARIA labels

### Como medir performance?

Use o **Performance Analyst** (Fase 4):
- Core Web Vitals (LCP, FID, CLS)
- Lighthouse scores
- WebPageTest
- Métricas de carregamento

---

## 📊 Métricas e KPIs

### Quais métricas acompanhar?

**Por fase:**
- Fase 0: Viabilidade, Maturidade
- Fase 1: Insights, Personas, Jornadas
- Fase 2: Wireframes, Fluxos, IA
- Fase 3: Protótipos, Design System
- Fase 4: Testes, Performance, Acessibilidade

**Geral:**
- Tempo por fase
- Taxa de aprovação nos Gateways
- Retrabalho
- Satisfação da equipe

### Como calcular ROI?

```
ROI = (Ganho - Investimento) / Investimento × 100

Ganho = Valor gerado (conversões, satisfação, etc)
Investimento = Custo do projeto (equipe, tempo, ferramentas)
```

### Como medir sucesso?

**Critérios de sucesso:**
- ✅ Todos os Gateways aprovados
- ✅ Checklists 100% completos
- ✅ Documentação finalizada
- ✅ Testes de usabilidade positivos
- ✅ Performance dentro dos limites
- ✅ Acessibilidade WCAG AA

---

## 🔧 Problemas Comuns

### Gateway rejeitado, e agora?

1. Revise o feedback
2. Identifique gaps
3. Complete pendências
4. Resubmeta para aprovação
5. Documente aprendizados

### Falta de recursos, como proceder?

1. Priorize itens críticos (🔴)
2. Negocie escopo
3. Faça faseamento
4. Documente trade-offs
5. Obtenha aprovação de stakeholders

### Prazo apertado, posso pular fases?

**Não!** Mas você pode:
- Reduzir escopo de cada fase
- Fazer entregas incrementais
- Focar em itens críticos
- Documentar decisões
- Planejar melhorias futuras

### Como lidar com mudanças de escopo?

1. Documente a mudança
2. Avalie impacto (tempo, custo, qualidade)
3. Atualize boundary map
4. Revalide viabilidade
5. Obtenha aprovação formal
6. Ajuste roadmap

---

## 📚 Aprendizado e Melhoria

### Como o sistema aprende?

Através do **CX Brain:**
- Armazena decisões e resultados
- Identifica padrões
- Sugere melhorias
- Compartilha aprendizados entre projetos

### Como contribuir com melhorias?

1. Documente aprendizados em cada projeto
2. Sugira melhorias nos templates
3. Compartilhe best practices
4. Atualize documentação
5. Crie novos templates quando necessário

### Onde encontrar exemplos?

- `projetos/sicoob-fun/` - Projeto real completo
- Templates incluem exemplos práticos
- BEST-PRACTICES.md tem casos de uso

### Como treinar novos membros?

1. **Dia 1:** GETTING-STARTED.md (5 min)
2. **Dia 1:** ARQUITETURA-AGENTES.md (30 min)
3. **Dia 1:** Navegue pelo INDEX.md (15 min)
4. **Semana 1:** Acompanhe projeto existente
5. **Semana 2:** Lidere uma fase
6. **Mês 1:** Projeto completo

---

## 🆘 Suporte

### Onde encontrar ajuda?

**Documentação:**
- [GETTING-STARTED.md](GETTING-STARTED.md) - Início rápido
- [BEST-PRACTICES.md](BEST-PRACTICES.md) - Melhores práticas
- [INDEX.md](INDEX.md) - Navegação completa
- [FAQ.md](FAQ.md) - Este arquivo

**Recursos:**
- Templates em `templates/`
- Exemplos em `projetos/sicoob-fun/`
- Checklists em `templates/checklists/`

### Como reportar problemas?

1. Documente o problema
2. Inclua contexto (fase, projeto, etc)
3. Descreva comportamento esperado vs atual
4. Sugira solução se possível
5. Compartilhe com a equipe

### Como sugerir melhorias?

1. Identifique a oportunidade
2. Descreva o benefício
3. Proponha implementação
4. Avalie impacto
5. Discuta com a equipe

---

## 🎯 Casos de Uso

### Projeto pequeno (1-2 semanas)

**Abordagem:**
- Foco em itens críticos (🔴)
- Templates simplificados
- Gateways rápidos (30 min)
- Documentação essencial

### Projeto médio (1-2 meses)

**Abordagem:**
- Itens críticos + importantes (🔴 + 🟡)
- Templates completos
- Gateways estruturados (1-2h)
- Documentação completa

### Projeto grande (3+ meses)

**Abordagem:**
- Todos os itens (🔴 + 🟡 + 🟢)
- Templates expandidos
- Gateways formais (2-4h)
- Documentação detalhada
- Múltiplas iterações

### Projeto de redesign

**Abordagem:**
- Fase 0: Análise do existente
- Fase 1: Validação de problemas
- Fase 2: Nova arquitetura
- Fase 3: Novo design
- Fase 4: Testes comparativos

---

## 🔄 Versionamento

### Como versionar entregáveis?

Use **versionamento semântico:**
```
v[MAJOR].[MINOR].[PATCH]

v1.0.0 - Primeira versão
v1.1.0 - Nova funcionalidade
v1.1.1 - Correção de bug
v2.0.0 - Mudança significativa
```

### Como documentar mudanças?

Mantenha um `CHANGELOG.md`:
```markdown
## [v1.1.0] - 2026-04-24
### Added
- Nova funcionalidade X
### Changed
- Melhorou Y
### Fixed
- Corrigiu bug Z
```

---

## 📞 Contato

**Dúvidas não respondidas aqui?**

1. Revise a documentação completa
2. Consulte o INDEX.md
3. Verifique exemplos práticos
4. Entre em contato com o UX Lead

---

## 🎉 Dicas Finais

### Para ter sucesso:

✅ **Leia a documentação** antes de começar  
✅ **Use os templates** para consistência  
✅ **Valide com checklists** antes dos Gateways  
✅ **Documente decisões** para aprendizado  
✅ **Colabore com a equipe** em todas as fases  
✅ **Aprenda com cada projeto** usando o CX Brain  
✅ **Mantenha foco no usuário** sempre  

### Para evitar problemas:

❌ Não pule fases ou Gateways  
❌ Não ignore itens críticos (🔴)  
❌ Não deixe de documentar  
❌ Não trabalhe isolado  
❌ Não assuma sem validar  
❌ Não esqueça da acessibilidade  
❌ Não negligencie performance  

---

**Versão:** 1.0  
**Última Atualização:** 2026-04-24  
**Próxima Revisão:** Após feedback da equipe

**Não encontrou sua resposta?** Consulte o [INDEX.md](INDEX.md) para navegação completa ou revise a [documentação principal](README.md).