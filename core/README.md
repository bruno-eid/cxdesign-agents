# ⚙️ Core - Componentes Centrais

## Visão Geral

Esta seção contém os componentes centrais do sistema que são compartilhados por todos os agentes: o orquestrador CX Master, o sistema de memória CX Brain e o sistema de handoff.

## 📁 Estrutura

```
core/
├── README.md (este arquivo)
├── cx-master/
│   ├── orchestrator.py          # Orquestrador principal
│   ├── router.py                # Roteamento de agentes
│   ├── context_manager.py       # Gerenciamento de contexto
│   └── quality_evaluator.py     # Avaliação de qualidade
├── cx-brain/
│   ├── memory_system.py         # Sistema de memória
│   ├── vector_store.py          # Armazenamento vetorial
│   ├── short_term_memory.py     # Memória de curto prazo
│   └── long_term_memory.py      # Memória de longo prazo
└── handoff/
    ├── handoff_protocol.py      # Protocolo de handoff
    ├── models.py                # Modelos de dados
    └── validators.py            # Validadores de handoff
```

## 👑 CX Master - Orquestrador Central

### Responsabilidades

1. **Roteamento Inteligente**
   - Analisa inputs e determina qual agente acionar
   - Gerencia a sequência de execução
   - Decide sobre iterações

2. **Gestão de Contexto**
   - Mantém contexto global do projeto
   - Sincroniza estado entre agentes
   - Preserva histórico de decisões

3. **Avaliação de Qualidade**
   - Analisa outputs de cada fase
   - Calcula scores de qualidade
   - Identifica necessidade de iteração

4. **Coordenação de Gateways**
   - Gerencia aprovações humanas
   - Bloqueia execução até aprovação
   - Registra feedback de stakeholders

### Fluxo de Operação

```python
class CXMaster:
    def __init__(self):
        self.context_manager = ContextManager()
        self.router = AgentRouter()
        self.quality_evaluator = QualityEvaluator()
        self.memory = CXBrain()
    
    def process_briefing(self, briefing):
        # 1. Estrutura contexto inicial
        context = self.context_manager.create_context(briefing)
        
        # 2. Determina primeira fase
        next_agent = self.router.route(context)
        
        # 3. Cria handoff
        handoff = self.create_handoff(context, next_agent)
        
        return handoff
    
    def process_agent_output(self, output):
        # 1. Avalia qualidade
        quality_score = self.quality_evaluator.evaluate(output)
        
        # 2. Atualiza contexto
        self.context_manager.update(output)
        
        # 3. Decide próximo passo
        if quality_score < 70:
            return self.request_iteration(output)
        elif self.is_final_phase(output):
            return self.prepare_delivery(output)
        else:
            return self.route_to_next_phase(output)
```

## 🧠 CX Brain - Sistema de Memória

### Tipos de Memória

#### 1. Memória de Curto Prazo (Sessão Atual)
- Interações recentes
- Contexto ativo
- Decisões temporárias

#### 2. Memória de Longo Prazo (Projetos Anteriores)
- Histórico de projetos
- Padrões aprendidos
- Preferências do designer

#### 3. Memória Semântica (Conhecimento Geral)
- Princípios de design
- Melhores práticas
- Design patterns

### Operações Principais

```python
class CXBrain:
    def __init__(self):
        self.vector_store = VectorStore()
        self.short_term = ShortTermMemory()
        self.long_term = LongTermMemory()
    
    def store_interaction(self, interaction):
        # Armazena em curto prazo
        self.short_term.add(interaction)
        
        # Cria embedding
        embedding = self.create_embedding(interaction)
        self.vector_store.add(embedding, interaction)
        
        # Consolida se relevante
        if self.is_significant(interaction):
            self.long_term.consolidate(interaction)
    
    def retrieve_context(self, query):
        # Busca semântica
        similar = self.vector_store.search(query, k=5)
        
        # Combina com contexto atual
        current = self.short_term.get_current()
        
        return self.merge_contexts(similar, current)
```

## 🔄 Sistema de Handoff

### Formato Padrão

```json
{
  "handoff_id": "uuid-v4",
  "timestamp": "2026-04-16T15:30:00Z",
  "fase_atual": "research|architecture|visual|validation",
  "agente_acionado": "PESQUISADOR|ARQUITETO|VISUAL|VALIDADOR",
  
  "contexto_acumulado": {
    "projeto_id": "string",
    "briefing_resumo": "string",
    "objetivos_negocio": ["string"],
    "restricoes": ["string"],
    "fases_completadas": ["string"]
  },
  
  "inputs_disponiveis": {
    "artefatos": ["lista de documentos"],
    "dados_brutos": {},
    "outputs_anteriores": {}
  },
  
  "output_esperado": {
    "tipo": "personas|wireframes|prototipos|relatorio",
    "formato": "JSON|Markdown|Figma",
    "criterios_sucesso": ["string"]
  },
  
  "prioridade": "alta|media|baixa",
  "deadline": "ISO-8601"
}
```

### Validação de Handoff

Cada handoff é validado para garantir:
- Todos os campos obrigatórios presentes
- Tipos de dados corretos
- Contexto suficiente para execução
- Agente de destino válido

## 📊 Métricas do Core

### Performance
- Tempo de roteamento
- Latência de handoff
- Uso de memória

### Qualidade
- Taxa de aprovação em gateways
- Número médio de iterações
- Score médio de qualidade

### Confiabilidade
- Taxa de erro
- Disponibilidade
- Tempo de recuperação

---

**Status:** Em Desenvolvimento  
**Última Atualização:** 2026-04-16