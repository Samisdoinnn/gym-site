"use client"
import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'
import { initFirebase } from '../services/firebase'

initFirebase()

type AuthContextType = { user: User | null }
const AuthContext = createContext<AuthContextType>({ user: null })

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => {
    const auth = getAuth()
    return onAuthStateChanged(auth, (u) => setUser(u))
  }, [])

  return <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  return useContext(AuthContext)
}
