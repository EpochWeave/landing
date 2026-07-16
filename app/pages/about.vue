<script setup lang="ts">
definePageMeta({ layout: 'legal' })
useHead({
  title: 'About EpochWeave | AI Workflow Automation Experts',
  meta: [
    {
      name: 'description',
      content: 'EpochWeave is an AI automation agency helping service businesses eliminate manual work through workflow automation, AI integration, and custom software solutions.'
    },
    { property: 'og:title', content: 'About EpochWeave | AI Workflow Automation Experts' },
    { property: 'og:description', content: 'EpochWeave is an AI automation agency helping service businesses eliminate manual work through workflow automation, AI integration, and custom software solutions.' },
    { property: 'og:url', content: 'https://epochweave.com/about' },
    { property: 'og:image', content: 'https://epochweave.com/logos/logo-bg-none.png' },
    { name: 'twitter:title', content: 'About EpochWeave | AI Workflow Automation Experts' },
    { name: 'twitter:description', content: 'EpochWeave is an AI automation agency helping service businesses eliminate manual work through workflow automation, AI integration, and custom software solutions.' },
    { name: 'twitter:image', content: 'https://epochweave.com/logos/logo-bg-none.png' }
  ]
})
const { calLink } = useBooking()
</script>

<template>
  <div>

    <!-- Hero -->
    <div class="max-w-4xl mx-auto px-margin-desktop pt-16 mb-24">
      <NuxtLink to="/" class="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm mb-12">
        <Icon name="material-symbols:arrow-back" class="text-base" />
        Back to home
      </NuxtLink>
      <span class="font-label-mono text-label-mono text-primary mb-4 block">ABOUT</span>
      <h1 class="text-4xl md:text-5xl font-bold text-on-surface leading-tight mb-8">
        We build the systems that run your business in the background.
      </h1>
      <p class="text-xl text-on-surface-variant leading-relaxed max-w-3xl">
        Most service businesses are stuck in the same trap: talented people spending hours every week on work that should not require a human. Copying data between tools. Chasing invoices. Sending follow-up emails manually. Onboarding clients the same way, by hand, every time.
      </p>
      <p class="text-xl text-on-surface-variant leading-relaxed max-w-3xl mt-4">
        This is not a people problem. It is a systems problem. EpochWeave exists to fix it.
      </p>
    </div>

    <!-- What We Do -->
    <div class="bg-surface-container-low py-20 mb-0">
      <div class="max-w-4xl mx-auto px-margin-desktop">
        <span class="font-label-mono text-label-mono text-primary mb-4 block">WHAT WE DO</span>
        <h2 class="text-3xl font-bold text-on-surface mb-12">We are an AI automation and custom software agency working with service businesses worldwide. We do three things, and we do them well.</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div class="space-y-4">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="material-symbols:account-tree" class="text-primary" />
            </div>
            <h3 class="text-xl font-bold text-on-surface">Workflow Automation</h3>
            <p class="text-on-surface-variant leading-relaxed">We connect the tools your business already uses and build automated pipelines between them. A lead comes in and gets logged, qualified, and followed up with automatically. A client signs and a project gets created, an invoice gets sent, and an onboarding sequence kicks off without anyone touching a keyboard.</p>
          </div>
          <div class="space-y-4">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="material-symbols:psychology" class="text-primary" />
            </div>
            <h3 class="text-xl font-bold text-on-surface">AI Integration</h3>
            <p class="text-on-surface-variant leading-relaxed">We embed AI directly into your operations. Not as a novelty — as infrastructure. AI that qualifies your inbound leads before you see them. AI that drafts follow-up emails in your voice. AI that summarises meeting notes and pulls out action items. Real intelligence doing real work inside your actual workflow.</p>
          </div>
          <div class="space-y-4">
            <div class="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon name="material-symbols:dashboard-customize" class="text-primary" />
            </div>
            <h3 class="text-xl font-bold text-on-surface">Custom Applications</h3>
            <p class="text-on-surface-variant leading-relaxed">We build internal tools designed around exactly how your business works. Custom CRM. Proposal builders. Client portals. If you are paying $200–$500 a month for software that covers 70% of what you need — we build the version that covers 100%, owned by you, with no monthly subscription to a product built for someone else.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- How We Work -->
    <div class="max-w-4xl mx-auto px-margin-desktop py-20">
      <span class="font-label-mono text-label-mono text-primary mb-4 block">HOW WE WORK</span>
      <h2 class="text-3xl font-bold text-on-surface mb-8">From your first call to a running system.</h2>
      <div class="space-y-6 text-on-surface-variant leading-relaxed text-lg max-w-3xl">
        <p>Every engagement starts with a free 30-minute discovery call. We map your current workflow, find where time is being lost, and identify the highest-impact changes we can make. Then we send a clear written proposal — exactly what we will build, how long it takes, and what it costs — before any work begins.</p>
        <p>We handle everything technical. You do not need to understand APIs, webhooks, or databases. You need to tell us what is slow and painful in your business. We handle the rest and walk you through the result in plain language.</p>
        <p>After delivery, we stay on. We monitor your automations, fix issues before you notice them, and add new workflows as your business grows. The retainer is not a support ticket queue — it is an ongoing partnership.</p>
      </div>
    </div>

    <!-- Who We Work With + Why EpochWeave -->
    <div class="bg-surface-container-low py-20">
      <div class="max-w-4xl mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <span class="font-label-mono text-label-mono text-primary mb-4 block">WHO WE WORK WITH</span>
          <h2 class="text-2xl font-bold text-on-surface mb-6">Service businesses with 1 to 20 people who are growing but drowning in operational complexity.</h2>
          <p class="text-on-surface-variant leading-relaxed">Agencies. Consultants. Recruiters. Coaches. Professional service firms. Businesses that bill for their expertise but spend too much time on the administration around it.</p>
          <p class="text-on-surface-variant leading-relaxed mt-4">They are not looking for a large agency with ten account managers and a slide deck. They want someone technical who understands their operations, moves fast, and communicates clearly. That is what we are.</p>
        </div>
        <div>
          <span class="font-label-mono text-label-mono text-primary mb-4 block">WHY EPOCHWEAVE</span>
          <h2 class="text-2xl font-bold text-on-surface mb-6">A focused agency with a clear point of view.</h2>
          <p class="text-on-surface-variant leading-relaxed">We are not a marketplace of freelancers. We are not a software company selling a one-size-fits-all product. Automation should fit how your business actually works, not the other way around.</p>
          <p class="text-on-surface-variant leading-relaxed mt-4">We work with a small number of clients at a time deliberately. Not because we cannot handle more — because quality requires focus. Every client gets our full attention, not a junior handoff.</p>
        </div>
      </div>
    </div>

    <!-- Where We Are + CTA -->
    <div class="max-w-4xl mx-auto px-margin-desktop py-20">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
        <div>
          <span class="font-label-mono text-label-mono text-primary mb-4 block">WHERE WE ARE</span>
          <h2 class="text-2xl font-bold text-on-surface mb-4">Based in Nairobi, Kenya. Working globally.</h2>
          <p class="text-on-surface-variant leading-relaxed">We work with clients across the United States, United Kingdom, Europe, and beyond. We operate entirely remotely — discovery calls, project delivery, and ongoing support all happen online. Geography has never stopped us from doing excellent work.</p>
        </div>
        <div class="bg-primary/5 rounded-2xl p-8 border border-primary/10 flex flex-col justify-center">
          <h3 class="text-xl font-bold text-on-surface mb-4">Ready to talk?</h3>
          <p class="text-on-surface-variant mb-6 leading-relaxed">We will map out exactly what we would automate in your business and what it would cost. No pressure. No jargon. Just an honest conversation about what is possible.</p>
          <a
            :href="calLink"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 bg-primary text-on-primary px-6 py-3 rounded-lg font-bold hover:scale-105 transition-transform self-start"
          >
            Book a free 30-minute call
            <Icon name="material-symbols:arrow-forward" class="text-base" />
          </a>
        </div>
      </div>
    </div>

  </div>
</template>
