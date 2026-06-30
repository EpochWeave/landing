<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    { rel: 'icon', type: 'image/jpeg', href: '/logos/logo-bg-none.png' }
  ]
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>
