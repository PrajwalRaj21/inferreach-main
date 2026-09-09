import type { Metadata } from 'next'
import { Inter, Space_Grotesk, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Inferreach – Real-time data infrastructure',
  description: 'Inferreach is the real‑time data infrastructure for teams who can\'t afford stale data. We\'re building the future of streaming pipelines – coming soon.',
  keywords: 'data pipeline, streaming, real-time, data infrastructure, ETL, ELT',
  openGraph: {
    title: 'Inferreach – Coming Soon',
    description: 'The control plane for streaming ingestion, transformation, and orchestration.',
    url: 'https://inferreach.com',
    siteName: 'Inferreach',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inferreach – Coming Soon',
    description: 'The control plane for streaming ingestion, transformation, and orchestration.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable}`}>
      <body>
        <div className="grain" />
        {children}
      </body>
    </html>
  )
}