
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from "../components/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/card"
import { MapPin, Tractor } from 'lucide-react'

export default function CreateListing() {
  const router = useRouter()

  const handleCreateLand = () => {
    router.push('/create-land-listing')
  }

  const handleCreateEquipment = () => {
    router.push('/create-equipment-listing')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Create a New Listing</h1>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Land Listing</CardTitle>
            <CardDescription>List your land for lease or sale</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Land illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <p className="text-muted-foreground">
              Perfect for farmland, orchards, pastures, or any agricultural property you want to lease or sell.
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={handleCreateLand} className="w-full">
              <MapPin className="mr-2 h-4 w-4" /> Create Land Listing
            </Button>
          </CardFooter>
        </Card>

        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl">Equipment Listing</CardTitle>
            <CardDescription>List your farm equipment for rent or sale</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-48 mb-4">
              <Image
                src="/placeholder.svg?height=200&width=300"
                alt="Equipment illustration"
                layout="fill"
                objectFit="cover"
                className="rounded-md"
              />
            </div>
            <p className="text-muted-foreground">
              Ideal for tractors, harvesters, plows, or any other agricultural machinery you want to rent out or sell.
            </p>
          </CardContent>
          <CardFooter>
            <Button onClick={handleCreateEquipment} className="w-full">
              <Tractor className="mr-2 h-4 w-4" /> Create Equipment Listing
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}