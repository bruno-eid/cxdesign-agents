# 🎨 Outputs - Fase 3: Visual

## Visão Geral

Esta pasta contém todos os entregáveis da **Fase 3 - Visual**, responsável por criar o design visual de alta fidelidade, design system e protótipos interativos.

## 🎯 Agentes Responsáveis

### 1. UI Designer
**Função:** Criar interfaces visuais de alta fidelidade

**Entregáveis:**
- `mockup-[tela].fig` - Mockups no Figma
- `style-guide.md` - Guia de estilo visual
- `design-rationale.md` - Justificativas de design

### 2. Design System Manager
**Função:** Criar e manter design system

**Entregáveis:**
- `design-tokens.json` - Tokens de design
- `componentes/` - Biblioteca de componentes
- `documentacao-ds.md` - Documentação do DS

### 3. Prototyper
**Função:** Criar protótipos interativos

**Entregáveis:**
- `prototipo-[fluxo].fig` - Protótipos interativos
- `guia-interacoes.md` - Documentação de interações
- `micro-interacoes.md` - Animações e transições

## 📁 Estrutura de Pastas

```
visual/
├── design-system/          # Componentes e tokens
│   ├── tokens/
│   │   ├── colors.json
│   │   ├── typography.json
│   │   ├── spacing.json
│   │   └── elevation.json
│   ├── componentes/
│   │   ├── buttons/
│   │   ├── inputs/
│   │   ├── cards/
│   │   └── navigation/
│   └── documentacao/
│       └── [projeto]-design-system-[data].md
├── mockups/                # Telas de alta fidelidade
│   ├── [projeto]-mockup-[tela]-[data].fig
│   └── [projeto]-style-guide-[data].md
├── prototipos/             # Protótipos interativos
│   ├── [projeto]-prototipo-[fluxo]-[data].fig
│   └── [projeto]-guia-interacoes-[data].md
└── assets/                 # Ícones, ilustrações, etc
    ├── icons/
    ├── illustrations/
    └── images/
```

## ✅ Checklist de Entregáveis

Antes de passar pelo **Gateway 4**, certifique-se de que:

- [ ] Design system completo (tokens + componentes)
- [ ] Mockups de todas as telas críticas
- [ ] Protótipo interativo funcional
- [ ] Style guide documentado
- [ ] Assets exportados (ícones, ilustrações)
- [ ] Acessibilidade validada (WCAG 2.1 AA)
- [ ] Responsividade testada (mobile, tablet, desktop)

## 🚪 Gateway 4: Aprovação de Design

**Aprovadores:** UX Lead, Brand Manager, Product Owner

**Critérios de Aprovação:**
- Alinhamento com brand guidelines
- Acessibilidade WCAG 2.1 AA
- Responsividade em 3 breakpoints
- Protótipo testado com 5 usuários
- Design system documentado
- Performance otimizada

**Duração:** 120 minutos

## 🔄 Fluxo de Trabalho

```
1. Gateway 3 aprovado → Fase 3 inicia
2. Design System Manager executa
   → Cria tokens de design
   → Desenvolve componentes
   → Documenta design system
   → Salva em outputs/visual/design-system/
3. UI Designer executa
   → Cria mockups de alta fidelidade
   → Aplica design system
   → Documenta decisões visuais
   → Salva em outputs/visual/mockups/
4. Prototyper executa
   → Cria protótipos interativos
   → Define micro-interações
   → Documenta comportamentos
   → Salva em outputs/visual/prototipos/
5. MCP sincroniza com Figma
6. Gateway 4: Aprovação de Design
7. Se aprovado → Fase 4
   Se rejeitado → Ajustes necessários
```

## 💡 Dicas

### Design System
- **Comece com tokens** - Cores, tipografia, espaçamento
- **Componentes atômicos primeiro** - Botões, inputs, labels
- **Documente tudo** - Como usar cada componente
- **Pense em escalabilidade** - Fácil de manter e expandir

### Mockups
- **Use o design system** - Consistência é chave
- **Teste em dispositivos reais** - Não confie apenas no Figma
- **Valide acessibilidade** - Contraste, tamanho de fonte, áreas de toque
- **Exporte assets otimizados** - SVG para ícones, WebP para imagens

### Protótipos
- **Foque em fluxos críticos** - Não protótipe tudo
- **Micro-interações importam** - Feedback visual é essencial
- **Teste com usuários reais** - 5 usuários revelam 85% dos problemas
- **Documente comportamentos** - O que acontece quando...?

## 🎨 Integração com Figma

Esta fase tem integração profunda com Figma via MCP:

### Design Tokens
```json
{
  "colors": {
    "primary": "#00A859",
    "secondary": "#003D1C"
  }
}
```
↓ MCP sincroniza
Figma → Styles → Colors

### Componentes
```
outputs/visual/design-system/componentes/buttons/
```
↓ MCP sincroniza
Figma → Components → Buttons

### Protótipos
```
outputs/visual/prototipos/prototipo-onboarding.fig
```
↓ MCP sincroniza
Figma → Prototypes → Onboarding

## 🔗 Links Úteis

- [Template de Design System](../../templates/deliverables/design-system-template.md)
- [Template de Style Guide](../../templates/deliverables/style-guide-template.md)
- [Guia de Acessibilidade](../../docs/accessibility/wcag-guidelines.md)
- [Metaprompts da Fase 3](../../docs/metaprompts/fase-3/)
- [Integração Figma MCP](../../docs/integration/figma-mcp.md)

## 📊 Métricas de Qualidade

- **Acessibilidade:** WCAG 2.1 AA (mínimo)
- **Performance:** Lighthouse Score ≥ 90
- **Responsividade:** 3 breakpoints (mobile, tablet, desktop)
- **Consistência:** 100% uso do design system
- **Usabilidade:** SUS Score ≥ 70

---

**Última atualização:** 2026-04-23  
**Mantido por:** CX Operating System  
**Integração:** Figma Desktop via MCP