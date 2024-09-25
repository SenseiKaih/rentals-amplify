"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SideBarProps extends React.HTMLAttributes<HTMLDivElement> {
  links: { href: string; label: string }[]
}

const SideBar = React.forwardRef<HTMLDivElement, SideBarProps>(
  ({ className, links, ...props }, ref) => {
    return (
      <aside
        ref={ref}
        className={cn(
          "w-64 h-full bg-primary text-primary-foreground shadow-md p-4",
          className
        )}
        {...props}
      >
        <nav className="flex flex-col space-y-2">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </aside>
    )
  }
)
SideBar.displayName = "SideBar"

export { SideBar }