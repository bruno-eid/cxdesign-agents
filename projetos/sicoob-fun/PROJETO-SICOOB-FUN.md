# 🎮 Projeto Sicoob Fun - Documentação Completa

**Cliente:** Sicoob  
**Projeto:** Sicoob Fun  
**Data de Início:** 17/04/2026  
**Status:** Fase 0 - Estrategista

---

## 🎯 Visão Geral

Plataforma mobile de engajamento que conecta entretenimento, gamificação e benefícios, com foco inicial em **futebol** (Campeonato Mineiro 2027).

**Diferencial:** Transforma cada interação em valor percebido para o usuário e relacionamento estratégico para a marca.

---

## 📅 Timeline do Projeto

### Construção: 2026
**Mês 1 (Abril-Maio):**
- 13/04-17/04: Base Estrutural
- 20/04-01/05: Entrada e Home
- 04/05-08/05: Jogos

**Mês 2 (Maio-Junho):**
- 11/05-22/05: Missões
- 25/05-29/05: Benefícios
- 01/06-05/06: Perfil

### Lançamento: Q1 2027
- **Janeiro 2027:** MVP (antes do Campeonato Mineiro)
- **Fevereiro-Maio 2027:** Campeonato Mineiro + Otimizações
- **Q3 2027:** Expansão para outras categorias

---

## 👥 Equipe (9 pessoas)

**Design (3):**
- 1 Designer IBM
- 2 Designers Sicoob

**Desenvolvimento (4):**
- 1 Tech Lead
- 3 Desenvolvedores

**Qualidade e Gestão (2):**
- 1 QA
- 1 PM/Scrum Master

---

## 🗺️ Arquitetura do App

### Fluxo Principal
```
Splash Screen
  ↓
Onboarding (3 telas)
  ↓
Login/Cadastro
  ↓
Cadastrar
  ↓
Personalização
  ↓
5 Abas Principais:
  1. Home
  2. Jogos
  3. Missões
  4. Benefícios
  5. Perfil
```

---

## 📋 Cronograma Detalhado de Design

### Semana 1: Base Estrutural (13/04 a 17/04)

**Objetivos:**
- Acessos e organização do Figma
- Estrutura inicial do DS Fun
- Definição da marca Fun
- Direção visual da experiência
- Validação de feliz
- Levantamento dos cenários alternativos
- Cenários de erros

**Entregas:**
- Arquivo base organizado no Figma
- Estrutura do projeto por fluxos e áreas
- Primeira versão do Design System Fun
- Direção visual aprovada

---

### Semana 2-3: Entrada e Home (20/04 a 01/05)

**Telas:**
- Splash Screen
- Onboarding (3 telas)
- Login
- Cadastro
- Home

**Detalhes da Home:**
- Detalhe do Evento/Campeonato
- Detalhe da Missão
- Detalhe da Partida
- Benefício
- Notícias
- Perfil
- Notificações
- Busca

**Entregas:**
- Fluxo completo de entrada
- Primeira experiência da Home
- Estados principais de autenticação
- Navegação inicial consolidada

---

### Semana 4: Jogos (04/05 a 08/05)

**Telas:**
- Jogos
- Notícias
- Partidas
- Detalhes das partidas
- Ao vivo
- Classificação

**Entregas:**
- Fluxo de navegação de Jogos completo
- Estrutura de detalhe pré-jogo e ao vivo
- Modelos de classificação
- Estados de partida: futura, ao vivo, encerrada

---

### Semana 5-6: Missões (11/05 a 22/05)

**Telas:**
- Missões diárias
- Missões semanais
- Missões mensais
- Ranking
- Detalhe da missão
- Tela de missão
- Quiz
- Palpite

**Entregas:**
- Estrutura do motor de gamificação
- Fluxo de missão ponta a ponta
- Ranking inicial modelado
- Revisão do fluxo de engajamento

**Cenários alternativos:**
- Missão expirada
- Missão concluída
- Erro no envio
- Recompensa não creditada
- Ranking indisponível

---

### Semana 7: Benefícios (25/05 a 29/05)

**Telas:**
- Benefícios
- Detalhamento do benefício

**Entregas:**
- Vitrine de benefícios
- Jornada de resgate

---

### Semana 8: Perfil (01/06 a 05/06)

**Telas:**
- Perfil

**Entregas:**
- Tela de perfil consolidada
- Área de conquistas, pontos, badges e configurações
- Conexão entre progresso e benefício

---

## 👤 3 Perfis de Usuário

### 1. Cooperados (Primário)
- Login com conta Sicoob (SSO)
- Benefícios exclusivos
- Pontos em dobro
- Acesso prioritário a experiências VIP

### 2. Não Cooperados (Secundário)
- Cadastro simplificado (email/social)
- Acesso a funcionalidades básicas
- Incentivos para se tornar cooperado
- Benefícios limitados

### 3. Produtores/Servidores (Terciário)
- Cadastro como parceiro
- Dashboard de conteúdo
- Publicar ofertas e benefícios
- Analytics de engajamento
- Gestão de parcerias

---

## 🎯 Objetivos

### Para a Marca
1. Aumentar recorrência e retenção
2. Ampliar vínculo emocional com público
3. Gerar novas oportunidades de aquisição
4. Transformar audiência em base qualificada
5. Conectar entretenimento, benefícios e relacionamento
6. Construir plataforma escalável

### Para o Usuário
1. Transformar entretenimento em experiência participativa
2. Oferecer jornada personalizada
3. Gerar sensação contínua de progresso
4. Entregar benefícios concretos
5. Criar motivos reais para retorno frequente
6. Fazer cada interação ter valor percebido

---

## 🎮 Funcionalidades MVP (Q1 2027)

### Hub de Futebol Mineiro
- Agenda de jogos do Campeonato Mineiro
- Placar ao vivo e estatísticas
- Notícias e análises
- Vídeos de melhores momentos
- Classificação e tabela
- Escolha de time favorito

### Gamificação
- Sistema de pontos
- Níveis (Torcedor → Fanático → Ídolo → Lenda)
- Conquistas temáticas de futebol
- Desafios durante jogos
- Ranking de torcedores por time

### Palpites e Previsões
- Palpitar placar de jogos
- Prever artilheiro, cartões, escanteios
- Pontos por acertos
- Ranking de melhores palpiteiros

### Benefícios
- Resgate de ingressos para jogos
- Descontos em produtos oficiais
- Experiências VIP (camarote, meet & greet)
- Vouchers para bares parceiros
- Produtos exclusivos Sicoob + Times

### Social
- Perfil de torcedor
- Feed de atividades
- Comentar em jogos e notícias
- Grupos por time
- Ranking de amigos

---

## 📊 Métricas de Sucesso

| Métrica | Meta 6 meses | Meta 12 meses |
|---------|--------------|---------------|
| MAU | 300k | 600k |
| Frequência de uso | 4x/semana | 5x/semana |
| Tempo médio de sessão | 10 min | 15 min |
| Taxa de retenção D30 | 45% | 60% |
| NPS | 55 | 70 |
| Conversão para cooperados | 8% | 12% |
| Engajamento em dias de jogo | 70% | 85% |

---

## 🚨 Riscos Principais

1. **Parcerias com clubes não fechadas** (Média/Alto)
2. **Baixa adoção inicial** (Média/Alto)
3. **Performance durante jogos** (Média/Alto)
4. **Dados de futebol em tempo real** (Baixa/Alto)
5. **Campeonato adiado/cancelado** (Baixa/Alto)

---

## 💻 Stack Tecnológico

**Frontend:**
- React Native 0.73+
- TypeScript
- Redux Toolkit
- Socket.io (real-time)

**Backend:**
- Node.js 20 + Express
- PostgreSQL 15
- Redis 7
- Socket.io

**Infraestrutura:**
- AWS
- Docker + ECS
- GitHub Actions (CI/CD)

**Integrações:**
- Sicoob IAM
- Sicoob Banking API
- API de Futebol (SofaScore)
- Firebase (push)
- Mixpanel (analytics)

---

## 📁 Estrutura de Documentação

```
sicoob-fun/
├── briefing.md (completo)
├── PROJETO-SICOOB-FUN.md (este arquivo)
├── fase-0/
│   ├── contrato-escopo.md (em desenvolvimento)
│   ├── matriz-maturidade.md (pendente)
│   └── analise-viabilidade.md (pendente)
├── fase-1/ (aguardando)
├── fase-2/ (aguardando)
├── fase-3/ (aguardando)
└── fase-4/ (aguardando)
```

---

## 🎯 Próximos Passos Imediatos

### Fase 0: Estrategista (Atual)
- [x] Briefing criado
- [x] Cronograma consolidado
- [ ] Finalizar Contrato de Escopo
- [ ] Criar Matriz de Maturidade
- [ ] Criar Análise de Viabilidade
- [ ] Preparar Gateway 1

### Gateway 1: Aprovação de Escopo
- Data prevista: 24/04/2026
- Aprovadores: Product Owner, Tech Lead, Design Lead
- Tempo estimado: 60 min

---

**Criado por:** CX Master (CX Operating System)  
**Última Atualização:** 17/04/2026  
**Versão:** 1.0  
**Status:** Em Desenvolvimento