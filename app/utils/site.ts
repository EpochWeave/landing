// Single source of truth for site-wide identity. Used by pages, legal copy,
// blog bylines, SEO tags, and nuxt.config (sitemap).
export const site = {
  name: 'EpochWeave',
  // Canonical origin. Always www, no trailing slash.
  url: 'https://www.epochweave.com',
  // TODO(Vincent): replace with your full legal name. This one value feeds the
  // Terms, Privacy Policy, blog bylines, and the founder section.
  ownerName: 'Vincent',
  // TODO(Vincent): replace with your own 2-3 sentence bio.
  ownerBio: 'Vincent founded EpochWeave to help small service businesses stop losing hours to manual admin. He scopes, builds, and supports every automation personally, from the first call through ongoing care.',
  ownerRole: 'Founder, EpochWeave',
  location: 'Nairobi, Kenya',
  email: 'hello@epochweave.com',
  calLink: 'https://cal.com/epochweave/call-30',
  facebookUrl: 'https://www.facebook.com/profile.php?id=61592023613388',
  defaultImage: '/logos/logo-bg-none.png'
}

export function absoluteUrl(path = '/'): string {
  if (/^https?:\/\//.test(path)) return path
  if (path === '/' || path === '') return `${site.url}/`
  return `${site.url}${path.startsWith('/') ? path : `/${path}`}`
}
