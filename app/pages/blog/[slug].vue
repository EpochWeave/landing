<script setup lang="ts">
import { marked } from 'marked'
import { getBlogPostBySlug, getBlogPostContent } from '~/utils/blog'

const route = useRoute()
const { calLink } = useBooking()

const post = await getBlogPostBySlug(route.params.slug as string)

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Blog post not found' })
}

const content = await getBlogPostContent(post.contentPath || '')

const renderedContent = marked(content)

useHead({
  title: `${post.title} | EpochWeave`,
  meta: [
    {
      name: 'description',
      content: post.description
    },
    { property: 'og:title', content: `${post.title} | EpochWeave` },
    { property: 'og:description', content: post.description },
    { property: 'og:url', content: `https://epochweave.com/blog/${post.slug}` },
    { property: 'og:image', content: 'https://epochweave.com/logos/logo-bg-none.png' },
    { property: 'article:published_time', content: post.date },
    { property: 'article:author', content: 'EpochWeave' },
    { name: 'twitter:title', content: `${post.title} | EpochWeave` },
    { name: 'twitter:description', content: post.description },
    { name: 'twitter:image', content: 'https://epochweave.com/logos/logo-bg-none.png' }
  ]
})
</script>

<template>
  <div class="bg-background text-on-surface">
    <TheNav />
    
    <article class="py-20">
      <div class="max-w-5xl mx-auto px-margin-desktop">
        <NuxtLink to="/blog" class="inline-flex items-center mt-5 gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm mb-8">
          <Icon name="material-symbols:arrow-back" class="text-base" />
          Back to blog
        </NuxtLink>

        <div class="mb-8">
          <div class="flex items-center gap-3 mb-4">
            <span class="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
              {{ post?.category }}
            </span>
            <span class="text-sm text-on-surface-variant">{{ post?.date }}</span>
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
            <h3 class="text-2xl font-bold text-on-surface mb-4">
              Ready to automate your workflows?
            </h3>
            <p class="text-on-surface-variant mb-6 leading-relaxed">
              Book a free 30-minute discovery call and we'll show you exactly where you can eliminate manual work in your business.
            </p>
            <a
              :href="calLink"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform"
            >
              Book Your Free Call
              <Icon name="material-symbols:arrow-forward" class="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </article>

    <CtaSection />
    <TheFooter />
  </div>
</template>
