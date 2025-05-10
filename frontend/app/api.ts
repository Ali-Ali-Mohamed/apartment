// This file contains the API functions for fetching data from the backend.

// This function fetches all apartments with pagination and search functionality
export async function fetchApartments(page: number = 1, limit: number = 6, searchQuery = '') {
  const res = await fetch(`http://localhost:3000/api/v1/apartments?page=${page}&limit=${limit}&searchQuery=${searchQuery}`);
  if (!res.ok) throw new Error('Failed to fetch apartments');
  return res.json();
}

// This function fetches a single apartment by its ID
export async function fetchApartmentById(id: string) {
  const res = await fetch(`http://localhost:3000/api/v1/apartments/${id}`);
  if (!res.ok) throw new Error('Failed to fetch apartment');
  return res.json();
}

// This function adds a new apartment to the database
export async function addApartment(apartmentData: any) {
  const response = await fetch('http://localhost:3000/api/v1/apartments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(apartmentData),
  })

  if (!response.ok) {
    const errorBody = await response.json()
    throw new Error(errorBody.message || 'Failed to add apartment')
  }

  return await response.json()
}

// This function fetches all projects from the database
export async function fetchProjects() {
  const res = await fetch('http://localhost:3000/api/v1/projects');
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}
