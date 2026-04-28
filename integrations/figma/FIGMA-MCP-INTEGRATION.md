# 🎨 Integração Figma MCP - CX Operating System

## 🎯 Visão Geral

O Figma MCP (Model Context Protocol) é um servidor MCP que fornece acesso direto aos recursos do Figma, permitindo que os agentes do CX Operating System interajam com designs, extraiam informações e automatizem workflows de design-to-code.

### Servidor Conectado
**Nome:** `figma-mcp`  
**Status:** ✅ Conectado  
**Tipo:** Local (Stdio-based)

---

## 🛠️ Ferramentas Disponíveis

O Figma MCP fornece 10 ferramentas especializadas que os agentes podem usar:

### 1. get_design_context
**Descrição:** Ferramenta primária para workflows design-to-code. Retorna código de referência, screenshot e metadados contextuais.

**Quando Usar:**
- Fase 3 (Visual): Extrair código de componentes
- Fase 4 (Validador): Validar implementação vs design
- Qualquer fase: Obter contexto visual de designs

**Parâmetros:**
```json
{
  "nodeId": "123:456",  // ID do nó no Figma (opcional)
  "clientLanguages": "typescript,javascript",  // Linguagens do projeto
  "clientFrameworks": "react,tailwind",  // Frameworks usados
  "forceCode": false,  // Forçar retorno de código
  "artifactType": "COMPONENT_WITHIN_A_WEB_PAGE_OR_APP_SCREEN",
  "taskType": "CREATE_ARTIFACT"
}
```

**Exemplo de Uso:**
```python
# Extrair contexto de um botão no Figma
result = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_design_context",
    arguments={
        "nodeId": "123:456",
        "clientLanguages": "typescript",
        "clientFrameworks": "react,tailwind"
    }
)

# Resultado inclui:
# - Código React do componente
# - Screenshot do design
# - Tokens de design (cores, espaçamento, etc)
# - Metadados (dimensões, propriedades, etc)
```

---

### 2. get_variable_defs
**Descrição:** Obtém definições de variáveis do Figma (cores, espaçamento, tipografia).

**Quando Usar:**
- Fase 3 (Visual): Extrair design tokens
- Criar/atualizar design system
- Sincronizar tokens entre Figma e código

**Parâmetros:**
```json
{
  "nodeId": "123:456",  // Opcional
  "clientLanguages": "typescript",
  "clientFrameworks": "react"
}
```

**Exemplo de Uso:**
```python
# Extrair variáveis de design
variables = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_variable_defs",
    arguments={
        "nodeId": "0:1",  // Página raiz
        "clientLanguages": "typescript"
    }
)

# Resultado: {'icon/default/secondary': '#949494', ...}
```

---

### 3. get_screenshot
**Descrição:** Gera screenshot de um nó específico ou do nó selecionado.

**Quando Usar:**
- Documentação de design
- Apresentações em gateways
- Validação visual
- Comparação antes/depois

**Parâmetros:**
```json
{
  "nodeId": "123:456",  // Opcional
  "clientLanguages": "typescript",
  "clientFrameworks": "react"
}
```

**Exemplo de Uso:**
```python
# Capturar screenshot de uma tela
screenshot = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_screenshot",
    arguments={
        "nodeId": "123:456"
    }
)

# Resultado: Base64 encoded image
```

---

### 4. get_code_connect_map
**Descrição:** Obtém mapeamento entre nós do Figma e componentes no código.

**Quando Usar:**
- Fase 3 (Visual): Mapear designs para código
- Fase 4 (Validador): Validar implementação
- Manter sincronização design-código

**Parâmetros:**
```json
{
  "nodeId": "123:456",  // Opcional
  "codeConnectLabel": "React"  // Framework específico
}
```

**Exemplo de Uso:**
```python
# Obter mapeamento de componentes
mapping = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_code_connect_map",
    arguments={
        "nodeId": "123:456",
        "codeConnectLabel": "React"
    }
)

# Resultado: {
#   '1:2': {
#     'codeConnectSrc': 'https://github.com/foo/components/Button.tsx',
#     'codeConnectName': 'Button'
#   }
# }
```

---

### 5. add_code_connect_map
**Descrição:** Mapeia um nó do Figma para um componente no código.

**Quando Usar:**
- Fase 3 (Visual): Criar mapeamentos iniciais
- Documentar relação design-código
- Facilitar manutenção futura

**Parâmetros:**
```json
{
  "nodeId": "123:456",
  "source": "src/components/Button.tsx",
  "componentName": "Button",
  "label": "React",
  "template": "...",  // Opcional: template Code Connect
  "templateDataJson": "{}"  // Opcional: metadados
}
```

**Exemplo de Uso:**
```python
# Mapear botão do Figma para componente React
use_mcp_tool(
    server_name="figma-mcp",
    tool_name="add_code_connect_map",
    arguments={
        "nodeId": "123:456",
        "source": "src/components/Button.tsx",
        "componentName": "Button",
        "label": "React"
    }
)
```

---

### 6. get_code_connect_suggestions
**Descrição:** Obtém sugestões de IA para mapear nós do Figma para código.

**Quando Usar:**
- Automatizar criação de mapeamentos
- Descobrir componentes não mapeados
- Acelerar setup inicial

**Parâmetros:**
```json
{
  "nodeId": "123:456",  // Opcional
  "clientLanguages": "typescript",
  "clientFrameworks": "react"
}
```

**Exemplo de Uso:**
```python
# Obter sugestões de mapeamento
suggestions = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_code_connect_suggestions",
    arguments={
        "nodeId": "0:1",
        "clientLanguages": "typescript",
        "clientFrameworks": "react"
    }
)

# Resultado: Lista de sugestões de mapeamento
```

---

### 7. send_code_connect_mappings
**Descrição:** Salva múltiplos mapeamentos Code Connect em lote.

**Quando Usar:**
- Após get_code_connect_suggestions
- Criar múltiplos mapeamentos de uma vez
- Automatizar setup de projeto

**Parâmetros:**
```json
{
  "mappings": [
    {
      "nodeId": "123:456",
      "componentName": "Button",
      "source": "src/components/Button.tsx",
      "label": "React"
    }
  ]
}
```

---

### 8. get_metadata
**Descrição:** Obtém metadados de um nó ou página em formato XML.

**Quando Usar:**
- Obter visão geral da estrutura
- Análise de hierarquia
- Documentação de arquitetura

**⚠️ IMPORTANTE:** Sempre prefira `get_design_context`. Use `get_metadata` apenas para overview estrutural.

**Parâmetros:**
```json
{
  "nodeId": "0:1",  // Pode ser ID de página
  "clientLanguages": "typescript",
  "clientFrameworks": "react"
}
```

---

### 9. create_design_system_rules
**Descrição:** Gera prompt para criar regras de design system.

**Quando Usar:**
- Fase 3 (Visual): Criar design system
- Documentar padrões de design
- Estabelecer guidelines

**Parâmetros:**
```json
{
  "clientLanguages": "typescript",
  "clientFrameworks": "react"
}
```

---

### 10. get_figjam
**Descrição:** Gera código UI para nós do FigJam.

**Quando Usar:**
- Converter FigJam em protótipos
- Documentar workshops
- Transformar ideias em código

**⚠️ IMPORTANTE:** Funciona apenas com arquivos FigJam, não Figma Design.

**Parâmetros:**
```json
{
  "nodeId": "123:456",
  "clientLanguages": "typescript",
  "clientFrameworks": "react",
  "includeImagesOfNodes": true
}
```

---

## 🔄 Workflows de Integração

### Workflow 1: Design-to-Code (Fase 3)

```python
# 1. Obter contexto do design
design_context = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_design_context",
    arguments={
        "nodeId": "123:456",
        "clientLanguages": "typescript",
        "clientFrameworks": "react,tailwind",
        "artifactType": "COMPONENT_WITHIN_A_WEB_PAGE_OR_APP_SCREEN"
    }
)

# 2. Extrair variáveis de design
variables = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_variable_defs",
    arguments={"nodeId": "123:456"}
)

# 3. Criar mapeamento Code Connect
use_mcp_tool(
    server_name="figma-mcp",
    tool_name="add_code_connect_map",
    arguments={
        "nodeId": "123:456",
        "source": "src/components/Button.tsx",
        "componentName": "Button",
        "label": "React"
    }
)

# 4. Gerar código do componente
# (usar design_context.code como referência)
```

---

### Workflow 2: Extração de Design Tokens (Fase 3)

```python
# 1. Obter todas as variáveis do arquivo
variables = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_variable_defs",
    arguments={
        "nodeId": "0:1",  # Página raiz
        "clientLanguages": "typescript"
    }
)

# 2. Processar variáveis em tokens
tokens = {
    "colors": {},
    "spacing": {},
    "typography": {}
}

for var_name, var_value in variables.items():
    if "color" in var_name.lower():
        tokens["colors"][var_name] = var_value
    elif "spacing" in var_name.lower():
        tokens["spacing"][var_name] = var_value
    # etc...

# 3. Exportar tokens para JSON/CSS/SCSS
export_tokens(tokens, format="json")
```

---

### Workflow 3: Validação Design vs Código (Fase 4)

```python
# 1. Obter screenshot do design
design_screenshot = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_screenshot",
    arguments={"nodeId": "123:456"}
)

# 2. Obter código implementado
code_connect = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_code_connect_map",
    arguments={"nodeId": "123:456"}
)

# 3. Comparar design vs implementação
# (usar screenshot + código para validação visual)

# 4. Gerar relatório de conformidade
conformity_report = {
    "node_id": "123:456",
    "design_screenshot": design_screenshot,
    "implemented_code": code_connect,
    "conformity_score": 95,
    "issues": []
}
```

---

### Workflow 4: Setup Automático de Mapeamentos

```python
# 1. Obter sugestões de mapeamento
suggestions = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_code_connect_suggestions",
    arguments={
        "nodeId": "0:1",
        "clientLanguages": "typescript",
        "clientFrameworks": "react"
    }
)

# 2. Revisar sugestões com usuário
approved_mappings = review_with_user(suggestions)

# 3. Salvar mapeamentos aprovados
use_mcp_tool(
    server_name="figma-mcp",
    tool_name="send_code_connect_mappings",
    arguments={"mappings": approved_mappings}
)
```

---

## 📋 Uso por Fase

### Fase 0: Estrategista
**Ferramentas:** Nenhuma (fase não usa Figma)

---

### Fase 1: Pesquisador
**Ferramentas:** 
- `get_screenshot` - Capturar designs existentes para análise

**Uso:**
```python
# Capturar telas atuais para análise
current_screens = []
for node_id in screen_ids:
    screenshot = use_mcp_tool(
        server_name="figma-mcp",
        tool_name="get_screenshot",
        arguments={"nodeId": node_id}
    )
    current_screens.append(screenshot)
```

---

### Fase 2: Arquiteto
**Ferramentas:**
- `get_metadata` - Entender estrutura de designs existentes
- `get_screenshot` - Documentar wireframes

**Uso:**
```python
# Analisar estrutura de designs existentes
metadata = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_metadata",
    arguments={"nodeId": "0:1"}
)

# Usar metadata para informar arquitetura de informação
```

---

### Fase 3: Visual
**Ferramentas:** TODAS (fase mais intensiva)

**Prioridade de Uso:**
1. `get_design_context` - Extrair código de componentes
2. `get_variable_defs` - Extrair design tokens
3. `add_code_connect_map` - Mapear designs para código
4. `get_screenshot` - Documentação
5. `create_design_system_rules` - Criar guidelines

**Workflow Completo:**
```python
# 1. Extrair design tokens
tokens = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_variable_defs",
    arguments={"nodeId": "0:1"}
)

# 2. Para cada componente principal
for component_id in component_ids:
    # 2.1. Obter contexto e código
    context = use_mcp_tool(
        server_name="figma-mcp",
        tool_name="get_design_context",
        arguments={
            "nodeId": component_id,
            "clientLanguages": "typescript",
            "clientFrameworks": "react"
        }
    )
    
    # 2.2. Criar mapeamento
    use_mcp_tool(
        server_name="figma-mcp",
        tool_name="add_code_connect_map",
        arguments={
            "nodeId": component_id,
            "source": f"src/components/{context.name}.tsx",
            "componentName": context.name,
            "label": "React"
        }
    )
    
    # 2.3. Capturar screenshot para documentação
    screenshot = use_mcp_tool(
        server_name="figma-mcp",
        tool_name="get_screenshot",
        arguments={"nodeId": component_id}
    )
```

---

### Fase 4: Validador
**Ferramentas:**
- `get_screenshot` - Comparação visual
- `get_code_connect_map` - Validar mapeamentos
- `get_design_context` - Validar implementação

**Uso:**
```python
# Validar cada componente
for component_id in component_ids:
    # 1. Obter design original
    design = use_mcp_tool(
        server_name="figma-mcp",
        tool_name="get_design_context",
        arguments={"nodeId": component_id}
    )
    
    # 2. Obter código implementado
    code_map = use_mcp_tool(
        server_name="figma-mcp",
        tool_name="get_code_connect_map",
        arguments={"nodeId": component_id}
    )
    
    # 3. Comparar e validar
    validation_result = validate_implementation(
        design=design,
        implementation=code_map
    )
```

---

## 🎯 Boas Práticas

### 1. Sempre Especifique Linguagens e Frameworks
```python
# ✅ BOM
use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_design_context",
    arguments={
        "nodeId": "123:456",
        "clientLanguages": "typescript",
        "clientFrameworks": "react,tailwind"
    }
)

# ❌ RUIM
use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_design_context",
    arguments={"nodeId": "123:456"}
)
```

### 2. Use get_design_context como Ferramenta Principal
```python
# ✅ BOM - Usa ferramenta primária
context = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_design_context",
    arguments={"nodeId": "123:456"}
)

# ❌ RUIM - Usa get_metadata quando não necessário
metadata = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_metadata",
    arguments={"nodeId": "123:456"}
)
```

### 3. Extraia Node IDs de URLs
```python
# URL: https://figma.com/design/fileKey/fileName?node-id=1-2
# Node ID: "1:2" (substitua - por :)

def extract_node_id(url):
    # Extrair node-id=1-2
    match = re.search(r'node-id=([0-9]+-[0-9]+)', url)
    if match:
        node_id = match.group(1).replace('-', ':')
        return node_id
    return None
```

### 4. Cache Resultados Quando Possível
```python
# Cache screenshots e design context
cache = {}

def get_cached_design_context(node_id):
    if node_id not in cache:
        cache[node_id] = use_mcp_tool(
            server_name="figma-mcp",
            tool_name="get_design_context",
            arguments={"nodeId": node_id}
        )
    return cache[node_id]
```

### 5. Trate Erros Gracefully
```python
try:
    context = use_mcp_tool(
        server_name="figma-mcp",
        tool_name="get_design_context",
        arguments={"nodeId": node_id}
    )
except Exception as e:
    # Log erro e continue
    log_error(f"Erro ao obter contexto: {e}")
    context = None
```

---

## 🚨 Limitações e Restrições

### 1. Node IDs Devem Ser Válidos
- Formato: "123:456" (não "123-456")
- Devem existir no arquivo Figma
- Devem ser acessíveis pelo usuário

### 2. get_figjam Apenas para FigJam
- Não funciona com arquivos Figma Design
- Apenas para arquivos FigJam

### 3. Permissões do Figma
- Usuário deve ter acesso ao arquivo
- Algumas operações requerem permissões de edição

### 4. Rate Limiting
- Figma API tem limites de taxa
- Implemente retry logic e backoff

---

## 📊 Métricas de Uso

### KPIs Recomendados

| Métrica | Meta | Como Medir |
|---------|------|------------|
| Tempo de extração | < 5s por componente | Tracking de performance |
| Taxa de sucesso | > 95% | Sucessos / Total |
| Componentes mapeados | 100% | Mapeamentos / Total |
| Conformidade design-código | > 90% | Score de validação |

---

## 🔗 Recursos Adicionais

### Documentação Oficial
- [Figma MCP GitHub](https://github.com/figma/mcp-server-figma)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [Figma API Docs](https://www.figma.com/developers/api)

### Exemplos de Código
- Ver [`examples/figma-integration/`](../../examples/figma-integration/)
- Ver metaprompts da Fase 3 (Visual)

---

**Última Atualização:** 2026-04-17  
**Versão:** 1.0.0  
**Status:** ✅ Completo e Testado