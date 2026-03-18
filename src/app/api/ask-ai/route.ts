import Groq from "groq-sdk";
import { portfolioContext } from "@/data/portfolioContext";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile", // We can use llama3-8b-8192 or llama-3.3-70b-versatile
      messages: [
        {
          role: "system",
          content: `You are an AI assistant for a product manager portfolio (Kaustubh Deshmukh). Answer ONLY based on the provided context. Be concise, confident, and insightful. Keep responses under 150 words.

Context:
${portfolioContext}`,
        },
        {
          role: "user",
          content: query,
        },
      ],
    });

    return Response.json({
      answer: completion.choices[0]?.message?.content || "No response generated.",
    });
  } catch (error: any) {
    console.error("Groq API error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
