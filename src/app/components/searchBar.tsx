"use client"

import * as React from "react"
import { cn } from "../lib/utils"

export interface SearchBarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch: (query: string) => void
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ className, onSearch, ...props }, ref) => {
    const [query, setQuery] = React.useState("")

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuery(event.target.value)
    }

    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        onSearch(query)
      }
    }

    return (
      <div className="relative w-full">
        <input
          type="text"
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          value={query}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          {...props}
        />
        <button
          type="button"
          className="absolute right-0 top-0 h-full px-3 py-1 text-sm font-medium text-primary hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          onClick={() => onSearch(query)}
        >
          Search
        </button>
      </div>
    )
  }
)
SearchBar.displayName = "SearchBar"

export { SearchBar }