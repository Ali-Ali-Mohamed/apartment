'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { addApartment, fetchProjects } from '@/app/api'

export default function AddApartment() {
  const router = useRouter()
  const [projects, setProjects] = useState<{ id: number; name: string }[]>([])
  const [form, setForm] = useState({
    title: '',
    description: '',
    price: '',
    bedrooms: '',
    bathrooms: '',
    square_feet: '',
    has_parking: false,
    has_elevator: false,
    has_balcony: false,
    address: '',
    lat: '',
    lng: '',
    projectId: '',
    images: ['']
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  // Fetch projects on mount
  useEffect(() => {
    async function loadProjects() {
      try {
        const data = await fetchProjects()
        setProjects(data)
      } catch (err) {
        console.error('Failed to fetch projects', err)
      }
    }
    loadProjects()
  }, [])

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleImageChange = (index: number, value: string) => {
    const newImages = [...form.images]
    newImages[index] = value
    setForm({ ...form, images: newImages })
  }

  const addImageField = () => setForm({ ...form, images: [...form.images, ''] })

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    setLoading(true)
    try {
      await addApartment({
        ...form,
        price: Number(form.price),
        bedrooms: Number(form.bedrooms),
        bathrooms: Number(form.bathrooms),
        square_feet: Number(form.square_feet),
        lat: Number(form.lat),
        lng: Number(form.lng),
        projectId: Number(form.projectId),
        images: form.images.filter((url) => url.trim() !== '')
      })

      router.push('/')
    } catch (err: any) {
      setError(err.message || 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Add New Apartment</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          ['title', 'Title', 'text'],
          ['description', 'Description', 'text'],
          ['price', 'Price', 'number'],
          ['bedrooms', 'Bedrooms', 'number'],
          ['bathrooms', 'Bathrooms', 'number'],
          ['square_feet', 'Size (sqft)', 'number'],
          ['address', 'Address', 'text'],
          ['lat', 'Latitude', 'number'],
          ['lng', 'Longitude', 'number']
        ].map(([name, label, type]) => (
          <div key={name}>
            <label className="block font-medium">{label}</label>
            <input
              type={type}
              name={name}
              value={(form as any)[name]}
              onChange={handleChange}
              required
              className="w-full border px-3 py-2 rounded"
            />
          </div>
        ))}

        {/* Project Dropdown */}
        <div>
          <label className="block font-medium">Project</label>
          <select
            name="projectId"
            value={form.projectId}
            onChange={handleChange}
            required
            className="w-full border px-3 py-2 rounded"
          >
            <option value="">Select a project</option>
            {projects.map((proj) => (
              <option key={proj.id} value={proj.id}>
                {proj.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-4">
          <label>
            <input
              type="checkbox"
              name="has_parking"
              checked={form.has_parking}
              onChange={handleChange}
            />{' '}
            Parking
          </label>
          <label>
            <input
              type="checkbox"
              name="has_elevator"
              checked={form.has_elevator}
              onChange={handleChange}
            />{' '}
            Elevator
          </label>
          <label>
            <input
              type="checkbox"
              name="has_balcony"
              checked={form.has_balcony}
              onChange={handleChange}
            />{' '}
            Balcony
          </label>
        </div>

        <div>
          <label className="block font-medium">Image URLs</label>
          {form.images.map((img, idx) => (
            <input
              key={idx}
              type="text"
              value={img}
              onChange={(e) => handleImageChange(idx, e.target.value)}
              placeholder={`Image URL #${idx + 1}`}
              className="w-full border px-3 py-2 rounded mb-2"
            />
          ))}
          <button
            type="button"
            onClick={addImageField}
            className="text-blue-600 hover:underline"
          >
            + Add another image
          </button>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-black text-white px-4 py-2 rounded-2xl hover:bg-gray-800 transitio"
        >
          {loading ? 'Adding...' : 'Add Apartment'}
        </button>
      </form>
    </div>
  )
}
