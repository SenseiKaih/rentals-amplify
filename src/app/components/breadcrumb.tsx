"use client"

import * as React from "react"
import { cn } from "../lib/utils"

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  items: { href: string; label: string }[]
}

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ className, items, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        className={cn("flex items-center space-x-2 text-sm", className)}
        {...props}
      >
        {items.map((item, index) => (
          <React.Fragment key={index}>
            <a
              href={item.href}
              className="text-primary hover:underline"
            >
              {item.label}
            </a>
            {index < items.length - 1 && (
              <span className="text-muted-foreground">/</span>
            )}
          </React.Fragment>
        ))}
      </nav>
    )
  }
)
Breadcrumb.displayName = "Breadcrumb"

export { Breadcrumb }