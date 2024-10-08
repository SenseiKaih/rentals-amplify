"use client"

import * as React from "react"
import { cn } from "../lib/utils"

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items: React.ReactNode[]
  interval?: number
}

const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ className, items, interval = 3000, ...props }, ref) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)

    React.useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
      }, interval)
      return () => clearInterval(timer)
    }, [items.length, interval])

    return (
      <div
        ref={ref}
        className={cn("relative w-full overflow-hidden", className)}
        {...props}
      >
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {item}
            </div>
          ))}
        </div>
        <div className="absolute bottom-0 left-0 right-0 flex justify-center p-2">
          {items.map((_, index) => (
            <button
              key={index}
              className={cn(
                "h-2 w-2 rounded-full mx-1",
                currentIndex === index ? "bg-primary" : "bg-gray-300"
              )}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    )
  }
)
Carousel.displayName = "Carousel"

export { Carousel }