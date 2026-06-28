<script setup lang="ts">
const { email } = useBooking()

const form = reactive({ name: '', email: '', message: '' })
const submitted = ref(false)

function submitForm() {
  submitted.value = true
}
</script>

<template>
  <footer class="bg-surface-container-low border-t border-outline/10 py-20">
    <div class="max-w-7xl mx-auto px-margin-desktop">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-gutter mb-16">

        <!-- Brand -->
        <div class="md:col-span-2">
          <div class="mb-6">
            <img
              src="/logos/logo-name.jpg"
              alt="EpochWeave"
              class="h-16 w-auto object-contain"
            />
          </div>
          <p class="text-on-surface-variant max-w-sm mb-4">
            Architecting the future of service operations through custom automation and intentional AI integration.
          </p>
          <a
            :href="`mailto:${email}`"
            class="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium mb-6"
          >
            <Icon name="material-symbols:mail" class="text-base" />
            {{ email }}
          </a>
          <div class="flex gap-4">
            <a
              href="#"
              class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center border border-outline/20 hover:border-primary transition-colors text-on-surface"
              aria-label="LinkedIn"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h5 class="font-bold text-on-surface mb-6">Quick Links</h5>
          <ul class="space-y-4 text-on-surface-variant">
            <li><a class="hover:text-primary transition-colors" href="/#services">Services</a></li>
            <li><a class="hover:text-primary transition-colors" href="/#how-it-works">How It Works</a></li>
            <li><a class="hover:text-primary transition-colors" href="/#pricing">Pricing</a></li>
            <li><NuxtLink class="hover:text-primary transition-colors" to="/about">About</NuxtLink></li>
            <li><a class="hover:text-primary transition-colors" href="/#contact">Contact</a></li>
          </ul>
        </div>

        <!-- Contact form -->
        <div>
          <h5 class="font-bold text-on-surface mb-6">Have a question?</h5>

          <div v-if="submitted" class="text-on-surface-variant text-sm py-4">
            Got it. We'll get back to you within one business day.
          </div>

          <form v-else class="flex flex-col gap-3" @submit.prevent="submitForm">
            <input
              v-model="form.name"
              type="text"
              placeholder="Name"
              required
              class="w-full px-4 py-2.5 rounded-lg border border-outline/30 bg-surface text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
            />
            <input
              v-model="form.email"
              type="email"
              placeholder="Email"
              required
              class="w-full px-4 py-2.5 rounded-lg border border-outline/30 bg-surface text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              v-model="form.message"
              placeholder="What do you need help with?"
              rows="3"
              required
              class="w-full px-4 py-2.5 rounded-lg border border-outline/30 bg-surface text-on-surface text-sm placeholder:text-on-surface-variant/50 focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              class="w-full py-2.5 bg-primary text-on-primary rounded-lg font-bold text-sm hover:scale-[1.02] transition-transform"
            >
              Send
            </button>
          </form>
        </div>

      </div>

      <div class="pt-8 border-t border-outline/10 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-sm">
        <span>&copy; 2025 EpochWeave AI Automation. All rights reserved.</span>
        <div class="flex gap-6">
          <NuxtLink to="/privacy" target="_blank" rel="noopener" class="hover:text-primary transition-colors">Privacy Policy</NuxtLink>
          <NuxtLink to="/terms" target="_blank" rel="noopener" class="hover:text-primary transition-colors">Terms of Service</NuxtLink>
          <NuxtLink to="/refund" target="_blank" rel="noopener" class="hover:text-primary transition-colors">Refund Policy</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>
