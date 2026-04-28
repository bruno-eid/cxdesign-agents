# 🎬 Motion Design Specification - [Nome da Animação]

## 📋 Metadados

```yaml
projeto: [nome-do-projeto]
animacao: [nome-da-animacao]
versao: v1
data: [YYYY-MM-DD]
autor: motion-designer-agent
quality_score: [0-100]
```

---

## 🎯 Visão Geral

### Objetivo da Animação

**O que queremos alcançar:**
[Descreva o objetivo da animação]

**Exemplo:**
> "Criar uma transição suave entre telas que mantenha o contexto do usuário e reduza a percepção de tempo de carregamento em 40%."

### Contexto de Uso

**Quando acontece:**
- [Situação 1]
- [Situação 2]
- [Situação 3]

**Onde acontece:**
- Tela: [Nome da tela]
- Componente: [Nome do componente]
- Fluxo: [Nome do fluxo]

**Por que é importante:**
[Justificativa da animação]

---

## 🎨 Princípios de Motion Design

### 1. Propósito

**Toda animação deve ter um propósito claro:**
- [ ] Feedback de ação
- [ ] Transição de estado
- [ ] Guiar atenção
- [ ] Comunicar relacionamento
- [ ] Expressar personalidade
- [ ] Reduzir percepção de tempo

**Propósito desta animação:**
[Descrição específica]

### 2. Performance

**Metas de performance:**
- FPS: 60fps (mínimo)
- Duração: [X]ms
- GPU acceleration: Sim
- Jank: 0

### 3. Acessibilidade

**Considerações:**
- [ ] Respeita `prefers-reduced-motion`
- [ ] Não causa epilepsia (< 3 flashes/segundo)
- [ ] Não impede acesso ao conteúdo
- [ ] Pode ser pausada se > 5 segundos

---

## ⏱️ Timing e Easing

### Duração

**Duração total:** [X]ms

**Justificativa:**
[Por que essa duração]

**Referências:**
- Micro-interações: 100-300ms
- Transições: 200-500ms
- Animações complexas: 500-1000ms
- Animações longas: > 1000ms

### Easing Functions

**Easing principal:** `[nome-do-easing]`

**Curva de Bézier:**
```css
cubic-bezier(X, Y, X, Y)
```

**Quando usar cada easing:**

**Ease-out** (`cubic-bezier(0, 0, 0.2, 1)`)
- Elementos entrando na tela
- Expansão de elementos
- Feedback de sucesso

**Ease-in** (`cubic-bezier(0.4, 0, 1, 1)`)
- Elementos saindo da tela
- Colapso de elementos
- Remoção de itens

**Ease-in-out** (`cubic-bezier(0.4, 0, 0.2, 1)`)
- Transições entre estados
- Movimentos dentro da tela
- Reorganização de layout

**Linear** (`cubic-bezier(0, 0, 1, 1)`)
- Rotações contínuas
- Loading spinners
- Progresso constante

**Custom** (`cubic-bezier(X, Y, X, Y)`)
- [Quando usar]
- [Características]

---

## 🎬 Especificação da Animação

### Estado Inicial

**Propriedades:**
```css
.elemento {
  opacity: [valor];
  transform: translate([X]px, [Y]px) scale([valor]) rotate([deg]deg);
  width: [valor];
  height: [valor];
  background-color: [cor];
  /* outras propriedades */
}
```

**Descrição visual:**
[Como o elemento aparece inicialmente]

### Estado Final

**Propriedades:**
```css
.elemento {
  opacity: [valor];
  transform: translate([X]px, [Y]px) scale([valor]) rotate([deg]deg);
  width: [valor];
  height: [valor];
  background-color: [cor];
  /* outras propriedades */
}
```

**Descrição visual:**
[Como o elemento aparece no final]

### Keyframes

**Animação completa:**

```css
@keyframes [nome-animacao] {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  
  50% {
    opacity: 0.5;
    transform: translateY(10px);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Aplicação:**
```css
.elemento {
  animation: [nome-animacao] [duracao]ms [easing] [delay]ms [iterations] [direction] [fill-mode];
}
```

---

## 🎭 Tipos de Animação

### Entrada (Enter)

**Tipo:** [Fade/Slide/Scale/Rotate/Custom]

**Direção:** [De onde vem]

**Duração:** [X]ms

**Easing:** [Tipo]

**Código:**
```css
.enter {
  animation: enter-animation 300ms ease-out;
}

@keyframes enter-animation {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

**Quando usar:**
- [Contexto 1]
- [Contexto 2]

---

### Saída (Exit)

**Tipo:** [Fade/Slide/Scale/Rotate/Custom]

**Direção:** [Para onde vai]

**Duração:** [X]ms

**Easing:** [Tipo]

**Código:**
```css
.exit {
  animation: exit-animation 200ms ease-in;
}

@keyframes exit-animation {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
```

**Quando usar:**
- [Contexto 1]
- [Contexto 2]

---

### Transição (Transition)

**Propriedades animadas:**
- `[propriedade-1]`: [duracao]ms [easing]
- `[propriedade-2]`: [duracao]ms [easing]
- `[propriedade-3]`: [duracao]ms [easing]

**Código:**
```css
.elemento {
  transition: 
    opacity 200ms ease-out,
    transform 300ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 150ms ease-in-out;
}

.elemento:hover {
  opacity: 0.8;
  transform: scale(1.05);
  background-color: #new-color;
}
```

---

### Loading

**Tipo:** [Spinner/Progress/Skeleton/Custom]

**Duração:** Infinita

**Easing:** Linear

**Código:**
```css
.loading {
  animation: loading-spin 1s linear infinite;
}

@keyframes loading-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

---

### Feedback

**Tipo:** [Pulse/Shake/Bounce/Custom]

**Duração:** [X]ms

**Repetições:** [N] vezes

**Código:**
```css
.feedback {
  animation: feedback-pulse 300ms ease-out;
}

@keyframes feedback-pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
```

**Quando usar:**
- Sucesso: [Descrição]
- Erro: [Descrição]
- Atenção: [Descrição]

---

## 🎨 Animações por Componente

### Botões

#### Hover
```css
.button {
  transition: all 200ms ease-out;
}

.button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}
```

#### Active/Press
```css
.button:active {
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: all 100ms ease-in;
}
```

#### Loading
```css
.button.loading {
  pointer-events: none;
}

.button.loading::after {
  content: '';
  animation: button-loading 1s linear infinite;
}
```

---

### Cards

#### Hover
```css
.card {
  transition: transform 300ms ease-out, box-shadow 300ms ease-out;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0,0,0,0.15);
}
```

#### Entrada
```css
.card {
  animation: card-enter 400ms ease-out;
}

@keyframes card-enter {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

---

### Modais

#### Abertura
```css
.modal {
  animation: modal-open 300ms ease-out;
}

@keyframes modal-open {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-backdrop {
  animation: backdrop-fade-in 300ms ease-out;
}

@keyframes backdrop-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

#### Fechamento
```css
.modal.closing {
  animation: modal-close 200ms ease-in;
}

@keyframes modal-close {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
}
```

---

### Listas

#### Entrada Sequencial
```css
.list-item {
  animation: list-item-enter 300ms ease-out;
  animation-fill-mode: backwards;
}

.list-item:nth-child(1) { animation-delay: 0ms; }
.list-item:nth-child(2) { animation-delay: 50ms; }
.list-item:nth-child(3) { animation-delay: 100ms; }
.list-item:nth-child(4) { animation-delay: 150ms; }
/* ... */

@keyframes list-item-enter {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
```

#### Reordenação
```css
.list-item {
  transition: transform 300ms ease-out;
}
```

---

### Notificações

#### Entrada (Slide from top)
```css
.notification {
  animation: notification-enter 400ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes notification-enter {
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

#### Saída (Slide to right)
```css
.notification.closing {
  animation: notification-exit 300ms ease-in;
}

@keyframes notification-exit {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}
```

---

## 📱 Transições de Tela

### Navegação Forward

**Tipo:** Slide from right

**Duração:** 300ms

**Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`

**Código:**
```css
.page-enter {
  animation: page-enter-forward 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes page-enter-forward {
  from {
    opacity: 0;
    transform: translateX(100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.page-exit {
  animation: page-exit-forward 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes page-exit-forward {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0.5;
    transform: translateX(-30%);
  }
}
```

---

### Navegação Backward

**Tipo:** Slide from left

**Duração:** 300ms

**Easing:** `cubic-bezier(0.4, 0, 0.2, 1)`

**Código:**
```css
.page-enter {
  animation: page-enter-backward 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes page-enter-backward {
  from {
    opacity: 0.5;
    transform: translateX(-30%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.page-exit {
  animation: page-exit-backward 300ms cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes page-exit-backward {
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100%);
  }
}
```

---

### Modal/Overlay

**Tipo:** Fade + Scale

**Duração:** 250ms

**Easing:** `ease-out`

**Código:**
```css
.overlay-enter {
  animation: overlay-enter 250ms ease-out;
}

@keyframes overlay-enter {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

---

## ⚡ Otimização de Performance

### Propriedades Otimizadas

**Use (GPU-accelerated):**
- ✅ `transform`
- ✅ `opacity`
- ✅ `filter`

**Evite (CPU-intensive):**
- ❌ `width/height`
- ❌ `top/left/right/bottom`
- ❌ `margin/padding`
- ❌ `font-size`

### Técnicas de Otimização

#### 1. Will-change

```css
.elemento {
  will-change: transform, opacity;
}

/* Remover após animação */
.elemento.animated {
  will-change: auto;
}
```

**Quando usar:**
- Animações frequentes
- Interações do usuário
- Transições complexas

**Quando não usar:**
- Muitos elementos simultaneamente
- Animações únicas
- Elementos estáticos

---

#### 2. Transform 3D

```css
.elemento {
  transform: translateZ(0);
  /* ou */
  transform: translate3d(0, 0, 0);
}
```

**Benefício:** Force GPU layer

---

#### 3. Contain

```css
.elemento {
  contain: layout style paint;
}
```

**Benefício:** Isola repaint/reflow

---

#### 4. Reduce Motion

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

**Obrigatório:** Respeitar preferência do usuário

---

## 📊 Métricas de Performance

### Targets

| Métrica | Target | Como Medir |
|---------|--------|------------|
| FPS | 60fps | DevTools Performance |
| Jank | 0 | DevTools Performance |
| Duração | < 500ms | Cronômetro |
| CPU | < 50% | DevTools Performance |
| GPU | Ativo | DevTools Layers |

### Ferramentas de Medição

**Chrome DevTools:**
- Performance tab
- Rendering tab (FPS meter)
- Layers tab

**Lighthouse:**
- Performance score
- Cumulative Layout Shift

---

## 🎨 Biblioteca de Animações

### Animações Reutilizáveis

#### Fade In
```css
@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
```

#### Fade Out
```css
@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}
```

#### Slide Up
```css
@keyframes slide-up {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

#### Slide Down
```css
@keyframes slide-down {
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
```

#### Scale Up
```css
@keyframes scale-up {
  from { transform: scale(0.9); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}
```

#### Bounce
```css
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
```

#### Shake
```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
```

#### Pulse
```css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

#### Spin
```css
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

---

## 🎬 Implementação

### CSS

```css
/* Definir animação */
@keyframes [nome] {
  /* keyframes */
}

/* Aplicar animação */
.elemento {
  animation: [nome] [duracao] [easing] [delay] [iterations] [direction] [fill-mode];
}

/* Ou usar transition */
.elemento {
  transition: [propriedade] [duracao] [easing] [delay];
}
```

### JavaScript

```javascript
// Adicionar classe com animação
element.classList.add('animate');

// Remover após conclusão
element.addEventListener('animationend', () => {
  element.classList.remove('animate');
});

// Web Animations API
element.animate([
  { opacity: 0, transform: 'translateY(20px)' },
  { opacity: 1, transform: 'translateY(0)' }
], {
  duration: 300,
  easing: 'ease-out',
  fill: 'forwards'
});
```

### React

```jsx
// Com CSS Modules
import styles from './Component.module.css';

function Component() {
  return (
    <div className={styles.animated}>
      Content
    </div>
  );
}

// Com Framer Motion
import { motion } from 'framer-motion';

function Component() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      Content
    </motion.div>
  );
}
```

---

## 📚 Recursos

### Ferramentas

**Criação:**
- After Effects
- Principle
- Framer
- Lottie

**Implementação:**
- CSS Animations
- Web Animations API
- Framer Motion
- GSAP
- Anime.js

**Referências:**
- [Cubic-bezier.com](https://cubic-bezier.com)
- [Easings.net](https://easings.net)
- [Material Motion](https://material.io/design/motion)

---

## 📝 Notas do Agente

**Criado por:** Motion Designer Agent  
**Data:** [YYYY-MM-DD]  
**Versão:** v1  
**Quality Score:** [0-100]

**Complexidade:**
- [ ] Simples (transições básicas)
- [ ] Média (múltiplas animações)
- [ ] Complexa (animações orquestradas)

**Performance:**
- [ ] Otimizada (60fps garantido)
- [ ] Boa (ocasionalmente < 60fps)
- [ ] Precisa otimização

**Recomendações:**
- [Recomendação 1]
- [Recomendação 2]
- [Recomendação 3]

**Alertas:**
- [ ] Animações muito longas
- [ ] Muitas animações simultâneas
- [ ] Propriedades não otimizadas
- [ ] Sem fallback para reduced-motion

---

## ✅ Checklist de Implementação

### Design
- [ ] Propósito definido
- [ ] Timing especificado
- [ ] Easing escolhido
- [ ] Keyframes documentados

### Performance
- [ ] Propriedades otimizadas
- [ ] GPU acceleration ativo
- [ ] 60fps garantido
- [ ] Testado em dispositivos reais

### Acessibilidade
- [ ] Reduced-motion implementado
- [ ] Sem flashes rápidos
- [ ] Não bloqueia conteúdo
- [ ] Pode ser pausada (se longa)

### Código
- [ ] CSS escrito
- [ ] JavaScript implementado
- [ ] Fallbacks criados
- [ ] Cross-browser testado

---

**Última Atualização:** [YYYY-MM-DD]  
**Próxima Revisão:** [YYYY-MM-DD]