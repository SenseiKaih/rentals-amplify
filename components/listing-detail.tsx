'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Calendar, DollarSign, Clock, Truck, Phone } from 'lucide-react'

export function ListingDetailComponent() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="overflow-hidden">
        <div className="relative h-64 w-full">
          <Image
            src="/placeholder.svg?height=256&width=1024"
            alt="Map showing location of the listing"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm p-2 rounded-md">
            <MapPin className="h-5 w-5 inline-block mr-2" />
            <span className="text-sm font-medium">Farmville, CA 12345</span>
          </div>
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
            <div className="space-y-4 flex-1">
              <h1 className="text-3xl font-bold">John Deere 5075E Utility Tractor</h1>
              <p className="text-muted-foreground">
                Powerful and versatile utility tractor perfect for small to medium-sized farms. 
                Well-maintained and ready for various agricultural tasks.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>Machinery</Badge>
                <Badge variant="outline">75 HP</Badge>
                <Badge variant="outline">4WD</Badge>
              </div>
            </div>
            <div className="shrink-0 space-y-4 text-right">
              <div className="text-3xl font-bold">$75/day</div>
              <Button className="w-full md:w-auto">Contact Owner</Button>
            </div>
          </div>
          
          <hr className="my-6" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Rental Details</h2>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Available: May 1, 2024 - Sep 30, 2024</span>
                </li>
                <li className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>Minimum rental: 1 day</span>
                </li>
                <li className="flex items-center">
                  <DollarSign className="h-5 w-5 mr-2" />
                  <span>Weekly discount: 10% off</span>
                </li>
                <li className="flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  <span>Delivery available within 50 miles (extra fee)</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Owner Information</h2>
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src="/placeholder.svg?height=48&width=48" alt="J" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">John Doe</p>
                  <p className="text-sm text-muted-foreground">Member since 2022</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>(123) 456-7890</span>
              </div>
            </div>
          </div>
          
          <hr className="my-6" />
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Additional Information</h2>
            <p>
              This John Deere 5075E Utility Tractor is in excellent condition and perfect for a variety of farm tasks. 
              It features a powerful 75 HP engine, 4-wheel drive for excellent traction, and a comfortable operator station. 
              The tractor comes with a loader attachment, making it ideal for material handling tasks.
            </p>
            <p>
              Regular maintenance has been performed, and all systems are in good working order. 
              This tractor is fuel-efficient and easy to operate, suitable for both experienced farmers and those new to tractor operation.
            </p>
            <p>
              Rental includes a full tank of fuel and basic operator training if needed. 
              Please contact for availability and to discuss any specific requirements you may have.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}