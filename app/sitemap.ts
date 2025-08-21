import { MetadataRoute } from 'next'
import { site } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/#services', '/#portfolio', '/#quote'].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.7
  }))
  return routes
}
