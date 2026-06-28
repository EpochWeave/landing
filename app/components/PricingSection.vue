<script setup lang="ts">
const { calLink } = useBooking()
</script>

<template>
  <section class="py-24 bg-surface-container-lowest" id="pricing">
    <div class="max-w-7xl mx-auto px-margin-desktop">

      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-16"
      >
        <span class="font-label-mono text-label-mono text-primary mb-4 block">PRICING</span>
        <h2 class="font-headline-md text-headline-md mb-4">Simple, honest pricing.<br>Scoped to your actual needs.</h2>
        <p class="text-on-surface-variant max-w-xl mx-auto">
          Every project starts with a free discovery call where we map your workflow and give you a fixed price before any work begins. No hourly billing. No surprises.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">

        <!-- Card 1: Automation & AI -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="bg-surface-container border border-outline/30 rounded-xl p-stack-lg hover-glow flex flex-col"
        >
          <span class="font-label-mono text-label-mono text-primary mb-3 block">AUTOMATION &amp; AI INTEGRATION</span>
          <h3 class="text-2xl font-bold mb-2">Connect your tools.<br>Eliminate the manual work.</h3>
          <p class="text-on-surface-variant mb-8">For businesses that want their existing tools working together, automatically.</p>
          <div class="mb-3">
            <div class="text-4xl font-bold text-on-surface">$1,500</div>
            <span class="text-on-surface-variant font-body-md">· Fixed project fee</span>
          </div>
          <div class="mb-8 p-4 bg-surface rounded-lg border border-outline/10 text-on-surface-variant text-sm">
            + from <span class="text-primary font-semibold">$350/mo</span> to keep it running and improving
          </div>
          <ul class="space-y-4 mb-10 flex-grow">
            <li class="flex items-start gap-3 text-on-surface-variant">
              <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
              Your tools connected and talking to each other
            </li>
            <li class="flex items-start gap-3 text-on-surface-variant">
              <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
              Manual data entry eliminated from your workflow
            </li>
            <li class="flex items-start gap-3 text-on-surface-variant">
              <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
              Leads, clients, or tasks managed automatically
            </li>
            <li class="flex items-start gap-3 text-on-surface-variant">
              <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
              AI handling qualification, drafting, or summarising
            </li>
            <li class="flex items-start gap-3 text-on-surface-variant">
              <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
              Delivered with a live walkthrough and documentation
            </li>
            <li class="flex items-start gap-3 text-on-surface-variant">
              <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
              Monitored and maintained monthly
            </li>
          </ul>
          <a
            :href="calLink"
            target="_blank"
            rel="noopener"
            class="w-full py-4 border border-outline rounded-lg font-bold hover:bg-surface-container-high transition-colors text-center"
          >
            Book a Free Discovery Call
          </a>
        </div>

        <!-- Card 2: Custom Application -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 150 } }"
          class="bg-surface-container-high pricing-pulse rounded-xl p-stack-lg hover-glow flex flex-col relative"
        >
          <div class="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-on-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
            Most Popular
          </div>
          <span class="font-label-mono text-label-mono text-primary mb-3 block">CUSTOM INTERNAL SYSTEM</span>
          <h3 class="text-2xl font-bold mb-2">Built around how<br>you actually work.</h3>
          <p class="text-on-surface-variant mb-8">For businesses that need software shaped to them, not the other way around.</p>
          <div class="mb-3">
            <div class="text-4xl font-bold text-primary">$3,000</div>
            <span class="text-on-surface-variant font-body-md">· Fixed project fee</span>
          </div>
          <div class="mb-8 p-4 bg-surface rounded-lg border border-primary/10 text-on-surface-variant text-sm">
            + from <span class="text-primary font-semibold">$500/mo</span> maintenance and hosting
          </div>
          <ul class="space-y-4 mb-10 flex-grow">
            <li class="flex items-start gap-3 text-on-surface-variant">
              <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
              Everything in Automation &amp; AI
            </li>
            <li class="flex items-start gap-3 text-on-surface-variant">
              <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
              A system built around your exact workflow
            </li>
            <li class="flex items-start gap-3 text-on-surface-variant">
              <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
              Stop paying for SaaS tools that almost fit
            </li>
            <li class="flex items-start gap-3 text-on-surface-variant">
              <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
              Your team works in one place instead of five
            </li>
            <li class="flex items-start gap-3 text-on-surface-variant">
              <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
              Scales as your business grows
            </li>
            <li class="flex items-start gap-3 text-on-surface-variant">
              <Icon name="material-symbols:check-circle" class="text-primary shrink-0" />
              You own it — no vendor lock-in
            </li>
          </ul>
          <a
            :href="calLink"
            target="_blank"
            rel="noopener"
            class="w-full py-4 bg-primary text-on-primary rounded-lg font-bold hover:scale-[1.02] transition-transform text-center"
          >
            Book a Free Discovery Call
          </a>
        </div>

      </div>

      <!-- Bottom callout -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
        class="text-center mt-12 max-w-xl mx-auto"
      >
        <p class="text-on-surface-variant">
          Not sure which fits your situation?
          <a :href="calLink" target="_blank" rel="noopener" class="text-primary font-semibold hover:underline">Book a free 30-minute call.</a>
          We'll tell you exactly what we'd build, how long it takes, and what it costs. No obligation.
        </p>
      </div>

    </div>
  </section>
</template>
