<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'icon', type: 'image/jpeg', href: '/logos/plain.jpg' }
  ]
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>
