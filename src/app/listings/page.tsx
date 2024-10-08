'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Bell, Search, ShoppingCart, Home, MessageCircle, User, Star, ChevronDown, ChevronRight, Filter, X } from 'lucide-react'
import { Button } from "../components/button"
import { Input } from "../components/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/card"
import { Tabs, TabsList, TabsTrigger } from "../components/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/select"
import { Slider } from "../components/slider"
import { Switch } from "../components/switch"
import { Label } from "../components/label"
import Link from "next/link"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../components/sheet";

export default function Component() {
  const [activeTab, setActiveTab] = useState("home")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedSeason, setSelectedSeason] = useState("")
  const [selectedUseCase, setSelectedUseCase] = useState("")
  const [priceRange, setPriceRange] = useState([0, 500000])
  const [availableNow, setAvailableNow] = useState(false)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const cartIconRef = useRef<HTMLDivElement>(null)
  const cartDrawerRef = useRef<HTMLDivElement>(null)

  const equipmentCategories = [
    {
      name: "Machinery",
      subcategories: [
        {
          name: "Automotive machinery",
          items: ["Tractors", "Sprayers"]
        },
        {
          name: "Processing machinery",
          items: ["Grain millers", "Cutters"]
        }
      ]
    },
    {
      name: "Gadgets",
      subcategories: [
        {
          name: "Monitoring",
          items: ["IoT sensors", "GPS trackers"]
        },
        {
          name: "Automation",
          items: ["Drones", "Irrigation controller"]
        }
      ]
    },
    {
      name: "Gear",
      subcategories: [
        {
          name: "Protective gear",
          items: ["Gloves", "Helmets"]
        },
        {
          name: "Harvest gear",
          items: ["Shears", "Sickles"]
        }
      ]
    },
    {
      name: "Instruments",
      subcategories: [
        {
          name: "Soil testing instruments",
          items: ["Soil test kit", "Soil coring"]
        },
        {
          name: "Irrigation instruments",
          items: ["Flow meters", "Pressure gauges"]
        }
      ]
    }
  ]

  const featuredEquipment = [
    { name: "Rent a Tractor this Season", description: "10% Off!", image: "/placeholder.svg?height=160&width=256" },
    { name: "New Harvesters Available", description: "Book Now for Harvest Season", image: "/placeholder.svg?height=160&width=256" },
  ]

  const availableEquipment = [
    { name: "John Deere 5045 Tractor", price: 200000, rating: 4.5, reviews: 20, availability: "Available from Sept 10-20", image: "/placeholder.svg?height=192&width=384", season: "Planting", useCase: "Land Preparation" },
    { name: "Advanced Irrigation System", price: 150000, rating: 4.2, reviews: 15, availability: "Available from Sept 15-30", image: "/placeholder.svg?height=192&width=384", season: "Growing", useCase: "Crop Maintenance" },
    { name: "Combine Harvester", price: 350000, rating: 4.8, reviews: 25, availability: "Available from Oct 1-15", image: "/placeholder.svg?height=192&width=384", season: "Harvest", useCase: "Crop Harvesting" },
    { name: "Precision Planter", price: 180000, rating: 4.3, reviews: 18, availability: "Available Now", image: "/placeholder.svg?height=192&width=384", season: "Planting", useCase: "Seeding" },
  ]

  const seasons = ["Planting", "Growing", "Harvest", "Post-Harvest"]
  const useCases = ["Land Preparation", "Seeding", "Crop Maintenance", "Crop Harvesting", "Post-Harvest Processing"]

  const filteredEquipment = availableEquipment.filter(item => 
    (!selectedSeason || item.season === selectedSeason) &&
    (!selectedUseCase || item.useCase === selectedUseCase) &&
    (item.price >= priceRange[0] && item.price <= priceRange[1]) &&
    (!availableNow || item.availability.toLowerCase().includes("available now"))
  )

  useEffect(() => {
    const handleMouseEnter = () => setIsCartOpen(true)
    const handleMouseLeave = (e: { relatedTarget: EventTarget | null }) => {
      if (cartDrawerRef.current && !cartDrawerRef.current.contains(e.relatedTarget as Node)) {
        setIsCartOpen(false)
      }
    }

    const cartIcon = cartIconRef.current
    const cartDrawer = cartDrawerRef.current

    if (cartIcon) {
      cartIcon.addEventListener('mouseenter', handleMouseEnter)
    }
    if (cartDrawer) {
      cartDrawer.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (cartIcon) {
      if (cartDrawer) {
        cartDrawer.removeEventListener('mouseleave', handleMouseLeave)
      }
      }
    }
  }, [])

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Section */}
      <header className="bg-white p-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-lg">FarmtexHub</span>
          <ChevronDown className="h-4 w-4 text-gray-500" />
        </div>
        <div className="flex items-center space-x-4">
          <Bell className="h-6 w-6 text-gray-600" />
          <div ref={cartIconRef} className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-600" />
          </div>
        </div>
      </header>

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
          {/* Add cart items here */}
          <div className="space-y-4">
            <p>Your cart is empty</p>
            <Link href= "http://localhost:3000/checkout" >
            <Button className="w-full" text-white bg-black>Checkout</Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Search Bar and Filter Button */}
        <div className="p-4 bg-white sticky top-0 z-10 shadow-sm">
          <div className="relative flex items-center">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              className="pl-10 pr-20 py-2 w-full" 
              placeholder="Search for Equipment" 
              type="search"
              value={searchQuery}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button 
                variant="ghost" 
                size="sm" 
                className="absolute right-16 top-1/2 transform -translate-y-1/2"
                onClick={() => setSearchQuery('')}
              >
                Clear
              </Button>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="sm" className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <Filter className="h-4 w-4 mr-2" />
                  Filter
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Advanced Filters</SheetTitle>
                  <SheetDescription>
                    Customize your search for farm equipment
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="space-y-2">
                    <Label htmlFor="season">Season</Label>
                    <Select value={selectedSeason} onValueChange={setSelectedSeason}>
                      <SelectTrigger id="season">
                        <SelectValue placeholder="Select season" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Seasons</SelectItem>
                        {seasons.map((season) => (
                          <SelectItem key={season} value={season}>{season}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="useCase">Use Case</Label>
                    <Select value={selectedUseCase} onValueChange={setSelectedUseCase}>
                      <SelectTrigger id="useCase">
                        <SelectValue placeholder="Select use case" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All Use Cases</SelectItem>
                        {useCases.map((useCase) => (
                          <SelectItem key={useCase} value={useCase}>{useCase}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="priceRange">Price Range (UGX)</Label>
                    <Slider
                      id="priceRange"
                      min={0}
                      max={500000}
                      step={10000}
                      value={priceRange}
                      onValueChange={setPriceRange}
                    />
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>{priceRange[0].toLocaleString()}</span>
                      <span>{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="availableNow"
                      checked={availableNow}
                      onCheckedChange={setAvailableNow}
                    />
                    <Label htmlFor="availableNow">Available Now</Label>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Equipment Categories */}
        <div className="p-4 bg-white">
          <h2 className="text-lg font-semibold mb-3">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {equipmentCategories.map((category, index) => (
              <div key={index} className="relative group">
                <Button className="w-full justify-start" variant="outline">
                  {category.name}
                  <ChevronDown className="ml-auto h-4 w-4" />
                </Button>
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out z-10">
                  <Card>
                    <CardContent className="p-2">
                      {category.subcategories.map((subcategory, subIndex) => (
                        <div key={subIndex} className="relative group/sub">
                          <Button className="w-full justify-start mb-1" variant="ghost">
                            {subcategory.name}
                            <ChevronRight className="ml-auto h-4 w-4" />
                          </Button>
                          <div className="absolute left-full top-0 ml-2 w-48 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-300 ease-in-out">
                            <Card>
                              <CardContent className="p-2">
                                {subcategory.items.map((item, itemIndex) => (
                                  <Button key={itemIndex} className="w-full justify-start mb-1" variant="ghost">
                                    {item}
                                  </Button>
                                ))}
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Equipment */}
        <div className="p-4 bg-white mt-2">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Featured Equipment</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {featuredEquipment.map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              
              <Card key={index} className="overflow-hidden">
                <CardHeader className="p-0">
                  <img
                    alt={item.name}
                    className="w-full h-40 object-cover"
                    src={item.image}
                  />
                </CardHeader>
                <CardContent className="p-4">
                <Link href="http://localhost:3000/listings/listings-detail">
                  <CardTitle className="text-base">{item.name}</CardTitle>
                  </Link>
                  <CardDescription className="text-sm">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Available Equipment */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-semibold">Available Equipment</h2>
            <Button variant="ghost" size="sm" className="text-primary">
              View All <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {filteredEquipment.map((item, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="md:flex">
                  <CardHeader className="p-0 md:w-1/3">
                    <img
                      alt={item.name}
                      className="w-full h-48 object-cover"
                      src={item.image}
                    />
                  </CardHeader>
                  <div className="md:w-2/3">
                    <CardContent className="p-4">
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                      <CardDescription className="text-primary font-semibold">UGX {item.price.toLocaleString()}/day</CardDescription>
                      <div className="flex items-center mt-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm">{item.rating} ({item.reviews} reviews)</span>
                      </div>
                      <div className="mt-2 text-sm text-gray-600">
                        <p>Season: {item.season}</p>
                        <p>Use Case: {item.useCase}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <p className="text-sm text-gray-500">{item.availability}</p>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <Tabs value={activeTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="home" onClick={() => setActiveTab("home")} className="flex flex-col items-center py-2">
           <Link href="http://localhost:3000"> <Home className="h-5 w-5" /></Link>
            <span className="text-xs mt-1">Home</span>
          </TabsTrigger>
          <TabsTrigger value="rentals" onClick={() => setActiveTab("rentals")} className="flex flex-col items-center py-2">
           <Link href="http://localhost:3000/checkout"><ShoppingCart className="h-5 w-5" /></Link> 
            <span className="text-xs mt-1">Rentals</span>
          </TabsTrigger>
          <TabsTrigger value="messages" onClick={() => setActiveTab("messages")} className="flex flex-col items-center py-2">
            <MessageCircle className="h-5 w-5" />
            <span className="text-xs mt-1">Messages</span>
          </TabsTrigger>
          <TabsTrigger value="account" onClick={() => setActiveTab("account")} className="flex flex-col items-center py-2">
           <Link href="http://localhost:3000/account"> <User className="h-5 w-5" /></Link>
            <span className="text-xs mt-1">Account</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  )
}