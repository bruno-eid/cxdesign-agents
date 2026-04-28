# 🔌 Integrações Externas

## Visão Geral

Esta seção documenta todas as integrações do sistema com ferramentas e serviços externos, incluindo APIs, MCPs e outras plataformas.

## 📁 Conteúdo

### Integrações Principais

- **figma-mcp.md** - Integração com Figma via MCP Server
- **vector-database.md** - Integração com banco de dados vetorial
- **llm-providers.md** - Integração com provedores de LLM
- **analytics.md** - Integração com ferramentas de analytics

### Integrações Opcionais

- **notion.md** - Integração com Notion para documentação
- **slack.md** - Notificações via Slack
- **github.md** - Integração com GitHub para versionamento
- **jira.md** - Sincronização com Jira

## 🎨 Integração Figma MCP

### Servidor MCP Disponível

O sistema utiliza o **figma-mcp** server que já está conectado e fornece:

#### Tools Disponíveis

1. **get_design_context** - Obtém contexto de design de um nó Figma
   - Retorna código de referência, screenshot e metadados
   - Principal ferramenta para workflows design-to-code

2. **get_variable_defs** - Obtém definições de variáveis
   - Retorna valores reutilizáveis (cores, fontes, tamanhos)
   - Formato: `{'icon/default/secondary': #949494}`

3. **get_screenshot** - Gera screenshot de um nó
   - Útil para documentação e validação visual

4. **get_code_connect_map** - Mapeia nós Figma para componentes de código
   - Retorna: `{'1:2': { codeConnectSrc: 'path/to/Button.tsx', codeConnectName: 'Button' }}`

5. **add_code_connect_map** - Adiciona mapeamento Code Connect
   - Vincula nós Figma a componentes do codebase

6. **get_code_connect_suggestions** - Sugestões de mapeamento via IA
   - Workflow: obter sugestões → revisar → salvar via send_code_connect_mappings

7. **send_code_connect_mappings** - Salva múltiplos mapeamentos em bulk

8. **get_metadata** - Obtém metadados em XML
   - Estrutura de nós, tipos, nomes, posições e tamanhos
   - **IMPORTANTE:** Sempre preferir get_design_context

9. **create_design_system_rules** - Gera prompt para regras de design system

10. **get_figjam** - Gera código UI de nós FigJam
    - **IMPORTANTE:** Apenas para arquivos FigJam

### Uso nos Agentes

#### Fase 1: Pesquisador
- `get_screenshot` para capturar referências visuais
- `get_metadata` para análise de estrutura

#### Fase 2: Arquiteto
- `get_design_context` para entender arquitetura existente
- `get_variable_defs` para mapear tokens de design

#### Fase 3: Visual
- `get_design_context` para gerar código de componentes
- `add_code_connect_map` para vincular design e código
- `create_design_system_rules` para documentar sistema

#### Fase 4: Validador
- `get_screenshot` para validação visual
- `get_code_connect_map` para verificar mapeamentos

### Formato de Node ID

Extrair node ID de URLs Figma:
- URL: `https://figma.com/design/:fileKey/:fileName?node-id=1-2`
- Node ID: `1:2`

Para branches:
- URL: `https://figma.com/design/:fileKey/branch/:branchKey/:fileName`
- Usar `branchKey` como `fileKey`

## 🧠 Integração Vector Database

### Propósito

Armazena embeddings para:
- Memória de longo prazo (projetos anteriores)
- Busca semântica de contexto
- Aprendizado de padrões

### Operações

1. **Store Interaction** - Armazena interação com embedding
2. **Retrieve Context** - Busca contexto relevante
3. **Update Memory** - Atualiza memória de longo prazo

## 🤖 Integração LLM Providers

### Provedores Suportados

- **OpenAI GPT-4** - Principal
- **Anthropic Claude** - Backup/especializado
- **Modelos locais** - Opcional para privacidade

### Uso por Agente

Cada agente pode usar diferentes modelos:
- **Estrategista:** GPT-4 (raciocínio estratégico)
- **Pesquisador:** Claude (análise de dados)
- **Arquiteto:** GPT-4 (design de sistemas)
- **Visual:** DALL-E 3 (geração de imagens)
- **Validador:** GPT-4 (análise crítica)

## 📊 Métricas de Integração

Monitoramento de:
- Taxa de sucesso de chamadas API
- Latência média
- Custo por operação
- Erros e retries

---

**Status:** Em Desenvolvimento  
**Última Atualização:** 2026-04-16