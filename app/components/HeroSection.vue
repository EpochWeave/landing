<script setup lang="ts">
const { calLink } = useBooking()

const tools = [
  { name: 'HubSpot',         slug: 'hubspot' },
  { name: 'Notion',          slug: 'notion' },
  { name: 'Gmail',           slug: 'gmail' },
  { name: 'Discord',         slug: 'discord' },
  { name: 'Stripe',          slug: 'stripe' },
  { name: 'Airtable',        slug: 'airtable' },
  { name: 'Zapier',          slug: 'zapier' },
  { name: 'Linear',          slug: 'linear' },
  { name: 'Make',            slug: 'make' },
  { name: 'ClickUp',         slug: 'clickup' },
  { name: 'Typeform',        slug: 'typeform' },
  { name: 'Trello',          slug: 'trello' },
  { name: 'Asana',           slug: 'asana' },
  { name: 'Zendesk',         slug: 'zendesk' },
  { name: 'Intercom',        slug: 'intercom' },
  { name: 'WhatsApp',        slug: 'whatsapp' },
  { name: 'Jira',            slug: 'jira' },
  { name: 'Shopify',         slug: 'shopify' },
  { name: 'Figma',           slug: 'figma' },
  { name: 'Google Sheets',   slug: 'googlesheets' },
]

function hideOnError(e: Event) {
  (e.target as HTMLElement).classList.add('hidden')
}
</script>

<template>
  <section class="relative min-h-screen pt-20 flex flex-col overflow-hidden">

    <!-- Hero grid — fills remaining viewport height -->
    <div class="flex-1 flex items-center w-full">
      <div class="max-w-7xl mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10 w-full">

        <!-- Left: Text content -->
        <div class="md:col-span-7 flex flex-col justify-center">
          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          >
            <h1 class="font-display-lg text-display-lg text-on-surface mb-6 leading-tight">
              We automate the work.<br>
              <span class="text-primary-fixed-dim">You grow the business.</span>
            </h1>
            <p class="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-xl">
              EpochWeave builds workflow automations, AI integrations, and custom internal systems for service businesses that want to scale without the headcount overhead.
            </p>
          </div>

          <div
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { duration: 600, delay: 200 } }"
            class="flex flex-wrap gap-4"
          >
            <a
              :href="calLink"
              target="_blank"
              rel="noopener"
              class="bg-primary-container text-on-primary px-8 py-4 rounded-lg font-bold hover:scale-105 transition-transform flex items-center gap-2"
            >
              Book a Free Call
              <Icon name="material-symbols:arrow-forward" class="text-lg" />
            </a>
            <a
              href="#services"
              class="border border-outline px-8 py-4 rounded-lg font-bold hover:bg-surface-container-high transition-colors text-on-surface"
            >
              See Our Services
            </a>
          </div>
        </div>

        <!-- Right: Pipeline visualization -->
        <div class="md:col-span-5 relative flex items-center justify-center pt-12 md:pt-0">
          <div class="absolute w-[120%] h-[120%] bg-primary/10 blur-[120px] rounded-full -z-10 animate-pulse" />
          <div
            v-motion
            :initial="{ opacity: 0, scale: 0.95 }"
            :enter="{ opacity: 1, scale: 1, transition: { duration: 800, delay: 100 } }"
            class="w-full"
          >
            <PipelineViz />
          </div>
        </div>

      </div>
    </div>

    <!-- Full-width logo marquee — pinned at base of hero -->
    <div
      v-motion
      :initial="{ opacity: 0 }"
      :enter="{ opacity: 1, transition: { duration: 800, delay: 500 } }"
      class="w-full py-6"
    >
      <p class="text-center font-label-mono text-[11px] text-muted-foreground/50 uppercase tracking-[0.15em] mb-5">Works with</p>
      <div class="marquee-wrap overflow-hidden marquee-fade">
        <div class="marquee-track flex items-center gap-14 w-max">
          <!-- Set 1 -->
          <img
            v-for="tool in tools"
            :key="`a-${tool.slug}`"
            :src="`https://cdn.simpleicons.org/${tool.slug}`"
            :alt="tool.name"
            class="h-7 w-auto object-contain opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-default"
            @error="hideOnError"
          />
          <!-- Set 2 — duplicate for seamless loop -->
          <img
            v-for="tool in tools"
            :key="`b-${tool.slug}`"
            :src="`https://cdn.simpleicons.org/${tool.slug}`"
            :alt="tool.name"
            aria-hidden="true"
            class="h-7 w-auto object-contain opacity-40 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300 cursor-default"
            @error="hideOnError"
          />
        </div>
      </div>
    </div>

  </section>
</template>
