<script setup lang="ts">
import { caseStudies } from '../utils/caseStudies'
</script>

<template>
  <section class="py-24 bg-surface-container-lowest" id="example-builds">
    <div class="max-w-7xl mx-auto px-margin-desktop">

      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visible-once="{ opacity: 1, y: 0, transition: { duration: 600 } }"
        class="text-center mb-20"
      >
        <span class="font-label-mono text-label-mono text-primary mb-4 block">EXAMPLE BUILDS</span>
        <h2 class="font-headline-md text-headline-md mb-4">Example builds we can set up for you</h2>
        <p class="text-on-surface-variant max-w-xl mx-auto">
          These are illustrations of the kind of automation we build, adapted to the tools you already use. They are not client case studies.
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
