<script setup lang="ts">
import { site } from '../utils/site'

// Fallback form shown when the HubSpot embed can't load (blocked by an ad
// blocker, offline, etc.). Posts to Web3Forms when NUXT_PUBLIC_WEB3FORMS_KEY
// is set; otherwise it opens the visitor's email app with the message filled in.
const { web3formsKey } = useRuntimeConfig().public

const name = ref('')
const email = ref('')
const message = ref('')
const status = ref<'idle' | 'sending' | 'success' | 'error'>('idle')

const inputClass = 'w-full bg-surface border border-outline/40 rounded-lg px-4 py-3 text-on-surface placeholder:text-on-surface-variant/60 focus:outline-none focus:border-primary'

function mailtoHref() {
  const subject = encodeURIComponent(`Automation inquiry from ${name.value}`)
  const body = encodeURIComponent(`${message.value}\n\n${name.value}\n${email.value}`)
  return `mailto:${site.email}?subject=${subject}&body=${body}`
}

async function onSubmit() {
  if (!web3formsKey) {
    window.location.href = mailtoHref()
    status.value = 'success'
    return
  }

  status.value = 'sending'
  try {
    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        access_key: web3formsKey,
        subject: `New inquiry from ${name.value}`,
        from_name: 'EpochWeave website',
        name: name.value,
        email: email.value,
        message: message.value
      })
    })
    const data = await res.json().catch(() => ({}))
    if (!res.ok || data.success === false) throw new Error(data.message || res.statusText)
    status.value = 'success'
    name.value = email.value = message.value = ''
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <div class="text-left">
    <div v-if="status === 'success'" role="status" class="bg-primary/10 border border-primary/30 rounded-xl p-6 text-on-surface">
      <p class="font-bold mb-1">Thanks, your message is on its way.</p>
      <p class="text-on-surface-variant text-sm">We will get back to you by email. If your email app opened instead, just press send there.</p>
    </div>

    <form v-else class="space-y-4" @submit.prevent="onSubmit">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label class="block">
          <span class="block text-sm font-medium text-on-surface mb-1">Name</span>
          <input v-model="name" name="name" type="text" autocomplete="name" required :class="inputClass" />
        </label>
        <label class="block">
          <span class="block text-sm font-medium text-on-surface mb-1">Email</span>
          <input v-model="email" name="email" type="email" autocomplete="email" required :class="inputClass" />
        </label>
      </div>
      <label class="block">
        <span class="block text-sm font-medium text-on-surface mb-1">What do you want automated?</span>
        <textarea v-model="message" name="message" rows="4" required :class="inputClass" placeholder="e.g. Every new lead from our website gets copied into a spreadsheet by hand." />
      </label>
      <p v-if="status === 'error'" role="alert" class="text-sm text-red-600">
        Something went wrong sending your message. Please email us at
        <a :href="`mailto:${site.email}`" class="underline">{{ site.email }}</a>.
      </p>
      <button
        type="submit"
        :disabled="status === 'sending'"
        class="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 rounded-lg font-bold hover:scale-[1.02] transition-transform disabled:opacity-60"
      >
        {{ status === 'sending' ? 'Sending…' : 'Send message' }}
      </button>
    </form>
  </div>
</template>
