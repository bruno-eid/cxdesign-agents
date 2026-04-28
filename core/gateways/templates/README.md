# 📋 Templates de Gateways

Esta pasta contém os templates para apresentação em cada um dos 5 gateways de aprovação do CX Operating System.

## 🎯 Propósito

Os templates servem para:
1. **Padronizar** apresentações de gateway
2. **Facilitar** preparação de reuniões
3. **Garantir** que todos os pontos críticos sejam cobertos
4. **Documentar** decisões de forma consistente

## 📁 Templates Disponíveis

### Gateway 1: Aprovação de Escopo
**Arquivo:** [`gateway-1-template.md`](gateway-1-template.md)  
**Quando:** Após Fase 0 (Estrategista)  
**Aprovadores:** Product Owner, Stakeholders de Negócio  
**Tempo:** 30-60 min

**O que é apresentado:**
- Contrato de escopo
- Matriz de maturidade
- Análise de viabilidade
- Decisões críticas

---

### Gateway 2: Aprovação de Insights
**Arquivo:** [`gateway-2-template.md`](gateway-2-template.md)  
**Quando:** Após Fase 1 (Pesquisador)  
**Aprovadores:** UX Lead, Product Owner, Stakeholders  
**Tempo:** 45-90 min

**O que é apresentado:**
- Matriz de fricções
- Personas
- Jornada As-Is
- Insights estratégicos
- Análise do Motor EQ

---

### Gateway 3: Aprovação de Arquitetura
**Arquivo:** [`gateway-3-template.md`](gateway-3-template.md)  
**Quando:** Após Fase 2 (Arquiteto)  
**Aprovadores:** UX Lead, Tech Lead, Product Owner  
**Tempo:** 60-90 min

**O que é apresentado:**
- Arquitetura de informação
- User flows otimizados
- Service blueprint
- Wireframes
- Viabilidade técnica

---

### Gateway 4: Aprovação de Design
**Arquivo:** [`gateway-4-template.md`](gateway-4-template.md)  
**Quando:** Após Fase 3 (Visual)  
**Aprovadores:** Design Lead, Product Owner, Stakeholders  
**Tempo:** 60-120 min

**O que é apresentado:**
- Telas de alta fidelidade
- Design system completo
- Protótipo interativo
- Guia de estilo
- Métricas de qualidade

---

### Gateway 5: Aprovação Final
**Arquivo:** [`gateway-5-template.md`](gateway-5-template.md)  
**Quando:** Após Fase 4 (Validador)  
**Aprovadores:** Product Owner, Tech Lead, Design Lead, Stakeholders  
**Tempo:** 90-120 min

**O que é apresentado:**
- Relatório de validação consolidado
- Quality score detalhado
- Recomendações prioritárias
- Implementabilidade
- Métricas de sucesso

---

## 🔄 Como Usar os Templates

### 1. Preparação (1 dia antes)

```bash
# 1. Copiar template para pasta do projeto
cp gateway-[N]-template.md ../../outputs/fase[N]/gateway-[N]-apresentacao.md

# 2. Preencher todas as seções marcadas com [...]
# 3. Adicionar links para entregáveis
# 4. Preparar slides executivos (15-20 slides)
# 5. Enviar materiais para revisão prévia
```

### 2. Durante o Gateway

**Estrutura da Reunião:**
1. **Resumo Executivo** (5 min)
   - Status geral
   - Números-chave
   - Alertas importantes

2. **Entregáveis Principais** (15-30 min)
   - Demonstração dos entregáveis
   - Destaques e descobertas
   - Métricas de qualidade

3. **Decisões Críticas** (10-15 min)
   - Contexto de cada decisão
   - Opções avaliadas
   - Justificativas

4. **Perguntas e Discussão** (15-20 min)
   - Responder perguntas dos stakeholders
   - Coletar feedback
   - Alinhar expectativas

5. **Decisão e Próximos Passos** (5 min)
   - Registrar decisão
   - Documentar condições (se houver)
   - Definir próximos passos

### 3. Após o Gateway

```bash
# 1. Atualizar template com decisão final
# 2. Registrar no CX Brain
# 3. Comunicar decisão para equipe
# 4. Implementar ajustes (se necessário)
# 5. Agendar próximo gateway (se aprovado)
```

---

## 📊 Checklist de Preparação

### Antes de Cada Gateway

- [ ] Template preenchido completamente
- [ ] Todos os entregáveis finalizados
- [ ] Links funcionando
- [ ] Slides executivos preparados
- [ ] Materiais enviados para revisão prévia (24h antes)
- [ ] Reunião agendada com todos os aprovadores
- [ ] Sala/ferramenta de videoconferência configurada

### Durante o Gateway

- [ ] Gravar reunião (se permitido)
- [ ] Tomar notas de feedback
- [ ] Documentar perguntas e respostas
- [ ] Registrar decisão formal
- [ ] Capturar condições e ajustes solicitados

### Após o Gateway

- [ ] Atualizar template com decisão
- [ ] Registrar no CX Brain
- [ ] Enviar resumo para participantes
- [ ] Criar tasks para ajustes (se necessário)
- [ ] Agendar próximo gateway (se aprovado)

---

## 🎨 Customização

Os templates podem ser customizados para:
- **Diferentes tipos de projeto** (web, mobile, desktop)
- **Diferentes metodologias** (Agile, Waterfall, híbrido)
- **Diferentes stakeholders** (adicionar/remover aprovadores)
- **Diferentes níveis de detalhe** (mais/menos seções)

### Exemplo de Customização

```markdown
# Para projetos menores, você pode:
- Combinar gateways (ex: 1+2, 3+4)
- Reduzir tempo de apresentação
- Simplificar templates

# Para projetos maiores, você pode:
- Adicionar sub-gateways
- Incluir mais aprovadores
- Expandir seções críticas
```

---

## 📈 Métricas de Gateways

### KPIs Recomendados

| Métrica | Meta | Como Medir |
|---------|------|------------|
| Taxa de Aprovação | > 80% | Aprovados / Total |
| Tempo Médio | < 90 min | Duração das reuniões |
| Iterações Médias | < 1.5 | Iterações por gateway |
| Satisfação | > 4/5 | Survey pós-gateway |

### Análise de Eficiência

**Tempo Total de Gateways:**
- ✅ Ideal: 5-6 horas (todos os gateways)
- ⚠️ Médio: 8-10 horas (com iterações)
- ❌ Alto: 12-15 horas (múltiplas iterações)

**Taxa de Aprovação Geral:**
- ✅ Excelente: > 85%
- ⚠️ Bom: 75-85%
- ⚠️ Aceitável: 65-75%
- ❌ Problemático: < 65%

---

## 🔗 Links Relacionados

- [Sistema de Gateways - Especificação](../SYSTEM-SPECIFICATION.md)
- [Protocolo de Comunicação](../../../docs/architecture/communication-protocol.md)
- [CX Brain](../../cx-brain/SPECIFICATIONS.md)
- [Metaprompts](../../../docs/metaprompts/)

---

## 💡 Dicas e Boas Práticas

### Para Apresentadores

1. **Seja Conciso:** Foque no essencial, evite detalhes desnecessários
2. **Use Visuais:** Mostre, não apenas conte (protótipos, wireframes, etc)
3. **Antecipe Perguntas:** Prepare respostas para perguntas óbvias
4. **Seja Honesto:** Admita limitações e riscos
5. **Peça Feedback:** Engaje stakeholders ativamente

### Para Aprovadores

1. **Revise Previamente:** Leia materiais antes da reunião
2. **Faça Perguntas:** Esclareça dúvidas, não assuma
3. **Seja Específico:** Feedback vago não ajuda
4. **Pense no Usuário:** Decisões devem beneficiar o usuário final
5. **Seja Decisivo:** Evite "talvez", tome decisões claras

### Para Facilitadores

1. **Gerencie o Tempo:** Mantenha reunião no prazo
2. **Documente Tudo:** Registre decisões e feedback
3. **Mantenha Foco:** Evite tangentes e discussões paralelas
4. **Seja Neutro:** Não influencie decisões
5. **Feche com Clareza:** Todos devem sair alinhados

---

## 📞 Suporte

Para dúvidas sobre os templates:
1. Consulte a [Especificação do Sistema de Gateways](../SYSTEM-SPECIFICATION.md)
2. Revise exemplos de gateways anteriores
3. Entre em contato com o CX Master

---

**Última Atualização:** 2026-04-17  
**Versão:** 1.0.0