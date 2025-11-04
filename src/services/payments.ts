// DodoPayments client helper (placeholder)
export async function createCheckoutSession(priceId: string) {
  // POST to server API route to create session
  const res = await fetch('/api/checkout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ priceId }),
  })
  return res.json()
}
