// components/ApartmentCard.tsx
export default function ApartmentCard({ apartment }: { apartment: any }) {
    return (
      <div className="border rounded-lg shadow hover:shadow-lg transition p-4 cursor-pointer">
        <img
          src={apartment.images?.[0]}
          alt={apartment.title}
          className="h-40 w-full object-cover rounded mb-2"
        />
        <h2 className="text-lg font-semibold">{apartment.title}</h2>
        <p className="text-gray-600">${apartment.price} / month</p>
        <p className="text-sm">
          {apartment.bedrooms} Beds • {apartment.bathrooms} Baths
        </p>
      </div>
    )
  }
  