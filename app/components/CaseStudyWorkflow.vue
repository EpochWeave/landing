<script setup lang="ts">
import type { CaseStudy } from '../../types/caseStudy'

defineProps<{ study: CaseStudy }>()
</script>

<template>
  <div class="flex-1 relative bg-surface-container border border-outline/30 rounded-xl p-stack-lg overflow-hidden">
    <div class="absolute inset-0 pointer-events-none pipeline-dots" />

    <div class="relative">
      <WorkflowTriggerRow :nodes="study.trigger" />

      <div class="flex justify-center">
        <span class="pipe-flow-v h-7" />
      </div>

      <WorkflowAiNode :node="study.reasoning" />

      <div class="flex justify-center mb-1">
        <span class="pipe-flow-v h-8" />
      </div>

      <WorkflowBranches :branches="study.branches" />
    </div>
  </div>
</template>
