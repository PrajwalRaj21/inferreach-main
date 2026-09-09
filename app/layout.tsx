import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
})

export const metadata: Metadata = {
  title: 'InferReach – GTM Data Engineering',
  description: 'We clean your data, automate your outreach, and build the infrastructure your GTM team needs.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}