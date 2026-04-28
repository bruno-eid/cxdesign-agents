# ⚡ Performance Analysis Report - [Nome do Projeto]

## 📋 Metadados

```yaml
projeto: [nome-do-projeto]
versao: v1
data: [YYYY-MM-DD]
autor: performance-analyst-agent
quality_score: [0-100]
```

---

## 🎯 Visão Geral

### Objetivo da Análise

**O que queremos medir:**
[Descreva o objetivo principal da análise de performance]

**Exemplo:**
> "Garantir que todas as páginas carreguem em menos de 3 segundos em conexões 3G, com Core Web Vitals dentro dos limites recomendados pelo Google, proporcionando uma experiência rápida e fluida para todos os usuários."

### Escopo

**Páginas analisadas:**
- [Página 1]
- [Página 2]
- [Página 3]
- [Página 4]
- [Página 5]

**Dispositivos testados:**
- Desktop (Chrome, Firefox, Safari, Edge)
- Mobile (iOS Safari, Android Chrome)
- Tablet

**Condições de rede:**
- 5G (Ultra-fast)
- 4G (Fast)
- 3G (Regular)
- 3G Slow
- 2G (Edge case)

---

## 📊 Core Web Vitals

### Largest Contentful Paint (LCP)

**O que mede:** Tempo até o maior elemento de conteúdo ser renderizado

**Limites:**
- ✅ Bom: ≤ 2.5s
- ⚠️ Precisa melhorar: 2.5s - 4.0s
- ❌ Ruim: > 4.0s

**Resultados:**

| Página | Desktop | Mobile | Status | Ação |
|--------|---------|--------|--------|------|
| Homepage | [X]s | [X]s | [✅/⚠️/❌] | [Ação] |
| [Página 2] | [X]s | [X]s | [✅/⚠️/❌] | [Ação] |
| [Página 3] | [X]s | [X]s | [✅/⚠️/❌] | [Ação] |

**Média geral:** [X]s

**Elemento LCP identificado:**
- Homepage: [Descrição do elemento]
- [Página 2]: [Descrição do elemento]

**Recomendações:**
1. [Recomendação 1]
2. [Recomendação 2]
3. [Recomendação 3]

---

### First Input Delay (FID)

**O que mede:** Tempo até a primeira interação do usuário ser processada

**Limites:**
- ✅ Bom: ≤ 100ms
- ⚠️ Precisa melhorar: 100ms - 300ms
- ❌ Ruim: > 300ms

**Resultados:**

| Página | Desktop | Mobile | Status | Ação |
|--------|---------|--------|--------|------|
| Homepage | [X]ms | [X]ms | [✅/⚠️/❌] | [Ação] |
| [Página 2] | [X]ms | [X]ms | [✅/⚠️/❌] | [Ação] |
| [Página 3] | [X]ms | [X]ms | [✅/⚠️/❌] | [Ação] |

**Média geral:** [X]ms

**Principais bloqueios:**
- [Bloqueio 1]: [Descrição]
- [Bloqueio 2]: [Descrição]

**Recomendações:**
1. [Recomendação 1]
2. [Recomendação 2]
3. [Recomendação 3]

---

### Cumulative Layout Shift (CLS)

**O que mede:** Estabilidade visual durante o carregamento

**Limites:**
- ✅ Bom: ≤ 0.1
- ⚠️ Precisa melhorar: 0.1 - 0.25
- ❌ Ruim: > 0.25

**Resultados:**

| Página | Desktop | Mobile | Status | Ação |
|--------|---------|--------|--------|------|
| Homepage | [X] | [X] | [✅/⚠️/❌] | [Ação] |
| [Página 2] | [X] | [X] | [✅/⚠️/❌] | [Ação] |
| [Página 3] | [X] | [X] | [✅/⚠️/❌] | [Ação] |

**Média geral:** [X]

**Principais causas:**
- [Causa 1]: [Descrição]
- [Causa 2]: [Descrição]

**Recomendações:**
1. [Recomendação 1]
2. [Recomendação 2]
3. [Recomendação 3]

---

## 🚀 Métricas de Carregamento

### Time to First Byte (TTFB)

**O que mede:** Tempo até o primeiro byte ser recebido do servidor

**Limite recomendado:** < 600ms

**Resultados:**

| Página | TTFB | Status |
|--------|------|--------|
| Homepage | [X]ms | [✅/⚠️/❌] |
| [Página 2] | [X]ms | [✅/⚠️/❌] |
| [Página 3] | [X]ms | [✅/⚠️/❌] |

**Média:** [X]ms

**Análise:**
- Server response time: [X]ms
- DNS lookup: [X]ms
- Connection time: [X]ms
- SSL handshake: [X]ms

**Recomendações:**
1. [Recomendação 1]
2. [Recomendação 2]

---

### First Contentful Paint (FCP)

**O que mede:** Tempo até o primeiro conteúdo ser renderizado

**Limite recomendado:** < 1.8s

**Resultados:**

| Página | Desktop | Mobile | Status |
|--------|---------|--------|--------|
| Homepage | [X]s | [X]s | [✅/⚠️/❌] |
| [Página 2] | [X]s | [X]s | [✅/⚠️/❌] |
| [Página 3] | [X]s | [X]s | [✅/⚠️/❌] |

**Média:** [X]s

---

### Speed Index

**O que mede:** Quão rapidamente o conteúdo é visualmente exibido

**Limite recomendado:** < 3.4s

**Resultados:**

| Página | Desktop | Mobile | Status |
|--------|---------|--------|--------|
| Homepage | [X]s | [X]s | [✅/⚠️/❌] |
| [Página 2] | [X]s | [X]s | [✅/⚠️/❌] |
| [Página 3] | [X]s | [X]s | [✅/⚠️/❌] |

**Média:** [X]s

---

### Time to Interactive (TTI)

**O que mede:** Tempo até a página estar completamente interativa

**Limite recomendado:** < 3.8s

**Resultados:**

| Página | Desktop | Mobile | Status |
|--------|---------|--------|--------|
| Homepage | [X]s | [X]s | [✅/⚠️/❌] |
| [Página 2] | [X]s | [X]s | [✅/⚠️/❌] |
| [Página 3] | [X]s | [X]s | [✅/⚠️/❌] |

**Média:** [X]s

---

### Total Blocking Time (TBT)

**O que mede:** Tempo total que a thread principal está bloqueada

**Limite recomendado:** < 200ms

**Resultados:**

| Página | Desktop | Mobile | Status |
|--------|---------|--------|--------|
| Homepage | [X]ms | [X]ms | [✅/⚠️/❌] |
| [Página 2] | [X]ms | [X]ms | [✅/⚠️/❌] |
| [Página 3] | [X]ms | [X]ms | [✅/⚠️/❌] |

**Média:** [X]ms

---

## 📦 Análise de Recursos

### Tamanho Total da Página

**Limite recomendado:** < 1.5MB

**Resultados:**

| Página | Tamanho Total | Status | Breakdown |
|--------|---------------|--------|-----------|
| Homepage | [X]MB | [✅/⚠️/❌] | HTML: [X]KB, CSS: [X]KB, JS: [X]KB, Images: [X]KB |
| [Página 2] | [X]MB | [✅/⚠️/❌] | HTML: [X]KB, CSS: [X]KB, JS: [X]KB, Images: [X]KB |
| [Página 3] | [X]MB | [✅/⚠️/❌] | HTML: [X]KB, CSS: [X]KB, JS: [X]KB, Images: [X]KB |

**Média:** [X]MB

---

### Número de Requisições

**Limite recomendado:** < 50 requisições

**Resultados:**

| Página | Total | HTML | CSS | JS | Images | Fonts | Other |
|--------|-------|------|-----|----|----|-------|-------|
| Homepage | [N] | [N] | [N] | [N] | [N] | [N] | [N] |
| [Página 2] | [N] | [N] | [N] | [N] | [N] | [N] | [N] |
| [Página 3] | [N] | [N] | [N] | [N] | [N] | [N] | [N] |

**Média:** [N] requisições

---

### JavaScript

**Tamanho total:** [X]KB

**Breakdown:**

| Arquivo | Tamanho | Comprimido | Usado | Não Usado | Ação |
|---------|---------|------------|-------|-----------|------|
| [arquivo-1.js] | [X]KB | [X]KB | [X%] | [X%] | [Ação] |
| [arquivo-2.js] | [X]KB | [X]KB | [X%] | [X%] | [Ação] |
| [arquivo-3.js] | [X]KB | [X]KB | [X%] | [X%] | [Ação] |

**Problemas identificados:**
- [ ] JavaScript não minificado
- [ ] Código não utilizado (> 20%)
- [ ] Sem code splitting
- [ ] Sem lazy loading
- [ ] Bibliotecas pesadas

**Recomendações:**
1. [Recomendação 1]
2. [Recomendação 2]
3. [Recomendação 3]

---

### CSS

**Tamanho total:** [X]KB

**Breakdown:**

| Arquivo | Tamanho | Comprimido | Usado | Não Usado | Ação |
|---------|---------|------------|-------|-----------|------|
| [arquivo-1.css] | [X]KB | [X]KB | [X%] | [X%] | [Ação] |
| [arquivo-2.css] | [X]KB | [X]KB | [X%] | [X%] | [Ação] |

**Problemas identificados:**
- [ ] CSS não minificado
- [ ] CSS não utilizado (> 20%)
- [ ] Sem critical CSS
- [ ] Muitos arquivos separados

**Recomendações:**
1. [Recomendação 1]
2. [Recomendação 2]
3. [Recomendação 3]

---

### Imagens

**Tamanho total:** [X]MB

**Breakdown:**

| Imagem | Tamanho | Formato | Dimensões | Otimizada | Ação |
|--------|---------|---------|-----------|-----------|------|
| [imagem-1] | [X]KB | [formato] | [WxH] | [Sim/Não] | [Ação] |
| [imagem-2] | [X]KB | [formato] | [WxH] | [Sim/Não] | [Ação] |
| [imagem-3] | [X]KB | [formato] | [WxH] | [Sim/Não] | [Ação] |

**Problemas identificados:**
- [ ] Imagens não otimizadas
- [ ] Formato inadequado (usar WebP)
- [ ] Dimensões maiores que necessário
- [ ] Sem lazy loading
- [ ] Sem responsive images

**Recomendações:**
1. [Recomendação 1]
2. [Recomendação 2]
3. [Recomendação 3]

---

### Fontes

**Tamanho total:** [X]KB

**Breakdown:**

| Fonte | Tamanho | Formato | Usado | Ação |
|-------|---------|---------|-------|------|
| [fonte-1] | [X]KB | [formato] | [Sim/Não] | [Ação] |
| [fonte-2] | [X]KB | [formato] | [Sim/Não] | [Ação] |

**Problemas identificados:**
- [ ] Muitas variantes de fonte
- [ ] Formato não otimizado (usar WOFF2)
- [ ] Sem font-display
- [ ] Carregamento bloqueante

**Recomendações:**
1. [Recomendação 1]
2. [Recomendação 2]

---

## 🔧 Otimizações Implementadas

### Compressão

**Gzip/Brotli:**
- [ ] HTML comprimido
- [ ] CSS comprimido
- [ ] JavaScript comprimido
- [ ] Brotli habilitado

**Economia:** [X]% de redução

---

### Caching

**Cache-Control headers:**

| Tipo de Recurso | Cache-Control | Status |
|-----------------|---------------|--------|
| HTML | [valor] | [✅/❌] |
| CSS | [valor] | [✅/❌] |
| JavaScript | [valor] | [✅/❌] |
| Imagens | [valor] | [✅/❌] |
| Fontes | [valor] | [✅/❌] |

**Service Worker:**
- [ ] Implementado
- [ ] Estratégia: [Cache-first/Network-first/Stale-while-revalidate]

---

### CDN

**CDN utilizado:** [Nome do CDN]

**Recursos servidos via CDN:**
- [ ] Imagens
- [ ] CSS
- [ ] JavaScript
- [ ] Fontes
- [ ] Vídeos

**Latência média:** [X]ms

---

### Lazy Loading

**Implementado para:**
- [ ] Imagens
- [ ] Vídeos
- [ ] Iframes
- [ ] Componentes JavaScript

**Economia no carregamento inicial:** [X]%

---

### Code Splitting

**Implementado:**
- [ ] Route-based splitting
- [ ] Component-based splitting
- [ ] Vendor splitting

**Chunks criados:** [N]

**Tamanho do bundle inicial:** [X]KB (antes: [X]KB)

---

## 📱 Performance Mobile

### Análise Específica Mobile

**Dispositivo de teste:** [Modelo]

**Conexão:** 3G Regular (750kb/s, 100ms RTT)

**Resultados:**

| Métrica | Valor | Status |
|---------|-------|--------|
| LCP | [X]s | [✅/⚠️/❌] |
| FID | [X]ms | [✅/⚠️/❌] |
| CLS | [X] | [✅/⚠️/❌] |
| TTI | [X]s | [✅/⚠️/❌] |
| Speed Index | [X]s | [✅/⚠️/❌] |

**Problemas específicos mobile:**
1. [Problema 1]
2. [Problema 2]
3. [Problema 3]

**Recomendações mobile:**
1. [Recomendação 1]
2. [Recomendação 2]
3. [Recomendação 3]

---

## 🎯 Lighthouse Scores

### Scores por Página

| Página | Performance | Accessibility | Best Practices | SEO |
|--------|-------------|---------------|----------------|-----|
| Homepage | [Score] | [Score] | [Score] | [Score] |
| [Página 2] | [Score] | [Score] | [Score] | [Score] |
| [Página 3] | [Score] | [Score] | [Score] | [Score] |

**Média geral:** [Score]

**Interpretação:**
- 90-100: Excelente
- 50-89: Precisa melhorar
- 0-49: Ruim

---

### Oportunidades Identificadas

**Performance:**

| Oportunidade | Economia Estimada | Prioridade |
|--------------|-------------------|------------|
| [Oportunidade 1] | [X]s | [Alta/Média/Baixa] |
| [Oportunidade 2] | [X]s | [Alta/Média/Baixa] |
| [Oportunidade 3] | [X]s | [Alta/Média/Baixa] |

**Diagnósticos:**

| Diagnóstico | Descrição | Ação |
|-------------|-----------|------|
| [Diagnóstico 1] | [Descrição] | [Ação] |
| [Diagnóstico 2] | [Descrição] | [Ação] |

---

## 🔍 Análise de Concorrentes

### Benchmark

| Métrica | Nosso Site | Concorrente A | Concorrente B | Média do Setor |
|---------|------------|---------------|---------------|----------------|
| LCP | [X]s | [X]s | [X]s | [X]s |
| FID | [X]ms | [X]ms | [X]ms | [X]ms |
| CLS | [X] | [X] | [X] | [X] |
| Tamanho | [X]MB | [X]MB | [X]MB | [X]MB |
| Requisições | [N] | [N] | [N] | [N] |

**Posição:** [Melhor/Médio/Pior] que concorrentes

**Insights:**
- [Insight 1]
- [Insight 2]
- [Insight 3]

---

## 📋 Plano de Ação

### Prioridade Crítica (Fazer Imediatamente)

1. **[Ação 1]**
   - Problema: [Descrição]
   - Solução: [Como implementar]
   - Impacto esperado: [Melhoria estimada]
   - Esforço: [Alto/Médio/Baixo]
   - Responsável: [Nome]
   - Prazo: [Data]

2. **[Ação 2]**
   - Problema: [Descrição]
   - Solução: [Como implementar]
   - Impacto esperado: [Melhoria estimada]
   - Esforço: [Alto/Médio/Baixo]
   - Responsável: [Nome]
   - Prazo: [Data]

---

### Prioridade Alta (Fazer Logo)

1. **[Ação 3]**
   - Problema: [Descrição]
   - Solução: [Como implementar]
   - Impacto esperado: [Melhoria estimada]
   - Esforço: [Alto/Médio/Baixo]
   - Responsável: [Nome]
   - Prazo: [Data]

---

### Prioridade Média (Fazer Quando Possível)

1. **[Ação 4]**
   - Problema: [Descrição]
   - Solução: [Como implementar]
   - Impacto esperado: [Melhoria estimada]
   - Esforço: [Alto/Médio/Baixo]
   - Responsável: [Nome]
   - Prazo: [Data]

---

## 📊 Monitoramento Contínuo

### Ferramentas de Monitoramento

**Real User Monitoring (RUM):**
- Ferramenta: [Nome]
- Métricas coletadas: [Lista]
- Dashboard: [Link]

**Synthetic Monitoring:**
- Ferramenta: [Nome]
- Frequência: [Intervalo]
- Alertas configurados: [Sim/Não]

### Alertas

**Configurados para:**
- [ ] LCP > 2.5s
- [ ] FID > 100ms
- [ ] CLS > 0.1
- [ ] Lighthouse score < 90
- [ ] Erro rate > 1%

### Relatórios

**Frequência:** [Semanal/Mensal]

**Distribuição:** [Lista de stakeholders]

---

## 🎯 Metas de Performance

### Metas Atuais vs Futuras

| Métrica | Atual | Meta Q1 | Meta Q2 | Meta Q3 |
|---------|-------|---------|---------|---------|
| LCP | [X]s | [X]s | [X]s | [X]s |
| FID | [X]ms | [X]ms | [X]ms | [X]ms |
| CLS | [X] | [X] | [X] | [X] |
| Lighthouse | [X] | [X] | [X] | [X] |
| Tamanho | [X]MB | [X]MB | [X]MB | [X]MB |

### Budget de Performance

**Limites estabelecidos:**

| Recurso | Limite | Atual | Status |
|---------|--------|-------|--------|
| JavaScript | [X]KB | [X]KB | [✅/❌] |
| CSS | [X]KB | [X]KB | [✅/❌] |
| Imagens | [X]KB | [X]KB | [✅/❌] |
| Fontes | [X]KB | [X]KB | [✅/❌] |
| Total | [X]MB | [X]MB | [✅/❌] |

---

## 📎 Anexos

### Relatórios Completos

- [Lighthouse Report - Homepage](link)
- [Lighthouse Report - Página 2](link)
- [WebPageTest Results](link)
- [Chrome DevTools Performance](link)

### Screenshots

- [Filmstrip - Homepage](link)
- [Waterfall - Homepage](link)
- [Coverage Report](link)

### Dados Brutos

- [Planilha com todas as métricas](link)
- [Histórico de performance](link)

---

## 📝 Notas do Agente

**Criado por:** Performance Analyst Agent  
**Data:** [YYYY-MM-DD]  
**Versão:** v1  
**Quality Score:** [0-100]

**Ambiente testado:**
- [ ] Produção
- [ ] Staging
- [ ] Desenvolvimento

**Ferramentas utilizadas:**
- [ ] Lighthouse
- [ ] WebPageTest
- [ ] Chrome DevTools
- [ ] GTmetrix
- [ ] PageSpeed Insights

**Recomendações:**
- [Recomendação 1]
- [Recomendação 2]
- [Recomendação 3]

**Alertas:**
- [ ] Performance crítica
- [ ] Core Web Vitals fora do limite
- [ ] Tamanho excessivo
- [ ] Muitas requisições

---

## ✅ Checklist de Análise

### Coleta de Dados
- [ ] Core Web Vitals medidos
- [ ] Lighthouse executado
- [ ] WebPageTest executado
- [ ] Recursos analisados
- [ ] Mobile testado

### Análise
- [ ] Problemas identificados
- [ ] Causas raiz encontradas
- [ ] Benchmarks realizados
- [ ] Oportunidades priorizadas

### Recomendações
- [ ] Plano de ação criado
- [ ] Prioridades definidas
- [ ] Responsáveis atribuídos
- [ ] Prazos estabelecidos

### Entrega
- [ ] Relatório completo
- [ ] Apresentação criada
- [ ] Equipe informada
- [ ] Monitoramento configurado

---

**Última Atualização:** [YYYY-MM-DD]  
**Próxima Análise:** [YYYY-MM-DD]