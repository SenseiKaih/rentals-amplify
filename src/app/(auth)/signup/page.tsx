// src/app/(auth)/signup/page.tsx
import React from 'react'
import SignUpForm from '../../components/SignUpForm'

export default function SignUpPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <SignUpForm />
    </div>
  )
}