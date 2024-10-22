'use client'

import React, { useState, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { Label } from "../../components/label"
//import { RadioGroup, RadioGroupItem } from "../../components/radio-group"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../../components/dialog"
import { Loader2, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  { name: 'Tractors', icon: '🚜' },
  { name: 'Harvesters', icon: '🌾' },
  { name: 'Plows', icon: '🔨' },
  { name: 'Seeders', icon: '🌱' },
  { name: 'Sprayers', icon: '💦' },
  { name: 'Balers', icon: '🧺' },
  { name: 'Irrigation Systems', icon: '💧' },
  { name: 'Drones', icon: '🚁' },
]

const steps = ['Name', 'Photo', 'Verification', 'Price', 'Availability', 'Location']

export default function RentYourEquipment() {
  const router = useRouter()
  const [selectedCategory, setSelectedCategory] = useState('')
  const [currentStep, setCurrentStep] = useState(0)
  const [isVerifying, setIsVerifying] = useState(false)
  const [equipmentDetails, setEquipmentDetails] = useState<{
    name: string;
    photo: File | null;
    condition: string;
    price: string;
    availabilityDays: string;
    location: string;
  }>({
    name: '',
    photo: null,
    condition: '',
    price: '',
    availabilityDays: '',
    location: '',
  })
  const [isFormOpen, setIsFormOpen] = useState(false)
  interface Listing {
    category: string;
    name: string;
    photo: File | null;
    condition: string;
    price: string;
    availabilityDays: string;
    location: string;
  }

  const [listings, setListings] = useState<Listing[]>([])

  const handleCategorySelect = useCallback((category: React.SetStateAction<string>) => {
    setSelectedCategory(category)
    setIsFormOpen(true)
    setCurrentStep(0)
  }, [])

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setEquipmentDetails((prev) => ({ ...prev, [name]: name === 'price' || name === 'availabilityDays' ? Number(value) : value }))
  }, [])

  const handlePhotoUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setEquipmentDetails((prev) => ({ ...prev, photo: file }))
  }, [])

  const handleVerification = useCallback(() => {
    setIsVerifying(true)
    // Simulating verification process
    setTimeout(() => {
      setIsVerifying(false)
      setCurrentStep((prev) => prev + 1)
    }, 2000)
  }, [])

  const handleNextStep = useCallback(() => {
    if (currentStep === 2) {
      handleVerification()
    } else {
      setCurrentStep((prev) => prev + 1)
    }
  }, [currentStep, handleVerification])

  const handlePrevStep = useCallback(() => {
    setCurrentStep((prev) => prev - 1)
  }, [])

  const handleFinish = useCallback(() => {
    setListings((prev) => [...prev, { ...equipmentDetails, category: selectedCategory }])
    setIsFormOpen(false)
    setEquipmentDetails({
      name: '',
      photo: null,
      condition: '',
      price: '',
      availabilityDays: '',
      location: '',
    })
  }, [equipmentDetails, selectedCategory])

  const handleSubmitListings = useCallback(() => {
    // Here you would typically send the listings to your backend
    console.log('Submitting listings:', listings)
    router.push('/listing-confirmation')
  }, [listings, router])

  const renderStepContent = useCallback(() => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <Label htmlFor="name">Equipment Name</Label>
            <Input
              id="name"
              name="name"
              value={equipmentDetails.name}
              onChange={handleInputChange}
            />
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <Label htmlFor="photo">Upload Photo</Label>
            <Input
              id="photo"
              name="photo"
              type="file"
              onChange={handlePhotoUpload}
              accept="image/*"
            />
            {equipmentDetails.photo && (
              <div className="mt-4">
                <Image
                  src={URL.createObjectURL(equipmentDetails.photo)}
                  alt="Equipment preview"
                  width={200}
                  height={200}
                  objectFit="cover"
                />
              </div>
            )}
          </div>
        )
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Verification</h3>
            {isVerifying ? (
              <div className="flex items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin" />
                <span className="ml-2">Verifying...</span>
              </div>
            ) : (
              <div>
                <p>Click Next to start verification process.</p>
              </div>
            )}
          </div>
        )
      case 3:
        return (
          <div className="space-y-4">
            <Label htmlFor="price">Price (per day)</Label>
            <Input
              id="price"
              name="price"
              type="number"
              value={equipmentDetails.price}
              onChange={handleInputChange}
            />
          </div>
        )
      case 4:
        return (
          <div className="space-y-4">
            <Label htmlFor="availabilityDays">Availability (number of days)</Label>
            <Input
              id="availabilityDays"
              name="availabilityDays"
              type="number"
              value={equipmentDetails.availabilityDays}
              onChange={handleInputChange}
              min="1"
              placeholder="Enter number of days available"
            />
          </div>
        )
      case 5:
        return (
          <div className="space-y-4">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              name="location"
              value={equipmentDetails.location}
              onChange={handleInputChange}
            />
          </div>
        )
      default:
        return null
    }
  }, [currentStep, equipmentDetails, handleInputChange, handlePhotoUpload, isVerifying])

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Rent Out Your Equipment</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Button variant="link" onClick={() => router.push('/')}>
                Home
              </Button>
            </li>
            <li>
              <Button variant="link" onClick={() => router.push('/my-listings')}>
                My Listings
              </Button>
            </li>
            <li>
              <Button variant="link" onClick={() => router.push('/account')}>
                Account
              </Button>
            </li>
          </ul>
        </nav>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Select Equipment Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <Button
              key={category.name}
              variant="outline"
              className="h-24 flex flex-col items-center justify-center"
              onClick={() => handleCategorySelect(category.name)}
            >
              <span className="text-3xl mb-2">{category.icon}</span>
              <span>{category.name}</span>
            </Button>
          ))}
        </div>
      </section>

      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Equipment Details</DialogTitle>
            <DialogDescription>
              Please provide details about your {selectedCategory.toLowerCase()}.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <div className="flex justify-between mb-4">
              {steps.map((step, index) => (
                <div
                  key={step}
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index === currentStep ? 'bg-primary text-primary-foreground' : 'bg-secondary'
                  }`}
                >
                  {index + 1}
                </div>
              ))}
            </div>
            {renderStepContent()}
          </div>
          <DialogFooter className="flex justify-between mt-4">
            <Button
              variant="outline"
              onClick={handlePrevStep}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="mr-2 h-4 w-4" /> Previous
            </Button>
            {currentStep === steps.length - 1 ? (
              <Button onClick={handleFinish}>Finish</Button>
            ) : (
              <Button onClick={handleNextStep} disabled={isVerifying}>
                Next <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {listings.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Review Your Listings</h2>
          <div className="space-y-4">
            {listings.map((listing, index) => (
              <div key={index} className="border p-4 rounded-md">
                <h3 className="font-semibold">{listing.name}</h3>
                <p>Category: {listing.category}</p>
                <p>Condition: {listing.condition}</p>
                <p>Availability: {listing.availabilityDays} days</p>
                <p>Price: ${listing.price} per day</p>
                <p>Location: {listing.location}</p>
                {listing.photo && (
                  <Image
                    src={URL.createObjectURL(listing.photo)}
                    alt={`${listing.name} preview`}
                    width={100}
                    height={100}
                    objectFit="cover"
                    className="mt-2 rounded"
                  />
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {listings.length > 0 && (
        <Button onClick={handleSubmitListings} className="w-full">
          Submit All Listings
        </Button>
      )}
    </div>
  )
}