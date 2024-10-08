import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Farm Equipment Rental',
  description: 'Rent farm equipment for your agricultural needs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins bg-background text-foreground min-h-screen flex flex-col">
        <header className="bg-primary text-primary-foreground py-4">
          <div className="container mx-auto px-4">
            <h1 className="text-2xl font-bold">Farm Equipment Rental</h1>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        <footer className="bg-muted py-4 mt-auto">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Farm Equipment Rental. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  )
}