import { NextResponse } from 'next/server'

export async function GET() {
  const classes = [
    { id: 'c1', title: 'HIIT Burn', description: '45-minute high intensity interval training', price: '$12' },
    { id: 'c2', title: 'Strength + Mobility', description: 'Build strength and flexibility', price: '$15' },
    { id: 'c3', title: 'Yoga Flow', description: 'Vinyasa flow for all levels', price: '$10' },
  ]
  return NextResponse.json({ classes })
}
