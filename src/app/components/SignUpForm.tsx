// src/components/SignUpForm.tsx
'use client'

import React, { useState } from 'react'
import { Button } from './button'
import { Input } from './input'
import Image from 'next/image'
import Link from 'next/link'

export default function SignUpForm() {
  const [useWorkEmail, setUseWorkEmail] = useState(false)

  const handleUseWorkEmail = () => {
    setUseWorkEmail(true)
  }

  const handleBack = () => {
    setUseWorkEmail(false)
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="flex justify-center mb-6">
        <Image src="/farmtex-logo-black.svg" alt="Farmtex Hub" width={50} height={50}  />
        </div>
      <h2 className="text-2xl font-bold mb-6 text-center text-black">Create Account</h2>
      <p className="text-center text-black mb-6">Get started with FarmTex now!</p>
      {!useWorkEmail ? (
        <div className="space-y-4">
          <Button className="w-full border border-red-600 bg-transparent text-black py-2 px-4 rounded-md hover:bg-red-600 hover:text-white mb-2">
            Create Account using Google
          </Button>
          <Button
            className="w-full border border-[#67ef45] bg-transparent text-black py-2 px-4 rounded-md hover:bg-[#67ef45] hover:text-black mb-2"
            onClick={handleUseWorkEmail}
          >
            Create Account using Work Email
          </Button>
        </div>
      ) : (
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="email"
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
              placeholder="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <Link href="http://localhost:3000">
          <Button type="submit" className="w-full bg-[#67ef45] text-black py-2 px-4 rounded-md hover:bg-[#67ef45] hover:opacity-80  mb-4">
            Sign Up
          </Button>
          </Link>
          <Button
            type="button"
            className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700"
            onClick={handleBack}
          >
            Back
          </Button>
        </form>
      )}
    </div>
  )
}