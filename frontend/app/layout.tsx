// app/layout.tsx
import './globals.css'
import { ReactNode } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Apartment Listings',
  description: 'Browse available apartments',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto p-4">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
