import { marked } from 'marked'

// Bundled at build time so article bodies are part of the prerendered HTML.
const markdownFiles = import.meta.glob<string>('../assets/blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true
})

export function getBlogPostHtml(slug: string): string {
  const raw = markdownFiles[`../assets/blog/${slug}.md`]
  if (!raw) return ''
  const body = raw.replace(/^---[\s\S]*?---/, '')
  return marked.parse(body, { async: false })
}
