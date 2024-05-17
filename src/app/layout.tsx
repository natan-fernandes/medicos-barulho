import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { NavBar } from './components/NavBar'
import { Footer } from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Médicos do Barulho',
  description: 'Associação dos Médicos do Barulho há 27 anos levando alegria à quem precisa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <NavBar/>
        <div className='bg-red-200 h-screen py-8'>
          {children}
        </div>
        <Footer/>
      </body>
    </html>
  )
}
