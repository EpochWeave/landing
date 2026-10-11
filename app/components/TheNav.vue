<script setup lang="ts">
import { mainNavItems, navItemTo } from '../utils/navigation'

const isScrolled = ref(false)
const navLinkClass = 'text-on-surface-variant font-medium hover:text-primary transition-colors duration-300 text-body-md'

function onScroll() {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <nav
    :class="[
      'fixed top-0 w-full z-[60] transition-all duration-300 glass-nav border-b border-secondary-container/30',
      isScrolled ? 'py-3' : 'h-20'
    ]"
  >
    <div class="max-w-7xl mx-auto px-margin-desktop h-full flex justify-between items-center">
      <NuxtLink to="/" class="flex items-center" aria-label="EpochWeave home">
        <img
          src="/logos/plain.jpg"
          alt="EpochWeave"
          class="h-11 w-auto object-contain"
        />
      </NuxtLink>

      <div class="hidden md:flex gap-8 items-center">
        <NuxtLink v-for="item in mainNavItems" :key="item.label" :to="navItemTo(item)" :class="navLinkClass">{{ item.label }}</NuxtLink>
      </div>

      <NuxtLink
        to="/#contact"
        class="bg-primary-container text-on-primary px-6 py-3 rounded-lg font-bold hover:scale-95 transition-transform duration-300 active:scale-90"
      >
        Contact
      </NuxtLink>
    </div>
  </nav>
</template>
