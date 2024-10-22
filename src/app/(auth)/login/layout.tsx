// src/app/(auth)/login/loginLayout.tsx
import React from 'react'
import Image from 'next/image'

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white min-h-screen flex flex-col items-center justify-center">
        <header className="mb-8">
          <Image src="/farmtex-logo-black.svg" alt="Farmtex Hub" width={50} height={50} />
        </header>
        <main className="flex-grow container mx-auto px-4">
          {children}
        </main>
      </body>
    </html>
  )
}