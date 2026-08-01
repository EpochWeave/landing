import type { NavItem } from '../../types/navigation'

export const mainNavItems: NavItem[] = [
  { label: 'Services', anchor: 'services' },
  { label: 'How It Works', anchor: 'how-it-works' },
  { label: 'Case Studies', anchor: 'case-studies' },
  { label: 'Pricing', anchor: 'pricing' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', anchor: 'contact' }
]

export const footerNavItems: NavItem[] = [
  { label: 'Services', anchor: 'services' },
  { label: 'How It Works', anchor: 'how-it-works' },
  { label: 'Case Studies', anchor: 'case-studies' },
  { label: 'Pricing', anchor: 'pricing' },
  { label: 'About', path: '/about' },
  { label: 'Contact', anchor: 'contact' }
]
