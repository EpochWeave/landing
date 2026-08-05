<script setup lang="ts">
import type { CaseStudy } from '../../types/caseStudy'

defineProps<{ study: CaseStudy }>()
</script>

<template>
  <div class="flex-1 flex flex-col justify-center">
    <span class="font-label-mono text-label-mono text-primary mb-3 block">{{ study.tag.toUpperCase() }}</span>
    <h3 class="text-2xl font-bold mb-4 leading-snug">{{ study.headline }}</h3>
    <p class="text-on-surface-variant mb-6">{{ study.problem }}</p>

    <div class="flex flex-col gap-3 mb-6">
      <p v-for="line in study.approach" :key="line" class="text-on-surface-variant text-sm flex items-start gap-3">
        <Icon name="material-symbols:check-circle" class="text-primary shrink-0 mt-0.5" />
        {{ line }}
      </p>
    </div>

    <p class="text-on-surface-variant text-sm mb-6 italic">{{ study.detail }}</p>

    <p class="text-primary font-semibold mb-8">{{ study.outcome }}</p>

    <a
      href="#contact"
      class="w-fit py-3 px-6 border border-outline rounded-lg font-bold hover:bg-surface-container-high transition-colors text-center text-sm"
    >
      Contact
    </a>
  </div>
</template>
