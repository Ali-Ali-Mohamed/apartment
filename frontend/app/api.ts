export async function fetchApartments(page: number = 1, limit: number = 6, searchQuery = '') {
  const res = await fetch(`http://localhost:3000/api/v1/apartments?page=${page}&limit=${limit}&searchQuery=${searchQuery}`);
  if (!res.ok) throw new Error('Failed to fetch apartments');
  return res.json();
}

export async function fetchApartmentById(id: string) {
  const res = await fetch(`http://localhost:3000/api/v1/apartments/${id}`);
  if (!res.ok) throw new Error('Failed to fetch apartment');
  return res.json();
}

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

export async function fetchProjects() {
  const res = await fetch('http://localhost:3000/api/v1/projects');
  if (!res.ok) throw new Error('Failed to fetch projects');
  return res.json();
}
