<script setup lang="ts">
import { mainNavItems } from '../utils/navigation'

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
      <a href="/" class="flex items-center">
        <img
          src="/logos/plain.jpg"
          alt="EpochWeave"
          class="h-11 w-auto object-contain"
        />
      </a>

      <div class="hidden md:flex gap-8 items-center">
        <template v-for="item in mainNavItems" :key="item.label">
          <NuxtLink v-if="item.path" :to="item.path" :class="navLinkClass">{{ item.label }}</NuxtLink>
          <a v-else :href="`#${item.anchor}`" :class="navLinkClass">{{ item.label }}</a>
        </template>
      </div>

      <a
        href="/#contact"
        class="bg-primary-container text-on-primary px-6 py-3 rounded-lg font-bold hover:scale-95 transition-transform duration-300 active:scale-90"
      >
        Contact
      </a>
    </div>
  </nav>
</template>
