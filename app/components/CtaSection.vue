<script setup lang="ts">
const { calLink } = useBooking()
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
        Book a free 30-minute discovery call and we'll show you exactly where you can shave 10-20 hours off your team's week.
      </p>
      <a
        :href="calLink"
        target="_blank"
        rel="noopener"
        class="bg-primary text-on-primary px-12 py-5 rounded-lg text-xl font-bold hover:scale-105 transition-transform inline-flex items-center gap-4 shadow-[0_0_40px_rgba(245,197,24,0.2)]"
      >
        Book Your Free Call
        <Icon name="material-symbols:arrow-right-alt" class="text-2xl" />
      </a>
    </div>
  </section>
</template>
