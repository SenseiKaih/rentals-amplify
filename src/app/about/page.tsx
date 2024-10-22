import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Card, CardContent } from "../components/card"
import FlyInText from "../components/FlyInText"
import Link from "next/link"
import { Button } from '../components/button'


const MobileMenu = dynamic(() => import('../components/mobileMenu'), {ssr:false})

export default function AboutPage() {
  return (
    <div className="relative min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/farmtex-logo-white.svg" alt="Farmtex Hub Logo" width={32} height={32} />
            <span className="font-bold">Farmtex Hub</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link className="text-sm font-medium  hover:underline underline-offset-4" href="/">
              Home
            </Link>
            <Link className="text-sm font-medium underline hover:underline underline-offset-4" href="/about">
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
      <div className="absolute inset-0 z-0">
        <Image
          src="/farmtex_man.jpeg"
          alt="Farmer using technology in a field"
          layout="fill"
          objectFit="cover"
          className="opacity-50"
        />
      </div>
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <FlyInText><h1 className="text-3xl font-bold mb-6 md:mb-0 md:w-1/4">About Us</h1></FlyInText>
          <Card className="md:w-3/4 bg-white bg-opacity-65">
            <CardContent className="pt-6">
              <p className="mb-4 text-black">
                At farmtexHub-Agrirentals, we strive to improve the agricultural sector by offering a decentralised platform for exchanging agricultural assets such as land and farming equipment. Our technology creates a safe network in which agricultural practitioners can engage in real time without obstacles. We serve moderate and low-income farmers by linking them to resources and services provided by our partners and other members of the community. As an agritech company, we enable land and equipment owners to rent out their assets at mutually agreed-upon rates, fostering successful collaborations. In addition, we help subsistence farmers and hobbyists locate the tools they need to expand and improve their agricultural operations.
              </p>
              <hr className="my-6 border-t border-gray-200" />
              <p className="mb-4 text-black">
                Based in Africa, our objective is to spread decentralised agritech solutions across the continent and beyond. We believe in making smart farming technologies accessible to all. By developing a community-driven platform, we enable agricultural practitioners to alter and improve their operations, so contributing to the agricultural sectors growth and sustainability. Our objective is to ensuring that every farmer, regardless of income level, has access to the tools and resources necessary to prosper.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}