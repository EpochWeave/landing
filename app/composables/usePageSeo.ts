import { site, absoluteUrl } from '../utils/site'

interface PageSeo {
  title: string
  description: string
  path: string
  image?: string
  type?: 'website' | 'article'
  meta?: { property?: string, name?: string, content: string }[]
}

// Per-route title, description, canonical, Open Graph and Twitter tags.
export function usePageSeo(seo: PageSeo) {
  const url = absoluteUrl(seo.path)
  const image = absoluteUrl(seo.image ?? site.defaultImage)

  useHead({
    title: seo.title,
    link: [{ rel: 'canonical', href: url }],
    meta: [
      { name: 'description', content: seo.description },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:url', content: url },
      { property: 'og:image', content: image },
      { property: 'og:type', content: seo.type ?? 'website' },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
      { name: 'twitter:image', content: image },
      ...(seo.meta ?? [])
    ]
  })
}
