'use client'

import React, { useState } from 'react'
//import Image from 'next/image'
import { Button } from "../../components/button"
import { Input } from "../../components/input"
import { Label } from "../../components/label"
import { Textarea } from "../../components/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../components/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "../../components/avatar"
import { Upload } from 'lucide-react'

export default function AccountPage() {
  const [profile, setProfile] = useState({
    username: 'JohnDoe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    description: 'I am a farmer with 10 years of experience.',
    avatar: '/placeholder.svg',
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
  })

  const [rentedEquipment] = useState([
    { id: 1, name: 'Tractor', rentedUntil: '2023-12-31' },
    { id: 2, name: 'Harvester', rentedUntil: '2023-11-30' },
  ])

  const [listedEquipment] = useState([
    { id: 1, name: 'Plow', availableFrom: '2023-10-01', availableUntil: '2023-12-31' },
    { id: 2, name: 'Seeder', availableFrom: '2023-11-01', availableUntil: '2024-02-28' },
  ])

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files) return
    const file = files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfile(prev => ({ ...prev, avatar: reader.result as string }))
      }
      reader.readAsDataURL(file)
    }
  }

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfile(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the updated profile to your backend
    console.log('Updated profile:', profile)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <Tabs defaultValue="profile" className="mb-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="rented">Rented Equipment</TabsTrigger>
          <TabsTrigger value="listed">Listed Equipment</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Edit Profile</CardTitle>
              <CardDescription>Update your account information here.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-20 h-20">
                      <AvatarImage src={profile.avatar} alt={profile.username} />
                      <AvatarFallback>{profile.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <Label htmlFor="avatar" className="cursor-pointer">
                      <Input id="avatar" type="file" className="hidden" onChange={handleAvatarChange} accept="image/*" />
                      <div className="flex items-center space-x-2 text-primary">
                        <Upload size={20} />
                        <span>Upload new photo</span>
                      </div>
                    </Label>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="username">Username</Label>
                      <Input id="username" name="username" value={profile.username} onChange={handleProfileChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" value={profile.email} onChange={handleProfileChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" name="phone" type="tel" value={profile.phone} onChange={handleProfileChange} />
                    <Textarea id="description" name="description" value={profile.description} onChange={handleTextareaChange} />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea id="description" name="description" value={profile.description} onChange={handleTextareaChange} />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="facebook">Facebook</Label>
                      <Input id="facebook" name="facebook" value={profile.facebook} onChange={handleProfileChange} placeholder="Facebook profile URL" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input id="twitter" name="twitter" value={profile.twitter} onChange={handleProfileChange} placeholder="Twitter profile URL" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="instagram">Instagram</Label>
                      <Input id="instagram" name="instagram" value={profile.instagram} onChange={handleProfileChange} placeholder="Instagram profile URL" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input id="linkedin" name="linkedin" value={profile.linkedin} onChange={handleProfileChange} placeholder="LinkedIn profile URL" />
                    </div>
                  </div>
                </div>
                </div>
                <Button type="submit" className="mt-6 border border-white">Save Changes</Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="rented">
          <Card>
            <CardHeader>
              <CardTitle>Rented Equipment</CardTitle>
              <CardDescription>Equipment you are currently renting.</CardDescription>
            </CardHeader>
            <CardContent>
              {rentedEquipment.map(item => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                  <span>{item.name}</span>
                  <span>Rented until: {item.rentedUntil}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="listed">
          <Card>
            <CardHeader>
              <CardTitle>Listed Equipment</CardTitle>
              <CardDescription>Equipment you have put up for rent.</CardDescription>
            </CardHeader>
            <CardContent>
              {listedEquipment.map(item => (
                <div key={item.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                  <span>{item.name}</span>
                  <span>Available: {item.availableFrom} to {item.availableUntil}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}