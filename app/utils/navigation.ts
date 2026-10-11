import type { NavItem } from '../../types/navigation'

// Section anchors live on the homepage; links resolve to `/#anchor` so they
// work from every route.
export const mainNavItems: NavItem[] = [
  { label: 'Services', anchor: 'services' },
  { label: 'How It Works', anchor: 'how-it-works' },
  { label: 'Example Builds', anchor: 'example-builds' },
  { label: 'Pricing', anchor: 'pricing' },
  { label: 'Blog', path: '/blog' }
]

export const footerNavItems: NavItem[] = [
  { label: 'Services', anchor: 'services' },
  { label: 'How It Works', anchor: 'how-it-works' },
  { label: 'Example Builds', anchor: 'example-builds' },
  { label: 'Pricing', anchor: 'pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'About', path: '/about' },
  { label: 'Contact', anchor: 'contact' }
]

export function navItemTo(item: NavItem): string {
  return item.path ?? `/#${item.anchor}`
}
