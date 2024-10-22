//Sign in page for the app
// src/app/(auth)/login/page.tsx
// src/app/(auth)/login/page.tsx

import React from 'react'
import Link from 'next/link'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import LoginLayout from './layout'


export default function LoginPage() {
  return (
    <div>
    <LoginLayout>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Sign In</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <Input
              type="password"
              id="password"
              name="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <Link href="http://localhost:3000">
          <Button type="submit" className="w-full bg-[#67ef45] text-black py-2 px-4 rounded-md hover:bg-[#67ef45] opacity-80">
            Sign In
          </Button>
          </Link>
        </form>
        <div className="mt-6">
          <Button className="w-full border border-red-600 bg-transparent text-black py-2 px-4 rounded-md hover:bg-red-700 hover:text-white  mb-2">
             Google
          </Button>
          <Button className="w-full border border-blue-800 bg-transparent text-black py-2 px-4 rounded-md hover:bg-blue-900 hover:text-white mb-2">
             Facebook
          </Button>
          <Button className="w-full border border-gray-600 bg-transparent text-black py-2 px-4 rounded-md hover:bg-gray-700 hover:text-white">
             SSO
          </Button>
        </div>
        <div className="mt-6 text-center">
          <Link href="/reset-password" className="text-sm text-blue-600 hover:underline">
            Forgot your password?
          </Link>
        </div>
      </div>
    </div>
    </LoginLayout>
    </div>
  )
}