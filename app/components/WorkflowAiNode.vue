<script setup lang="ts">
import type { FlowNode } from '../../types/caseStudy'

const props = withDefaults(defineProps<{ node: FlowNode; compact?: boolean }>(), {
  compact: false
})

const boxClass = computed(() => props.compact ? 'h-10 w-10' : 'h-14 w-14')
const iconSize = computed(() => props.compact ? 'h-5 w-5' : 'h-7 w-7')
</script>

<template>
  <div class="flex justify-center mb-1">
    <div class="relative" :class="boxClass" :title="node.label">
      <span class="pipe-pulse-ring absolute inset-0 rounded-full border border-primary" />
      <div class="relative rounded-full bg-surface border-2 border-primary shadow-[0_0_16px_rgba(245,193,32,0.3)] flex items-center justify-center" :class="boxClass">
        <FlowNodeIcon :node="node" :size="iconSize" />
      </div>
      <span class="pipe-blink absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-primary" />
    </div>
  </div>
</template>
