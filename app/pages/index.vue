<script setup lang="ts">
usePageSeo({
  title: 'AI Automation Agency for Service Businesses | EpochWeave',
  description: 'We build workflow automations and AI systems for small service businesses. One-off build fee, optional monthly care plan, free discovery call.',
  path: '/',
  image: '/images/hero.jpg'
})
</script>

<template>
  <div class="bg-background text-on-surface">
    <TheNav />
    <main>
      <HeroSection />
      <ServicesSection />
      <BentoSection />
      <ProcessSection />
      <CaseStudy />
      <FounderSection />
      <PricingSection />
    </main>
    <CtaSection />
    <TheFooter />
  </div>
</template>
