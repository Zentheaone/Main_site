import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Zenthea One',
  description: 'Zenthea One Site',
  generator: 'Zenthea One',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
