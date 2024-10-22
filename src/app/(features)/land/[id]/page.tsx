// src/app/(features)/land/[id]/page.tsx
'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { fetchLandById } from '@/actions/actions'
import Land from '@/actions/actions'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/card'
import { Loader2 } from 'lucide-react'

type Land = {
    id: string
    name: string
    location: string
    price: number
    availability: boolean
    image: string
    description: string
  }

export default function LandDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const [land, setLand] = useState<Land | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      fetchLandById(id as string)
        .then((data) => {
          setLand(data)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching land:', error)
          setLoading(false)
        })
    }
  }, [id])

  if (loading) {
    return <Loader2 className="animate-spin" />
  }

  if (!land) {
    return <p>Land not found</p>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{land.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Location: {land.location}</p>
          <p>Price: ${land.price}</p>
          <p>Availability: {land.availability ? 'Available' : 'Not Available'}</p>
          <p>Description: {land.description}</p>
          <img src={land.image} alt={land.name} className="w-full h-auto mt-4" />
        </CardContent>
      </Card>
    </div>
  )
}