'use client'

import { useEffect, useState } from 'react'
import ApartmentCard from '@/components/ApartmentCard'
import Link from 'next/link'

export default function Home() {
  const [apartments, setApartments] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/apartments?page=1&limit=10')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data) => {
        console.log(data) // Log the data to inspect its structure
        // Extract apartments from the `data` property
        setApartments(data.data || []) // Access apartments from `data.data`
      })
      .catch((err) => {
        console.error('Failed to fetch apartments:', err)
      })
      .finally(() => setLoading(false)) // Set loading to false once the fetch is done
  }, [])

  if (loading) {
    return <div>Loading apartments...</div> // Display loading state
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Available Apartments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {apartments.length === 0 ? (
          <div>No apartments available</div> // Handle empty array case
        ) : (
          apartments.map((apt: any) => (
            <Link key={apt.id} href={`/apartment/${apt.id}`}>
              <ApartmentCard apartment={apt} />
            </Link>
          ))
        )}
      </div>
    </div>
  )
}
