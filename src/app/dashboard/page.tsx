import * as React from "react"
import { NavBar } from "../components/navBar"

export default function DashboardPage() {
  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
  ]

  return (
    <div className="flex flex-col items-center p-8">
      <NavBar links={links} className="w-full max-w-4xl" />
      {/* Other content for the dashboard page */}
    </div>
  )
}