<script setup lang="ts">
const timelineProgress = ref(0)

function onScroll() {
  const section = document.getElementById('how-it-works')
  if (!section) return
  const rect = section.getBoundingClientRect()
  const progress = Math.min(Math.max(1 - rect.top / window.innerHeight, 0), 1)
  timelineProgress.value = progress
}

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

const steps = [
  { n: 1, title: 'Discovery Call',         desc: 'We map your current workflows and identify the biggest bottlenecks.', delay: 0 },
  { n: 2, title: 'Scope & Proposal',        desc: 'We design a custom automation roadmap with clear ROI projections.', delay: 150 },
  { n: 3, title: 'We Build',               desc: 'Our engineers develop and stress-test your new automated ecosystem.', delay: 300 },
  { n: 4, title: 'Delivery & Maintenance', desc: 'We launch your systems and provide ongoing support to keep them running.', delay: 450 },
]
</script>

<template>
  <section class="py-24 bg-surface relative overflow-hidden" id="how-it-works">
    <div class="max-w-7xl mx-auto px-margin-desktop relative z-10">

      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-20"
      >
        <span class="font-label-mono text-label-mono text-primary mb-4 block">OUR PROCESS</span>
        <h2 class="font-headline-md text-headline-md">From Manual Chaos to Automated Excellence</h2>
      </div>

      <div class="relative">
        <!-- Timeline track -->
        <div class="absolute top-6 left-0 w-full h-[2px] bg-outline/20 hidden md:block">
          <div
            class="h-full bg-primary origin-left transition-transform duration-100"
            :style="{ transform: `scaleX(${timelineProgress})` }"
          />
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter relative">
          <div
            v-for="step in steps"
            :key="step.n"
            v-motion
            :initial="{ opacity: 0, y: 40 }"
            :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: step.delay } }"
            class="flex flex-col items-center text-center"
          >
            <div class="w-12 h-12 rounded-full bg-surface-container border-2 border-primary flex items-center justify-center text-primary font-bold mb-6 relative z-20">
              {{ step.n }}
            </div>
            <h4 class="text-xl font-bold mb-2">{{ step.title }}</h4>
            <p class="text-on-surface-variant font-body-md">{{ step.desc }}</p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
