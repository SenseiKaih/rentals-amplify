// src/app/(features)/equipment/[id]/page.tsx
'use client'

import React, { useEffect, useState } from 'react'

// Define the Equipment type
type Equipment = {
  id: string
  name: string
  type: string
  price: number
  availability: boolean
  description: string
  image: string
}
import { useRouter } from 'next/router'
import { fetchEquipmentById } from '@/actions/actions'
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/card'
import { Loader2 } from 'lucide-react'

export default function EquipmentDetailPage() {
  const router = useRouter()
  const { id } = router.query
  const [equipment, setEquipment] = useState<Equipment | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (id) {
      fetchEquipmentById(id as string)
        .then((data) => {
          setEquipment(data)
          setLoading(false)
        })
        .catch((error) => {
          console.error('Error fetching equipment:', error)
          setLoading(false)
        })
    }
  }, [id])

  if (loading) {
    return <Loader2 className="animate-spin" />
  }

  if (!equipment) {
    return <p>Equipment not found</p>
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>{equipment.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Type: {equipment.type}</p>
          <p>Price: ${equipment.price}</p>
          <p>Availability: {equipment.availability ? 'Available' : 'Not Available'}</p>
          <p>Description: {equipment.description}</p>
          <img src={equipment.image} alt={equipment.name} className="w-full h-auto mt-4" />
        </CardContent>
      </Card>
    </div>
  )
}