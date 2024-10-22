'use client'

import { useState } from 'react'
import { Button } from "../components/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/card"
import { Label } from "../components/label"
import { RadioGroup, RadioGroupItem } from "../components/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/select"
import {Slider} from "../components/slider"
import {Calendar} from "../components/calender"
import { Input } from "../components/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/tabs"
//import {Switch} from '../components/switch';
import Link from "next/link"

export default function CheckoutPage() {
  const [selectedDates, setSelectedDates] = useState<Date[]>([])
  const [profitSharePercentage, setProfitSharePercentage] = useState(50)
  const [paymentMethod, setPaymentMethod] = useState("card")

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Finalize Your Equipment Rental</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Schedule Your Rental</CardTitle>
            <CardDescription>Select the dates you need the equipment</CardDescription>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="multiple"
              selected={selectedDates}
              onSelect={setSelectedDates}
              className="rounded-md border"
              required
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Insurance Options</CardTitle>
            <CardDescription>Choose your insurance coverage</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="existing">
              <TabsList>
                <TabsTrigger value="existing">Existing Packages</TabsTrigger>
                <TabsTrigger value="new">Find New Packages</TabsTrigger>
              </TabsList>
              <TabsContent value="existing">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your insurance package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basic">Basic Coverage</SelectItem>
                    <SelectItem value="standard">Standard Coverage</SelectItem>
                    <SelectItem value="premium">Premium Coverage</SelectItem>
                  </SelectContent>
                </Select>
              </TabsContent>
              <TabsContent value="new">
                <Button>Browse New Insurance Packages</Button>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Financing Options</CardTitle>
            <CardDescription>Choose how you want to finance your rental</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="card"  value="full" onValueChange={(value) => console.log(value)}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="full" id="full" />
                <Label htmlFor="full">Pay in Full</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="installments" id="installments" />
                <Label htmlFor="installments">Pay in Installments</Label>
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription>Choose your preferred payment method</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup defaultValue="card" value={paymentMethod} onValueChange={setPaymentMethod}>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="profitShare" id="profitShare" />
                <Label htmlFor="profitShare">Pay by Profit Share</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mobileMoney" id="mobileMoney" />
                <Label htmlFor="mobileMoney">Pay by Mobile Money</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="card" id="card" />
                <Label htmlFor="card">Pay by Card</Label>
              </div>
            </RadioGroup>

            {paymentMethod === 'profitShare' && (
              <div className="mt-4">
                <Label>Profit Share Percentage: {profitSharePercentage}%</Label>
                <Slider
                  defaultValue={[profitSharePercentage]}
                  onValueChange={(value) => setProfitSharePercentage(value[0])}
                  max={100}
                  step={1}
                />
              </div>
            )}

            {paymentMethod === 'mobileMoney' && (
              <div className="mt-4">
                <Label htmlFor="phoneNumber">Mobile Money Number</Label>
                <Input id="phoneNumber" placeholder="Enter your mobile money number" />
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="mt-4 space-y-4">
                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input id="cardNumber" placeholder="Enter your card number" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input id="expiryDate" placeholder="MM/YY" />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input id="cvv" placeholder="CVV" />
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Order Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Equipment: Tractor Model XYZ</p>
            <p>Rental Period: {selectedDates.length} days</p>
            <p>Insurance: Basic Coverage</p>
            <p>Financing: Pay in Full</p>
            <p>Payment Method: {paymentMethod === 'profitShare' ? `Profit Share (${profitSharePercentage}%)` : paymentMethod}</p>
          </CardContent>
          <CardFooter>
            <Link href = "http://localhost:3000/tracking">
            <Button className="w-full">Confirm and Pay</Button></Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}