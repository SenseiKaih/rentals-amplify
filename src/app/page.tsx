import React, { Suspense } from 'react'
import { Button } from "./components/button"
import { Input } from "./components/input"
import FlyInText from "./components/FlyInText"
import { Tractor, Sprout, Users, Leaf } from "lucide-react"
import Link from "next/link"
import dynamic from "next/dynamic"
import Loading from "./loading"
import Image from 'next/image'

const MobileMenu = dynamic(() => import('./components/mobileMenu'), {ssr:false})

export default function LandingPage() {
  

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/farmtex-logo-white.svg" alt="Farmtex Hub Logo" width={32} height={32} />
            <span className="font-bold">Farmtex Hub</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium underline hover:underline underline-offset-4" href="/">
              Home
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
              About Us
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/services">
              Services
            </Link>
            <Link className="text-sm font-medium underline-offset-4" href="/farmers">
              For Farmers
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/partners">
              Partners
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/resources">
              Resources
            </Link>
            <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
              Contact Us
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Login
            </Button>
            <Button size="sm" className="bg-white text-black hover:bg-black hover:text-white transition-colors duration-300" variant="outline">Sign Up</Button>
          </div>
          <MobileMenu />
        </div>
      </header>
      <main className="flex-1">
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-green-450">
        <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: "url('/farmtexhub.jpeg')" }}></div>
          <div className="relative container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Rent Agricultural Ecosystems
                </h1>
                <Suspense fallback={<Loading/>}>
                <FlyInText>
                <p className="mx-auto max-w-[700px] text-white md:text-xl">
                  Access sustainable farming solutions. Rent equipment, land, and resources to grow your agricultural business.
                </p>
                </FlyInText>
                </Suspense>

              </div>
              <div className="space-x-4">
                <Link href= "http://localhost:3000/equipment">
                <Button className="px-6 py-2 border border-black text-white bg-transparent hover:bg-black hover:text-white transition-colors duration-300" variant="outline">Get Started</Button>
                </Link>
                <Button className="bg-[#67ef45] text-gray-600" variant="secondary">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-black mb-8">Our Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Tractor className="h-12 w-12 text-[#67ef45] mb-4" />
                <h3 className="text-xl text-gray-800 font-bold mb-2">Equipment Rental</h3>
                <FlyInText><p className="text-gray-600">Access modern farming equipment without the high upfront costs.</p></FlyInText>
              </div>
              <div className="flex flex-col items-center text-center">
                <Sprout className="h-12 w-12 text-[#67ef45] mb-4" />
                <h3 className="text-xl text-gray-800 font-bold mb-2">Land Leasing</h3>
                <Suspense fallback={<Loading />}>
                <FlyInText><p className="text-gray-600">Find and lease fertile land for your agricultural projects.</p></FlyInText>
                </Suspense>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-[#67ef45] mb-4" />
                <h3 className="text-xl text-gray-800 font-bold mb-2">Community Support</h3>
               <FlyInText><p className="text-gray-600">Connect with other farmers and share knowledge and resources.</p></FlyInText> 
              </div>
            </div>
          </div>
        </section>

        {/*Section for pricing */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 opacity-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-white mb-8">Our Pricing</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl text-gray-800 font-bold mb-2">Basic</h3>
                <p className="text-3xl font-bold text-[#67ef45] mb-4">Free</p>
                <p className="text-gray-600">Access to basic farming resources.</p>
                <Button className="mt-4 bg-[#67ef45] text-white">Get Started</Button>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl text-gray-800 font-bold mb-2">Pro</h3>
                <p className="text-3xl font-bold text-[#67ef45] mb-4">$20</p>
                <p className="text-gray-600">Access to advanced farming resources.</p>
                <Button className="mt-4 bg-[#67ef45] text-white">Get Started</Button>
              </div>
              <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl text-gray-800 font-bold mb-2">Enterprise</h3>
                <p className="text-3xl font-bold text-[#67ef45] mb-4">$30</p>
                <p className="text-gray-600">Access to all farming resources.</p>
                <Button className="mt-4 bg-[#67ef45] text-white">Get Started</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-[#67ef45] opacity-80
        ">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Join Our Agricultural Community
                </h2>
                <FlyInText>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Sign up for updates and be the first to know about new rental opportunities and farming resources.
                </p>
                </FlyInText>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <Input
                    className="max-w-lg flex-1 bg-green-100 text-black"
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Button className="bg-black" type="submit">Subscribe</Button>
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