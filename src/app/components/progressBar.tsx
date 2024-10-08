"use client"

import * as React from "react"
import { cn } from "../lib/utils"

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number
  max: number
}

const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, value, max, ...props }, ref) => {
    const percentage = Math.min((value / max) * 100, 100)

    return (
      <div
        ref={ref}
        className={cn("relative w-full h-4 bg-gray-200 rounded-full", className)}
        {...props}
      >
        <div
          className="absolute top-0 left-0 h-full bg-primary rounded-full"
          style={{ width: `${percentage}%` }}
        />
      </div>
    )
  }
)
ProgressBar.displayName = "ProgressBar"

export { ProgressBar }