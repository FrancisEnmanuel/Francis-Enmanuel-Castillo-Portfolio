import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Francis Castillo | Portfolio',
  description: 'Portfolio de Francis Castillo. Cybersecurity Analyst, AI Automation y Fullstack Engineer.',
   icons: {
  icon: '/imagen/Logov2.PNG',
},
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}