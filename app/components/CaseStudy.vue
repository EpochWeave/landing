<script setup lang="ts">
import { caseStudies } from '../utils/caseStudies'
</script>

<template>
  <section class="py-24 bg-surface-container-lowest" id="case-studies">
    <div class="max-w-7xl mx-auto px-margin-desktop">

      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-20"
      >
        <span class="font-label-mono text-label-mono text-primary mb-4 block">CASE STUDIES</span>
        <h2 class="font-headline-md text-headline-md mb-4">What we build.<br>The kind of problems nobody else solves.</h2>
        <p class="text-on-surface-variant max-w-xl mx-auto">
          Example builds: the kind of automation we set up during onboarding, shaped around whatever tools you're already using.
        </p>
      </div>

      <div class="flex flex-col gap-28">
        <div
          v-for="(study, i) in caseStudies"
          :key="study.headline"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
          class="flex flex-col gap-10"
          :class="i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'"
        >
          <CaseStudyWorkflow :study="study" />
          <CaseStudyDetails :study="study" />
        </div>
      </div>

    </div>
  </section>
</template>
