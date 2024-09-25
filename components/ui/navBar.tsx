"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

export interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
  links: { href: string; label: string }[]
}

const NavBar = React.forwardRef<HTMLDivElement, NavBarProps>(
  ({ className, links, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "flex items-center justify-between p-4 bg-primary text-primary-foreground shadow-md",
          className
        )}
        {...props}
      >
        <div className="flex items-center space-x-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium hover:underline"
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button variant="secondary">Sign In</Button>
      </nav>
    )
  }
)
NavBar.displayName = "NavBar"

export { NavBar }