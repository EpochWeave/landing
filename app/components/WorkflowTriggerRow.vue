<script setup lang="ts">
import type { FlowNode } from '../../types/caseStudy'

const props = withDefaults(defineProps<{ nodes: FlowNode[]; compact?: boolean }>(), {
  compact: false
})

const boxClass = computed(() => props.compact ? 'h-9 w-9' : 'h-12 w-12')
const iconSize = computed(() => props.compact ? 'h-4 w-4' : 'h-6 w-6')
const labelClass = computed(() => props.compact ? 'text-[9px]' : 'text-[11px]')
const gapClass = computed(() => props.compact ? 'gap-3' : 'gap-4')
</script>

<template>
  <div class="flex items-center justify-center mb-1 flex-wrap" :class="gapClass">
    <div v-for="node in nodes" :key="node.label" class="flex flex-col items-center gap-1.5">
      <div class="rounded-xl bg-surface border border-outline/20 shadow-sm flex items-center justify-center" :class="boxClass">
        <FlowNodeIcon :node="node" :size="iconSize" />
      </div>
      <span class="text-on-surface-variant text-center" :class="labelClass">{{ node.label }}</span>
    </div>
  </div>
</template>
