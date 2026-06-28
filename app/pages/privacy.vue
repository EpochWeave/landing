<script setup lang="ts">
definePageMeta({ layout: 'legal' })
useHead({ title: 'Privacy Policy — EpochWeave' })
</script>

<template>
  <div class="max-w-3xl mx-auto px-margin-desktop py-16">

    <NuxtLink to="/" class="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors text-sm mb-12">
      <Icon name="material-symbols:arrow-back" class="text-base" />
      Back to home
    </NuxtLink>

    <div class="mb-12">
      <span class="font-label-mono text-label-mono text-primary mb-3 block">LEGAL</span>
      <h1 class="text-4xl font-bold text-on-surface mb-3">Privacy Policy</h1>
      <p class="text-on-surface-variant text-sm">Effective Date: July 1, 2026 · Last Updated: July 1, 2026</p>
    </div>

    <div class="space-y-10 text-on-surface-variant leading-relaxed">

      <p>EpochWeave ("we," "us," "our"), operated by [Your Legal Full Name] as a sole proprietor based in Nairobi, Kenya, is committed to protecting your personal information and being transparent about how we use it. This policy applies to all visitors of epochweave.io and anyone who engages with our services.</p>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">01</span> Information We Collect
        </h2>
        <div class="space-y-3">
          <h3 class="font-semibold text-on-surface">Information you provide directly:</h3>
          <ul class="space-y-2 pl-4 list-disc">
            <li>Name and email address (via contact form or booking)</li>
            <li>Company name and business details</li>
            <li>Information shared during discovery calls and project discussions</li>
            <li>Payment details (processed securely by our payment providers — we never store card details)</li>
          </ul>
        </div>
        <div class="space-y-3">
          <h3 class="font-semibold text-on-surface">Information collected automatically:</h3>
          <ul class="space-y-2 pl-4 list-disc">
            <li>Pages visited and time spent on our website</li>
            <li>Browser type, device type, and approximate location</li>
            <li>Referral source (how you found our website)</li>
          </ul>
        </div>
        <div class="space-y-3">
          <h3 class="font-semibold text-on-surface">Information from third-party tools:</h3>
          <ul class="space-y-2 pl-4 list-disc">
            <li>Booking details from Cal.com when you schedule a call</li>
            <li>Communication history from email exchanges</li>
          </ul>
        </div>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">02</span> How We Use Your Information
        </h2>
        <p>We use your information to:</p>
        <ul class="space-y-2 pl-4 list-disc">
          <li>Respond to enquiries and deliver our services</li>
          <li>Send project updates, invoices, and service-related communications</li>
          <li>Schedule and prepare for discovery calls</li>
          <li>Improve our website and understand how visitors use it</li>
          <li>Meet our legal and financial record-keeping obligations</li>
        </ul>
        <p>We do not use your information for unsolicited marketing without your explicit consent.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">03</span> Legal Basis for Processing (GDPR)
        </h2>
        <p>For clients and contacts in the EU or UK, we process your data under the following legal bases:</p>
        <ul class="space-y-3 pl-0">
          <li class="flex items-start gap-3">
            <Icon name="material-symbols:arrow-forward" class="text-primary text-base mt-0.5 shrink-0" />
            <span><strong class="text-on-surface">Contract performance</strong> — to deliver services you have engaged us for</span>
          </li>
          <li class="flex items-start gap-3">
            <Icon name="material-symbols:arrow-forward" class="text-primary text-base mt-0.5 shrink-0" />
            <span><strong class="text-on-surface">Legitimate interest</strong> — to follow up on enquiries and maintain business records</span>
          </li>
          <li class="flex items-start gap-3">
            <Icon name="material-symbols:arrow-forward" class="text-primary text-base mt-0.5 shrink-0" />
            <span><strong class="text-on-surface">Legal obligation</strong> — to comply with financial and tax record-keeping requirements</span>
          </li>
          <li class="flex items-start gap-3">
            <Icon name="material-symbols:arrow-forward" class="text-primary text-base mt-0.5 shrink-0" />
            <span><strong class="text-on-surface">Consent</strong> — for any marketing communications you have opted into</span>
          </li>
        </ul>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">04</span> Third Parties We Share Data With
        </h2>
        <p>We use the following trusted third-party tools to operate our business. Each is bound by their own privacy policies:</p>
        <div class="rounded-xl border border-outline/30 overflow-hidden">
          <table class="w-full text-sm">
            <thead>
              <tr class="bg-surface-container border-b border-outline/20">
                <th class="text-left px-4 py-3 font-semibold text-on-surface">Tool</th>
                <th class="text-left px-4 py-3 font-semibold text-on-surface">Purpose</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-outline/10">
              <tr><td class="px-4 py-3">Cal.com</td><td class="px-4 py-3">Booking and scheduling</td></tr>
              <tr><td class="px-4 py-3">Wise / Flutterwave</td><td class="px-4 py-3">Payment processing</td></tr>
              <tr><td class="px-4 py-3">Google Workspace</td><td class="px-4 py-3">Email and communication</td></tr>
              <tr><td class="px-4 py-3">n8n</td><td class="px-4 py-3">Workflow automation (self-hosted)</td></tr>
              <tr><td class="px-4 py-3">Notion / Google Drive</td><td class="px-4 py-3">Project documentation</td></tr>
            </tbody>
          </table>
        </div>
        <p>We do not sell, rent, or trade your personal information to any third party for marketing purposes. Ever.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">05</span> Data Retention
        </h2>
        <ul class="space-y-2 pl-4 list-disc">
          <li><strong class="text-on-surface">Active clients</strong> — for the duration of our engagement plus 7 years (for financial records)</li>
          <li><strong class="text-on-surface">Enquiries that did not convert</strong> — up to 2 years from last contact</li>
          <li><strong class="text-on-surface">Website analytics data</strong> — up to 26 months</li>
        </ul>
        <p>You may request deletion of your data at any time (see Section 7).</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">06</span> International Data Transfers
        </h2>
        <p>EpochWeave is based in Kenya. If you are located in the EU or UK, your data is transferred internationally when we process it. We take reasonable steps to ensure your data is handled securely and in line with applicable data protection law, including GDPR, when transferred outside your region.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">07</span> Your Rights
        </h2>
        <p>Depending on your location, you may have the right to access, correct, delete, object to processing, or receive a portable copy of your data. To exercise any of these rights, email us at <a href="mailto:privacy@epochweave.io" class="text-primary hover:underline">privacy@epochweave.io</a>. We will respond within 30 days.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">08</span> Data Security
        </h2>
        <p>We take reasonable technical and organisational measures to protect your data, including encrypted communications, secure credential management, access controls, and self-hosted automation infrastructure where possible. No method of transmission over the internet is 100% secure. We will notify you promptly if we become aware of any breach affecting your data.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">09</span> Cookies
        </h2>
        <p>Our website uses minimal cookies: essential cookies required for the site to work, and anonymised analytics cookies to understand how visitors use our site. You can control cookie settings through your browser.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">10</span> Children's Privacy
        </h2>
        <p>Our services are intended for businesses and professionals. We do not knowingly collect personal data from anyone under the age of 18.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">11</span> Changes to This Policy
        </h2>
        <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website or emailing active clients. The "Last Updated" date at the top reflects the most recent revision.</p>
      </section>

      <hr class="border-outline/20" />

      <section class="space-y-4">
        <h2 class="text-xl font-bold text-on-surface flex items-center gap-3">
          <span class="text-primary font-label-mono text-sm">12</span> Contact
        </h2>
        <p>For privacy-related questions or to exercise your rights, contact us at <a href="mailto:privacy@epochweave.io" class="text-primary hover:underline">privacy@epochweave.io</a>.</p>
      </section>

    </div>
  </div>
</template>
