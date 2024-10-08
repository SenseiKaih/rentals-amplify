"use client"

import * as React from "react"
import { cn } from "../lib/utils"

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({ className, totalPages, currentPage, onPageChange, ...props }, ref) => {
    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page)
      }
    }

    return (
      <div
        ref={ref}
        className={cn("flex items-center space-x-2", className)}
        {...props}
      >
        <button
          className="px-3 py-1 rounded-md bg-primary text-primary-foreground disabled:opacity-50"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={cn(
              "px-3 py-1 rounded-md",
              currentPage === index + 1
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            )}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="px-3 py-1 rounded-md bg-primary text-primary-foreground disabled:opacity-50"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    )
  }
)
Pagination.displayName = "Pagination"

export { Pagination }