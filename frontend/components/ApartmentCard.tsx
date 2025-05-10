// Card to display apartment details
export default function ApartmentCard({ apartment }: { apartment: any }) {
  const imageUrl =
    apartment.ApartmentImages?.[0]?.image || '/assets/images/apartment.jpeg'

  return (
    <div className="bg-gray-300 border border-black rounded-lg shadow hover:shadow-2xl transition p-4 cursor-pointer">
      <img
        src={imageUrl}
        alt={apartment.title}
        className="h-40 w-full object-cover rounded mb-2"
      />
      <h2 className="text-lg font-semibold text-black">{apartment.title}</h2>
      <p className="text-black">${apartment.price} / month</p>
      <p className="text-sm text-black">
        {apartment.bedrooms} Beds • {apartment.bathrooms} Baths
      </p>
      <p className="text-black">
        Project: {apartment.Project?.name || 'N/A'}
      </p>
    </div>
  )
}
