"use client"

import * as React from "react"
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu"
import { cn } from "@/lib/utils"

export interface DropdownProps {
  trigger: React.ReactNode
  items: { label: string; onClick: () => void }[]
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ trigger, items, ...props }, ref) => {
    return (
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.Trigger asChild>
          {trigger}
        </DropdownMenuPrimitive.Trigger>
        <DropdownMenuPrimitive.Content
          ref={ref}
          className={cn(
            "min-w-[8rem] rounded-md bg-white p-1 shadow-md",
            props.className
          )}
          {...props}
        >
          {items.map((item, index) => (
            <DropdownMenuPrimitive.Item
              key={index}
              onSelect={item.onClick}
              className="cursor-pointer rounded-md px-2 py-1 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.label}
            </DropdownMenuPrimitive.Item>
          ))}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Root>
    )
  }
)
Dropdown.displayName = "Dropdown"

export { Dropdown }