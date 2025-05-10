import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Apartment Listings',
  description: 'Browse available apartments',
}

// This layout wraps around all pages in the application
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-black flex flex-col min-h-screen">
        <Navbar />
        <main className="bg-white text-black flex-1 max-w-7xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
