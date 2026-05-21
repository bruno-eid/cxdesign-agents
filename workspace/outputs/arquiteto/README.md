# 🏗️ Outputs - Fase 2: Arquiteto

## Visão Geral

Esta pasta contém todos os entregáveis da **Fase 2 - Arquiteto**, responsável por estruturar a arquitetura de informação, criar fluxos de usuário e desenvolver wireframes de baixa fidelidade.

## 🎯 Agentes Responsáveis

### 1. Information Architect
**Função:** Estruturar navegação e hierarquia de informação

**Entregáveis:**
- `sitemap.md` - Estrutura de navegação
- `taxonomia.md` - Sistema de categorização
- `card-sorting.md` - Resultados de card sorting

### 2. Flow Designer
**Função:** Mapear fluxos de usuário e interações

**Entregáveis:**
- `fluxo-[nome].md` - Fluxos de usuário detalhados
- `matriz-decisoes.md` - Árvore de decisões
- `casos-uso.md` - Casos de uso principais

### 3. Wireframe Specialist
**Função:** Criar wireframes de baixa fidelidade

**Entregáveis:**
- `wireframe-[tela].png` - Wireframes individuais
- `wireflow.png` - Fluxo completo com wireframes
- `especificacoes.md` - Specs técnicas

## 📁 Estrutura de Pastas

```
arquiteto/
├── sitemap/                # Estruturas de navegação
│   └── [projeto]-sitemap-[data].md
├── fluxos/                 # Fluxos de usuário
│   ├── [projeto]-fluxo-[nome]-[data].md
│   └── [projeto]-matriz-decisoes-[data].md
├── wireframes/             # Wireframes de baixa fidelidade
│   ├── [projeto]-wireframe-[tela]-[data].png
│   └── [projeto]-wireflow-[data].png
└── especificacoes/         # Specs técnicas
    └── [projeto]-specs-[data].md
```

## ✅ Checklist de Entregáveis

Antes de passar pelo **Gateway 3**, certifique-se de que:

- [ ] Sitemap completo e validado
- [ ] Fluxos principais mapeados (mínimo 3)
- [ ] Wireframes de telas críticas (mínimo 10)
- [ ] Wireflow completo documentado
- [ ] Especificações técnicas detalhadas
- [ ] Navegação testada com usuários
- [ ] Casos de uso documentados

## 🚪 Gateway 3: Aprovação de Arquitetura

**Aprovadores:** UX Lead, Tech Lead, Product Owner

**Critérios de Aprovação:**
- Navegação intuitiva (teste com 5 usuários)
- Fluxos otimizados (mínimo de passos)
- Wireframes claros e compreensíveis
- Specs técnicas viáveis
- Alinhamento com personas e jornadas

**Duração:** 90 minutos

## 🔄 Fluxo de Trabalho

```
1. Gateway 2 aprovado → Fase 2 inicia
2. Information Architect executa
   → Cria sitemap baseado em jornadas
   → Define taxonomia
   → Salva em outputs/arquiteto/sitemap/
3. Flow Designer executa
   → Mapeia fluxos principais
   → Cria matriz de decisões
   → Salva em outputs/arquiteto/fluxos/
4. Wireframe Specialist executa
   → Cria wireframes de baixa fidelidade
   → Monta wireflow completo
   → Salva em outputs/arquiteto/wireframes/
5. MCP sincroniza com Figma
6. Gateway 3: Aprovação de Arquitetura
7. Se aprovado → Fase 3
   Se rejeitado → Ajustes necessários
```

## 💡 Dicas

- **Comece simples** - Baixa fidelidade primeiro
- **Teste cedo** - Valide navegação com usuários
- **Documente decisões** - Por que escolheu essa estrutura?
- **Pense em escalabilidade** - Como crescerá no futuro?
- **Foque em fluxos críticos** - Não tente mapear tudo

## 🔗 Links Úteis

- [Template de Sitemap](../../templates/deliverables/sitemap-template.md)
- [Template de Fluxo](../../templates/deliverables/fluxo-template.md)
- [Template de Wireframe](../../templates/deliverables/wireframe-template.md)
- [Metaprompts da Fase 2](../../docs/metaprompts/fase-2/)

---

**Última atualização:** 2026-04-23  
**Mantido por:** CX Operating System