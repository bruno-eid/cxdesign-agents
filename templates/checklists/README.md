# ✅ Checklists de Validação

## 📋 Visão Geral

Este diretório contém checklists de validação para cada fase do CX Operating System. Use estes checklists para garantir que todos os requisitos foram atendidos antes de avançar para a próxima fase.

---

## 🎯 Propósito

Os checklists servem para:

1. **Garantir Qualidade**: Verificar se todos os entregáveis atendem aos padrões
2. **Facilitar Revisão**: Estruturar o processo de revisão de forma sistemática
3. **Documentar Progresso**: Registrar o que foi completado e o que falta
4. **Preparar Gateways**: Preparar documentação para aprovação nos Human Gateways
5. **Manter Consistência**: Garantir que todos os projetos sigam o mesmo padrão

---

## 📁 Estrutura

```
checklists/
├── README.md (este arquivo)
├── fase-0-estrategista.md
├── fase-1-pesquisador.md
├── fase-2-arquiteto.md
├── fase-3-visual.md
├── fase-4-validador.md
└── gateway-checklist.md
```

---

## 🔄 Como Usar

### 1. Selecione o Checklist Apropriado

Escolha o checklist correspondente à fase atual do projeto:

- **Fase 0**: Estratégia e Planejamento
- **Fase 1**: Pesquisa e Descoberta
- **Fase 2**: Arquitetura de Informação
- **Fase 3**: Design Visual
- **Fase 4**: Validação e Testes

### 2. Copie para o Projeto

```bash
cp templates/checklists/fase-X-nome.md projetos/seu-projeto/checklists/
```

### 3. Preencha Durante o Trabalho

- Marque `[x]` para itens completados
- Marque `[-]` para itens em progresso
- Deixe `[ ]` para itens pendentes
- Adicione notas quando necessário

### 4. Revise Antes do Gateway

Antes de cada Human Gateway, certifique-se de que:
- Todos os itens críticos estão marcados como `[x]`
- Itens pendentes têm justificativa
- Documentação está completa
- Entregáveis estão prontos para revisão

---

## 📊 Níveis de Prioridade

Cada item do checklist tem um nível de prioridade:

### 🔴 Crítico
- **Obrigatório** para avançar para próxima fase
- Bloqueia aprovação no Gateway
- Deve ser 100% completo

### 🟡 Importante
- **Altamente recomendado**
- Pode ser completado na próxima fase com justificativa
- Impacta qualidade do resultado

### 🟢 Opcional
- **Bom ter**
- Não bloqueia progresso
- Melhora qualidade mas não é essencial

---

## 🎯 Critérios de Aprovação

### Para Passar no Gateway

**Mínimo Requerido:**
- ✅ 100% dos itens críticos (🔴) completos
- ✅ 80% dos itens importantes (🟡) completos
- ✅ Documentação básica pronta
- ✅ Entregáveis revisados

**Recomendado:**
- ✅ 100% dos itens críticos (🔴) completos
- ✅ 90% dos itens importantes (🟡) completos
- ✅ 50% dos itens opcionais (🟢) completos
- ✅ Documentação completa
- ✅ Entregáveis validados

---

## 📝 Exemplo de Uso

```markdown
## Checklist - Fase 1: Pesquisa

### Pesquisa com Usuários
- [x] 🔴 Entrevistas realizadas (mínimo 5)
- [x] 🔴 Personas criadas
- [-] 🟡 Jornada do usuário mapeada
- [ ] 🟢 Empathy maps criados

### Notas
- Jornada em progresso, falta validar com stakeholders
- Empathy maps serão criados na próxima sprint
```

---

## 🔄 Integração com Gateways

### Gateway 1: Estratégia → Pesquisa
**Checklist:** `fase-0-estrategista.md`
**Aprovadores:** Product Owner, Stakeholders
**Critério:** 100% críticos + 80% importantes

### Gateway 2: Pesquisa → Arquitetura
**Checklist:** `fase-1-pesquisador.md`
**Aprovadores:** UX Lead, Product Owner
**Critério:** 100% críticos + 80% importantes

### Gateway 3: Arquitetura → Visual
**Checklist:** `fase-2-arquiteto.md`
**Aprovadores:** UX Lead, Dev Lead
**Critério:** 100% críticos + 80% importantes

### Gateway 4: Visual → Validação
**Checklist:** `fase-3-visual.md`
**Aprovadores:** Design Lead, Brand Manager
**Critério:** 100% críticos + 80% importantes

### Gateway 5: Validação → Entrega
**Checklist:** `fase-4-validador.md`
**Aprovadores:** Todos os stakeholders
**Critério:** 100% críticos + 90% importantes

---

## 📊 Métricas de Qualidade

### Por Fase

Acompanhe a completude de cada fase:

```
Fase 0: [████████░░] 80% (16/20 itens)
Fase 1: [██████████] 100% (25/25 itens)
Fase 2: [██████░░░░] 60% (18/30 itens)
Fase 3: [░░░░░░░░░░] 0% (0/28 itens)
Fase 4: [░░░░░░░░░░] 0% (0/22 itens)
```

### Por Prioridade

```
🔴 Críticos: [████████░░] 85% (17/20)
🟡 Importantes: [██████░░░░] 65% (39/60)
🟢 Opcionais: [███░░░░░░░] 30% (9/30)
```

---

## 🎯 Dicas de Uso

### 1. Revise Regularmente
- Diariamente: Atualize status dos itens
- Semanalmente: Revise progresso geral
- Antes de Gateways: Validação completa

### 2. Seja Honesto
- Não marque como completo se não está
- Documente bloqueios e impedimentos
- Peça ajuda quando necessário

### 3. Documente Exceções
- Se um item crítico não pode ser completado, documente o porquê
- Obtenha aprovação para exceções
- Crie plano de mitigação

### 4. Use como Guia
- Não apenas como checklist
- Entenda o propósito de cada item
- Adapte quando necessário (com aprovação)

---

## 📚 Recursos Relacionados

- [BEST-PRACTICES.md](../../BEST-PRACTICES.md) - Melhores práticas gerais
- [ARQUITETURA-AGENTES.md](../../ARQUITETURA-AGENTES.md) - Arquitetura completa
- [projetos/README.md](../../projetos/README.md) - Gestão de projetos
- [GETTING-STARTED.md](../../GETTING-STARTED.md) - Guia de início rápido

---

## 🔄 Versionamento

**Versão:** 1.0  
**Última Atualização:** 2026-04-23  
**Autor:** CX Operating System Team

### Histórico de Mudanças

- **v1.0** (2026-04-23): Versão inicial com 6 checklists

---

## 📞 Suporte

**Dúvidas sobre checklists?**
- Consulte o [GETTING-STARTED.md](../../GETTING-STARTED.md)
- Revise o [BEST-PRACTICES.md](../../BEST-PRACTICES.md)
- Entre em contato com o UX Lead

---

**Última Atualização:** 2026-04-23  
**Próxima Revisão:** 2026-07-23