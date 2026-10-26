import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, message } = body

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      )
    }

    // Try persisting to Supabase if configured
    try {
      if (supabase) {
        await supabase.from('contacts').insert([
          {
            email: email.trim(),
            message: message ? String(message).trim() : 'Portfolio Inbound Lead',
            created_at: new Date().toISOString(),
          },
        ])
      }
    } catch (dbErr) {
      console.warn('Supabase contact logging skipped/failed:', dbErr)
    }

    console.log(`[INBOUND CONTACT] Email: ${email.trim()} at ${new Date().toISOString()}`)

    return NextResponse.json({
      success: true,
      message: "Thank you for reaching out! Kaustubh has received your message and will respond within 24 hours.",
    })
  } catch (error: any) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your request. Please email directly at kaustubhd0022@gmail.com' },
      { status: 500 }
    )
  }
}
