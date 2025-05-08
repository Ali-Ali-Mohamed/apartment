// components/Navbar.tsx
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-gray-50 text-gray-800 shadow-sm border-b">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/assets/icons/apartment_icon.png" alt="Logo" width={120} height={60} />
          <span className="text-2xl font-bold">Apartment Finder</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-blue-600">News</Link>
          <Link href="/" className="hover:text-blue-600">Events</Link>
          <Link href="/" className="hover:text-blue-600">About</Link>
          <Link href="/" className="hover:text-blue-600">Contact Us</Link>
        </div>
      </div>
    </nav>
  )
}
