# 🤖 Agentes Especializados

## Visão Geral

Esta seção contém a implementação de todos os agentes especializados do sistema, organizados por fase de execução. Cada fase possui um Macro Agente coordenador e seus Subagentes executores.

## 📁 Estrutura

```
agents/
├── README.md (este arquivo)
├── fase-0-estrategista/
│   ├── README.md
│   ├── macro_agent.py
│   └── subagents/
│       ├── boundary_mapper.py
│       └── scope_validator.py
├── fase-1-pesquisador/
│   ├── README.md
│   ├── macro_agent.py
│   └── subagents/
│       ├── extrator_dores.py
│       ├── criador_personas.py
│       └── validador_ideias.py
├── fase-2-arquiteto/
│   ├── README.md
│   ├── macro_agent.py
│   └── subagents/
│       ├── ux_designer.py
│       ├── service_designer.py
│       └── ia_architect.py
├── fase-3-visual/
│   ├── README.md
│   ├── macro_agent.py
│   └── subagents/
│       ├── ui_designer.py
│       ├── design_system_manager.py
│       └── prototyper.py
└── fase-4-validador/
    ├── README.md
    ├── macro_agent.py
    └── subagents/
        ├── verificador_requisitos.py
        ├── validador_acessibilidade.py
        └── qa_analyst.py
```

## 🎯 Hierarquia de Agentes

### Nível 1: CX Master (Orquestrador)
- Coordena todas as fases
- Gerencia contexto global
- Decide sobre iterações

### Nível 2: Macro Agentes (Coordenadores de Fase)
- Coordenam subagentes da sua fase
- Consolidam outputs
- Garantem qualidade da fase

### Nível 3: Subagentes (Executores)
- Executam tarefas específicas
- Geram outputs especializados
- Reportam ao Macro Agente

## 📌 Fase 0: Estrategista (Boundary Mapping)

### Objetivo
Definir escopo, restrições e viabilidade do projeto antes de iniciar o trabalho.

### Macro Agente: Estrategista
**Responsabilidade:** Coordenar mapeamento de fronteiras e validação de escopo

### Subagentes
1. **Boundary Mapper** - Mapeia restrições técnicas e de negócio
2. **Scope Validator** - Valida viabilidade e define matriz de maturidade

### Entregáveis
- Contrato de Escopo Técnico
- Matriz de Maturidade
- Documento de Restrições

## 🔎 Fase 1: Pesquisador (Data & Emotion Mining)

### Objetivo
Minerar dados e emoções para identificar dores reais e criar personas validadas.

### Macro Agente: Pesquisador
**Responsabilidade:** Coordenar descoberta e análise de dados

### Subagentes
1. **Extrator de Dores** - Identifica fricções e pain points
2. **Criador de Personas** - Sintetiza arquétipos acionáveis
3. **Validador de Ideias** - Avalia viabilidade de soluções

### Entregáveis
- Matriz de Fricções Reais
- Personas Validadas
- Jornada As-Is (Estado Atual)
- Insights Estratégicos

## 🏗️ Fase 2: Arquiteto (Logical UX)

### Objetivo
Desenhar o esqueleto da experiência, focando em lógica e eliminação de atritos.

### Macro Agente: Arquiteto
**Responsabilidade:** Coordenar design de arquitetura de experiência

### Subagentes
1. **UX Designer** - Estrutura fluxos e modelos mentais
2. **Service Designer** - Mapeia processos end-to-end
3. **IA Architect** - Define arquitetura de informação

### Entregáveis
- Jornada To-Be (Futura)
- Wireframes Lógicos
- Service Blueprints
- Arquitetura de Informação

## 🎨 Fase 3: Visual (The Render)

### Objetivo
Materializar com alta fidelidade dentro do Design System da marca.

### Macro Agente: Visual
**Responsabilidade:** Coordenar renderização e materialização visual

### Subagentes
1. **UI Designer** - Cria interfaces de alta fidelidade
2. **Design System Manager** - Gerencia tokens e componentes
3. **Prototyper** - Cria protótipos interativos

### Entregáveis
- Tokens de Design aplicados
- Protótipos de Alta Fidelidade
- Design System documentado
- Especificações visuais

## 🛡️ Fase 4: Validador (QA Implacável)

### Objetivo
Garantir compliance, acessibilidade e qualidade antes da entrega.

### Macro Agente: Validador
**Responsabilidade:** Coordenar validação e garantia de qualidade

### Subagentes
1. **Verificador de Requisitos** - Garante cobertura completa
2. **Validador de Acessibilidade** - Conformidade WCAG 2.1 AA
3. **QA Analyst** - Avalia implementabilidade

### Entregáveis
- Matriz de Risco Zerada
- Relatório Pass/Fail
- Handoff Técnico
- Checklist de Acessibilidade

## 🔄 Padrão de Comunicação

### Input (Handoff do CX Master)
```json
{
  "handoff_id": "uuid",
  "fase_atual": "nome_da_fase",
  "contexto_acumulado": {},
  "inputs_disponiveis": {},
  "output_esperado": {}
}
```

### Output (Para CX Master)
```json
{
  "fase_completada": "nome_da_fase",
  "quality_score": 85,
  "entregaveis": [],
  "issues": [],
  "recomendacoes": [],
  "proximo_passo": "string"
}
```

## 📊 Sistema de Qualidade

### Scores por Fase
- **90-100:** Excelente - Pronto para próxima fase
- **80-89:** Bom - Pequenos ajustes opcionais
- **70-79:** Aceitável - Melhorias recomendadas
- **< 70:** Insuficiente - Requer iteração

### Critérios de Avaliação
1. **Completude:** Todos os entregáveis presentes?
2. **Qualidade:** Atende aos critérios de sucesso?
3. **Consistência:** Alinhado com fases anteriores?
4. **Viabilidade:** Implementável tecnicamente?

## 🚀 Implementação

### Classe Base de Agente

```python
from abc import ABC, abstractmethod

class BaseAgent(ABC):
    def __init__(self, name: str, role: str):
        self.name = name
        self.role = role
        self.memory = None
    
    @abstractmethod
    def process(self, handoff: dict) -> dict:
        """Processa handoff e retorna output"""
        pass
    
    @abstractmethod
    def validate_input(self, handoff: dict) -> bool:
        """Valida se o handoff está completo"""
        pass
    
    def calculate_quality_score(self, output: dict) -> int:
        """Calcula score de qualidade do output"""
        pass
```

### Classe Base de Macro Agente

```python
class MacroAgent(BaseAgent):
    def __init__(self, name: str, subagents: list):
        super().__init__(name, "coordinator")
        self.subagents = subagents
    
    def process(self, handoff: dict) -> dict:
        # 1. Distribui trabalho para subagentes
        results = []
        for subagent in self.subagents:
            result = subagent.process(handoff)
            results.append(result)
        
        # 2. Consolida outputs
        consolidated = self.consolidate_outputs(results)
        
        # 3. Avalia qualidade
        quality_score = self.calculate_quality_score(consolidated)
        
        return {
            "fase_completada": self.name,
            "quality_score": quality_score,
            "entregaveis": consolidated,
            "issues": self.identify_issues(consolidated),
            "recomendacoes": self.generate_recommendations(consolidated)
        }
```

---

**Status:** Em Desenvolvimento  
**Última Atualização:** 2026-04-16