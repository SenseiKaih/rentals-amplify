"use client"
import * as React from "react"
import { cn } from "../lib/utils"

const Footer = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "flex items-center justify-between p-4 bg-primary text-primary-foreground shadow-md",
          className
        )}
        {...props}
      >
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Farm Rentals. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="/privacy" className="text-sm hover:underline">
            Privacy Policy
          </a>
          <a href="/terms" className="text-sm hover:underline">
            Terms of Service
          </a>
        </div>
      </footer>
    )
  }
)

Footer.displayName = "Footer"
export { Footer }