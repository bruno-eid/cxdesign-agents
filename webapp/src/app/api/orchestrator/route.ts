import { NextResponse } from 'next/server';
import { GoogleGenerativeAI, SchemaType } from '@google/generative-ai';

const delay = (ms: number) => new Promise(r => setTimeout(r, ms));

// ─── Mock fallbacks (usado se não houver API key) ──────────
const MOCKS: Record<string, any> = {
  strategy: { title: "Análise Estratégica", insights: ["Mercado em crescimento de 23% ao ano", "Diferenciação por personalização é viável"], recommendation: "Foco em MVP com onboarding gamificado", risks: ["Dependência de API de terceiros", "Regulamentação financeira"], next_steps: ["Validar com 20 usuários em entrevista qualitativa"] },
  research: { title: "Descobertas da Pesquisa", user_pains: ["Cadastros longos geram 68% de abandono", "Falta de feedback imediato frustra usuários"], behaviors: ["Usuários preferem autenticação social", "Sessões duram em média 4 minutos"], personas: ["Ana, 24 anos — busca controle financeiro sem burocracia", "João, 31 anos — quer investir mas não sabe por onde começar"], opportunities: ["Onboarding em 3 passos", "Gamificação com sistema de níveis"] },
  'cx-service': { title: "Mapa de Experiência", journey_stages: ["Descoberta → Download → Onboarding → Primeira ação → Retenção"], pain_points: ["Tela de cadastro com 8 campos", "Sem feedback ao completar meta"], moments_of_truth: ["Primeiro depósito", "Receber primeira recompensa"], recommendation: "Redesenhar onboarding para máximo 3 telas com progress visual" },
  'ux-architecture': { title: "Arquitetura UX", sitemap: ["Home → Dashboard", "Home → Metas → Criar Meta → Progresso", "Home → Perfil → Configurações"], navigation: "Bottom Tab com 4 itens: Home, Metas, Carteira, Perfil", user_flow: "Splash → Auth social → Reward → Dashboard → First action → Celebração", states: ["Empty state com call-to-action", "Loading skeleton", "Error com retry"] },
  content: { title: "Estratégia de Conteúdo", voice: "Amigável, motivacional e direto — como um coach financeiro jovem", microcopy_samples: ["Botão: 'Começar agora' → não 'Cadastrar'", "Error: 'Ops, algo deu errado. Tente de novo?' → não 'Erro 500'"], empty_states: ["Sua carteira está vazia — que tal começar com R$10?"], onboarding: ["Bem-vindo! Vamos montar seu perfil em 30 segundos.", "Pronto! Você já pode começar a investir."] },
  'ui-design-system': { title: "Direção Visual", color_palette: ["Índigo Profundo (#4F46E5)", "Esmeralda (#10B981)", "Preto Azulado (#0F172A)", "Branco Neve (#F8FAFC)"], typography: "Inter para corpo, Outfit para títulos, JetBrains Mono para números", components: ["Glass Cards com backdrop-blur", "Glow Buttons com hover glow", "Progress Rings animados", "Skeleton loaders"], design_tokens: "8pt grid, 16px base, border-radius 12px, shadow-lg para elevação" },
  'validation-growth': { title: "Relatório de Validação", usability_score: "92/100", accessibility: "WCAG AA — 96% conformidade", heuristics: ["Visibilidade do status — ✅", "Correspondência com mundo real — ✅", "Controle do usuário — ✅", "Consistência — ✅"], metrics: ["Objetivo: 60% de ativação D1", "Meta: NPS > 50", "Retenção D7 > 40%"], final_status: "Aprovado para produção com 2 ajustes menores." },
};

export async function POST(req: Request) {
  try {
    const { briefing, phase } = await req.json();
    if (!briefing) return NextResponse.json({ error: 'Briefing é obrigatório.' }, { status: 400 });

    const squadId = Object.keys(MOCKS).includes(phase) ? phase : 'strategy';

    // 1. Pegar a API Key do cabeçalho da requisição ou do arquivo .env.local
    const authHeader = req.headers.get('authorization');
    let userApiKey = authHeader?.split('Bearer ')[1];
    
    if (!userApiKey || userApiKey.length < 20) {
      userApiKey = process.env.GEMINI_API_KEY;
    }

    // 2. Se não tiver uma chave válida nem no front nem no back, usar o Mock (Modo Demonstração)
    if (!userApiKey || userApiKey.length < 20) {
      console.log('Usando modo Mock (sem API Key válida)');
      await delay(1500 + Math.random() * 1000); // Simula o tempo de rede
      return NextResponse.json({ success: true, agent: squadId, result: MOCKS[squadId] });
    }

    // 3. Integração REAL com o Google Gemini
    console.log(`Iniciando IA Real (Gemini) para a Squad: ${squadId}`);
    
    // Instancia o cliente da Google com a chave fornecida pelo usuário na UI
    const genAI = new GoogleGenerativeAI(userApiKey);

    // O sistema define se é uma tarefa complexa (Pro) ou rápida (Flash)
    // Para design corporativo, Gemini 1.5 Pro é excepcional
    const model = genAI.getGenerativeModel({
      model: 'gemini-1.5-pro-latest',
      generationConfig: {
        temperature: 0.7,
        responseMimeType: "application/json",
      }
    });

    // Constrói o System Prompt forte para garantir o formato correto (Structured Output)
    const prompt = `
Você é um agente especialista ultra-sênior atuando dentro do CX Operating System.
Seu objetivo é gerar artefatos profissionais de altíssima qualidade de Design, Produto e CX.

INSTRUÇÕES CRÍTICAS:
1. Você DEVE retornar EXATAMENTE um objeto JSON válido.
2. O JSON deve obrigatoriamente ter uma propriedade "title" (string curta com o nome do artefato).
3. O resto do JSON deve ser composto por arrays de strings ou strings curtas. Não crie estruturas muito profundas.
4. Mantenha os valores diretos, concisos e muito práticos (evite jargão inútil, foque no valor para o projeto).

EXEMPLO DE SAÍDA ESPERADA:
{
  "title": "Persona Principal",
  "perfil": "Jovem de 25 anos buscando organização",
  "dores": ["Não sabe onde o dinheiro vai", "Acha planilhas chatas"],
  "objetivos": ["Juntar para viajar", "Sair das dívidas"]
}

Contexto do Projeto e Função que você deve exercer agora:
${briefing}
`;

    // Chamada à API do Gemini
    const result = await model.generateContent(prompt);
    const aiContent = result.response.text();
    
    if (!aiContent) {
      throw new Error("A IA retornou um conteúdo vazio.");
    }

    // Parseia o JSON retornado pela IA
    const resultJson = JSON.parse(aiContent);

    return NextResponse.json({
      success: true,
      agent: squadId,
      result: resultJson,
    });

  } catch (error: any) {
    console.error('Orchestrator error:', error);
    
    // Se o erro for de autenticação do Gemini (chave inválida)
    if (error.message?.includes('API key not valid')) {
      return NextResponse.json({ error: 'A sua API Key do Google Gemini é inválida. Verifique as Configurações.' }, { status: 401 });
    }
    
    // Erro genérico
    return NextResponse.json({ error: error.message || 'Erro interno no servidor' }, { status: 500 });
  }
}
