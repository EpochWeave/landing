<script setup lang="ts">
definePageMeta({ layout: 'legal' })
useHead({
  title: 'Refund Policy | EpochWeave AI Automation Agency',
  meta: [
    {
      name: 'description',
      content: 'EpochWeave refund policy: transparent terms for project fees and monthly retainers. Learn about cancellation and refund procedures.'
    },
    { property: 'og:title', content: 'Refund Policy | EpochWeave AI Automation Agency' },
    { property: 'og:description', content: 'EpochWeave refund policy: transparent terms for project fees and monthly retainers. Learn about cancellation and refund procedures.' },
    { property: 'og:url', content: 'https://epochweave.com/refund' },
    { property: 'og:image', content: 'https://epochweave.com/logos/logo-bg-none.png' },
    { name: 'twitter:title', content: 'Refund Policy | EpochWeave AI Automation Agency' },
    { name: 'twitter:description', content: 'EpochWeave refund policy: transparent terms for project fees and monthly retainers. Learn about cancellation and refund procedures.' },
    { name: 'twitter:image', content: 'https://epochweave.com/logos/logo-bg-none.png' }
  ]
})
const { email, website } = useBooking()
</script>

<template>
  <div class="max-w-3xl mx-auto px-margin-desktop py-16">

    <NuxtLink to="/" class="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm mb-12">
      <Icon name="material-symbols:arrow-back" class="text-base" />
      Back to home
    </NuxtLink>

    <div class="mb-12">
      <span class="font-label-mono text-label-mono text-primary mb-3 block">LEGAL</span>
      <h1 class="text-4xl font-bold text-on-surface mb-3">Refund Policy</h1>
      <p class="text-on-surface-variant text-sm">Effective Date: July 1, 2026 · Last Updated: July 1, 2026</p>
    </div>

    <div class="space-y-10 text-on-surface-variant leading-relaxed">

      <p>EpochWeave is committed to delivering high-quality work and being transparent about our payment and refund practices.</p>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">01</span> Project Fees
        </h2>
        <p>All projects are priced on a fixed-fee basis agreed in writing before work begins.</p>
        <div class="space-y-3">
          <h3 class="font-semibold text-on-surface">Before work starts:</h3>
          <p>If you cancel your project before EpochWeave has commenced any work, your upfront payment will be refunded in full, minus any payment processing fees charged by our payment provider.</p>
        </div>
        <div class="space-y-3">
          <h3 class="font-semibold text-on-surface">After work has started:</h3>
          <p>Once work has begun, the upfront payment (50% of the total project fee) is non-refundable. This covers the time, research, and resources already committed to your project.</p>
          <p>If EpochWeave is unable to deliver the agreed scope through our own fault, we will work with you to either complete the work or issue a partial refund proportional to the work not delivered.</p>
        </div>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">02</span> Monthly Retainers
        </h2>
        <p>Monthly retainer fees cover active maintenance, monitoring, and support delivered during that billing period.</p>
        <ul class="space-y-2 pl-4 list-disc">
          <li>Retainer fees are non-refundable for work already delivered in the current billing period</li>
          <li>You may cancel your retainer at any time with 30 days written notice</li>
          <li>No further charges will be made after the notice period ends</li>
        </ul>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">03</span> How to Request a Refund
        </h2>
        <p>To request a refund or raise a concern about your project, contact us at <a :href="`mailto:${email}`" class="text-primary hover:underline">{{ email }}</a>.</p>
        <p>Please include your name, company, project details, and the reason for your request. We will respond within 3 business days and work to resolve your concern fairly and promptly.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">04</span> Disputes
        </h2>
        <p>If you are unhappy with an outcome and we cannot reach a resolution through direct communication, we are committed to good-faith mediation before any formal proceedings. We take every client concern seriously and will always work to find a fair outcome.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-3">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">05</span> Contact
        </h2>
        <p>
          <a :href="`mailto:${email}`" class="text-primary hover:underline">{{ email }}</a> ·
          <a :href="website" class="text-primary hover:underline">{{ website }}</a>
        </p>
      </section>

    </div>
  </div>
</template>
