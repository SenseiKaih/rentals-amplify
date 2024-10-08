'use client'

import { useState } from "react"
import { Button } from "./components/button"
import { Input } from "./components/input"
import { Tractor, Sprout, Users, Leaf, Menu, X } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link className="flex items-center justify-center" href="#">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">AgriRent</span>
        </Link>
        <nav className="ml-auto hidden md:flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
        <Button className="ml-4 hidden md:flex">Sign Up</Button>
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </header>
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b">
          <nav className="flex flex-col p-4">
            <Link className="text-sm font-medium py-2 hover:underline underline-offset-4" href="#">
              Features
            </Link>
            <Link className="text-sm font-medium py-2 hover:underline underline-offset-4" href="#">
              Pricing
            </Link>
            <Link className="text-sm font-medium py-2 hover:underline underline-offset-4" href="#">
              About
            </Link>
            <Link className="text-sm font-medium py-2 hover:underline underline-offset-4" href="#">
              Contact
            </Link>
            <Button className="mt-4">Sign Up</Button>
          </nav>
        </div>
      )}
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Rent Agricultural Ecosystems
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Access sustainable farming solutions. Rent equipment, land, and resources to grow your agricultural business.
                </p>
              </div>
              <div className="space-x-4">
                <Link href= "http://localhost:3000/listings">
                <Button>Get Started</Button>
                </Link>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Tractor className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Equipment Rental</h3>
                <p className="text-gray-600">Access modern farming equipment without the high upfront costs.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Sprout className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Land Leasing</h3>
                <p className="text-gray-600">Find and lease fertile land for your agricultural projects.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Community Support</h3>
                <p className="text-gray-600">Connect with other farmers and share knowledge and resources.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Agricultural Community
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Sign up for updates and be the first to know about new rental opportunities and farming resources.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="max-w-lg flex-1"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2024 AgriRent. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}