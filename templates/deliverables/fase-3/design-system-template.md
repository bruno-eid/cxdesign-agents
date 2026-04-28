# 🎨 Design System - [Nome do Projeto]

**Projeto:** [Nome do Projeto]  
**Versão:** 1.0.0  
**Data:** [DD/MM/YYYY]  
**Mantido por:** [Nome do Design System Manager]

---

## 🎯 Visão Geral

### Propósito
[Descrever o propósito do design system - por que ele existe, que problemas resolve]

### Princípios de Design
1. **[Princípio 1]:** [Descrição]
2. **[Princípio 2]:** [Descrição]
3. **[Princípio 3]:** [Descrição]
4. **[Princípio 4]:** [Descrição]

### Público-Alvo
- Designers
- Desenvolvedores Frontend
- Product Managers
- QA Engineers

---

## 🎨 Fundamentos Visuais

### Paleta de Cores

#### Cores Primárias

```json
{
  "primary": {
    "50": "#E3F2FD",
    "100": "#BBDEFB",
    "200": "#90CAF9",
    "300": "#64B5F6",
    "400": "#42A5F5",
    "500": "#2196F3",  // Base
    "600": "#1E88E5",
    "700": "#1976D2",
    "800": "#1565C0",
    "900": "#0D47A1"
  }
}
```

**Uso:**
- Ações primárias (botões, links)
- Elementos interativos principais
- Destaques importantes

**Contraste:**
- Texto branco em 500+: 4.5:1 ✅
- Texto preto em 50-400: 4.5:1 ✅

---

#### Cores Secundárias

```json
{
  "secondary": {
    "50": "#F3E5F5",
    "100": "#E1BEE7",
    "500": "#9C27B0",  // Base
    "900": "#4A148C"
  }
}
```

---

#### Cores Semânticas

```json
{
  "success": "#4CAF50",
  "warning": "#FF9800",
  "error": "#F44336",
  "info": "#2196F3"
}
```

**Uso:**
- Success: Confirmações, sucesso
- Warning: Avisos, atenção
- Error: Erros, validações
- Info: Informações, dicas

---

#### Cores Neutras

```json
{
  "gray": {
    "50": "#FAFAFA",
    "100": "#F5F5F5",
    "200": "#EEEEEE",
    "300": "#E0E0E0",
    "400": "#BDBDBD",
    "500": "#9E9E9E",
    "600": "#757575",
    "700": "#616161",
    "800": "#424242",
    "900": "#212121"
  }
}
```

---

### Tipografia

#### Família Tipográfica

**Primária:** [Font Family]
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Secundária (opcional):** [Font Family]
```css
font-family: 'Roboto Mono', monospace;
```

---

#### Escala Tipográfica

| Token | Size | Line Height | Weight | Uso |
|-------|------|-------------|--------|-----|
| `display-1` | 64px | 72px | 700 | Títulos principais |
| `display-2` | 48px | 56px | 700 | Títulos de seção |
| `h1` | 40px | 48px | 700 | Heading 1 |
| `h2` | 32px | 40px | 600 | Heading 2 |
| `h3` | 24px | 32px | 600 | Heading 3 |
| `h4` | 20px | 28px | 600 | Heading 4 |
| `body-large` | 18px | 28px | 400 | Corpo grande |
| `body` | 16px | 24px | 400 | Corpo padrão |
| `body-small` | 14px | 20px | 400 | Corpo pequeno |
| `caption` | 12px | 16px | 400 | Legendas |

---

#### Pesos Tipográficos

```css
--font-weight-regular: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

---

### Espaçamento

#### Sistema de Espaçamento (8pt Grid)

```json
{
  "spacing": {
    "0": "0px",
    "1": "4px",
    "2": "8px",
    "3": "12px",
    "4": "16px",
    "5": "20px",
    "6": "24px",
    "8": "32px",
    "10": "40px",
    "12": "48px",
    "16": "64px",
    "20": "80px",
    "24": "96px"
  }
}
```

**Uso:**
- Padding interno: 4, 8, 16, 24
- Margin entre elementos: 8, 16, 24, 32
- Seções: 48, 64, 96

---

### Elevação (Shadows)

```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

**Uso:**
- sm: Botões, inputs
- md: Cards, dropdowns
- lg: Modals, popovers
- xl: Drawers
- 2xl: Overlays

---

### Border Radius

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-full: 9999px;
```

---

### Transições

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 200ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 300ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🧩 Componentes

### Button

#### Variantes

**Primary Button**
```jsx
<Button variant="primary" size="md">
  Click me
</Button>
```

**Props:**
- `variant`: primary | secondary | outline | ghost | danger
- `size`: sm | md | lg
- `disabled`: boolean
- `loading`: boolean
- `icon`: ReactNode
- `fullWidth`: boolean

**Estados:**
- Default
- Hover
- Active
- Focus
- Disabled
- Loading

**Acessibilidade:**
- Contraste mínimo: 4.5:1 ✅
- Tamanho mínimo de toque: 44x44px ✅
- Suporte a teclado: ✅
- ARIA labels: ✅

---

### Input

#### Variantes

**Text Input**
```jsx
<Input
  type="text"
  label="Nome"
  placeholder="Digite seu nome"
  error="Campo obrigatório"
/>
```

**Props:**
- `type`: text | email | password | number | tel
- `label`: string
- `placeholder`: string
- `error`: string
- `disabled`: boolean
- `required`: boolean
- `icon`: ReactNode

**Estados:**
- Default
- Focus
- Error
- Disabled
- Success

---

### Card

```jsx
<Card variant="elevated" padding="md">
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
  <CardFooter>
    <Button>Ação</Button>
  </CardFooter>
</Card>
```

---

### Modal

```jsx
<Modal
  isOpen={isOpen}
  onClose={handleClose}
  size="md"
  title="Título do Modal"
>
  <ModalContent>
    Conteúdo
  </ModalContent>
  <ModalFooter>
    <Button variant="ghost" onClick={handleClose}>
      Cancelar
    </Button>
    <Button variant="primary" onClick={handleConfirm}>
      Confirmar
    </Button>
  </ModalFooter>
</Modal>
```

---

## 📐 Layouts

### Grid System

```css
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 24px;
}
```

### Breakpoints

```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
--breakpoint-2xl: 1536px;
```

---

## 🎭 Ícones

### Biblioteca
[Heroicons / Feather / Material Icons / Custom]

### Tamanhos
```css
--icon-xs: 16px;
--icon-sm: 20px;
--icon-md: 24px;
--icon-lg: 32px;
--icon-xl: 40px;
```

### Uso
```jsx
<Icon name="check" size="md" color="success" />
```

---

## ♿ Acessibilidade

### Conformidade WCAG 2.1 AA

**Contraste:**
- Texto normal: ≥ 4.5:1 ✅
- Texto grande: ≥ 3:1 ✅
- Elementos UI: ≥ 3:1 ✅

**Navegação:**
- Suporte a teclado: ✅
- Focus visível: ✅
- Skip links: ✅

**Semântica:**
- HTML semântico: ✅
- ARIA labels: ✅
- Alt text: ✅

---

## 📱 Responsividade

### Mobile First

```css
/* Mobile (default) */
.component {
  padding: 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .component {
    padding: 24px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .component {
    padding: 32px;
  }
}
```

---

## 🔧 Implementação

### Instalação

```bash
npm install @[company]/design-system
```

### Uso

```jsx
import { Button, Input, Card } from '@[company]/design-system';
import '@[company]/design-system/dist/styles.css';

function App() {
  return (
    <Card>
      <Input label="Nome" />
      <Button>Enviar</Button>
    </Card>
  );
}
```

---

## 📚 Documentação

### Storybook
[Link para Storybook]

### Figma
[Link para arquivo Figma]

### GitHub
[Link para repositório]

---

## 🔄 Versionamento

### Versão Atual: 1.0.0

**Changelog:**
- **1.0.0** (DD/MM/YYYY)
  - Lançamento inicial
  - 32 componentes
  - 150 tokens de design

---

## 👥 Contribuindo

### Como Contribuir

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Add nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

### Padrões de Código

- ESLint + Prettier
- TypeScript
- Testes unitários (Jest)
- Testes visuais (Chromatic)

---

**Última Atualização:** [DD/MM/YYYY]  
**Versão:** 1.0.0  
**Mantido por:** [Nome/Equipe]