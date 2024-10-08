'use client'

import React, { useState } from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

export interface GoogleMapProps {
  markers: { lat: number; lng: number; label?: string }[]
}

const GoogleMapComponent: React.FC<GoogleMapProps> = ({ markers }) => {
  const [mapType, setMapType] = useState<'roadmap' | 'satellite' | 'hybrid' | 'terrain'>('roadmap')

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="mapType" className="mr-2">Select Map Type:</label>
        <select
          id="mapType"
          value={mapType}
          onChange={(e) => setMapType(e.target.value as 'roadmap' | 'satellite' | 'hybrid' | 'terrain')}
          className="p-2 border rounded"
        >
          <option value="roadmap">Roadmap</option>
          <option value="satellite">Satellite</option>
          <option value="hybrid">Hybrid</option>
          <option value="terrain">Terrain</option>
        </select>
      </div>
      <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          mapTypeId={mapType}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} label={marker.label} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default GoogleMapComponent