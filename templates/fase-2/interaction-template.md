# 🎯 Interaction Design Specification - [Nome da Interação]

## 📋 Metadados

```yaml
projeto: [nome-do-projeto]
tela: [nome-da-tela]
componente: [nome-do-componente]
versao: v1
data: [YYYY-MM-DD]
autor: interaction-designer-agent
quality_score: [0-100]
```

---

## 🎯 Visão Geral

### Descrição da Interação

**O que é:**
[Descreva a interação em 1-2 frases]

**Exemplo:**
> "Animação de feedback ao adicionar item ao carrinho, mostrando o produto 'voando' para o ícone do carrinho no header."

### Contexto de Uso

**Quando acontece:**
- [Situação 1]
- [Situação 2]
- [Situação 3]

**Onde acontece:**
- Tela: [Nome da tela]
- Componente: [Nome do componente]
- Localização: [Posição na tela]

**Por que é importante:**
[Justificativa da interação]

---

## 👤 Perspectiva do Usuário

### Objetivo do Usuário

**O que o usuário quer fazer:**
[Descrição do objetivo]

**Resultado esperado:**
[O que o usuário espera que aconteça]

### Expectativas

**O usuário espera:**
1. [Expectativa 1]
2. [Expectativa 2]
3. [Expectativa 3]

**Referências mentais:**
- [Padrão conhecido 1]
- [Padrão conhecido 2]

---

## 🎬 Fluxo da Interação

### Estados do Sistema

```
Estado Inicial
    ↓
[Trigger/Ação do Usuário]
    ↓
Estado de Transição
    ↓
Estado Final
```

### Detalhamento dos Estados

#### 1. Estado Inicial (Idle)

**Aparência:**
- Visual: [Descrição]
- Cor: [Cor do elemento]
- Tamanho: [Dimensões]
- Posição: [Localização]

**Comportamento:**
- Cursor: [Tipo de cursor]
- Hover: [O que acontece no hover]
- Focus: [Estado de foco]

**Acessibilidade:**
- ARIA label: `[texto]`
- Role: `[role]`
- Tab index: `[número]`

---

#### 2. Estado de Hover

**Trigger:**
- Mouse sobre o elemento
- Tempo de delay: [Xms]

**Mudanças visuais:**
- Cor: [Nova cor]
- Escala: [Transformação]
- Sombra: [Elevação]
- Cursor: [Tipo]

**Animação:**
- Duração: [Xms]
- Easing: [Tipo de easing]
- Propriedades: [O que anima]

**Código exemplo:**
```css
.elemento:hover {
  background-color: #color;
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transition: all 200ms ease-out;
}
```

---

#### 3. Estado de Focus

**Trigger:**
- Tab keyboard
- Click no elemento
- Navegação por voz

**Mudanças visuais:**
- Outline: [Cor e espessura]
- Cor de fundo: [Cor]
- Indicador: [Tipo de indicador]

**Acessibilidade:**
- Visível para teclado: Sim
- Contraste mínimo: 3:1
- Anúncio de screen reader: `[texto]`

**Código exemplo:**
```css
.elemento:focus {
  outline: 2px solid #primary;
  outline-offset: 2px;
}
```

---

#### 4. Estado de Active/Pressed

**Trigger:**
- Mouse down
- Touch start
- Enter/Space key

**Mudanças visuais:**
- Escala: [Redução]
- Cor: [Cor mais escura]
- Posição: [Deslocamento]

**Feedback tátil:**
- Vibração: [Sim/Não]
- Duração: [Xms]

**Animação:**
- Duração: [Xms]
- Easing: [ease-in]

**Código exemplo:**
```css
.elemento:active {
  transform: scale(0.95);
  background-color: #darker-color;
}
```

---

#### 5. Estado de Loading

**Trigger:**
- Ação iniciada
- Aguardando resposta

**Mudanças visuais:**
- Spinner: [Tipo e posição]
- Opacidade: [Valor]
- Cursor: [wait/progress]
- Texto: [Mensagem de loading]

**Comportamento:**
- Elemento desabilitado: Sim
- Cliques bloqueados: Sim
- Timeout: [Xs]

**Acessibilidade:**
- ARIA live: `polite`
- Anúncio: `[texto de loading]`

**Código exemplo:**
```css
.elemento.loading {
  opacity: 0.6;
  cursor: wait;
  pointer-events: none;
}
```

---

#### 6. Estado de Sucesso

**Trigger:**
- Ação completada com sucesso
- Resposta positiva do servidor

**Mudanças visuais:**
- Ícone: [Checkmark/Success icon]
- Cor: [Verde de sucesso]
- Animação: [Tipo]

**Feedback:**
- Visual: [Descrição]
- Sonoro: [Som de sucesso - opcional]
- Tátil: [Vibração - opcional]

**Duração:**
- Tempo de exibição: [Xms]
- Auto-dismiss: [Sim/Não]

**Acessibilidade:**
- ARIA live: `polite`
- Anúncio: `[mensagem de sucesso]`

**Código exemplo:**
```css
.elemento.success {
  background-color: #success-green;
  animation: success-pulse 300ms ease-out;
}
```

---

#### 7. Estado de Erro

**Trigger:**
- Ação falhou
- Validação não passou
- Erro do servidor

**Mudanças visuais:**
- Ícone: [Error icon]
- Cor: [Vermelho de erro]
- Borda: [Destaque de erro]
- Shake: [Animação de shake]

**Feedback:**
- Mensagem: [Texto do erro]
- Posição: [Onde aparece]
- Ícone: [Tipo]

**Acessibilidade:**
- ARIA live: `assertive`
- ARIA invalid: `true`
- Anúncio: `[mensagem de erro]`

**Código exemplo:**
```css
.elemento.error {
  border-color: #error-red;
  animation: shake 300ms ease-in-out;
}
```

---

#### 8. Estado Desabilitado

**Trigger:**
- Condição não atendida
- Permissão negada
- Contexto inválido

**Mudanças visuais:**
- Opacidade: 0.4
- Cursor: not-allowed
- Cor: [Cinza]

**Comportamento:**
- Cliques: Bloqueados
- Hover: Sem efeito
- Focus: Não focável

**Acessibilidade:**
- ARIA disabled: `true`
- Tab index: `-1`
- Tooltip: [Explicação do porquê está desabilitado]

**Código exemplo:**
```css
.elemento:disabled {
  opacity: 0.4;
  cursor: not-allowed;
  pointer-events: none;
}
```

---

## 🎨 Especificações Visuais

### Dimensões

**Desktop:**
- Largura: [X]px
- Altura: [Y]px
- Padding: [X]px [Y]px
- Margin: [X]px [Y]px

**Tablet:**
- Largura: [X]px
- Altura: [Y]px
- Padding: [X]px [Y]px

**Mobile:**
- Largura: [X]px
- Altura: [Y]px
- Padding: [X]px [Y]px

### Cores

**Estados:**
- Default: `#color`
- Hover: `#color`
- Active: `#color`
- Focus: `#color`
- Disabled: `#color`
- Success: `#color`
- Error: `#color`

**Contraste:**
- Texto/Fundo: [Ratio]
- Focus/Fundo: [Ratio]
- Todos atendem WCAG AA: ✅

### Tipografia

**Texto:**
- Font family: [Nome]
- Font size: [X]px
- Font weight: [Peso]
- Line height: [X]
- Letter spacing: [X]px

**Estados:**
- Default: [Especificações]
- Hover: [Mudanças]
- Active: [Mudanças]

### Espaçamento

**Interno:**
- Padding top: [X]px
- Padding right: [X]px
- Padding bottom: [X]px
- Padding left: [X]px

**Externo:**
- Margin top: [X]px
- Margin right: [X]px
- Margin bottom: [X]px
- Margin left: [X]px

**Entre elementos:**
- Gap: [X]px

---

## ⚡ Especificações de Animação

### Transições

**Propriedades animadas:**
- `background-color`: [Duração]ms [Easing]
- `transform`: [Duração]ms [Easing]
- `opacity`: [Duração]ms [Easing]
- `box-shadow`: [Duração]ms [Easing]

**Timing functions:**
- Hover in: `ease-out`
- Hover out: `ease-in`
- Click: `ease-in-out`
- Loading: `linear`

### Keyframes

**Animação de Loading:**
```css
@keyframes loading-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

**Animação de Sucesso:**
```css
@keyframes success-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}
```

**Animação de Erro:**
```css
@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}
```

### Performance

**Propriedades otimizadas:**
- ✅ `transform`
- ✅ `opacity`
- ❌ `width/height` (evitar)
- ❌ `top/left` (evitar)

**GPU acceleration:**
```css
.elemento {
  will-change: transform, opacity;
  transform: translateZ(0); /* Force GPU layer */
}
```

---

## 📱 Responsividade

### Breakpoints

**Desktop (1200px+):**
- Comportamento: [Descrição]
- Hover: Ativo
- Touch: Não aplicável

**Tablet (768px - 1199px):**
- Comportamento: [Descrição]
- Hover: Limitado
- Touch: Ativo

**Mobile (< 768px):**
- Comportamento: [Descrição]
- Hover: Desabilitado
- Touch: Ativo
- Área de toque mínima: 44px x 44px

### Adaptações por Dispositivo

**Touch devices:**
- Área de toque: Mínimo 44px x 44px
- Hover states: Removidos
- Active states: Mais evidentes
- Feedback tátil: Considerado

**Keyboard navigation:**
- Focus visível: Obrigatório
- Tab order: Lógico
- Atalhos: [Lista de atalhos]

**Screen readers:**
- Labels: Descritivos
- States: Anunciados
- Changes: Comunicadas

---

## ♿ Acessibilidade

### WCAG 2.1 AA Compliance

**Contraste:**
- [ ] Texto normal: 4.5:1
- [ ] Texto grande: 3:1
- [ ] Elementos não-texto: 3:1
- [ ] Focus indicator: 3:1

**Keyboard:**
- [ ] Focável via teclado
- [ ] Focus visível
- [ ] Ordem lógica de tab
- [ ] Atalhos funcionam

**Screen Reader:**
- [ ] Labels apropriados
- [ ] States anunciados
- [ ] Changes comunicadas
- [ ] Context fornecido

### ARIA Attributes

```html
<button 
  aria-label="[Descrição clara]"
  aria-describedby="[ID da descrição]"
  aria-pressed="[true/false/mixed]"
  aria-expanded="[true/false]"
  aria-controls="[ID do elemento controlado]"
  aria-live="[off/polite/assertive]"
  role="[role específico]">
  [Conteúdo]
</button>
```

### Estados Anunciados

**Screen reader announcements:**
- Loading: "Carregando, aguarde"
- Success: "Ação realizada com sucesso"
- Error: "Erro: [descrição do erro]"
- Disabled: "Botão indisponível"

---

## 🔧 Implementação Técnica

### HTML Structure

```html
<div class="interaction-container">
  <button 
    class="interactive-element"
    type="button"
    aria-label="[Label]"
    data-state="idle">
    
    <span class="element-content">
      <span class="element-icon" aria-hidden="true">
        <!-- Ícone -->
      </span>
      <span class="element-text">
        [Texto]
      </span>
    </span>
    
    <span class="element-feedback" aria-live="polite">
      <!-- Feedback messages -->
    </span>
    
  </button>
</div>
```

### CSS Classes

```css
/* Base styles */
.interactive-element {
  /* Base properties */
}

/* State classes */
.interactive-element[data-state="idle"] { }
.interactive-element[data-state="hover"] { }
.interactive-element[data-state="active"] { }
.interactive-element[data-state="loading"] { }
.interactive-element[data-state="success"] { }
.interactive-element[data-state="error"] { }
.interactive-element[data-state="disabled"] { }

/* Responsive classes */
@media (max-width: 768px) {
  .interactive-element {
    /* Mobile adaptations */
  }
}
```

### JavaScript Behavior

```javascript
class InteractiveElement {
  constructor(element) {
    this.element = element;
    this.state = 'idle';
    this.init();
  }
  
  init() {
    this.bindEvents();
    this.setState('idle');
  }
  
  bindEvents() {
    this.element.addEventListener('mouseenter', this.handleHover.bind(this));
    this.element.addEventListener('mouseleave', this.handleLeave.bind(this));
    this.element.addEventListener('mousedown', this.handleActive.bind(this));
    this.element.addEventListener('mouseup', this.handleRelease.bind(this));
    this.element.addEventListener('click', this.handleClick.bind(this));
    this.element.addEventListener('focus', this.handleFocus.bind(this));
    this.element.addEventListener('blur', this.handleBlur.bind(this));
  }
  
  setState(newState) {
    this.element.setAttribute('data-state', newState);
    this.state = newState;
    this.announceState(newState);
  }
  
  announceState(state) {
    const announcements = {
      loading: 'Carregando, aguarde',
      success: 'Ação realizada com sucesso',
      error: 'Erro na operação'
    };
    
    if (announcements[state]) {
      this.announce(announcements[state]);
    }
  }
  
  announce(message) {
    const feedback = this.element.querySelector('.element-feedback');
    feedback.textContent = message;
    
    // Clear after 3 seconds
    setTimeout(() => {
      feedback.textContent = '';
    }, 3000);
  }
}
```

---

## 🧪 Testes e Validação

### Testes Funcionais

**Cenários de teste:**

1. **Hover behavior**
   - [ ] Mouse enter ativa hover
   - [ ] Mouse leave remove hover
   - [ ] Hover não ativa em touch devices

2. **Click behavior**
   - [ ] Click executa ação
   - [ ] Double-click é tratado
   - [ ] Click durante loading é ignorado

3. **Keyboard behavior**
   - [ ] Tab navega para elemento
   - [ ] Enter/Space ativa ação
   - [ ] Escape cancela (se aplicável)

4. **Touch behavior**
   - [ ] Touch start ativa active state
   - [ ] Touch end executa ação
   - [ ] Touch cancel é tratado

### Testes de Acessibilidade

**Ferramentas:**
- [ ] axe-core
- [ ] WAVE
- [ ] Lighthouse
- [ ] Screen reader manual

**Checklist:**
- [ ] Focável via teclado
- [ ] Focus visível
- [ ] Labels apropriados
- [ ] States anunciados
- [ ] Contraste adequado

### Testes de Performance

**Métricas:**
- [ ] Animações a 60fps
- [ ] Tempo de resposta < 100ms
- [ ] Sem layout thrashing
- [ ] GPU acceleration ativa

### Testes Cross-browser

**Browsers testados:**
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers

---

## 📊 Métricas de Sucesso

### KPIs da Interação

| Métrica | Meta | Como Medir |
|---------|------|------------|
| Tempo de resposta | < 100ms | Performance monitoring |
| Taxa de sucesso | > 95% | Analytics |
| Abandono na ação | < 5% | User tracking |
| Satisfação | > 4.5/5 | User feedback |

### Analytics Events

**Eventos a trackear:**
```javascript
// Interaction started
gtag('event', 'interaction_start', {
  element_type: 'button',
  element_id: 'add-to-cart',
  page_location: window.location.href
});

// Interaction completed
gtag('event', 'interaction_complete', {
  element_type: 'button',
  element_id: 'add-to-cart',
  success: true,
  duration: 1200 // ms
});

// Interaction failed
gtag('event', 'interaction_error', {
  element_type: 'button',
  element_id: 'add-to-cart',
  error_type: 'network_error'
});
```

---

## 📎 Anexos

### Referências de Design

- [Material Design - Buttons](link)
- [Apple HIG - Buttons](link)
- [Ant Design - Button](link)

### Documentos Relacionados

- [Design System](link)
- [Wireframes](link)
- [User Journey](link)

### Assets

- **Ícones:** [Pasta/link dos ícones]
- **Animações:** [Pasta/link das animações]
- **Sounds:** [Pasta/link dos sons - se aplicável]

---

## 📝 Notas do Agente

**Criado por:** Interaction Designer Agent  
**Data:** [YYYY-MM-DD]  
**Versão:** v1  
**Quality Score:** [0-100]

**Complexidade:**
- [ ] Simples (hover + click)
- [ ] Média (múltiplos estados)
- [ ] Complexa (animações + feedback)

**Prioridade:**
- [ ] Crítica (core functionality)
- [ ] Alta (important feature)
- [ ] Média (nice to have)
- [ ] Baixa (enhancement)

**Recomendações:**
- [Recomendação 1]
- [Recomendação 2]
- [Recomendação 3]

**Alertas:**
- [ ] Performance concerns
- [ ] Accessibility issues
- [ ] Browser compatibility
- [ ] Complex implementation

---

## ✅ Checklist de Implementação

### Design
- [ ] Estados visuais definidos
- [ ] Cores especificadas
- [ ] Animações documentadas
- [ ] Responsividade planejada

### Desenvolvimento
- [ ] HTML structure criada
- [ ] CSS styles implementados
- [ ] JavaScript behavior adicionado
- [ ] Event handlers configurados

### Acessibilidade
- [ ] ARIA attributes adicionados
- [ ] Keyboard navigation testada
- [ ] Screen reader testado
- [ ] Contraste validado

### Testes
- [ ] Testes funcionais passaram
- [ ] Testes de acessibilidade passaram
- [ ] Testes de performance passaram
- [ ] Cross-browser testado

### Deploy
- [ ] Code review aprovado
- [ ] QA testou
- [ ] Analytics configurado
- [ ] Documentação atualizada

---

**Última Atualização:** [YYYY-MM-DD]  
**Próxima Revisão:** [YYYY-MM-DD]