'use client'

import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker, Polyline } from '@react-google-maps/api'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/card"
import { Button } from "../components/button"
import { Loader2, CheckCircle } from "lucide-react"

// Note: Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual Google Maps API key
const GOOGLE_MAPS_API_KEY = 'AIzaSyAfq7rScMWfubv19THQExSn88NLVw-sTo4'

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}


export default function PackageTracking() {
  const [countdown, setCountdown] = useState(259200) // 3 days in seconds
  const [packageLocation, setPackageLocation] = useState({ lat: 40.7128, lng: -74.0060 }) // Start in New York
  const [destination] = useState({ lat: 34.0522, lng: -118.2437 }) // Los Angeles
  const [path, setPath] = useState<{ lat: number; lng: number }[]>([])

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => {
        if (prevCountdown <= 0) {
          clearInterval(timer)
          return 0
        }
        return prevCountdown - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const updatePackageLocation = () => {
      const newLat = packageLocation.lat + (destination.lat - packageLocation.lat) * 0.1
      const newLng = packageLocation.lng + (destination.lng - packageLocation.lng) * 0.1
      setPackageLocation({ lat: newLat, lng: newLng })
      setPath((prevPath) => [...prevPath, { lat: newLat, lng: newLng }])
    }

    const locationTimer = setInterval(updatePackageLocation, 5000) // Update every 5 seconds

    return () => clearInterval(locationTimer)
  }, [packageLocation, destination])

  const formatTime = (seconds: number) => {
    const days = Math.floor(seconds / 86400)
    const hours = Math.floor((seconds % 86400) / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60

    return `${days}d ${hours}h ${minutes}m ${remainingSeconds}s`
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center">
            Thank You for Your Order! <CheckCircle className="ml-2 h-6 w-6 text-green-500" />
          </CardTitle>
          <CardDescription>Your package is on its way.</CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-2xl font-bold mb-4">Estimated Time of Arrival</h2>
          <div className="text-4xl font-bold mb-8">{formatTime(countdown)}</div>
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Package Location</h3>
            <div className="h-[400px] w-full rounded-lg overflow-hidden">
              <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                  mapContainerStyle={mapContainerStyle}
                  center={packageLocation}
                  zoom={4}
                >
                  <Marker position={packageLocation} />
                  <Marker position={destination} />
                  <Polyline
                    path={path}
                    options={{
                      strokeColor: "#FF0000",
                      strokeOpacity: 0.8,
                      strokeWeight: 2,
                    }}
                  />
                </GoogleMap>
              </LoadScript>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold">From:</p>
              <p>New York, NY</p>
            </div>
            <div>
              <p className="font-semibold">To:</p>
              <p>Los Angeles, CA</p>
            </div>
          </div>
        </CardContent>
      </Card>
      <Button className="w-full">
        {countdown > 0 ? (
          'Track Another Package'
        ) : (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Package Delivered
          </>
        )}
      </Button>
    </div>
  )
}