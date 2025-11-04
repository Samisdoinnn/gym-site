import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const text = await request.text()
  // In production, verify signature and parse JSON
  try {
    // const event = JSON.parse(text)
    console.log('Received webhook:', text)
    return NextResponse.json({ received: true })
  } catch (err) {
    return NextResponse.json({ ok: false, error: 'invalid payload' }, { status: 400 })
  }
}
