import { NextResponse } from 'next/server'
import Groq from 'groq-sdk'
import { portfolioContext } from '@/data/portfolioContext'

// Exported runtime removed to default to Node.js

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
})

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { prompt, context } = body

    const completion = await groq.chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: [
        {
          role: 'system',
          content: `You are Kaustubh's Senior Product Manager AI Assistant. 
Your goal is to provide deep, actionable product insights or improvements for the given case study or idea.
Focus on metrics, user psychology, and technical feasibility. 
Context about Kaustubh: ${portfolioContext}
Keep your response professional, insightful, and under 150 words.`,
        },
        {
          role: 'user',
          content: `Context of the specific project/card: ${context}\n\nTask/Question: ${prompt}`,
        },
      ],
      temperature: 0.7,
    })

    const insight = completion.choices[0]?.message?.content || "No insight could be generated at this time."

    return NextResponse.json({ insight })
  } catch (error: any) {
    console.error('Groq AI Error:', error)
    return NextResponse.json(
      { error: error.message || 'Something went wrong connecting to Groq AI' },
      { status: 500 }
    )
  }
}
