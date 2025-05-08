// app/apartment/[id]/page.tsx
'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function ApartmentDetail() {
  const { id } = useParams()
  const [apartment, setApartment] = useState<any>(null)

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/v1/apartments/${id}`)
        .then((res) => res.json())
        .then((data) => setApartment(data))
    }
  }, [id])

  if (!apartment) return <p>Loading...</p>

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">{apartment.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <img
          src={apartment.images?.[0]}
          alt={apartment.title}
          className="rounded w-full h-64 object-cover"
        />
        <div>
          <p className="mb-2">{apartment.description}</p>
          <ul className="space-y-1 text-sm text-gray-700">
            <li><strong>Price:</strong> ${apartment.price}</li>
            <li><strong>Bedrooms:</strong> {apartment.bedrooms}</li>
            <li><strong>Bathrooms:</strong> {apartment.bathrooms}</li>
            <li><strong>Size:</strong> {apartment.square_feet} sqft</li>
            <li><strong>Parking:</strong> {apartment.has_parking ? 'Yes' : 'No'}</li>
            <li><strong>Elevator:</strong> {apartment.has_elevator ? 'Yes' : 'No'}</li>
            <li><strong>Balcony:</strong> {apartment.has_balcony ? 'Yes' : 'No'}</li>
            <li><strong>Address:</strong> {apartment.address}</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
