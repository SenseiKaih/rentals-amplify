// src/app/(auth)/forgot-password/page.tsx
import React from 'react'
import { Button } from '../../components/button'
import { Input } from '../../components/input'
import Image from 'next/image'

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <div className="flex justify-center mb-6">
        <Image src="/farmtex-logo-black.svg" alt="Farmtex Hub" width={50} height={50}  />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center text-black">Forgot Password</h2>
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
          <Button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Send Recovery
          </Button>
        </form>
      </div>
    </div>
  )
}