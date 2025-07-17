import type { Metadata } from 'next'
import './globals.css'

export const metadata = {
  title: "ZentheaOne",
  description: "Where AI meets balance",
  icons: {
    icon: "/icon.ico",  // <-- this line is important
  },
};
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
