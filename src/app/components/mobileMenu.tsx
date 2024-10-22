'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Button } from './button';

const MobileMenu = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <>
      <button className="ml-auto md:hidden fixed top-0 left-0 right-0 z-50 p-4 bg-black shadow-md" onClick={toggleMobileMenu}>
        {mobileMenuOpen ? <X className="h-6 w-6 text-gray-100" /> : <Menu className="h-6 w-6 text-gray-100" />}
      </button>
      {mobileMenuOpen && (
        <nav className="flex flex-col gap-4 p-4 fixed top-16 left-0 right-0 bg-black shadow-md z-40">
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
          <Button className="mt-4">Sign Up</Button>
        </nav>
      )}
    </>
  )
}

export default MobileMenu