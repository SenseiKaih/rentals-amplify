"use client"

import * as React from "react"
import { cn } from "../lib/utils"
import { Button } from "./button"
import { Avatar, AvatarImage, AvatarFallback } from "./avatar"

export interface NavBarProps extends React.HTMLAttributes<HTMLDivElement> {
  links: { href: string; label: string }[]
}

const NavBar = React.forwardRef<HTMLDivElement, NavBarProps>(
  ({ className, links, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn(
          "flex items-center justify-between p-4 bg-primary text-primary-foreground shadow-md rounded-lg",
          className
        )}
        {...props}
      >
        <div className="flex items-center space-x-4">
          <span className="text-lg font-bold">Farmtexhub</span>
        </div>
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
        <div className="flex items-center space-x-4">
          <Button variant="secondary">Log In</Button>
          <Avatar>
            <AvatarImage src="/path/to/avatar.jpg" alt="User Avatar" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </nav>
    )
  }
)
NavBar.displayName = "NavBar"

export { NavBar }