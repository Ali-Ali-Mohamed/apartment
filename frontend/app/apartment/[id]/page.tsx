'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'

export default function ApartmentDetail() {
  const { id } = useParams()
  const [apartment, setApartment] = useState<any>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3000/api/v1/apartments/${id}`)
        .then((res) => res.json())
        .then((data) => setApartment(data))
    }
  }, [id])

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? apartment.ApartmentImages.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === apartment.ApartmentImages.length - 1 ? 0 : prevIndex + 1
    )
  }

  if (!apartment) return <p>Loading...</p>

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{apartment.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Slider */}
        <div className="relative">
          <img
            src={
              apartment.ApartmentImages?.length > 0
                ? apartment.ApartmentImages[currentImageIndex]?.image
                : '/assets/images/apartment.jpeg' // Make sure this image exists in your public folder
            }
            alt={apartment.title}
            className="rounded-lg w-full h-72 object-cover object-center"
          />
          {apartment.ApartmentImages?.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
              >
                &lt;
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
              >
                &gt;
              </button>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 p-2 rounded-lg">
                {currentImageIndex + 1} / {apartment.ApartmentImages.length}
              </div>
            </>
          )}
        </div>

        {/* Apartment Details */}
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <p className="text-lg mb-4 text-gray-700">{apartment.description}</p>
          <ul className="space-y-3 text-sm text-gray-700">
            <li className="flex justify-between">
              <strong>Price:</strong>
              <span>${apartment.price || 'N/A'}</span>
            </li>
            <li className="flex justify-between">
              <strong>Bedrooms:</strong>
              <span>{apartment.bedrooms || 'N/A'}</span>
            </li>
            <li className="flex justify-between">
              <strong>Bathrooms:</strong>
              <span>{apartment.bathrooms || 'N/A'}</span>
            </li>
            <li className="flex justify-between">
              <strong>Size:</strong>
              <span>{apartment.square_feet || 'N/A'} sqft</span>
            </li>
            <li className="flex justify-between">
              <strong>Parking:</strong>
              <span>{apartment.has_parking ? 'Yes' : 'No'}</span>
            </li>
            <li className="flex justify-between">
              <strong>Elevator:</strong>
              <span>{apartment.has_elevator ? 'Yes' : 'No'}</span>
            </li>
            <li className="flex justify-between">
              <strong>Balcony:</strong>
              <span>{apartment.has_balcony ? 'Yes' : 'No'}</span>
            </li>
            <li className="flex justify-between">
              <strong>Address:</strong>
              <span>{apartment.address || 'N/A'}</span>
            </li>
            <li className="flex justify-between">
              <strong>Project:</strong>
              <span>{apartment.Project?.name || 'N/A'}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
