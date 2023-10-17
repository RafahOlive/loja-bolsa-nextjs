import type { Metadata } from 'next'
import { Inter, Inter_Tight, Comic_Neue, Roboto_Condensed } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const tight = Inter_Tight({subsets: ['latin'] })
const abha = Comic_Neue({subsets: ['latin'], weight: ['300']})
const roboto = Roboto_Condensed({subsets: ['latin'], weight: ['300']})

export const metadata: Metadata = {
  title: 'Bolsas',
  description: 'Melhores bolsas e acessórios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
