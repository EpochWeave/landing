<script setup lang="ts">
import { getBlogPosts } from '~/utils/blog'

const posts = getBlogPosts()

usePageSeo({
  title: 'Blog | EpochWeave AI Automation Agency',
  description: 'Practical guides on workflow automation, AI integration, and custom software for service businesses, written by EpochWeave.',
  path: '/blog'
})
</script>

<template>
  <div class="bg-background text-on-surface">
    <TheNav />

    <main>
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-margin-desktop">
        <div class="max-w-3xl">
          <span class="font-label-mono text-label-mono text-primary mb-4 block">BLOG</span>
          <h1 class="font-display-lg text-display-lg text-on-surface mb-6 leading-tight">
            Insights on Automation, AI, and Building Systems That Scale
          </h1>
          <p class="font-body-lg text-body-lg text-on-surface-variant">
            Practical guides and strategies for service businesses looking to eliminate manual work and grow efficiently.
          </p>
        </div>
      </div>
    </section>

    <section class="py-12 bg-surface-container-lowest">
      <div class="max-w-7xl mx-auto px-margin-desktop">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NuxtLink
            v-for="post in posts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="group bg-surface-container border border-outline/30 rounded-xl p-8 hover-glow transition-all"
          >
            <div class="flex flex-wrap items-center gap-3 mb-4">
              <span class="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full uppercase tracking-wider">
                {{ post.category }}
              </span>
              <time :datetime="post.date" class="text-sm text-on-surface-variant">{{ post.date }}</time>
              <span class="text-sm text-on-surface-variant">· {{ post.readTime }}</span>
            </div>
            <h2 class="text-2xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">
              {{ post.title }}
            </h2>
            <p class="text-on-surface-variant leading-relaxed mb-4">
              {{ post.description }}
            </p>
            <div class="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
              <span>Read article</span>
              <Icon name="material-symbols:arrow-forward" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    </main>

    <CtaSection />
    <TheFooter />
  </div>
</template>
