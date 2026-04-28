# 🔌 Integrações

## Visão Geral

Esta seção contém as implementações de integração com ferramentas e serviços externos.

## 📁 Estrutura

```
integrations/
├── README.md (este arquivo)
├── figma/
│   ├── mcp_client.py
│   ├── design_context.py
│   ├── code_connect.py
│   └── screenshots.py
└── tools/
    ├── vector_db.py
    ├── llm_providers.py
    └── analytics.py
```

## 🎨 Integração Figma

### Ferramentas Disponíveis via MCP

O servidor `figma-mcp` já está conectado e fornece 10 ferramentas principais.

### Implementação Recomendada

```python
class FigmaIntegration:
    def __init__(self, mcp_client):
        self.mcp = mcp_client
    
    def get_design_context(self, node_id: str):
        """Obtém contexto completo de design"""
        return self.mcp.use_tool(
            server_name="figma-mcp",
            tool_name="get_design_context",
            arguments={"nodeId": node_id}
        )
    
    def create_code_mapping(self, node_id: str, component_path: str):
        """Cria mapeamento entre Figma e código"""
        return self.mcp.use_tool(
            server_name="figma-mcp",
            tool_name="add_code_connect_map",
            arguments={
                "nodeId": node_id,
                "source": component_path,
                "componentName": "ComponentName",
                "label": "React"
            }
        )
```

## 🧠 Integração Vector Database

### Propósito
Armazenar embeddings para memória de longo prazo e busca semântica.

### Implementação

```python
class VectorDBIntegration:
    def __init__(self, provider="qdrant"):
        self.provider = provider
        self.client = self._init_client()
    
    def store_embedding(self, text: str, metadata: dict):
        """Armazena texto com embedding"""
        embedding = self._create_embedding(text)
        return self.client.upsert(
            collection_name="cx_memory",
            points=[{
                "id": generate_uuid(),
                "vector": embedding,
                "payload": metadata
            }]
        )
    
    def search_similar(self, query: str, k: int = 5):
        """Busca contextos similares"""
        query_embedding = self._create_embedding(query)
        return self.client.search(
            collection_name="cx_memory",
            query_vector=query_embedding,
            limit=k
        )
```

## 🤖 Integração LLM Providers

### Provedores Suportados

```python
class LLMProvider:
    PROVIDERS = {
        "openai": OpenAIProvider,
        "anthropic": AnthropicProvider,
        "local": LocalProvider
    }
    
    def __init__(self, provider: str = "openai"):
        self.provider = self.PROVIDERS[provider]()
    
    def generate(self, prompt: str, model: str = "gpt-4"):
        """Gera resposta usando LLM"""
        return self.provider.complete(
            prompt=prompt,
            model=model,
            temperature=0.7
        )
```

---

**Status:** Em Desenvolvimento  
**Última Atualização:** 2026-04-16