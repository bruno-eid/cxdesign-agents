# ✍️ UX Writing Guide - [Nome do Projeto]

## 📋 Metadados

```yaml
projeto: [nome-do-projeto]
versao: v1
data: [YYYY-MM-DD]
autor: ux-writer-agent
quality_score: [0-100]
```

---

## 🎯 Visão Geral

### Objetivo do UX Writing

**O que queremos alcançar:**
[Descreva o objetivo principal do UX writing no projeto]

**Exemplo:**
> "Criar uma experiência de escrita clara, concisa e empática que guie usuários através do app sem fricção, reduzindo dúvidas em 50% e aumentando conclusão de tarefas em 35%."

### Princípios de UX Writing

1. **[Princípio 1]**
   - Descrição: [O que significa]
   - Aplicação: [Como aplicar]
   - Exemplo: [Exemplo prático]

2. **[Princípio 2]**
   - Descrição: [O que significa]
   - Aplicação: [Como aplicar]
   - Exemplo: [Exemplo prático]

3. **[Princípio 3]**
   - Descrição: [O que significa]
   - Aplicação: [Como aplicar]
   - Exemplo: [Exemplo prático]

---

## 💬 Tom de Voz

### Características

**Tom:**
- [Característica 1]: [Descrição]
- [Característica 2]: [Descrição]
- [Característica 3]: [Descrição]

**Voz:**
- [Característica 1]: [Descrição]
- [Característica 2]: [Descrição]
- [Característica 3]: [Descrição]

### Espectro de Tom

**Formal ←→ Casual**
```
Muito formal  1 ○ ○ ● ○ ○ 5  Muito casual
```
- Aplicação: [Como isso se manifesta]

**Sério ←→ Divertido**
```
Muito sério  1 ○ ○ ○ ● ○ 5  Muito divertido
```
- Aplicação: [Como isso se manifesta]

**Respeitoso ←→ Irreverente**
```
Muito respeitoso  1 ○ ○ ○ ○ ● 5  Muito irreverente
```
- Aplicação: [Como isso se manifesta]

**Técnico ←→ Simples**
```
Muito técnico  1 ○ ● ○ ○ ○ 5  Muito simples
```
- Aplicação: [Como isso se manifesta]

---

## 📝 Diretrizes de Escrita

### Clareza

**Sempre:**
- ✅ Use palavras simples
- ✅ Frases curtas (máximo 20 palavras)
- ✅ Uma ideia por frase
- ✅ Voz ativa
- ✅ Verbos de ação

**Nunca:**
- ❌ Jargões sem explicação
- ❌ Frases longas e complexas
- ❌ Múltiplas ideias em uma frase
- ❌ Voz passiva
- ❌ Verbos fracos

**Exemplos:**

❌ **Não fazer:**
> "A funcionalidade de processamento de pagamento será executada após a confirmação dos dados inseridos pelo usuário."

✅ **Fazer:**
> "Confirme seus dados para processar o pagamento."

---

### Concisão

**Regras:**
- Máximo [X] palavras para títulos
- Máximo [X] palavras para descrições
- Máximo [X] palavras para mensagens de erro
- Máximo [X] palavras para tooltips

**Técnicas:**
- Remova palavras desnecessárias
- Use contrações quando apropriado
- Elimine redundâncias
- Vá direto ao ponto

**Exemplos:**

❌ **Não fazer:**
> "Por favor, clique no botão abaixo para poder continuar com o processo de cadastro."

✅ **Fazer:**
> "Clique para continuar o cadastro."

---

### Consistência

**Terminologia:**
| Termo Correto | Não Use | Contexto |
|---------------|---------|----------|
| [Termo 1] | [Variação] | [Onde usar] |
| [Termo 2] | [Variação] | [Onde usar] |
| [Termo 3] | [Variação] | [Onde usar] |

**Formatação:**
- Títulos: [Formato]
- Botões: [Formato]
- Links: [Formato]
- Erros: [Formato]

**Pontuação:**
- Títulos: [Com/sem ponto final]
- Botões: [Com/sem ponto final]
- Listas: [Com/sem ponto final]
- Tooltips: [Com/sem ponto final]

---

### Empatia

**Entenda o contexto:**
- Onde o usuário está?
- O que ele está tentando fazer?
- Como ele está se sentindo?
- O que ele precisa saber?

**Seja humano:**
- Use "você" e "seu"
- Reconheça emoções
- Ofereça ajuda
- Celebre sucessos

**Exemplos:**

❌ **Não fazer:**
> "Erro 404. Página não encontrada."

✅ **Fazer:**
> "Ops! Não encontramos essa página. Vamos te ajudar a voltar ao caminho."

---

## 🎨 Microcopy por Contexto

### Onboarding

#### Tela de Boas-vindas

**Título:**
```
[Título acolhedor e claro]
```

**Subtítulo:**
```
[Explicação breve do valor]
```

**CTA:**
```
[Ação clara]
```

**Exemplo:**
```
Título: Bem-vindo ao [App]!
Subtítulo: Gerencie suas finanças em minutos, não horas.
CTA: Começar agora
```

---

#### Tutorial/Walkthrough

**Passo 1:**
- Título: [Título]
- Descrição: [Descrição]
- CTA: [Ação]

**Passo 2:**
- Título: [Título]
- Descrição: [Descrição]
- CTA: [Ação]

**Passo 3:**
- Título: [Título]
- Descrição: [Descrição]
- CTA: [Ação]

**Dicas:**
- Máximo 3-5 passos
- Foco no valor, não nas features
- Permita pular
- Mostre progresso

---

### Formulários

#### Labels

**Formato:**
```
[Nome do campo]
```

**Regras:**
- Claro e descritivo
- Sem ponto final
- Primeira letra maiúscula

**Exemplos:**
```
✅ Nome completo
✅ E-mail
✅ Senha (mínimo 8 caracteres)

❌ Por favor, insira seu nome completo:
❌ email
❌ SENHA
```

---

#### Placeholders

**Formato:**
```
[Exemplo do formato esperado]
```

**Regras:**
- Mostre exemplo, não instrução
- Use formato real
- Não repita o label

**Exemplos:**
```
✅ joao.silva@email.com
✅ (11) 98765-4321
✅ 01234-567

❌ Digite seu e-mail aqui
❌ Telefone
❌ CEP
```

---

#### Helper Text

**Formato:**
```
[Informação adicional útil]
```

**Quando usar:**
- Formato específico necessário
- Informação sensível
- Dica útil

**Exemplos:**
```
✅ Usaremos apenas para recuperação de senha
✅ Mínimo 8 caracteres, 1 número e 1 letra maiúscula
✅ Não compartilharemos com terceiros

❌ Campo obrigatório
❌ Preencha corretamente
```

---

#### Mensagens de Erro

**Formato:**
```
[O que está errado] + [Como corrigir]
```

**Regras:**
- Específico, não genérico
- Acionável
- Sem culpar o usuário
- Tom empático

**Exemplos:**

❌ **Não fazer:**
```
Erro
Campo inválido
Você errou
Tente novamente
```

✅ **Fazer:**
```
E-mail inválido. Use o formato: nome@email.com
Senha muito curta. Use no mínimo 8 caracteres
CPF não encontrado. Verifique os números digitados
Este e-mail já está cadastrado. Tente fazer login
```

---

#### Mensagens de Sucesso

**Formato:**
```
[Confirmação] + [Próximo passo (opcional)]
```

**Regras:**
- Celebre a ação
- Seja específico
- Indique próximo passo se relevante

**Exemplos:**
```
✅ Cadastro concluído! Enviamos um e-mail de confirmação
✅ Senha alterada com sucesso
✅ Pagamento realizado! Você receberá um recibo por e-mail
✅ Perfil atualizado
```

---

### Botões e CTAs

#### Botões Primários

**Formato:**
```
[Verbo de ação] + [Objeto (opcional)]
```

**Regras:**
- Comece com verbo
- Seja específico
- Máximo 3 palavras
- Sem ponto final

**Exemplos:**
```
✅ Criar conta
✅ Fazer login
✅ Confirmar pagamento
✅ Salvar alterações
✅ Enviar

❌ Clique aqui
❌ OK
❌ Submeter
❌ Continuar →
```

---

#### Botões Secundários

**Formato:**
```
[Ação alternativa]
```

**Exemplos:**
```
✅ Cancelar
✅ Voltar
✅ Pular
✅ Mais tarde
✅ Não, obrigado
```

---

#### Botões Destrutivos

**Formato:**
```
[Ação clara do que será destruído]
```

**Regras:**
- Seja explícito
- Use confirmação
- Tom sério

**Exemplos:**
```
✅ Excluir conta
✅ Remover cartão
✅ Cancelar assinatura
✅ Apagar dados

❌ Deletar
❌ Remover
❌ OK
```

---

### Estados Vazios (Empty States)

#### Primeira Vez

**Formato:**
```
Título: [Boas-vindas]
Descrição: [O que fazer aqui]
CTA: [Primeira ação]
```

**Exemplo:**
```
Título: Sua lista está vazia
Descrição: Adicione itens para começar a organizar suas tarefas
CTA: Adicionar primeiro item
```

---

#### Sem Resultados

**Formato:**
```
Título: [Reconhecimento]
Descrição: [Sugestão]
CTA: [Ação alternativa]
```

**Exemplo:**
```
Título: Nenhum resultado encontrado
Descrição: Tente usar palavras diferentes ou verifique a ortografia
CTA: Limpar filtros
```

---

#### Erro de Conexão

**Formato:**
```
Título: [O que aconteceu]
Descrição: [Como resolver]
CTA: [Tentar novamente]
```

**Exemplo:**
```
Título: Sem conexão com a internet
Descrição: Verifique sua conexão e tente novamente
CTA: Tentar novamente
```

---

### Notificações e Alertas

#### Notificações de Sucesso

**Formato:**
```
[Ação completada] + [Resultado]
```

**Exemplos:**
```
✅ Arquivo enviado com sucesso
✅ Alterações salvas
✅ Convite enviado para maria@email.com
✅ Backup concluído
```

---

#### Notificações de Alerta

**Formato:**
```
[Situação] + [Ação necessária]
```

**Exemplos:**
```
⚠️ Seu plano expira em 3 dias. Renove agora
⚠️ Espaço quase cheio. Libere 2GB para continuar
⚠️ Senha expira amanhã. Altere nas configurações
```

---

#### Notificações de Erro

**Formato:**
```
[O que falhou] + [Como resolver]
```

**Exemplos:**
```
❌ Falha no upload. Verifique sua conexão
❌ Pagamento recusado. Tente outro cartão
❌ Não foi possível salvar. Tente novamente
```

---

### Confirmações e Diálogos

#### Confirmação de Ação Destrutiva

**Formato:**
```
Título: [Pergunta clara]
Descrição: [Consequências]
Botão primário: [Ação destrutiva]
Botão secundário: [Cancelar]
```

**Exemplo:**
```
Título: Excluir conta permanentemente?
Descrição: Todos os seus dados serão apagados e não poderão ser recuperados.
Botão primário: Sim, excluir conta
Botão secundário: Cancelar
```

---

#### Confirmação de Saída

**Formato:**
```
Título: [Pergunta]
Descrição: [O que será perdido]
Botão primário: [Sair]
Botão secundário: [Continuar]
```

**Exemplo:**
```
Título: Sair sem salvar?
Descrição: Suas alterações serão perdidas.
Botão primário: Sair sem salvar
Botão secundário: Continuar editando
```

---

### Tooltips e Hints

#### Tooltips

**Formato:**
```
[Explicação breve]
```

**Regras:**
- Máximo 1-2 linhas
- Informação adicional, não essencial
- Sem ponto final

**Exemplos:**
```
✅ Sua senha deve ter no mínimo 8 caracteres
✅ Clique para copiar
✅ Disponível apenas no plano Pro
✅ Última atualização: há 2 minutos
```

---

#### Hints Contextuais

**Formato:**
```
💡 [Dica útil]
```

**Exemplos:**
```
💡 Dica: Use atalhos para trabalhar mais rápido
💡 Você sabia? Pode arrastar arquivos para fazer upload
💡 Novo: Agora você pode compartilhar com sua equipe
```

---

## 📱 Microcopy por Plataforma

### Mobile

**Considerações:**
- Espaço limitado
- Leitura rápida
- Toque como interação

**Adaptações:**
- Títulos mais curtos
- Menos texto descritivo
- CTAs mais diretos
- Feedback visual + textual

**Exemplo:**

**Desktop:**
```
Título: Bem-vindo de volta!
Descrição: Entre com seu e-mail e senha para acessar sua conta
CTA: Fazer login na minha conta
```

**Mobile:**
```
Título: Bem-vindo!
Descrição: Entre para continuar
CTA: Entrar
```

---

### Desktop

**Considerações:**
- Mais espaço disponível
- Leitura mais detalhada
- Mouse como interação

**Vantagens:**
- Pode ser mais descritivo
- Tooltips mais ricos
- Mensagens mais completas

---

### Voz/Conversacional

**Considerações:**
- Sem interface visual
- Resposta imediata
- Contexto conversacional

**Adaptações:**
- Linguagem natural
- Confirmações verbais
- Opções claras
- Feedback auditivo

**Exemplo:**
```
Bot: Olá! Como posso ajudar?
Usuário: Quero ver meu saldo
Bot: Seu saldo atual é R$ 1.234,56. Posso ajudar com mais alguma coisa?
```

---

## ♿ Acessibilidade

### Screen Readers

**ARIA Labels:**
```html
<button aria-label="Fechar janela">
  <icon>×</icon>
</button>
```

**Alt Text para Imagens:**
```html
<img src="grafico.png" alt="Gráfico mostrando crescimento de 30% nas vendas">
```

**Anúncios de Estado:**
```html
<div role="alert" aria-live="polite">
  Arquivo enviado com sucesso
</div>
```

### Linguagem Simples

**Nível de leitura:**
- Target: [Nível escolar]
- Ferramenta: Flesch Reading Ease
- Score mínimo: [N]

**Técnicas:**
- Frases curtas
- Palavras comuns
- Voz ativa
- Exemplos concretos

---

## 📊 Métricas de UX Writing

### KPIs

| Métrica | Baseline | Meta | Como Medir |
|---------|----------|------|------------|
| Taxa de conclusão | [%] | [%] | Analytics |
| Tempo na tarefa | [min] | [min] | Analytics |
| Taxa de erro | [%] | [%] | Error tracking |
| Satisfação | [Score] | [Score] | CSAT |
| Clareza | [Score] | [Score] | Pesquisa |

### Testes

**Teste de Compreensão:**
- Usuários entendem o texto?
- Conseguem completar a tarefa?
- Têm dúvidas?

**Teste A/B:**
- Variação A vs Variação B
- Qual performa melhor?
- Por quê?

---

## 🔧 Ferramentas

### Escrita

**Gramática e Estilo:**
- [Ferramenta 1]
- [Ferramenta 2]

**Legibilidade:**
- [Ferramenta 1]
- [Ferramenta 2]

**Tradução:**
- [Ferramenta 1]
- [Ferramenta 2]

### Gestão

**Content Management:**
- [Ferramenta]

**Versionamento:**
- [Ferramenta]

**Colaboração:**
- [Ferramenta]

---

## 📚 Glossário

### Termos do Produto

| Termo | Definição | Uso | Não Use |
|-------|-----------|-----|---------|
| [Termo 1] | [Definição] | [Contexto] | [Alternativas] |
| [Termo 2] | [Definição] | [Contexto] | [Alternativas] |
| [Termo 3] | [Definição] | [Contexto] | [Alternativas] |

### Termos Técnicos

| Termo Técnico | Versão Simples | Quando Usar Técnico |
|---------------|----------------|---------------------|
| [Termo 1] | [Versão simples] | [Contexto] |
| [Termo 2] | [Versão simples] | [Contexto] |
| [Termo 3] | [Versão simples] | [Contexto] |

---

## 📝 Notas do Agente

**Criado por:** UX Writer Agent  
**Data:** [YYYY-MM-DD]  
**Versão:** v1  
**Quality Score:** [0-100]

**Escopo:**
- [ ] Microcopy completo
- [ ] Apenas elementos críticos
- [ ] Foco em onboarding
- [ ] Foco em conversão

**Complexidade:**
- [ ] Simples (app básico)
- [ ] Média (múltiplos fluxos)
- [ ] Complexa (plataforma completa)

**Recomendações:**
- [Recomendação 1]
- [Recomendação 2]
- [Recomendação 3]

**Alertas:**
- [ ] Inconsistências de tom
- [ ] Textos muito longos
- [ ] Jargões não explicados
- [ ] Falta de empatia

---

## ✅ Checklist de Implementação

### Estratégia
- [ ] Tom de voz definido
- [ ] Princípios estabelecidos
- [ ] Diretrizes documentadas

### Microcopy
- [ ] Onboarding escrito
- [ ] Formulários completos
- [ ] Botões e CTAs definidos
- [ ] Estados vazios criados
- [ ] Notificações escritas
- [ ] Confirmações definidas
- [ ] Tooltips criados

### Acessibilidade
- [ ] ARIA labels adicionados
- [ ] Alt text escrito
- [ ] Linguagem simples validada
- [ ] Screen reader testado

### Qualidade
- [ ] Revisão gramatical
- [ ] Teste de legibilidade
- [ ] Teste com usuários
- [ ] Métricas definidas

---

**Última Atualização:** [YYYY-MM-DD]  
**Próxima Revisão:** [YYYY-MM-DD]