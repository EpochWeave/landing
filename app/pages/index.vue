<script setup lang="ts">
useHead({
  title: 'AI Automation Agency for Service Businesses | EpochWeave',
  meta: [
    {
      name: 'description',
      content: 'We build workflow automation and AI systems for service businesses. Fixed pricing, free discovery call, results in weeks not months.'
    },
    { property: 'og:title', content: 'AI Automation Agency for Service Businesses | EpochWeave' },
    { property: 'og:description', content: 'We build workflow automation and AI systems for service businesses. Fixed pricing, free discovery call, results in weeks not months.' },
    { property: 'og:url', content: 'https://epochweave.com' },
    { property: 'og:image', content: 'https://epochweave.com/images/hero.jpg' },
    { name: 'twitter:title', content: 'AI Automation Agency for Service Businesses | EpochWeave' },
    { name: 'twitter:description', content: 'We build workflow automation and AI systems for service businesses. Fixed pricing, free discovery call, results in weeks not months.' },
    { name: 'twitter:image', content: 'https://epochweave.com/images/hero.jpg' }
  ]
})
</script>

<template>
  <div class="bg-background text-on-surface">
    <TheNav />
    <HeroSection />
    <ServicesSection />
    <BentoSection />
    <ProcessSection />
    <PricingSection />
    <CtaSection />
    <TheFooter />
  </div>
</template>
