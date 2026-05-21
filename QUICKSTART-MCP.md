# 🚀 Quickstart: Transforme sua IDE no CX Master

Bem-vindo ao **CX Operating System**! Com o novo modelo *Bring Your Own IDE* (BYOI), você não precisa de uma plataforma nova. Nós transformamos o seu **Cursor**, **Antigravity** ou **Claude Code** em um orquestrador de design de ponta a ponta.

Neste guia, você configurará o sistema em **menos de 3 minutos**.

---

## 🛠️ Passo 1: Inicie o Servidor MCP

O "Cérebro" do CX Master roda localmente na sua máquina para garantir velocidade e zero vazamento de dados da sua empresa.

Abra o seu terminal, vá até a pasta do projeto e rode:

```bash
cd src
npm install
npx ts-node mcp-server.ts
```

> [!NOTE]
> Deixe esse terminal aberto. Ele é a ponte entre os nossos 29 Agentes de Design e a sua IDE.

---

## 🔌 Passo 2: Conecte sua IDE (Exemplo: Cursor / Antigravity)

Agora precisamos dizer para a sua IDE que ela ganhou superpoderes de UX/UI Design.

1. Vá nas **Configurações (Settings)** da sua IDE.
2. Busque pela aba **MCP** (Model Context Protocol).
3. Clique em `+ Add New MCP Server`.
4. Preencha assim:
   - **Name:** `cx-master`
   - **Type:** `command`
   - **Command:** `npx`
   - **Args:** `ts-node /caminho/absoluto/para/seu/projeto/src/mcp-server.ts`

> [!TIP]
> Se a sua IDE usar um arquivo de configuração JSON (ex: Claude Code), basta colar isso:
> ```json
> {
>   "mcpServers": {
>     "cx-master": {
>       "command": "npx",
>       "args": ["ts-node", "/caminho/absoluto/para/seu/projeto/src/mcp-server.ts"]
>     }
>   }
> }
> ```

---

## ✨ Passo 3: A Mágica Acontece

Com tudo configurado, abra o chat da IA na sua IDE (Cmd+L / Ctrl+L) e digite o seguinte comando inicial:

> *"Sou um CX Master. Por favor, conecte-se à Fase 0 do nosso sistema usando a ferramenta `read_metaprompt` para o agente `boundary-mapper`, e me guie no início de um novo projeto de design."*

A partir desse momento, a sua IDE:
1. Lerá as regras de negócio dos nossos Metaprompts.
2. Vai te fazer as perguntas corretas do Briefing.
3. Salvará as respostas diretamente no seu disco via `cx_brain_store`.
4. Chamará os **Gateways de Aprovação** para você validar antes de ir para a Fase 1 (Pesquisa).

### 🎉 Pronto!
Você acaba de economizar dezenas de milhares de reais em APIs de LLM e ganhou o sistema de engenharia de design mais avançado do mercado, rodando na sua própria máquina.
