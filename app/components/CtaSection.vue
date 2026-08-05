<script setup lang="ts">
const { calLink } = useBooking()

useHead({
  script: [
    {
      src: 'https://js-eu1.hsforms.net/forms/embed/149044632.js',
      defer: true,
    },
  ],
})
</script>

<template>
  <section class="py-32 relative overflow-hidden bg-surface" id="contact">
    <div class="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
    <div class="absolute -top-16 -right-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

    <div
      v-motion
      :initial="{ opacity: 0, y: 40 }"
      :visible-once="{ opacity: 1, y: 0, transition: { duration: 700 } }"
      class="max-w-3xl mx-auto px-margin-desktop text-center relative z-10"
    >
      <h2 class="font-display-lg text-display-lg text-on-surface mb-6">
        Ready to stop doing work your tools should handle?
      </h2>
      <p class="font-body-lg text-body-lg text-on-surface-variant mb-12">
        Send us a quick message and we'll show you exactly where you can shave 10-20 hours off your team's week.
      </p>
      <div class="max-w-2xl mx-auto">
        <div
          class="hs-form-frame"
          data-region="eu1"
          data-form-id="835bd968-6951-4cba-a8bc-065560548482"
          data-portal-id="149044632"
        ></div>
      </div>
      <a
        :href="calLink"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mt-8 text-sm font-medium"
      >
        Prefer to talk? Book a free call
        <Icon name="material-symbols:arrow-right-alt" class="text-base" />
      </a>
    </div>
  </section>
</template>
