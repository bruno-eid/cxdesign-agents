# 🏷️ Guia de Nomenclatura - CX Operating System

## 🎯 Objetivo

Este documento define os padrões de nomenclatura para arquivos, pastas e projetos no CX Operating System. Seguir estes padrões garante consistência, facilita busca e melhora colaboração.

---

## 📋 Índice

1. [Princípios Gerais](#princípios-gerais)
2. [Nomenclatura de Projetos](#nomenclatura-de-projetos)
3. [Nomenclatura de Arquivos](#nomenclatura-de-arquivos)
4. [Nomenclatura de Pastas](#nomenclatura-de-pastas)
5. [Versionamento](#versionamento)
6. [Casos Especiais](#casos-especiais)
7. [Exemplos Práticos](#exemplos-práticos)
8. [Checklist](#checklist)

---

## 🎨 Princípios Gerais

### 1. Use Minúsculas

```
✅ CORRETO: meu-projeto
❌ ERRADO: Meu-Projeto, MEU-PROJETO, meuProjeto
```

**Por quê:** Evita problemas entre sistemas operacionais (Windows vs macOS/Linux)

### 2. Use Hífens (não underscores ou espaços)

```
✅ CORRETO: contrato-escopo.md
❌ ERRADO: contrato_escopo.md, contrato escopo.md
```

**Por quê:** Hífens são mais legíveis e compatíveis com URLs

### 3. Seja Descritivo

```
✅ CORRETO: sicoob-fun-persona-ana-consistente-v1.json
❌ ERRADO: persona1.json, p1.json, arquivo.json
```

**Por quê:** Facilita identificação sem precisar abrir o arquivo

### 4. Use Padrões Consistentes

```
✅ CORRETO: [projeto]-[tipo]-[detalhe]-v[N].[ext]
❌ ERRADO: Cada arquivo com padrão diferente
```

**Por quê:** Previsibilidade e automação

### 5. Evite Caracteres Especiais

```
✅ CORRETO: app-delivery
❌ ERRADO: app&delivery, app@delivery, app#delivery
```

**Permitidos:** Letras (a-z), números (0-9), hífens (-)  
**Proibidos:** Espaços, acentos, caracteres especiais

---

## 📁 Nomenclatura de Projetos

### Padrão Geral

```
[nome-do-projeto]
```

### Regras

1. **Minúsculas:** Sempre
2. **Hífens:** Para separar palavras
3. **Descritivo:** Nome claro do projeto
4. **Único:** Não repita nomes

### Exemplos

```
✅ CORRETO:
- sicoob-fun
- app-delivery
- redesign-site-institucional
- dashboard-admin-v2
- design-system-empresa

❌ ERRADO:
- SicoobFun (camelCase)
- app_delivery (underscore)
- projeto1 (genérico)
- site (muito vago)
- Redesign Site (espaços e maiúsculas)
```

### Casos Especiais

**Projetos com Versões:**
```
✅ dashboard-admin-v2
✅ app-mobile-v3
❌ dashboard-admin-novo
❌ app-mobile-final
```

**Projetos Internos:**
```
✅ design-system-interno
✅ biblioteca-componentes
✅ guia-estilo-marca
```

**Projetos de Cliente:**
```
✅ [cliente]-[projeto]
Exemplo: sicoob-fun, banco-xyz-app
```

---

## 📄 Nomenclatura de Arquivos

### Padrão Geral

```
[projeto]-[tipo]-[detalhe]-v[N].[extensao]
```

### Componentes

1. **[projeto]:** Nome do projeto (obrigatório)
2. **[tipo]:** Tipo de entregável (obrigatório)
3. **[detalhe]:** Detalhes específicos (opcional)
4. **v[N]:** Versão (obrigatório para iterações)
5. **[extensao]:** Extensão do arquivo (obrigatório)

### Tipos de Entregáveis

#### Fase 0: Estrategista

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Contrato | `[projeto]-contrato-escopo-v[N].md` | `sicoob-fun-contrato-escopo-v1.md` |
| Matriz | `[projeto]-matriz-maturidade-v[N].json` | `sicoob-fun-matriz-maturidade-v1.json` |
| Briefing | `[projeto]-briefing-expandido-v[N].md` | `sicoob-fun-briefing-expandido-v1.md` |

#### Fase 1: Pesquisador

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Benchmark | `[projeto]-benchmark-v[N].md` | `sicoob-fun-benchmark-v1.md` |
| Persona | `[projeto]-persona-[nome]-v[N].json` | `sicoob-fun-persona-ana-v1.json` |
| Jornada As-Is | `[projeto]-jornada-[nome]-as-is-v[N].md` | `sicoob-fun-jornada-compra-as-is-v1.md` |
| Empathy Map | `[projeto]-empathy-map-[nome]-v[N].md` | `sicoob-fun-empathy-map-ana-v1.md` |
| Golden Thread | `[projeto]-golden-thread-v[N].md` | `sicoob-fun-golden-thread-v1.md` |
| Survey | `[projeto]-survey-[tipo]-v[N].md` | `sicoob-fun-survey-satisfacao-v1.md` |

#### Fase 2: Arquiteto

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Jornada To-Be | `[projeto]-jornada-[nome]-to-be-v[N].md` | `sicoob-fun-jornada-compra-to-be-v1.md` |
| Service Blueprint | `[projeto]-service-blueprint-v[N].md` | `sicoob-fun-service-blueprint-v1.md` |
| Wireframe | `[projeto]-wireframe-[tela]-v[N].fig` | `sicoob-fun-wireframe-home-v1.fig` |
| Interaction | `[projeto]-interaction-[nome]-v[N].md` | `sicoob-fun-interaction-menu-v1.md` |
| Content Strategy | `[projeto]-content-strategy-v[N].md` | `sicoob-fun-content-strategy-v1.md` |

#### Fase 3: Visual

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Brand Strategy | `[projeto]-brand-strategy-v[N].md` | `sicoob-fun-brand-strategy-v1.md` |
| Mockup | `[projeto]-mockup-[tela]-v[N].fig` | `sicoob-fun-mockup-home-v1.fig` |
| UX Writing | `[projeto]-ux-writing-[tipo]-v[N].md` | `sicoob-fun-ux-writing-microcopy-v1.md` |
| Motion Spec | `[projeto]-motion-[nome]-v[N].md` | `sicoob-fun-motion-transitions-v1.md` |
| Design System | `[projeto]-design-system-v[N].fig` | `sicoob-fun-design-system-v1.fig` |
| Protótipo | `[projeto]-prototipo-[tipo]-v[N].fig` | `sicoob-fun-prototipo-mobile-v1.fig` |

#### Fase 4: Validador

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Usability Test | `[projeto]-usability-test-[N]-v[N].md` | `sicoob-fun-usability-test-1-v1.md` |
| WCAG Report | `[projeto]-wcag-report-v[N].md` | `sicoob-fun-wcag-report-v1.md` |
| Performance | `[projeto]-performance-analysis-v[N].md` | `sicoob-fun-performance-analysis-v1.md` |
| Relatório Final | `[projeto]-relatorio-final-v[N].md` | `sicoob-fun-relatorio-final-v1.md` |

#### Documentação

| Tipo | Padrão | Exemplo |
|------|--------|---------|
| Decisões | `decisoes-[data].md` | `decisoes-2026-04-23.md` |
| Changelog | `changelog.md` | `changelog.md` |
| README | `README.md` | `README.md` |
| Documento Principal | `PROJETO.md` | `PROJETO.md` |

### Exemplos Completos

```
✅ CORRETO:
sicoob-fun-contrato-escopo-v1.md
sicoob-fun-persona-ana-consistente-v2.json
sicoob-fun-wireframe-home-v3.fig
sicoob-fun-mockup-checkout-mobile-v1.fig
sicoob-fun-prototipo-final-v2.fig
sicoob-fun-usability-test-3-v1.md

❌ ERRADO:
contrato.md (falta projeto)
persona-ana.json (falta projeto)
wireframe-v1.fig (falta projeto e tela)
mockup-final.fig (não use "final")
prototipo.fig (falta versão)
teste.md (muito genérico)
```

---

## 📂 Nomenclatura de Pastas

### Padrão Geral

```
[nome-descritivo]
```

### Regras

1. **Minúsculas:** Sempre
2. **Hífens:** Para separar palavras
3. **Descritivo:** Nome claro do conteúdo
4. **Sem Versões:** Pastas não têm versão

### Estrutura Padrão

```
[projeto]/
├── fase-0/
├── fase-1/
│   ├── personas/
│   ├── jornadas-as-is/
│   ├── empathy-maps/
│   ├── golden-threads/
│   └── surveys/
├── fase-2/
│   ├── jornadas-to-be/
│   ├── service-blueprints/
│   ├── wireframes/
│   ├── interactions/
│   └── content-strategy/
├── fase-3/
│   ├── brand-strategy/
│   ├── mockups/
│   ├── ux-writing/
│   ├── motion-specs/
│   ├── design-system/
│   └── prototipos/
├── fase-4/
│   ├── usability-tests/
│   ├── acessibilidade/
│   ├── performance/
│   └── relatorios/
└── entrega-final/
```

### Exemplos

```
✅ CORRETO:
- fase-0
- personas
- jornadas-as-is
- wireframes
- mockups
- usability-tests
- entrega-final

❌ ERRADO:
- Fase-0 (maiúscula)
- personas_v1 (versão em pasta)
- jornadas as is (espaços)
- Wireframes (maiúscula)
- mockups-finais (não use "final")
```

---

## 🔄 Versionamento

### Sistema de Versões

```
v1 → v2 → v3 → v4 ...
```

### Regras

1. **Sempre Versione:** Todo arquivo iterável deve ter versão
2. **Nunca Sobrescreva:** Crie nova versão, não substitua
3. **Incremente Sequencialmente:** v1, v2, v3 (não pule números)
4. **Documente Mudanças:** Use changelog.md

### Quando Criar Nova Versão

#### ✅ Crie Nova Versão Quando:

1. **Mudança Significativa**
```
v1: Persona básica
v2: Persona com objetivos específicos e citações
v3: Persona validada com usuários reais
```

2. **Iteração Solicitada**
```
v1: Reprovado no gateway (score 65)
v2: Ajustado conforme feedback (score 82)
```

3. **Mudança de Escopo**
```
v1: MVP (funcionalidades básicas)
v2: Versão completa (todas as funcionalidades)
```

4. **Aprovação em Gateway**
```
v1: Submetido para gateway
v2: Aprovado com ajustes
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

3. **Comentários**
```
Adicionar notas, comentários → Edite a versão atual
```

### Documentando Versões

Use changelog.md:

```markdown
## Changelog

### v3 (2026-04-25)
**Mudanças:**
- Adicionado objetivos específicos
- Incluído citações reais de entrevistas
- Refinado contexto de uso

**Motivo:** Feedback do gateway 2

**Quality Score:** 87 → 92

---

### v2 (2026-04-23)
**Mudanças:**
- Ajustado perfil demográfico
- Adicionado frustrações principais

**Motivo:** Validação com stakeholder

**Quality Score:** 72 → 87

---

### v1 (2026-04-20)
**Mudanças:**
- Versão inicial

**Quality Score:** 72
```

### Palavras Proibidas

```
❌ NÃO USE:
- final
- final2
- final-final
- definitivo
- novo
- antigo
- atual
- revisado
- corrigido
- atualizado

✅ USE:
- v1, v2, v3, v4...
```

---

## 🎯 Casos Especiais

### Arquivos Temporários

```
✅ CORRETO:
[projeto]-[tipo]-[detalhe]-temp.md
[projeto]-[tipo]-[detalhe]-draft.md

Exemplo:
sicoob-fun-persona-ana-temp.json
sicoob-fun-wireframe-home-draft.fig
```

**Regra:** Delete após finalizar

### Arquivos de Backup

```
✅ CORRETO:
[projeto]-[tipo]-[detalhe]-v[N]-backup-[data].ext

Exemplo:
sicoob-fun-persona-ana-v2-backup-2026-04-23.json
```

**Regra:** Mantenha apenas se necessário

### Arquivos Compartilhados

```
✅ CORRETO:
shared-[tipo]-[detalhe].ext

Exemplo:
shared-template-persona.json
shared-checklist-gateway.md
```

**Regra:** Use apenas para recursos reutilizáveis

### Arquivos de Configuração

```
✅ CORRETO:
.gitignore
.mcp.json
config.json
settings.json
```

**Regra:** Siga convenções da ferramenta

---

## 📚 Exemplos Práticos

### Exemplo 1: Projeto App Mobile

```
app-delivery/
├── README.md
├── PROJETO.md
├── briefing.md
├── changelog.md
├── decisoes-2026-04-20.md
│
├── fase-0/
│   ├── app-delivery-contrato-escopo-v1.md
│   ├── app-delivery-matriz-maturidade-v1.json
│   └── decisoes.md
│
├── fase-1/
│   ├── personas/
│   │   ├── app-delivery-persona-ana-entregadora-v1.json
│   │   ├── app-delivery-persona-ana-entregadora-v2.json
│   │   └── app-delivery-persona-carlos-cliente-v1.json
│   ├── jornadas-as-is/
│   │   └── app-delivery-jornada-pedido-as-is-v1.md
│   ├── empathy-maps/
│   │   └── app-delivery-empathy-map-ana-v1.md
│   └── app-delivery-golden-thread-v1.md
│
├── fase-2/
│   ├── jornadas-to-be/
│   │   └── app-delivery-jornada-pedido-to-be-v1.md
│   ├── wireframes/
│   │   ├── app-delivery-wireframe-home-v1.fig
│   │   ├── app-delivery-wireframe-home-v2.fig
│   │   └── app-delivery-wireframe-checkout-v1.fig
│   └── app-delivery-service-blueprint-v1.md
│
├── fase-3/
│   ├── mockups/
│   │   ├── app-delivery-mockup-home-v1.fig
│   │   └── app-delivery-mockup-checkout-v1.fig
│   ├── prototipos/
│   │   └── app-delivery-prototipo-mobile-v1.fig
│   └── app-delivery-design-system-v1.fig
│
├── fase-4/
│   ├── usability-tests/
│   │   ├── app-delivery-usability-test-1-v1.md
│   │   └── app-delivery-usability-test-2-v1.md
│   └── app-delivery-relatorio-final-v1.md
│
└── entrega-final/
    ├── app-delivery-handoff-dev-v1.md
    └── app-delivery-documentacao-completa-v1.md
```

### Exemplo 2: Projeto Design System

```
design-system-empresa/
├── README.md
├── PROJETO.md
│
├── fase-0/
│   └── design-system-empresa-contrato-escopo-v1.md
│
├── fase-1/
│   └── design-system-empresa-benchmark-v1.md
│
├── fase-2/
│   └── design-system-empresa-arquitetura-tokens-v1.md
│
├── fase-3/
│   ├── design-system-empresa-tokens-v1.json
│   ├── design-system-empresa-componentes-v1.fig
│   └── design-system-empresa-documentacao-v1.md
│
└── fase-4/
    └── design-system-empresa-validacao-acessibilidade-v1.md
```

---

## ✅ Checklist de Nomenclatura

### Antes de Criar um Arquivo

- [ ] Nome em minúsculas?
- [ ] Usa hífens (não underscores)?
- [ ] Inclui nome do projeto?
- [ ] Inclui tipo de entregável?
- [ ] Inclui versão (se aplicável)?
- [ ] É descritivo e claro?
- [ ] Não usa palavras proibidas (final, novo, etc)?
- [ ] Segue o padrão: `[projeto]-[tipo]-[detalhe]-v[N].[ext]`?

### Antes de Criar uma Pasta

- [ ] Nome em minúsculas?
- [ ] Usa hífens (não underscores)?
- [ ] É descritivo?
- [ ] Não inclui versão?
- [ ] Segue a estrutura padrão?

### Antes de Versionar

- [ ] Mudança é significativa?
- [ ] Documentou no changelog?
- [ ] Incrementou sequencialmente (v1 → v2)?
- [ ] Não sobrescreveu versão anterior?
- [ ] Não usou palavras proibidas?

---

## 🔍 Validação Rápida

### Teste seu Nome de Arquivo

```bash
# Padrão correto
[projeto]-[tipo]-[detalhe]-v[N].[ext]

# Exemplo
sicoob-fun-persona-ana-v1.json

# Validação:
✅ Minúsculas? Sim
✅ Hífens? Sim
✅ Projeto? sicoob-fun
✅ Tipo? persona
✅ Detalhe? ana
✅ Versão? v1
✅ Extensão? json
```

### Comandos Úteis

```bash
# Encontrar arquivos sem versão
find . -type f -name "*.md" ! -name "*-v[0-9]*"

# Encontrar arquivos com espaços
find . -type f -name "* *"

# Encontrar arquivos com maiúsculas
find . -type f -name "*[A-Z]*"

# Encontrar arquivos com "final"
find . -type f -name "*final*"
```

---

## 📞 Suporte

### Dúvidas Comuns

**"Posso usar camelCase?"**
→ Não. Use hífens: `meu-arquivo` não `meuArquivo`

**"Posso usar underscores?"**
→ Não. Use hífens: `meu-arquivo` não `meu_arquivo`

**"Preciso versionar tudo?"**
→ Sim, exceto arquivos únicos (README.md, PROJETO.md)

**"Posso usar 'final'?"**
→ Não. Use versões: `v1`, `v2`, `v3`

**"E se eu errar?"**
→ Renomeie o arquivo seguindo o padrão correto

---

## 📚 Recursos Adicionais

- [Best Practices](../BEST-PRACTICES.md)
- [Guia de Projetos](README.md)
- [Getting Started](../GETTING-STARTED.md)

---

**Versão:** 1.0.0  
**Última Atualização:** 2026-04-23  
**Mantenedor:** CX Operating System Team

---

## 🎯 Resumo Rápido

```
✅ SEMPRE:
- Minúsculas
- Hífens
- Descritivo
- Versionado
- Padrão: [projeto]-[tipo]-[detalhe]-v[N].[ext]

❌ NUNCA:
- Maiúsculas
- Underscores
- Espaços
- "final", "novo", "antigo"
- Nomes genéricos
```

**Dúvidas? Consulte este guia! 📖**