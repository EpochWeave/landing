<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'icon', type: 'image/jpeg', href: '/logos/logo-bg-none.png' }
  ],
  script: [
    {
      async: true,
      src: 'https://www.googletagmanager.com/gtag/js?id=G-8PZVN3K78D'
    },
    {
      innerHTML: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-8PZVN3K78D');
      `
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'EpochWeave',
        description: 'AI automation agency building workflow automations, AI integrations, and custom internal systems for service businesses.',
        url: 'https://epochweave.com',
        logo: 'https://epochweave.com/logos/logo-bg-none.png',
        sameAs: [
          'https://web.facebook.com/profile.php?id=61592023613388'
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'sales',
          areaServed: 'US, UK, EU, KE',
          availableLanguage: 'English'
        },
        service: [
          {
            '@type': 'Service',
            name: 'Workflow Automation',
            description: 'Connect existing tools and build automated pipelines that move data, send notifications, and handle repetitive tasks.'
          },
          {
            '@type': 'Service',
            name: 'AI Integration',
            description: 'Embed AI directly into operations to summarize calls, categorize tickets, generate content, and make data-driven decisions.'
          },
          {
            '@type': 'Service',
            name: 'Custom Application Development',
            description: 'Build internal tools tailored to exactly how your business works, giving you a competitive edge with custom software.'
          }
        ]
      })
    }
  ],
  meta: [
    { property: 'og:site_name', content: 'EpochWeave' },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:site', content: '@epochweave' }
  ]
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>
