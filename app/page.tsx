

import { useState } from 'react'
import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react'
import { Amplify } from 'aws-amplify'
import awsExports from '@/aws-exports'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(awsExports)

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  
  const { toSignIn, signUp } = useAuthenticator()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    try {
      await signUp({ username: email, password, attributes: { email } })
      // If sign up is successful, redirect to sign in
      toSignIn()
    } catch (error) {
      setError(error.message || 'An error occurred during sign up')
    }
  }

  return (
    <View as="form" onSubmit={handleSubmit} className="space-y-6">
      <View>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </View>

      <View>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </View>

      <View>
        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <input
          id="confirm-password"
          name="confirm-password"
          type="password"
          autoComplete="new-password"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </View>

      {error && (
        <View className="text-red-600 text-sm">{error}</View>
      )}

      <View>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign up
        </button>
      </View>

      <View className="text-sm">
        Already have an account?{' '}
        <button type="button" onClick={() => toSignIn()} className="font-medium text-indigo-600 hover:text-indigo-500">
          Sign in
        </button>
      </View>
    </View>
  )
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
        </div>
        <Authenticator
          components={{
            SignUp: {
              FormFields() {
                return <LoginForm />
              },
            },
          }}
        >
          {({ signOut, user }) => (
            <div>
              <h1>Welcome {user?.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </div>
          )}
        </Authenticator>
      </div>
    </div>
  )
}