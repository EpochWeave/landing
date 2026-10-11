import type { BlogPost } from '../../types/blog'

const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-automate-lead-follow-up',
    title: 'How to Automate Lead Follow Up Without Losing the Personal Touch',
    description: 'Learn how to set up automated lead follow-up sequences that respond in minutes, not hours, while still feeling personal and human.',
    date: '2026-07-16',
    readTime: '8 min read',
    category: 'Lead Generation'
  },
  {
    slug: 'reduce-manual-data-entry-small-business',
    title: 'Reduce Manual Data Entry for Small Business: A Practical Guide',
    description: 'Stop wasting hours on data entry. Here\'s how small businesses are eliminating manual data work with simple automations.',
    date: '2026-07-16',
    readTime: '7 min read',
    category: 'Operations'
  },
  {
    slug: 'custom-crm-vs-off-the-shelf-software',
    title: 'Custom CRM vs Off-the-Shelf Software: Which is Right for Your Business?',
    description: 'Should you build a custom CRM or buy an existing solution? This guide breaks down the costs, benefits, and decision factors.',
    date: '2026-07-16',
    readTime: '10 min read',
    category: 'Strategy'
  },
  {
    slug: 'ai-tools-for-agencies',
    title: 'AI Tools for Agencies: The Complete Guide to Scaling Without Hiring',
    description: 'Discover the AI tools that are helping agencies scale their operations without adding headcount, from content generation to client management.',
    date: '2026-07-16',
    readTime: '9 min read',
    category: 'AI & Automation'
  }
]

// Kept free of Vite-only APIs so nuxt.config.ts can import it for the sitemap
// and prerender routes. Article bodies are loaded in blogContent.ts.
export function getBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find(post => post.slug === slug) || null
}
