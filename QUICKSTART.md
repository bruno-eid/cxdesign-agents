# 🚀 Quick Start - CX Operating System

## Configuração Inicial (5 minutos)

### 1. Verificar Pré-requisitos

```bash
# Verificar se o Figma Desktop está rodando
curl http://127.0.0.1:3845/mcp/status

# Deve retornar status 200 OK
```

### 2. Estrutura do Projeto

O projeto já está configurado com:
- ✅ `.mcp.json` - Configuração do MCP
- ✅ `outputs/` - Pasta para resultados
- ✅ `.gitignore` - Arquivos ignorados

### 3. Testar Conexão MCP

```bash
# Navegar até o projeto
cd "Agentes Design"

# Verificar estrutura
ls -la

# Você deve ver:
# .mcp.json
# outputs/
# docs/
# core/
# agents/
```

## 🎯 Primeiro Projeto (10 minutos)

### Passo 1: Criar Briefing

Crie um arquivo de briefing em `examples/projects/[nome-projeto]/briefing.md`:

```markdown
# Briefing - [Nome do Projeto]

## Contexto
[Descreva o contexto do projeto]

## Objetivo
[Qual o objetivo principal?]

## Público-Alvo
[Quem são os usuários?]

## Restrições
[Limitações técnicas, orçamento, prazo]

## Entregáveis Esperados
- [ ] Benchmark competitivo
- [ ] Personas
- [ ] Wireframes
- [ ] Protótipo
```

### Passo 2: Iniciar Fase 0 - Estrategista

O **CX Master** irá:
1. Ler o briefing
2. Ativar o **Boundary Mapper**
3. Criar contrato de escopo
4. Gerar matriz de maturidade

**Entregáveis em:** `outputs/estrategista/`

### Passo 3: Gateway 1 - Aprovação

Revise os documentos gerados:
- `contrato-escopo.md`
- `matriz-maturidade.md`

✅ Aprove para continuar  
❌ Rejeite para ajustar

### Passo 4: Fase 1 - Pesquisador

O sistema irá:
1. Ativar **Benchmark Analyst**
2. Ativar **User Researcher**
3. Ativar **Persona Crafter**
4. Ativar **Journey Mapper**

**Entregáveis em:** `outputs/pesquisador/`

### Passo 5: Sincronização com Figma

Todos os arquivos em `outputs/` são automaticamente sincronizados com o Figma via MCP:

```
outputs/pesquisador/benchmarks/analise.md
    ↓ MCP
Figma → Projeto → Fase 1 → Benchmarks → analise.md
```

## 📋 Comandos Úteis

### Listar Outputs de um Projeto

```bash
# Ver todos os arquivos gerados
find outputs -name "*sicoob-fun*"

# Ver apenas de uma fase
ls -R outputs/pesquisador/
```

### Verificar Status do MCP

```bash
# Status do servidor
curl http://127.0.0.1:3845/mcp/status

# Listar conexões ativas
curl http://127.0.0.1:3845/mcp/connections
```

### Limpar Cache (se necessário)

```bash
# Remover cache do MCP
rm -rf .mcp-cache/

# Reiniciar Figma Desktop
# (fechar e abrir novamente)
```

## 🔄 Fluxo Completo

```
1. Briefing → CX Master
2. CX Master → Fase 0: Estrategista
3. Gateway 1 → Aprovação Humana ✋
4. Fase 1: Pesquisador → Outputs
5. Gateway 2 → Aprovação Humana ✋
6. Fase 2: Arquiteto → Outputs
7. Gateway 3 → Aprovação Humana ✋
8. Fase 3: Visual → Outputs
9. Gateway 4 → Aprovação Humana ✋
10. Fase 4: Validador → Outputs
11. Gateway 5 → Entrega Final ✋
```

## 🎨 Exemplo Real: Sicoob Fun

Veja um projeto completo em execução:

```bash
cd "examples/projects/sicoob-fun"

# Estrutura criada:
sicoob-fun/
├── briefing.md
├── PROJETO-SICOOB-FUN.md
├── fase-0/
│   ├── contrato-escopo.md
│   └── matriz-maturidade.md
├── fase-1/
│   ├── benchmark/
│   │   ├── 00-sintese-executiva.md (600 linhas)
│   │   ├── 01-fan-engagement.md (130 linhas)
│   │   ├── 02-gamificacao.md (350 linhas)
│   │   └── 03-fidelidade.md (350 linhas)
│   └── pesquisa-usuarios/
│       ├── README.md (350 linhas)
│       ├── 01-roteiro-geral.md (650 linhas)
│       └── 02-formulario-pesquisa.md (700 linhas)
└── ...
```

**Total:** ~3.500 linhas de documentação técnica geradas

## 🛠️ Troubleshooting

### MCP não conecta

```bash
# 1. Verificar se Figma Desktop está aberto
ps aux | grep Figma

# 2. Verificar porta
lsof -i :3845

# 3. Reiniciar Figma Desktop
```

### Outputs não sincronizam

```bash
# 1. Verificar .mcp.json
cat .mcp.json

# 2. Verificar permissões
ls -la outputs/

# 3. Forçar sincronização
# (fechar e abrir Figma Desktop)
```

### Erro de permissão

```bash
# Ajustar permissões da pasta outputs
chmod -R 755 outputs/
```

## 📚 Próximos Passos

1. ✅ Configuração MCP completa
2. 📖 Ler [Arquitetura Completa](docs/architecture/README.md)
3. 🎯 Ler [Metaprompts dos Agentes](docs/metaprompts/README.md)
4. 🔄 Ler [Workflows Detalhados](docs/workflows/README.md)
5. 🚀 Criar seu primeiro projeto

## 💡 Dicas

- **Use o projeto Sicoob Fun como referência** - É um exemplo completo e real
- **Aprove nos gateways com atenção** - Cada fase depende da anterior
- **Documente decisões importantes** - O CX Brain usa isso como contexto
- **Mantenha o Figma Desktop aberto** - Para sincronização em tempo real
- **Revise os outputs regularmente** - Qualidade > Velocidade

## 🆘 Suporte

- 📖 [Documentação Completa](docs/)
- 🐛 [Reportar Issues](https://github.com/seu-repo/issues)
- 💬 [Discussões](https://github.com/seu-repo/discussions)

---

**Última atualização:** 2026-04-23  
**Versão:** 1.0.0  
**Tempo estimado:** 15 minutos para setup completo