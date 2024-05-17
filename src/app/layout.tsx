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
      <body className={"bg-red-200 " + inter.className}>
        <NavBar />
        <div className='py-8 px-0 md:px-5 md:mb-0 mb-56'>
          <main className='prose w-auto max-w-screen-xl mx-4 md:mx-auto rounded-md p-8 w-4/5 ring-sky-400 ring-2 bg-slate-50 text-justify'>
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
