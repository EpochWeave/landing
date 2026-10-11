<script setup lang="ts">
const services = [
  {
    tag: 'AUTOMATION',
    title: 'Workflow Automation',
    description: 'We connect your existing tools and build automated pipelines that move data, send notifications, and handle repetitive tasks around the clock.',
    image: '/images/service-workflow.png',
    alt: 'Diagram of connected tools passing data in an automated workflow',
    delay: 0,
  },
  {
    tag: 'ARTIFICIAL INTELLIGENCE',
    title: 'AI Integration',
    description: 'We embed AI directly into your operations to summarize calls, categorize tickets, generate content, and sort incoming requests in seconds.',
    image: '/images/service-ai.png',
    alt: 'Illustration of AI processing business requests',
    delay: 150,
  },
  {
    tag: 'CUSTOM SYSTEMS',
    title: 'Custom Applications',
    description: 'We build internal tools tailored to exactly how your business works, so your software fits your process instead of the other way around.',
    image: '/images/service-apps.png',
    alt: 'Example dashboard from a custom internal tool',
    delay: 300,
  },
]
</script>

<template>
  <section class="py-24 bg-surface-container-lowest" id="services">
    <div class="max-w-7xl mx-auto px-margin-desktop">

      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="mb-16"
      >
        <span class="font-label-mono text-label-mono text-primary mb-4 block">WHAT WE BUILD</span>
        <h2 class="font-headline-md text-headline-md text-on-surface">Three ways we take manual work off your plate</h2>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div
          v-for="service in services"
          :key="service.title"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: service.delay } }"
          class="group border-glow bg-surface-container rounded-xl p-stack-lg hover-glow flex flex-col"
        >
          <div class="mb-6 overflow-hidden rounded-lg aspect-video bg-surface-container-high">
            <img
              :alt="service.alt"
              :src="service.image"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <span class="font-label-mono text-[10px] bg-primary/10 text-primary px-2 py-1 rounded w-fit mb-4">{{ service.tag }}</span>
          <h3 class="font-headline-md text-2xl text-on-surface mb-3">{{ service.title }}</h3>
          <p class="text-on-surface-variant font-body-md mb-6 flex-grow">{{ service.description }}</p>
          <div class="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
            <span>Learn more</span>
            <Icon name="material-symbols:east" />
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
