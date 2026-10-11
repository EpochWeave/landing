<script setup lang="ts">
import { getBlogPostBySlug } from '~/utils/blog'
import { getBlogPostHtml } from '~/utils/blogContent'
import { site, absoluteUrl } from '~/utils/site'

const route = useRoute()
const post = getBlogPostBySlug(route.params.slug as string)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Blog post not found', fatal: true })
}

const renderedContent = getBlogPostHtml(post.slug)

usePageSeo({
  title: `${post.title} | ${site.name}`,
  description: post.description,
  path: `/blog/${post.slug}`,
  type: 'article',
  meta: [
    { property: 'article:published_time', content: post.date },
    { property: 'article:author', content: site.ownerName }
  ]
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
        author: { '@type': 'Person', name: site.ownerName },
        publisher: {
          '@type': 'Organization',
          name: site.name,
          logo: { '@type': 'ImageObject', url: absoluteUrl(site.defaultImage) }
        }
      })
    }
  ]
})
</script>

<template>
  <div class="bg-background text-on-surface">
    <TheNav />

    <main>
      <article class="py-20">
        <div class="max-w-5xl mx-auto px-margin-desktop">
          <NuxtLink to="/blog" class="inline-flex items-center mt-5 gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm mb-8">
            <Icon name="material-symbols:arrow-back" class="text-base" />
            Back to blog
          </NuxtLink>

          <div class="mb-8">
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span class="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                {{ post?.category }}
              </span>
              <span class="text-sm text-on-surface-variant">By {{ site.ownerName }}</span>
              <time :datetime="post?.date" class="text-sm text-on-surface-variant">· {{ post?.date }}</time>
              <span class="text-sm text-on-surface-variant">· {{ post?.readTime }}</span>
            </div>
            <h1 class="font-display-lg text-display-lg text-on-surface mb-6 leading-tight">
              {{ post?.title }}
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {{ post?.description }}
            </p>
          </div>

          <div class="prose prose-lg prose-headings:font-display prose-headings:text-on-surface prose-p:text-on-surface-variant prose-a:text-primary prose-strong:text-on-surface prose-ul:text-on-surface-variant prose-ol:text-on-surface-variant prose-li:text-on-surface-variant prose-code:text-primary prose-pre:text-on-surface-variant max-w-none">
            <div v-html="renderedContent" class="blog-content"></div>
          </div>

          <div class="mt-16 pt-8 border-t border-outline/30">
            <div class="bg-surface-container-low rounded-xl p-8">
              <h2 class="text-2xl font-bold text-on-surface mb-4">
                Ready to automate your workflows?
              </h2>
              <p class="text-on-surface-variant mb-6 leading-relaxed">
                Book a free 30-minute discovery call and we'll show you exactly where you can cut manual work in your business.
              </p>
              <a
                href="#contact"
                class="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform"
              >
                Contact
                <Icon name="material-symbols:arrow-forward" class="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </article>
    </main>

    <CtaSection />
    <TheFooter />
  </div>
</template>
