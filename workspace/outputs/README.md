# 📦 Outputs - Resultados dos Agentes

## 🎯 Visão Geral

Esta pasta contém todos os outputs gerados pelos agentes durante a execução das 5 fases do CX Operating System. Cada fase possui sua própria subpasta organizada por tipo de entregável.

## 📁 Estrutura

```
outputs/
├── README.md (este arquivo)
├── estrategista/          # Fase 0: Boundary Mapping
│   ├── contratos/         # Contratos de escopo
│   ├── matrizes/          # Matrizes de maturidade
│   └── analises/          # Análises de viabilidade
├── pesquisador/           # Fase 1: Data & Emotion Mining
│   ├── benchmarks/        # Análises competitivas
│   ├── personas/          # Personas validadas
│   ├── jornadas/          # Jornadas de usuário
│   └── pesquisas/         # Pesquisas e insights
├── arquiteto/             # Fase 2: Logical UX
│   ├── wireframes/        # Wireframes lógicos
│   ├── fluxos/            # Fluxos de usuário
│   ├── sitemap/           # Arquitetura de informação
│   └── especificacoes/    # Especificações técnicas
├── visual/                # Fase 3: The Render
│   ├── design-system/     # Design system e tokens
│   ├── prototipos/        # Protótipos alta fidelidade
│   ├── mockups/           # Mockups e telas
│   └── assets/            # Assets e recursos
└── validador/             # Fase 4: QA Implacável
    ├── relatorios/        # Relatórios de validação
    ├── testes/            # Testes e evidências
    ├── metricas/          # Métricas de qualidade
    └── melhorias/         # Sugestões de melhoria
```

## 🔄 Como Funciona

### Fluxo de Outputs

```
Agente executa fase
    ↓
Gera entregáveis
    ↓
Salva em outputs/[fase]/[tipo]/
    ↓
Sincroniza com Figma (via MCP)
    ↓
Disponível para próxima fase
```

### Nomenclatura de Arquivos

**Padrão:** `[projeto]-[tipo]-[versao].[extensao]`

**Exemplos:**
```
sicoob-fun-contrato-escopo-v1.md
sicoob-fun-persona-ana-v2.md
sicoob-fun-wireframe-home-v3.fig
sicoob-fun-prototipo-final-v1.fig
sicoob-fun-relatorio-validacao-v1.md
```

## 📋 Outputs por Fase

### Fase 0: Estrategista

**Pasta:** `outputs/estrategista/`

**Entregáveis:**
- `contratos/` - Contratos de escopo técnico
- `matrizes/` - Matrizes de maturidade (Design, Técnica, UX)
- `analises/` - Análises de viabilidade e riscos

**Formato:** Markdown (.md)

**Exemplo:**
```
estrategista/
├── contratos/
│   └── sicoob-fun-contrato-escopo-v1.md
├── matrizes/
│   └── sicoob-fun-matriz-maturidade-v1.md
└── analises/
    └── sicoob-fun-analise-viabilidade-v1.md
```

### Fase 1: Pesquisador

**Pasta:** `outputs/pesquisador/`

**Entregáveis:**
- `benchmarks/` - Análises competitivas e benchmarks
- `personas/` - Personas validadas com dados reais
- `jornadas/` - Jornadas As-Is (estado atual)
- `pesquisas/` - Pesquisas, entrevistas e insights

**Formato:** Markdown (.md), JSON (.json)

**Exemplo:**
```
pesquisador/
├── benchmarks/
│   ├── sicoob-fun-benchmark-sintese-v1.md
│   ├── sicoob-fun-benchmark-gamificacao-v1.md
│   └── sicoob-fun-benchmark-fidelidade-v1.md
├── personas/
│   ├── sicoob-fun-persona-ana-v1.json
│   ├── sicoob-fun-persona-carlos-v1.json
│   └── sicoob-fun-personas-resumo-v1.md
├── jornadas/
│   └── sicoob-fun-jornada-as-is-v1.md
└── pesquisas/
    ├── sicoob-fun-pesquisa-roteiro-v1.md
    └── sicoob-fun-pesquisa-formulario-v1.md
```

### Fase 2: Arquiteto

**Pasta:** `outputs/arquiteto/`

**Entregáveis:**
- `wireframes/` - Wireframes lógicos (baixa/média fidelidade)
- `fluxos/` - Fluxos de usuário e diagramas
- `sitemap/` - Arquitetura de informação e sitemaps
- `especificacoes/` - Especificações técnicas e requisitos

**Formato:** Markdown (.md), Figma (.fig), Mermaid

**Exemplo:**
```
arquiteto/
├── wireframes/
│   ├── sicoob-fun-wireframe-home-v1.md
│   ├── sicoob-fun-wireframe-perfil-v1.md
│   └── sicoob-fun-wireframes-completo-v1.fig
├── fluxos/
│   ├── sicoob-fun-fluxo-onboarding-v1.md
│   └── sicoob-fun-fluxo-compra-v1.md
├── sitemap/
│   └── sicoob-fun-arquitetura-informacao-v1.md
└── especificacoes/
    └── sicoob-fun-especificacoes-tecnicas-v1.md
```

### Fase 3: Visual

**Pasta:** `outputs/visual/`

**Entregáveis:**
- `design-system/` - Design system, tokens e componentes
- `prototipos/` - Protótipos de alta fidelidade
- `mockups/` - Mockups e telas finais
- `assets/` - Ícones, imagens e recursos visuais

**Formato:** Figma (.fig), JSON (.json), Markdown (.md)

**Exemplo:**
```
visual/
├── design-system/
│   ├── sicoob-fun-design-system-v1.fig
│   ├── sicoob-fun-tokens-v1.json
│   └── sicoob-fun-componentes-doc-v1.md
├── prototipos/
│   ├── sicoob-fun-prototipo-mobile-v1.fig
│   └── sicoob-fun-prototipo-web-v1.fig
├── mockups/
│   ├── sicoob-fun-mockup-home-v1.png
│   ├── sicoob-fun-mockup-perfil-v1.png
│   └── sicoob-fun-mockups-completo-v1.fig
└── assets/
    ├── icons/
    ├── images/
    └── sicoob-fun-assets-export-v1.zip
```

### Fase 4: Validador

**Pasta:** `outputs/validador/`

**Entregáveis:**
- `relatorios/` - Relatórios de validação e QA
- `testes/` - Evidências de testes e checklists
- `metricas/` - Métricas de qualidade e performance
- `melhorias/` - Sugestões de melhoria e otimização

**Formato:** Markdown (.md), JSON (.json), PDF (.pdf)

**Exemplo:**
```
validador/
├── relatorios/
│   ├── sicoob-fun-relatorio-validacao-v1.md
│   └── sicoob-fun-handoff-tecnico-v1.md
├── testes/
│   ├── sicoob-fun-checklist-wcag-v1.md
│   ├── sicoob-fun-testes-usabilidade-v1.md
│   └── sicoob-fun-evidencias-testes-v1.pdf
├── metricas/
│   ├── sicoob-fun-metricas-qualidade-v1.json
│   └── sicoob-fun-metricas-performance-v1.md
└── melhorias/
    └── sicoob-fun-sugestoes-melhorias-v1.md
```

## 🔌 Integração com Figma MCP

Todos os arquivos em `outputs/` são automaticamente sincronizados com o Figma via MCP (Model Context Protocol).

### Como Funciona

1. **Agente gera output** → Salva em `outputs/[fase]/[tipo]/`
2. **MCP detecta mudança** → Sincroniza com Figma
3. **Figma atualiza** → Arquivo disponível no projeto Figma
4. **Equipe acessa** → Via Figma Desktop ou Web

### Configuração

O arquivo `.mcp.json` na raiz do projeto configura a integração:

```json
{
  "mcpServers": {
    "figma": {
      "type": "sse",
      "url": "http://127.0.0.1:3845/mcp"
    }
  }
}
```

## 📊 Métricas e Qualidade

### Quality Scores

Cada output possui um quality score (0-100):

- **90-100:** Excelente - Pronto para uso
- **80-89:** Bom - Pequenos ajustes opcionais
- **70-79:** Aceitável - Melhorias recomendadas
- **< 70:** Insuficiente - Requer iteração

### Rastreabilidade

Cada arquivo possui metadados:

```markdown
---
projeto: sicoob-fun
fase: fase-1-pesquisador
tipo: persona
versao: v1
data: 2026-04-23
autor: pesquisador-agent
quality_score: 88
---
```

## 🗂️ Organização por Projeto

Para projetos com múltiplas versões ou iterações:

```
outputs/pesquisador/personas/
├── sicoob-fun-persona-ana-v1.json
├── sicoob-fun-persona-ana-v2.json (iteração)
├── sicoob-fun-persona-carlos-v1.json
└── outro-projeto-persona-maria-v1.json
```

## 🔍 Busca e Filtros

### Por Projeto
```bash
find outputs -name "sicoob-fun-*"
```

### Por Fase
```bash
ls -R outputs/pesquisador/
```

### Por Tipo
```bash
find outputs -name "*persona*"
```

### Por Versão
```bash
find outputs -name "*-v1.*"
```

## 🚨 Boas Práticas

### ✅ DO

1. **Use nomenclatura padronizada**
   ```
   [projeto]-[tipo]-[versao].[extensao]
   ```

2. **Versione seus arquivos**
   ```
   v1, v2, v3... (não sobrescreva)
   ```

3. **Documente mudanças**
   ```markdown
   ## Changelog
   - v2: Adicionado objetivos específicos
   - v1: Versão inicial
   ```

4. **Mantenha organização**
   ```
   Cada tipo de arquivo em sua pasta correta
   ```

### ❌ DON'T

1. **Não misture projetos**
   ```
   ❌ outputs/pesquisador/personas/persona-ana.json
   ✅ outputs/pesquisador/personas/sicoob-fun-persona-ana-v1.json
   ```

2. **Não sobrescreva versões**
   ```
   ❌ Editar sicoob-fun-persona-ana-v1.json
   ✅ Criar sicoob-fun-persona-ana-v2.json
   ```

3. **Não use espaços em nomes**
   ```
   ❌ sicoob fun persona ana.json
   ✅ sicoob-fun-persona-ana-v1.json
   ```

## 📚 Recursos Relacionados

- [Templates](../templates/) - Templates para cada tipo de output
- [Projetos](../projetos/) - Projetos completos com outputs
- [Metaprompts](../docs/metaprompts/) - Prompts dos agentes
- [Workflows](../docs/workflows/) - Fluxos de trabalho

## 🆘 Troubleshooting

### Arquivo não sincroniza com Figma
1. Verificar se Figma Desktop está aberto
2. Verificar `.mcp.json` configurado
3. Reiniciar Figma Desktop

### Pasta não aparece
1. Verificar se pasta foi criada corretamente
2. Verificar permissões (chmod 755)
3. Atualizar visualização do VS Code

### Arquivo corrompido
1. Verificar formato do arquivo
2. Validar JSON/Markdown
3. Restaurar de versão anterior

---

**Última Atualização:** 2026-04-23  
**Versão:** 2.0.0  
**Status:** ✅ Estruturado e Documentado