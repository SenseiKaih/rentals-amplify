// src/components/Carousel.tsx
"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
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

    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1))
    }

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
    }

    return (
      <div className={cn("relative p-4 bg-white mt-2", className)} ref={ref} {...props}>
        <div className="flex items-center">
          <button onClick={handlePrev} className="p-2">
            <ChevronLeft className="h-6 w-6 text-gray-900" />
          </button>
          <div className="flex overflow-hidden w-full">
            <div
              className="flex transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {items.map((item, index) => (
                <div key={index} className="min-w-full p-4">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <button onClick={handleNext} className="p-2">
            <ChevronRight className="h-6 w-6 text-gray-900" />
          </button>
        </div>
      </div>
    )
  }
)

Carousel.displayName = "Carousel"

export default Carousel