"use client"
import { useState } from 'react'
import { initFirebase, getFirebaseAuth } from '../../services/firebase'
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

initFirebase()

export default function AuthPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)

  const auth = getFirebaseAuth()

  async function handleEmailSignIn(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      // In a real app, redirect to /dashboard
    } catch (err: any) {
      setError(err.message || 'Failed to sign in')
    }
  }

  async function handleGoogleSignIn() {
    setError(null)
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } catch (err: any) {
      setError(err.message || 'Google sign-in failed')
    }
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded-md shadow">
      <h1 className="text-2xl font-semibold mb-4">Sign in</h1>
      <form onSubmit={handleEmailSignIn} className="space-y-4">
        <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="w-full border px-3 py-2 rounded" />
        <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" type="password" className="w-full border px-3 py-2 rounded" />
        {error && <p className="text-red-600">{error}</p>}
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded">Sign in</button>
          <button type="button" onClick={handleGoogleSignIn} className="px-4 py-2 border rounded">Sign in with Google</button>
        </div>
      </form>
    </div>
  )
}
