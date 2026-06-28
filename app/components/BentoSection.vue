<script setup lang="ts">
const statsEl = ref<HTMLElement>()
const count60 = ref(0)
const count15 = ref(0)

function animateCounter(target: number, setter: (v: number) => void) {
  const steps = 80
  const inc = target / steps
  let current = 0
  const tick = () => {
    current += inc
    if (current >= target) {
      setter(target)
    } else {
      setter(Math.ceil(current))
      requestAnimationFrame(tick)
    }
  }
  requestAnimationFrame(tick)
}

onMounted(() => {
  if (!statsEl.value) return
  const io = new IntersectionObserver((entries) => {
    if (entries[0]?.isIntersecting) {
      animateCounter(60, v => (count60.value = v))
      animateCounter(15, v => (count15.value = v))
      io.disconnect()
    }
  }, { threshold: 0.3 })
  io.observe(statsEl.value)
})
</script>

<template>
  <section class="py-24 bg-surface-dim">
    <div class="max-w-7xl mx-auto px-margin-desktop">
      <div ref="statsEl" class="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">

        <!-- Cell 1: Image -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="md:col-span-2 relative overflow-hidden rounded-xl border border-outline/30 bg-surface-container group"
        >
          <img
            alt="Overwhelmed worker"
            src="/images/bento-team.jpg"
            class="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:scale-110 transition-transform duration-700"
          />
          <div class="relative p-8 h-full flex flex-col justify-end min-h-[240px]">
            <p class="text-xl font-semibold leading-relaxed max-w-xs">Your team spends hours every week manually copying data between tools</p>
          </div>
        </div>

        <!-- Cell 2: Stat 60% -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible-once="{ opacity: 1, scale: 1, transition: { duration: 500, delay: 100 } }"
          class="bg-surface-container rounded-xl border border-outline/30 p-8 flex flex-col justify-center items-center text-center"
        >
          <div class="flex items-end">
            <span class="text-6xl font-bold text-primary mb-0 leading-none">{{ count60 }}</span>
            <span class="text-6xl font-bold text-primary mb-0 leading-none">%</span>
          </div>
          <p class="text-on-surface-variant font-body-md">of leads go cold due to slow response times</p>
        </div>

        <!-- Cell 3: Stat $400+ -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible-once="{ opacity: 1, scale: 1, transition: { duration: 500, delay: 200 } }"
          class="bg-surface-container rounded-xl border border-outline/30 p-8 flex flex-col justify-center items-center text-center"
        >
          <span class="text-3xl font-bold text-on-surface mb-2 tracking-tight">$400+/mo</span>
          <p class="text-on-surface-variant font-body-md">spent on redundant SaaS subscriptions</p>
        </div>

        <!-- Cell 4: Image -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 300 } }"
          class="relative overflow-hidden rounded-xl border border-outline/30 bg-surface-container group"
        >
          <img
            alt="Missed notifications"
            src="/images/bento-notifications.jpg"
            class="absolute inset-0 w-full h-full object-cover opacity-15"
          />
          <div class="relative p-8 h-full flex flex-col justify-end min-h-[200px]">
            <p class="font-semibold">Client onboarding is inconsistent and fragmented</p>
          </div>
        </div>

        <!-- Cell 5: Stat 15hrs -->
        <div
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible-once="{ opacity: 1, scale: 1, transition: { duration: 500, delay: 400 } }"
          class="bg-surface-container rounded-xl border border-outline/30 p-8 flex flex-col justify-center items-center text-center"
        >
        <div class="flex items-end">
          <span class="text-5xl font-bold text-primary mb-0 leading-none">{{ count15 }}</span>
          <span class="text-2xl font-bold text-primary mb-1 leading-none">hrs</span>
        </div>
          <p class="text-on-surface-variant font-body-md">lost weekly to manual reporting</p>
        </div>

        <!-- Cell 6: CTA -->
        <div
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600, delay: 500 } }"
          class="md:col-span-2 bg-primary/10 rounded-xl border border-primary/30 p-8 flex flex-col justify-between items-start"
        >
          <p class="text-2xl font-bold text-primary leading-tight">All of this is fixable. None of it requires hiring more people.</p>
          <a
            href="#contact"
            class="mt-8 bg-primary-container text-on-primary px-8 py-3 rounded-lg font-bold transition-all flex items-center gap-2 hover:gap-4"
          >
            Show Me How
            <Icon name="material-symbols:trending-flat" />
          </a>
        </div>

      </div>
    </div>
  </section>
</template>
