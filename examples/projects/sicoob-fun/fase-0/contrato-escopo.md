# 📋 Contrato de Escopo - Sicoob Fun

**Projeto:** Sicoob Fun  
**Cliente:** Sicoob  
**Data:** 17/04/2026  
**Versão:** 1.0 (Draft)  
**Status:** Em Desenvolvimento

---

## 1. Visão Geral do Projeto

### 1.1 Contexto
Plataforma mobile de engajamento que conecta entretenimento, gamificação e benefícios, com foco inicial em **futebol** (Campeonato Mineiro 2027).

### 1.2 Objetivo Principal
Transformar cada interação em valor percebido para o usuário e relacionamento estratégico para a marca.

---

## 2. Timeline do Projeto

### Fase de Construção: 2026

**Mês 1 (Abril-Maio):**
- **13/04 a 17/04:** Base Estrutural
- **20/04 a 01/05:** Entrada e Home
- **04/05 a 08/05:** Jogos

**Mês 2 (Maio-Junho):**
- **11/05 a 22/05:** Missões
- **25/05 a 29/05:** Benefícios
- **01/06 a 05/06:** Perfil

### Lançamento MVP: Q1 2027
- **Data Alvo:** Janeiro 2027 (antes do Campeonato Mineiro)
- **Evento Âncora:** Campeonato Mineiro 2027 (Fevereiro-Maio)

---

## 3. Equipe do Projeto

### Design (3 pessoas)
- 1 Designer IBM
- 2 Designers Sicoob

### Desenvolvimento (4 pessoas)
- 1 Tech Lead
- 3 Desenvolvedores

### Qualidade e Gestão (2 pessoas)
- 1 QA
- 1 PM/Scrum Master

**Total:** 9 pessoas

---

## 4. Arquitetura do App

### 4.1 Fluxo Principal
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

### 4.2 Perfis de Usuário

#### Cooperados (Primário)
- Login com conta Sicoob (SSO)
- Benefícios exclusivos
- Pontos em dobro
- Acesso prioritário a experiências VIP

#### Não Cooperados (Secundário)
- Cadastro simplificado (email/social)
- Acesso a funcionalidades básicas
- Incentivos para se tornar cooperado
- Benefícios limitados

#### Produtores/Servidores (Terciário)
- Cadastro como parceiro
- Dashboard de conteúdo
- Publicar ofertas e benefícios
- Analytics de engajamento
- Gestão de parcerias

---

## 5. Escopo de Design (8 Semanas)

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

## 6. Funcionalidades MVP (Q1 2027)

### 6.1 Hub de Futebol Mineiro
- Agenda de jogos do Campeonato Mineiro
- Placar ao vivo e estatísticas
- Notícias e análises
- Vídeos de melhores momentos
- Classificação e tabela
- Escolha de time favorito

### 6.2 Gamificação
- Sistema de pontos
- Níveis (Torcedor → Fanático → Ídolo → Lenda)
- Conquistas temáticas de futebol
- Desafios durante jogos
- Ranking de torcedores por time

### 6.3 Palpites e Previsões
- Palpitar placar de jogos
- Prever artilheiro, cartões, escanteios
- Pontos por acertos
- Ranking de melhores palpiteiros

### 6.4 Benefícios
- Resgate de ingressos para jogos
- Descontos em produtos oficiais
- Experiências VIP (camarote, meet & greet)
- Vouchers para bares parceiros
- Produtos exclusivos Sicoob + Times

### 6.5 Social
- Perfil de torcedor
- Feed de atividades
- Comentar em jogos e notícias
- Grupos por time
- Ranking de amigos

---

## 7. Fora do Escopo (Fase 1)

### Não incluído no MVP:
- Outros esportes além de futebol
- Campeonatos nacionais/internacionais
- Transmissão de jogos ao vivo
- Chat em tempo real
- Marketplace de produtos
- Integração com carteiras digitais
- Programa de afiliados
- API pública

### Planejado para Fase 2 (Q3 2027):
- Expansão para outros esportes
- Campeonato Brasileiro
- Novos tipos de missões
- Marketplace
- Programa de indicação

---

## 8. Premissas e Dependências

### 8.1 Premissas
- Parcerias com clubes mineiros serão fechadas até Maio/2026
- API de futebol (SofaScore) estará disponível
- Sicoob IAM e Banking API estarão prontas
- Equipe completa disponível desde o início
- Aprovações de stakeholders em até 3 dias úteis

### 8.2 Dependências Críticas
- **Design System Sicoob:** Base para componentes
- **Sicoob IAM:** Autenticação de cooperados
- **API de Futebol:** Dados em tempo real
- **Parcerias com Clubes:** Conteúdo oficial e benefícios
- **Infraestrutura AWS:** Ambiente de desenvolvimento

### 8.3 Riscos Principais

| Risco | Probabilidade | Impacto | Mitigação |
|-------|---------------|---------|-----------|
| Parcerias com clubes não fechadas | Média | Alto | Plano B com conteúdo genérico |
| Baixa adoção inicial | Média | Alto | Campanha de lançamento robusta |
| Performance durante jogos | Média | Alto | Load testing e CDN |
| Dados de futebol em tempo real | Baixa | Alto | API backup (Footstats) |
| Campeonato adiado/cancelado | Baixa | Alto | Pivot para conteúdo evergreen |

---

## 9. Métricas de Sucesso

### 9.1 Metas 6 Meses (Julho 2027)
- **MAU:** 300k usuários ativos mensais
- **Frequência:** 4x por semana
- **Tempo de sessão:** 10 minutos
- **Retenção D30:** 45%
- **NPS:** 55
- **Conversão para cooperados:** 8%
- **Engajamento em dias de jogo:** 70%

### 9.2 Metas 12 Meses (Janeiro 2028)
- **MAU:** 600k usuários ativos mensais
- **Frequência:** 5x por semana
- **Tempo de sessão:** 15 minutos
- **Retenção D30:** 60%
- **NPS:** 70
- **Conversão para cooperados:** 12%
- **Engajamento em dias de jogo:** 85%

---

## 10. Stack Tecnológico

### Frontend
- React Native 0.73+
- TypeScript
- Redux Toolkit
- Socket.io (real-time)

### Backend
- Node.js 20 + Express
- PostgreSQL 15
- Redis 7
- Socket.io

### Infraestrutura
- AWS (ECS, RDS, ElastiCache, S3, CloudFront)
- Docker
- GitHub Actions (CI/CD)

### Integrações
- Sicoob IAM
- Sicoob Banking API
- API de Futebol (SofaScore)
- Firebase (push notifications)
- Mixpanel (analytics)

---

## 11. Governança e Aprovações

### 11.1 Pontos de Aprovação (Gateways)

#### Gateway 1: Aprovação de Escopo (24/04/2026)
- **Aprovadores:** Product Owner, Tech Lead, Design Lead
- **Duração:** 60 minutos
- **Entregáveis:** Contrato de Escopo, Matriz de Maturidade, Análise de Viabilidade

#### Gateway 2: Aprovação de Insights (15/05/2026)
- **Aprovadores:** Product Owner, UX Lead
- **Duração:** 90 minutos
- **Entregáveis:** Matriz de Fricções, Personas, Jornada As-Is

#### Gateway 3: Aprovação de Arquitetura (29/05/2026)
- **Aprovadores:** Product Owner, Tech Lead, UX Lead
- **Duração:** 90 minutos
- **Entregáveis:** Arquitetura de Informação, User Flows, Wireframes

#### Gateway 4: Aprovação de Design (12/06/2026)
- **Aprovadores:** Product Owner, Design Lead, Marketing
- **Duração:** 120 minutos
- **Entregáveis:** Telas Alta Fidelidade, Design System, Protótipo

#### Gateway 5: Aprovação Final (26/06/2026)
- **Aprovadores:** Todos os stakeholders
- **Duração:** 60 minutos
- **Entregáveis:** Relatórios de Validação, Quality Score Final

### 11.2 Rituais
- **Daily Standup:** 15 min, 9h (seg-sex)
- **Sprint Planning:** 2h, segunda-feira (quinzenal)
- **Sprint Review:** 1h, sexta-feira (quinzenal)
- **Sprint Retrospective:** 1h, sexta-feira (quinzenal)
- **Design Review:** 1h, quarta-feira (semanal)

---

## 12. Orçamento e Recursos

### 12.1 Investimento em Design
- **8 semanas** × **3 designers** = 24 semanas-pessoa
- **Custo estimado:** R$ 240.000 (design)

### 12.2 Investimento em Desenvolvimento
- **12 semanas** × **5 pessoas** (4 devs + 1 QA) = 60 semanas-pessoa
- **Custo estimado:** R$ 600.000 (desenvolvimento)

### 12.3 Infraestrutura e Serviços
- **AWS:** R$ 15.000/mês
- **APIs externas:** R$ 8.000/mês
- **Ferramentas:** R$ 5.000/mês
- **Total 6 meses:** R$ 168.000

### 12.4 Total do Projeto (MVP)
**R$ 1.008.000** (design + desenvolvimento + infraestrutura)

---

## 13. Critérios de Aceitação

### 13.1 Design
- [ ] Todas as telas do cronograma entregues
- [ ] Design System Fun documentado
- [ ] Protótipo navegável completo
- [ ] Especificações técnicas para desenvolvimento
- [ ] Aprovação em todos os 5 gateways
- [ ] Quality Score ≥ 85/100

### 13.2 Funcional
- [ ] Autenticação funcionando (cooperados e não cooperados)
- [ ] Dados de futebol em tempo real
- [ ] Sistema de pontos e gamificação operacional
- [ ] Resgate de benefícios funcionando
- [ ] Performance: tempo de carregamento < 2s
- [ ] Disponibilidade: 99.5% uptime

### 13.3 Qualidade
- [ ] Cobertura de testes ≥ 80%
- [ ] Acessibilidade WCAG 2.1 AA
- [ ] Performance: Lighthouse score ≥ 90
- [ ] Segurança: OWASP Top 10 mitigado
- [ ] Documentação técnica completa

---

## 14. Assinaturas e Aprovações

### Aprovação de Escopo

**Product Owner:**  
Nome: _______________________  
Data: ___/___/______  
Assinatura: _______________________

**Tech Lead:**  
Nome: _______________________  
Data: ___/___/______  
Assinatura: _______________________

**Design Lead:**  
Nome: _______________________  
Data: ___/___/______  
Assinatura: _______________________

**Scrum Master:**  
Nome: _______________________  
Data: ___/___/______  
Assinatura: _______________________

---

## 15. Anexos

### 15.1 Documentos Relacionados
- [Briefing do Projeto](../briefing.md)
- [Documentação Completa](../PROJETO-SICOOB-FUN.md)
- [Matriz de Maturidade](./matriz-maturidade.md) (pendente)
- [Análise de Viabilidade](./analise-viabilidade.md) (pendente)

### 15.2 Referências
- Design System Sicoob
- Campeonato Mineiro 2027 - Regulamento
- Sicoob Brand Guidelines
- WCAG 2.1 Guidelines

---

**Documento criado por:** CX Master (Estrategista)  
**Última atualização:** 17/04/2026  
**Versão:** 1.0 (Draft)  
**Próxima revisão:** Gateway 1 (24/04/2026)