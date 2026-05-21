#!/usr/bin/env node

/**
 * CX Operating System - MCP Server
 * Distribui o framework como ferramentas para as IDEs agenticas (Antigravity, Cursor, etc).
 */

import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import fs from "fs/promises";
import path from "path";

// Inicializa o servidor MCP
const server = new Server(
  {
    name: "cx-master-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Define as ferramentas disponíveis para a IDE Agentica
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "read_metaprompt",
        description: "Obtém o metaprompt de um agente específico do CX Operating System baseado na fase atual.",
        inputSchema: {
          type: "object",
          properties: {
            phase: { type: "string", description: "Fase do processo (ex: fase-0-estrategista, fase-4-validador)" },
            agent_name: { type: "string", description: "Nome do agente (ex: design-to-code, boundary-mapper)" }
          },
          required: ["phase", "agent_name"]
        }
      },
      {
        name: "cx_brain_store",
        description: "Salva uma decisão ou artefato no contexto vetorial mockado do projeto atual para ser lembrado no futuro.",
        inputSchema: {
          type: "object",
          properties: {
            project_id: { type: "string" },
            key: { type: "string", description: "A chave do conhecimento (ex: restricoes_tecnicas)" },
            value: { type: "string", description: "O conteúdo a ser memorizado" }
          },
          required: ["project_id", "key", "value"]
        }
      },
      {
        name: "gateway_checkpoint",
        description: "Informa o usuário que uma fase terminou e pede aprovação no chat antes de prosseguir.",
        inputSchema: {
          type: "object",
          properties: {
            phase: { type: "string" },
            artifacts_generated: { type: "string" }
          },
          required: ["phase"]
        }
      }
    ]
  };
});

// Executa a lógica das ferramentas
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "read_metaprompt") {
    const phase = String(args?.phase);
    const agent = String(args?.agent_name);
    try {
      // Lê os arquivos locais do sistema do usuário
      const filePath = path.join(process.cwd(), '..', 'docs', 'metaprompts', phase, `${agent}.md`);
      const content = await fs.readFile(filePath, 'utf-8');
      return {
        content: [{ type: "text", text: content }]
      };
    } catch (e: any) {
      return {
        content: [{ type: "text", text: `Erro ao ler metaprompt: ${e.message}. Verifique o nome do agente e a fase.` }],
        isError: true
      };
    }
  }

  if (name === "cx_brain_store") {
    // Simulação: salva num arquivo JSON local (CX Brain simples)
    const dbPath = path.join(process.cwd(), '.cx_brain.json');
    let db: any = {};
    try {
      const data = await fs.readFile(dbPath, 'utf-8');
      db = JSON.parse(data);
    } catch (e) { /* File doesn't exist yet */ }

    const pid = String(args?.project_id);
    if (!db[pid]) db[pid] = {};
    db[pid][String(args?.key)] = args?.value;

    await fs.writeFile(dbPath, JSON.stringify(db, null, 2));
    
    return {
      content: [{ type: "text", text: `Sucesso: Informação arquivada no CX Brain para o projeto ${pid}.` }]
    };
  }

  if (name === "gateway_checkpoint") {
    return {
      content: [{ 
        type: "text", 
        text: `GATEWAY ALCANÇADO: Fase [${args?.phase}] concluída.\nArtefatos: ${args?.artifacts_generated}\n\nPor favor, exiba esta mensagem explicitamente para o humano no chat e peça para ele aprovar ou solicitar alterações antes de chamar o próximo agente.` 
      }]
    };
  }

  throw new Error(`Tool unknown: ${name}`);
});

// Inicialização
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("CX Master MCP Server running on stdio");
}

main().catch(console.error);
