<script setup lang="ts">
definePageMeta({ layout: 'legal' })
useHead({ title: 'Terms of Service — EpochWeave' })
</script>

<template>
  <div class="max-w-3xl mx-auto px-margin-desktop py-16">

    <NuxtLink to="/" class="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm mb-12">
      <Icon name="material-symbols:arrow-back" class="text-base" />
      Back to home
    </NuxtLink>

    <div class="mb-12">
      <span class="font-label-mono text-label-mono text-primary mb-3 block">LEGAL</span>
      <h1 class="text-4xl font-bold text-on-surface mb-3">Terms of Service</h1>
      <p class="text-on-surface-variant text-sm">Effective Date: July 1, 2026 · Last Updated: July 1, 2026</p>
    </div>

    <div class="space-y-10 text-on-surface-variant leading-relaxed">

      <p>
        These Terms of Service govern the relationship between EpochWeave ("we," "us," "our") and any individual or
        business ("Client," "you") that engages our services. By booking a discovery call, signing a proposal, or
        making a payment, you agree to these Terms.
      </p>
      <p>
        EpochWeave is operated by [Your Legal Full Name] as a sole proprietor based in Nairobi, Kenya.
      </p>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">01</span> Services
        </h2>
        <p>EpochWeave provides the following services:</p>
        <ul class="space-y-3 pl-0">
          <li class="flex items-start gap-3">
            <Icon name="material-symbols:arrow-forward" class="text-primary text-base mt-0.5 shrink-0" />
            <span><strong class="text-on-surface">Workflow Automation</strong> — designing and building automated pipelines between your existing business tools</span>
          </li>
          <li class="flex items-start gap-3">
            <Icon name="material-symbols:arrow-forward" class="text-primary text-base mt-0.5 shrink-0" />
            <span><strong class="text-on-surface">AI Integration</strong> — embedding artificial intelligence into your business workflows and operations</span>
          </li>
          <li class="flex items-start gap-3">
            <Icon name="material-symbols:arrow-forward" class="text-primary text-base mt-0.5 shrink-0" />
            <span><strong class="text-on-surface">Custom Application Development</strong> — building internal tools, CRM systems, client portals, and bespoke software tailored to your business</span>
          </li>
        </ul>
        <p>The specific scope, deliverables, timeline, and cost of each engagement are defined in a written proposal agreed upon by both parties before work begins.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">02</span> Proposals and Agreements
        </h2>
        <p>All projects begin with a written proposal outlining: scope of work and deliverables, project timeline, total cost and payment schedule, and any assumptions or dependencies.</p>
        <p>Work does not begin until the proposal is accepted and the initial payment is received. Changes to scope after acceptance must be agreed in writing and may affect the timeline and cost.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">03</span> Payment Terms
        </h2>
        <div class="space-y-3">
          <h3 class="font-semibold text-on-surface">Project Fees</h3>
          <ul class="space-y-2 pl-4 list-disc">
            <li>50% of the total project fee is due before work begins</li>
            <li>The remaining 50% is due upon project delivery</li>
            <li>Invoices are issued in USD unless otherwise agreed</li>
          </ul>
        </div>
        <div class="space-y-3">
          <h3 class="font-semibold text-on-surface">Monthly Retainer</h3>
          <ul class="space-y-2 pl-4 list-disc">
            <li>Retainer fees are charged on the 1st of each month</li>
            <li>Retainers cover maintenance, monitoring, and ongoing support</li>
            <li>Retainer billing begins the month following project delivery</li>
          </ul>
        </div>
        <div class="space-y-3">
          <h3 class="font-semibold text-on-surface">Late Payments</h3>
          <ul class="space-y-2 pl-4 list-disc">
            <li>Invoices are due within 7 days of the issue date</li>
            <li>Work may be paused if payment is not received within 7 days of the due date</li>
            <li>EpochWeave reserves the right to suspend services until outstanding balances are settled</li>
          </ul>
        </div>
        <div class="space-y-3">
          <h3 class="font-semibold text-on-surface">Payment Methods</h3>
          <p>Payments are accepted via bank transfer (USD, GBP, EUR) or card payment via secure payment link. Payment details are provided on each invoice.</p>
        </div>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">04</span> Cancellation and Refunds
        </h2>
        <div class="space-y-3">
          <h3 class="font-semibold text-on-surface">Project Cancellations</h3>
          <ul class="space-y-2 pl-4 list-disc">
            <li>If you cancel before work has begun, the upfront payment is refunded in full minus any transaction fees</li>
            <li>If you cancel after work has begun, the upfront payment is non-refundable and you will be invoiced for any work completed beyond that amount</li>
            <li>If EpochWeave cancels a project, a full refund of all payments made will be issued</li>
          </ul>
        </div>
        <div class="space-y-3">
          <h3 class="font-semibold text-on-surface">Retainer Cancellations</h3>
          <ul class="space-y-2 pl-4 list-disc">
            <li>Either party may cancel a retainer agreement with 30 days written notice</li>
            <li>Retainer fees already paid for the current billing period are non-refundable for work already delivered</li>
          </ul>
        </div>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">05</span> Intellectual Property
        </h2>
        <p>Upon receipt of full payment, the Client owns all custom deliverables created specifically for their project, including automation workflows, custom application code, and documentation.</p>
        <p>EpochWeave retains ownership of pre-existing tools, frameworks, libraries, and methods used in the development process, as well as internal tools not specifically built for the Client's project. Third-party tools and APIs integrated remain subject to their respective terms.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">06</span> Confidentiality
        </h2>
        <p>Both parties agree to keep confidential any proprietary information, business data, credentials, or trade secrets shared during the engagement. This obligation continues for 2 years after the engagement ends.</p>
        <p>EpochWeave will never share your business data, credentials, or systems access with third parties except where necessary to deliver the agreed services.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">07</span> Limitation of Liability
        </h2>
        <p>EpochWeave's total liability for any claim is limited to the amount paid by the Client in the 30 days preceding the claim.</p>
        <p>We are not liable for loss of revenue or profits, data loss caused by third-party tools, downtime in third-party platforms, or consequential, indirect, or incidental damages of any kind.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">08</span> Client Responsibilities
        </h2>
        <p>To deliver services effectively, we require the Client to provide timely access to tools and accounts, designate a point of contact, review and provide feedback within agreed timeframes, and ensure they have the right to use all tools and data they provide to us.</p>
        <p>Delays caused by the Client may affect project timelines and are not the responsibility of EpochWeave.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">09</span> Acceptable Use
        </h2>
        <p>Clients may not engage EpochWeave to build systems that violate any applicable law, facilitate spam or fraud, infringe intellectual property rights, or enable unauthorized access to data or systems.</p>
        <p>EpochWeave reserves the right to decline or terminate any engagement where the requested work conflicts with these principles.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">10</span> Termination
        </h2>
        <p>Either party may terminate an engagement by providing 30 days written notice. Upon termination, the Client pays for all work completed, EpochWeave delivers all completed work and transfers any credentials, and both parties are released from future obligations.</p>
        <p>EpochWeave may terminate immediately and without notice if the Client breaches these Terms, fails to pay outstanding invoices, or engages in harmful or unlawful conduct.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">11</span> Governing Law
        </h2>
        <p>These Terms are governed by the laws of Kenya. Any disputes will first be addressed through good-faith negotiation. If unresolved, disputes will be submitted to mediation before any legal proceedings are initiated.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">12</span> Changes to These Terms
        </h2>
        <p>We may update these Terms from time to time. We will notify active Clients of material changes with at least 14 days notice via email. Continued engagement with our services after that date constitutes acceptance of the updated Terms.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">13</span> Contact
        </h2>
        <p>For questions about these Terms, contact us at <a href="mailto:legal@epochweave.io" class="text-primary hover:underline">legal@epochweave.io</a> or visit <a href="https://epochweave.io" class="text-primary hover:underline">epochweave.io</a>.</p>
      </section>

    </div>
  </div>
</template>
