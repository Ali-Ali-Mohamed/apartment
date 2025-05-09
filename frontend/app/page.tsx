'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import ApartmentCard from '@/components/ApartmentCard'
import { fetchApartments, fetchProjects } from './api'

export default function Home() {
  const [apartments, setApartments] = useState<any[]>([])
  const [filteredApartments, setFilteredApartments] = useState<any[]>([])
  const [projects, setProjects] = useState<any[]>([])
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  const LIMIT = 6

  // Fetch projects once on mount
  useEffect(() => {
    fetchProjects()
      .then((data) => setProjects(data))
      .catch((err) => console.error('Failed to fetch projects:', err))
  }, [])

  // Fetch apartments on search query change
  useEffect(() => {
    setLoading(true)
    fetchApartments(1, 1000, searchQuery) // Load large enough to paginate client-side
      .then((data) => {
        const fetched = data.data || []
        setApartments(fetched)
        setPage(1)
      })
      .catch((err) => console.error('Failed to fetch apartments:', err))
      .finally(() => setLoading(false))
  }, [searchQuery])

  // Filter and paginate client-side
  useEffect(() => {
    let filtered = apartments

    if (selectedProjectId) {
      filtered = filtered.filter((apt) => apt.projectId === selectedProjectId)
    }

    const start = (page - 1) * LIMIT
    const end = start + LIMIT

    setTotalPages(Math.ceil(filtered.length / LIMIT))
    setFilteredApartments(filtered.slice(start, end))
  }, [apartments, selectedProjectId, page])

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
    setPage(1)
  }

  const handleProjectFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = parseInt(e.target.value)
    setSelectedProjectId(isNaN(val) ? null : val)
    setPage(1)
  }

  const handleNext = () => {
    if (page < totalPages) setPage(page + 1)
  }

  const handlePrev = () => {
    if (page > 1) setPage(page - 1)
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Available Apartments</h1>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search apartments..."
          value={searchQuery}
          onChange={handleSearch}
          className="border border-gray-300 rounded px-4 py-2 w-full sm:max-w-md"
        />

        {/* Project Filter */}
        <select
          value={selectedProjectId ?? ''}
          onChange={handleProjectFilter}
          className="border border-gray-300 rounded px-4 py-2"
        >
          <option value="">All Projects</option>
          {projects.map((project) => (
            <option key={project.id} value={project.id}>
              {project.name}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div>Loading apartments...</div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredApartments.length === 0 ? (
              <div>No apartments available</div>
            ) : (
              filteredApartments.map((apt: any) => (
                <Link key={apt.id} href={`/apartment/${apt.id}`}>
                  <ApartmentCard apartment={apt} />
                </Link>
              ))
            )}
          </div>

          {/* Pagination Controls */}
          <div className="mt-6 flex justify-center gap-4">
            <button
              onClick={handlePrev}
              disabled={page === 1}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded disabled:opacity-50"
            >
              Previous
            </button>
            <span className="self-center">
              Page {page} of {totalPages}
            </span>
            <button
              onClick={handleNext}
              disabled={page === totalPages}
              className="bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  )
}
