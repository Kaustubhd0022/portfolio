import { NextResponse } from 'next/server'
import { getOpenAIClient } from '@/lib/openai'

export async function POST(req: Request) {
  try {
    const { prompt, context } = await req.json()
    const openai = getOpenAIClient()

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'system',
          content: 'You are a Senior Product Manager AI Assistant. Your goal is to provide deep, actionable product insights or improvements for the given case study or idea. Focus on metrics, user psychology, and technical feasibility.',
        },
        {
          role: 'user',
          content: `Context: ${context}\n\nTask: ${prompt}`,
        },
      ],
      temperature: 0.7,
    })

    const insight = response.choices[0].message.content

    return NextResponse.json({ insight })
  } catch (error: any) {
    console.error('AI API Error:', error)
    return NextResponse.json(
      { error: error.message || 'Something went wrong' },
      { status: 500 }
    )
  }
}
