import Image from 'next/image'
import Link from 'next/link'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 text-gray-700 mt-10 border-t">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div>
            <Link href="/" className="text-3xl font-bold inline-block mb-4">
              <Image src="/assets/icons/apartment_icon.png" alt="Logo" width={140} height={70} />
            </Link>
            <p className="mb-4">Our apartment finder website connects renters with a wide range of verified rental properties, from budget-friendly studios to luxury.</p>
            <div className="flex space-x-2 mt-4">
              <a href="/" className="w-9 h-9 flex items-center justify-center rounded-full border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition">
                <FaFacebookF />
              </a>
              <a href="/" className="w-9 h-9 flex items-center justify-center rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition">
                <FaWhatsapp />
              </a>
              <a href="/" className="w-9 h-9 flex items-center justify-center rounded-full border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white transition">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-black hover:underline">News</Link></li>
              <li><Link href="/" className="text-black hover:underline">Events</Link></li>
              <li><Link href="/" className="text-black hover:underline">About</Link></li>
              <li><Link href="/" className="text-black hover:underline"> Contact Us</Link></li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-start mb-4">
              <i className="fa fa-map-marker-alt mt-1 mr-3"></i>
              <div>
                <h5 className="font-medium">Address</h5>
                <p>123 Maple Hollow Lane</p>
              </div>
            </div>
            <div className="flex items-start mb-4">
              <i className="fa fa-envelope mt-1 mr-3"></i>
              <div>
                <h5 className="font-medium">Email</h5>
                <p>apartment@yahoo.com</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="fa fa-phone mt-1 mr-3"></i>
              <div>
                <h5 className="font-medium">Phone</h5>
                <p>01011111111</p>
              </div>
            </div>
          </div>

          
        </div>

        {/* Sub-Footer */}
        <div className="border-t mt-10 pt-4 text-center text-sm text-gray-500">
          &copy; {year} Apartment Finder. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
