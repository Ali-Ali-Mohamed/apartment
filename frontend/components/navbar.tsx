// components/Navbar.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-gray-50 text-gray-800 shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/assets/icons/apartment_icon.png" alt="Logo" width={120} height={60} />
          <span className="text-2xl font-bold">Apartment Finder</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="../apartment/add" passHref>
            <span className="bg-black text-white px-4 py-2 rounded-2xl hover:bg-gray-800 transition">
              Add Apartment
            </span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
