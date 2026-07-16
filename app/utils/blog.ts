import type { BlogPost } from '../../types/blog'

const blogPosts: BlogPost[] = [
  {
    slug: 'how-to-automate-lead-follow-up',
    title: 'How to Automate Lead Follow Up Without Losing the Personal Touch',
    description: 'Learn how to set up automated lead follow-up sequences that respond in minutes, not hours, while still feeling personal and human.',
    date: '2026-07-16',
    readTime: '8 min read',
    category: 'Lead Generation',
    contentPath: '/blog/how-to-automate-lead-follow-up.md'
  },
  {
    slug: 'reduce-manual-data-entry-small-business',
    title: 'Reduce Manual Data Entry for Small Business: A Practical Guide',
    description: 'Stop wasting hours on data entry. Here\'s how small businesses are eliminating manual data work with simple automations.',
    date: '2026-07-16',
    readTime: '7 min read',
    category: 'Operations',
    contentPath: '/blog/reduce-manual-data-entry-small-business.md'
  },
  {
    slug: 'custom-crm-vs-off-the-shelf-software',
    title: 'Custom CRM vs Off-the-Shelf Software: Which is Right for Your Business?',
    description: 'Should you build a custom CRM or buy an existing solution? This guide breaks down the costs, benefits, and decision factors.',
    date: '2026-07-16',
    readTime: '10 min read',
    category: 'Strategy',
    contentPath: '/blog/custom-crm-vs-off-the-shelf-software.md'
  },
  {
    slug: 'ai-tools-for-agencies',
    title: 'AI Tools for Agencies: The Complete Guide to Scaling Without Hiring',
    description: 'Discover the AI tools that are helping agencies scale their operations without adding headcount, from content generation to client management.',
    date: '2026-07-16',
    readTime: '9 min read',
    category: 'AI & Automation',
    contentPath: '/blog/ai-tools-for-agencies.md'
  }
]

export async function getBlogPosts(): Promise<BlogPost[]> {
  return blogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  return blogPosts.find(post => post.slug === slug) || null
}

export async function getBlogPostContent(contentPath: string): Promise<string> {
  try {
    const baseUrl = 'http://localhost:3000'
    const response = await fetch(`${baseUrl}${contentPath}`)
    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`)
    }
    const text = await response.text()

    const contentWithoutFrontmatter = text.replace(/^---[\s\S]*?---/, '')
    return contentWithoutFrontmatter
  } catch (error) {
    console.error('Error fetching blog content:', error)
    return ''
  }
}
