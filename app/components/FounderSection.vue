<script setup lang="ts">
import { site } from '../utils/site'

const initials = site.ownerName
  .split(/\s+/)
  .map(part => part[0])
  .join('')
  .slice(0, 2)
  .toUpperCase()
</script>

<template>
  <section class="py-24 bg-surface" id="founder" aria-labelledby="founder-heading">
    <div class="max-w-4xl mx-auto px-margin-desktop">
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="flex flex-col md:flex-row items-center md:items-start gap-10 bg-surface-container border border-outline/30 rounded-xl p-stack-lg"
      >
        <!-- TODO(Vincent): swap the initials for a real photo of you, e.g.
             <img src="/images/vincent.jpg" alt="Vincent, founder of EpochWeave" class="w-28 h-28 rounded-full object-cover" /> -->
        <div
          class="w-28 h-28 shrink-0 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary text-4xl font-bold font-headline-md"
          role="img"
          :aria-label="`${site.ownerName}, founder of ${site.name}`"
        >
          {{ initials }}
        </div>
        <div class="text-center md:text-left">
          <span class="font-label-mono text-label-mono text-primary mb-3 block">WHO'S BEHIND EPOCHWEAVE</span>
          <h2 id="founder-heading" class="font-headline-md text-headline-md text-on-surface mb-2">{{ site.ownerName }}</h2>
          <p class="text-on-surface-variant text-sm mb-4">{{ site.ownerRole }} · {{ site.location }}</p>
          <p class="text-on-surface-variant leading-relaxed">{{ site.ownerBio }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
