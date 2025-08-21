import type { Metadata } from 'next'
import './globals.css'
import { site } from '@/lib/seo'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Luxury Landscaping in Toronto`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  keywords: site.keywords,
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: `${site.name} — Luxury Landscaping`,
    description: site.description,
    url: site.url,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${site.name} — Luxury Landscaping`,
    description: site.description
  },
  alternates: {
    canonical: '/'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="text-emerald-950">{children}</body>
    </html>
  )
}
