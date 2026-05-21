# 🎨 Integração Figma - CX Operating System

## 🎯 Visão Geral

Esta pasta contém toda a documentação e recursos para integração do CX Operating System com o Figma via MCP (Model Context Protocol).

## 📁 Estrutura

```
integrations/figma/
├── README.md (este arquivo)
├── FIGMA-MCP-INTEGRATION.md (750 linhas)
└── examples/
    ├── design-to-code.py
    ├── extract-tokens.py
    └── validate-implementation.py
```

## 📚 Documentação Principal

### [FIGMA-MCP-INTEGRATION.md](FIGMA-MCP-INTEGRATION.md)

Especificação completa da integração com Figma MCP (750 linhas):

**Conteúdo:**
- ✅ 10 ferramentas do Figma MCP documentadas
- ✅ 4 workflows completos de integração
- ✅ Uso por fase (0-4)
- ✅ Boas práticas e limitações
- ✅ Exemplos de código Python
- ✅ Métricas de uso

**Ferramentas Principais:**
1. `get_design_context` - Design-to-code (primária)
2. `get_variable_defs` - Extração de tokens
3. `get_screenshot` - Capturas visuais
4. `get_code_connect_map` - Mapeamentos
5. `add_code_connect_map` - Criar mapeamentos
6. E mais 5 ferramentas especializadas

## 🔄 Workflows Principais

### 1. Design-to-Code (Fase 3)
Extrair código de componentes do Figma para implementação.

**Ferramentas:** `get_design_context`, `get_variable_defs`, `add_code_connect_map`

### 2. Extração de Design Tokens (Fase 3)
Extrair variáveis de design (cores, espaçamento, tipografia) para código.

**Ferramentas:** `get_variable_defs`

### 3. Validação Design vs Código (Fase 4)
Comparar design original com implementação.

**Ferramentas:** `get_screenshot`, `get_code_connect_map`, `get_design_context`

### 4. Setup Automático de Mapeamentos
Automatizar criação de mapeamentos entre Figma e código.

**Ferramentas:** `get_code_connect_suggestions`, `send_code_connect_mappings`

## 🎯 Uso por Fase

| Fase | Ferramentas Usadas | Intensidade |
|------|-------------------|-------------|
| Fase 0: Estrategista | Nenhuma | - |
| Fase 1: Pesquisador | `get_screenshot` | Baixa |
| Fase 2: Arquiteto | `get_metadata`, `get_screenshot` | Média |
| Fase 3: Visual | TODAS | Alta ⭐ |
| Fase 4: Validador | `get_screenshot`, `get_code_connect_map` | Média |

**Fase 3 (Visual)** é a mais intensiva em uso do Figma MCP.

## 🚀 Quick Start

### Extrair Contexto de Design

```python
from mcp_tools import use_mcp_tool

# Extrair contexto de um componente
context = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_design_context",
    arguments={
        "nodeId": "123:456",
        "clientLanguages": "typescript",
        "clientFrameworks": "react,tailwind"
    }
)

# Resultado inclui:
# - context.code: Código React do componente
# - context.screenshot: Screenshot do design
# - context.tokens: Tokens de design
# - context.metadata: Metadados
```

### Extrair Design Tokens

```python
# Extrair todas as variáveis
tokens = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_variable_defs",
    arguments={"nodeId": "0:1"}
)

# Resultado: {'color/primary': '#2196F3', ...}
```

### Capturar Screenshot

```python
# Capturar screenshot de uma tela
screenshot = use_mcp_tool(
    server_name="figma-mcp",
    tool_name="get_screenshot",
    arguments={"nodeId": "123:456"}
)

# Resultado: Base64 encoded image
```

## 📋 Boas Práticas

### ✅ DO

1. **Sempre especifique linguagens e frameworks**
   ```python
   arguments={
       "clientLanguages": "typescript",
       "clientFrameworks": "react,tailwind"
   }
   ```

2. **Use get_design_context como ferramenta primária**
   - Mais completa e contextual
   - Retorna código + screenshot + tokens

3. **Extraia Node IDs de URLs corretamente**
   ```python
   # URL: https://figma.com/design/file?node-id=1-2
   # Node ID: "1:2" (substitua - por :)
   ```

4. **Cache resultados quando possível**
   - Screenshots e design context são pesados
   - Evite chamadas duplicadas

### ❌ DON'T

1. **Não use get_metadata quando get_design_context é suficiente**
   - get_metadata é apenas para overview estrutural
   - get_design_context é mais completo

2. **Não use get_figjam para arquivos Figma Design**
   - get_figjam é apenas para FigJam
   - Use get_design_context para Figma Design

3. **Não ignore erros**
   - Sempre trate exceções
   - Implemente retry logic

## 🚨 Limitações

1. **Node IDs devem ser válidos**
   - Formato: "123:456" (não "123-456")
   - Devem existir no arquivo
   - Devem ser acessíveis

2. **Permissões do Figma**
   - Usuário deve ter acesso ao arquivo
   - Algumas operações requerem edição

3. **Rate Limiting**
   - Figma API tem limites
   - Implemente backoff

## 📊 Métricas

### KPIs Recomendados

| Métrica | Meta | Como Medir |
|---------|------|------------|
| Tempo de extração | < 5s | Performance tracking |
| Taxa de sucesso | > 95% | Sucessos / Total |
| Componentes mapeados | 100% | Mapeamentos / Total |
| Conformidade | > 90% | Score de validação |

## 🔗 Links Úteis

### Documentação
- [Especificação Completa](FIGMA-MCP-INTEGRATION.md)
- [Figma MCP GitHub](https://github.com/figma/mcp-server-figma)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [Figma API Docs](https://www.figma.com/developers/api)

### Metaprompts Relacionados
- [Fase 3: Visual](../../docs/metaprompts/fase-3-visual/)
- [UI Designer](../../docs/metaprompts/fase-3-visual/subagente-ui-designer.md)
- [Design System Manager](../../docs/metaprompts/fase-3-visual/subagente-design-system-manager.md)

### Outros Recursos
- [CX Brain](../../core/cx-brain/SPECIFICATIONS.md)
- [Protocolo de Comunicação](../../docs/architecture/communication-protocol.md)
- [Sistema de Gateways](../../core/gateways/README.md)

## 💡 Exemplos

Ver pasta `examples/` para exemplos completos de:
- Design-to-code workflow
- Extração de tokens
- Validação de implementação
- Setup automático de mapeamentos

## 🆘 Troubleshooting

### Erro: "Node ID inválido"
**Solução:** Verifique formato do Node ID (deve ser "123:456", não "123-456")

### Erro: "Permissão negada"
**Solução:** Verifique se usuário tem acesso ao arquivo Figma

### Erro: "Rate limit exceeded"
**Solução:** Implemente retry logic com backoff exponencial

### Erro: "get_figjam não funciona"
**Solução:** Verifique se arquivo é FigJam (não Figma Design)

## 📈 Roadmap

### Q2 2026
- [ ] Exemplos de código completos
- [ ] Scripts de automação
- [ ] Testes de integração

### Q3 2026
- [ ] Dashboard de métricas
- [ ] Integração com CI/CD
- [ ] Validação automática

### Q4 2026
- [ ] IA para sugestões de mapeamento
- [ ] Sincronização bidirecional
- [ ] Versionamento de designs

---

**Última Atualização:** 2026-04-17  
**Versão:** 1.0.0  
**Status:** ✅ Completo