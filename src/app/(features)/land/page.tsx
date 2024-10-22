'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { Label } from "../../components/label"
import { Textarea } from "../../components/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../components/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/tabs"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../../components/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/select"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../../components/sheet"
import { Home, MessageCircle, ShoppingCart, Search, X } from 'lucide-react'

const LandLeasing = () => {
  const [availableLands, setAvailableLands] = useState([
    { id: 1, name: 'Fertile Valley Plot', size: '50 acres', location: 'Green County', price: '$500/acre/year', image: '/placeholder.svg?height=200&width=300' },
    { id: 2, name: 'Riverside Farm', size: '100 acres', location: 'Blue River Valley', price: '$450/acre/year', image: '/placeholder.svg?height=200&width=300' },
    { id: 3, name: 'Hilltop Orchard', size: '25 acres', location: 'Sunny Hills', price: '$600/acre/year', image: '/placeholder.svg?height=200&width=300' },
  ])

  const [newLand, setNewLand] = useState({
    name: '',
    size: '',
    location: '',
    price: '',
    description: '',
    image: '/placeholder.svg?height=200&width=300',
  })

  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    landId: null,
  })

  const [searchTerm, setSearchTerm] = useState('')
  const [filterLocation, setFilterLocation] = useState('')
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartIconRef = useRef(null)
  const cartDrawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseEnter = () => setIsCartOpen(true)
    const handleMouseLeave = (e: { relatedTarget: unknown }) => {
      if (cartDrawerRef.current && !cartDrawerRef.current.contains(e.relatedTarget as Node)) {
        setIsCartOpen(false)
      }
    }

    const cartIcon = cartIconRef.current
    const cartDrawer = cartDrawerRef.current

    cartIcon.addEventListener('mouseenter', handleMouseEnter)
    cartDrawer.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cartIcon.removeEventListener('mouseenter', handleMouseEnter)
      cartDrawer.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const handleNewLandChange = (e) => {
    const { name, value } = e.target
    setNewLand(prev => ({ ...prev, [name]: value }))
  }

  const handleInquiryChange = (e) => {
    const { name, value } = e.target
    setInquiryForm(prev => ({ ...prev, [name]: value }))
  }

  const handleLandSubmit = (e) => {
    e.preventDefault()
    const newId = availableLands.length + 1
    setAvailableLands(prev => [...prev, { id: newId, ...newLand }])
    setNewLand({ name: '', size: '', location: '', price: '', description: '', image: '/placeholder.svg?height=200&width=300' })
  }

  const handleInquirySubmit = (e) => {
    e.preventDefault()
    console.log('Inquiry submitted:', inquiryForm)
    setInquiryForm({ name: '', email: '', phone: '', message: '', landId: null })
  }

  const filteredLands = availableLands.filter(land => 
    land.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterLocation === '' || land.location === filterLocation)
  )

  const uniqueLocations = [...new Set(availableLands.map(land => land.location))]

  return (
    <div className="container mx-auto px-4 py-8 mb-16">
      <h1 className="text-3xl font-bold mb-8">Land Leasing</h1>

      <div className="flex items-center space-x-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search lands..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 w-full"
          />
        </div>
        <Select value={filterLocation} onValueChange={setFilterLocation}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="">All Locations</SelectItem>
            {uniqueLocations.map(location => (
              <SelectItem key={location} value={location}>{location}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <Tabs defaultValue="available" className="mb-8">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="available">Available Land</TabsTrigger>
          <TabsTrigger value="list">List Your Land</TabsTrigger>
        </TabsList>

        <TabsContent value="available">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredLands.map((land) => (
              <Card key={land.id}>
                <CardHeader>
                  <div className="relative w-full h-48 mb-4">
                    <Image
                      src={land.image}
                      alt={land.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-t-lg"
                    />
                  </div>
                  <CardTitle>{land.name}</CardTitle>
                  <CardDescription>{land.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Size: {land.size}</p>
                  <p>Price: {land.price}</p>
                </CardContent>
                <CardFooter>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Inquire</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Inquire about {land.name}</DialogTitle>
                        <DialogDescription>
                          Fill out this form to inquire about leasing this land.
                        </DialogDescription>
                      </DialogHeader>
                      <form onSubmit={handleInquirySubmit}>
                        <div className="grid gap-4 py-4">
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                              Name
                            </Label>
                            <Input
                              id="name"
                              name="name"
                              value={inquiryForm.name}
                              onChange={handleInquiryChange}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="email" className="text-right">
                              Email
                            </Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={inquiryForm.email}
                              onChange={handleInquiryChange}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="phone" className="text-right">
                              Phone
                            </Label>
                            <Input
                              id="phone"
                              name="phone"
                              type="tel"
                              value={inquiryForm.phone}
                              onChange={handleInquiryChange}
                              className="col-span-3"
                            />
                          </div>
                          <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="message" className="text-right">
                              Message
                            </Label>
                            <Textarea
                              id="message"
                              name="message"
                              value={inquiryForm.message}
                              onChange={handleInquiryChange}
                              className="col-span-3"
                            />
                          </div>
                        </div>
                        <DialogFooter>
                          <Button type="submit">Send Inquiry</Button>
                        </DialogFooter>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="list">
          <Card>
            <CardHeader>
              <CardTitle>List Your Land for Lease</CardTitle>
              <CardDescription>Provide details about your land to list it for leasing.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLandSubmit}>
                <div className="grid gap-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Land Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={newLand.name}
                        onChange={handleNewLandChange}
                        placeholder="e.g., Sunny Hill Farm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="size">Size (acres)</Label>
                      <Input
                        id="size"
                        name="size"
                        value={newLand.size}
                        onChange={handleNewLandChange}
                        placeholder="e.g., 50 acres"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="location">Location</Label>
                      <Input
                        id="location"
                        name="location"
                        value={newLand.location}
                        onChange={handleNewLandChange}
                        placeholder="e.g., Green County"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">Price (per acre per year)</Label>
                      <Input
                        id="price"
                        name="price"
                        value={newLand.price}
                        onChange={handleNewLandChange}
                        placeholder="e.g., $500/acre/year"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      name="description"
                      value={newLand.description}
                      onChange={handleNewLandChange}
                      placeholder="Describe your land, its features, and any terms for leasing."
                    />
                  </div>
                </div>
                <Button type="submit" className="mt-4">List Land</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Cart Drawer */}
      <div
        ref={cartDrawerRef}
        className={`fixed right-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isCartOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Your Cart</h2>
            <Button variant="ghost" size="sm" onClick={() => setIsCartOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-4">
            <p>Your cart is empty</p>
            <Button className="w-full">Checkout</Button>
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
        <div className="container mx-auto flex justify-around items-center">
          <Button variant="ghost" className="flex flex-col items-center">
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button variant="ghost" className="flex flex-col items-center">
            <MessageCircle className="h-6 w-6" />
            <span className="text-xs mt-1">Chat</span>
          </Button>
          <div ref={cartIconRef} className="relative">
            <Button variant="ghost" className="flex flex-col items-center">
              <ShoppingCart className="h-6 w-6" />
              <span className="text-xs mt-1">Cart</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandLeasing