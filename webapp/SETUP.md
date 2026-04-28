# 🚀 Setup da Aplicação Web - CX Operating System

## 📋 Pré-requisitos

- Node.js 20+ instalado
- npm ou yarn
- Git

## 🔧 Instalação

### 1. Instalar Dependências

```bash
cd "Agentes Design/webapp"
npm install
```

### 2. Configurar Variáveis de Ambiente

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações.

### 3. Executar em Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em: http://localhost:3000

## 📦 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento

# Build
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção

# Qualidade de Código
npm run lint         # Executa ESLint
npm run type-check   # Verifica tipos TypeScript
```

## 🏗️ Estrutura Criada

```
webapp/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ✅ Layout principal
│   │   ├── page.tsx            ✅ Dashboard
│   │   └── globals.scss        ✅ Estilos globais
│   ├── components/
│   │   └── layout/
│   │       └── Header.tsx      ✅ Cabeçalho
│   ├── services/
│   │   ├── api.ts              ✅ Cliente API
│   │   └── projects.ts         ✅ Serviço de projetos
│   └── types/
│       └── index.ts            ✅ Tipos TypeScript
├── tsconfig.json               ✅ Configuração TypeScript
├── next.config.js              ✅ Configuração Next.js
├── .env.example                ✅ Exemplo de variáveis
└── package.json                ✅ Dependências

```

## ⚠️ Próximos Passos

### Para a Equipe Continuar o Desenvolvimento:

1. **Instalar as dependências** listadas no `package.json`
2. **Criar páginas adicionais:**
   - `/projects` - Lista de projetos
   - `/projects/new` - Criar novo projeto
   - `/projects/[id]` - Detalhes do projeto
   - `/agents` - Visualização de agentes
   - `/templates` - Biblioteca de templates
   - `/reports` - Relatórios gerados
   - `/docs` - Documentação

3. **Criar componentes:**
   - `ProjectCard` - Card de projeto
   - `ProjectWizard` - Wizard de criação
   - `AgentCard` - Card de agente
   - `AgentWorkflow` - Visualização de workflow
   - `FileUploader` - Upload de arquivos
   - `ReportViewer` - Visualizador de relatórios

4. **Implementar funcionalidades:**
   - Sistema de autenticação
   - Upload de arquivos
   - Comunicação real-time (Socket.io)
   - Geração de relatórios
   - Aprovação de gateways

5. **Backend (opcional):**
   - Criar API REST com Express.js
   - Configurar PostgreSQL (CX Brain)
   - Integrar Redis para cache
   - Configurar Qdrant para busca vetorial
   - Integrar APIs de IA (OpenAI/Claude)

## 🎨 Design System

A aplicação usa **IBM Carbon Design System**:
- Documentação: https://carbondesignsystem.com/
- Componentes React: https://react.carbondesignsystem.com/
- Ícones: https://www.carbondesignsystem.com/guidelines/icons/library/

## 📚 Recursos

- **Next.js 14**: https://nextjs.org/docs
- **TypeScript**: https://www.typescriptlang.org/docs/
- **IBM Carbon**: https://carbondesignsystem.com/
- **Zustand**: https://github.com/pmndrs/zustand
- **Socket.io**: https://socket.io/docs/

## 🐛 Problemas Conhecidos

Os erros de TypeScript atuais são esperados porque as dependências ainda não foram instaladas. Execute `npm install` para resolver.

## 💡 Dicas

1. Use o **IBM Carbon Design System** para manter consistência visual
2. Siga a estrutura de pastas estabelecida
3. Mantenha os tipos TypeScript atualizados em `src/types/`
4. Use os serviços em `src/services/` para chamadas de API
5. Componentes devem ser reutilizáveis e bem documentados

## 🤝 Contribuindo

1. Crie uma branch para sua feature: `git checkout -b feature/nome-da-feature`
2. Faça commit das mudanças: `git commit -m 'Adiciona nova feature'`
3. Push para a branch: `git push origin feature/nome-da-feature`
4. Abra um Pull Request

## 📞 Suporte

Para dúvidas sobre a arquitetura do CX Operating System, consulte:
- `../ARQUITETURA-AGENTES.md` - Arquitetura completa dos 29 agentes
- `../GETTING-STARTED.md` - Guia de início rápido
- `../BEST-PRACTICES.md` - Melhores práticas
- `../FAQ.md` - Perguntas frequentes

---

**Status:** 🚧 Em desenvolvimento - Base estrutural criada
**Versão:** 1.0.0
**Última atualização:** 2026-04-24