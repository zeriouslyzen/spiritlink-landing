"use client";

import { useEffect } from 'react'
import { signIn, getProviders } from 'next-auth/react'
import { useRouter } from 'next/navigation'

export default function SignIn() {
  const router = useRouter()

  useEffect(() => {
    const setupProviders = async () => {
      const providers = await getProviders()
      if (!providers) return
      
      // Auto-trigger Google sign in
      signIn('google', { callbackUrl: '/admin' })
    }
    
    setupProviders()
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to Admin Dashboard
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Redirecting to Google Sign In...
          </p>
        </div>
      </div>
    </div>
  )
} 