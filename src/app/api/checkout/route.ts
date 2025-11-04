import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { priceId } = body

    const key = process.env.DODO_PAYMENTS_API_KEY
    if (!key) {
      return NextResponse.json({ ok: false, error: 'DODO_PAYMENTS_API_KEY not configured' }, { status: 500 })
    }

    // Pseudo-call to DodoPayments. Replace URL and payload with actual Dodo API.
    const resp = await fetch('https://api.dodopayments.example/v1/checkout_sessions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${key}`,
      },
      body: JSON.stringify({ price: priceId }),
    })

    if (!resp.ok) {
      const text = await resp.text()
      return NextResponse.json({ ok: false, error: text }, { status: resp.status })
    }

    const data = await resp.json()
    return NextResponse.json({ ok: true, session: data })
  } catch (err) {
    return NextResponse.json({ ok: false, error: (err as Error).message }, { status: 500 })
  }
}
