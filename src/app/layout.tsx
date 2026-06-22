import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
// ↑ @/ means "start from the root of the project"
// So @/components/Navbar → components/Navbar.tsx

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Netguru Clone',
  description: 'Software Development Company',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <Navbar />          {/* appears on EVERY page */}

        <main>{children}</main>   {/* page content goes here */}

        <Footer />          {/* appears on EVERY page */}

      </body>
    </html>
  )
}