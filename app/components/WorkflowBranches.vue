<script setup lang="ts">
import type { Branch } from '../../types/caseStudy'

const props = withDefaults(defineProps<{ branches: Branch[]; converge?: boolean; compact?: boolean }>(), {
  converge: false,
  compact: false
})

const gapClass = computed(() => props.compact ? 'gap-2 sm:gap-3' : 'gap-3 sm:gap-6')
const minWClass = computed(() => props.compact ? 'min-w-[76px]' : 'min-w-[104px]')
const stubClass = computed(() => props.compact ? 'h-2' : 'h-3')
const labelClass = computed(() => props.compact ? 'text-[8px] px-1.5 py-0.5 mb-1.5' : 'text-[9px] px-2 py-0.5 mb-2')
const nodeBoxClass = computed(() => props.compact ? 'h-6 w-6' : 'h-8 w-8')
const nodeIconSize = computed(() => props.compact ? 'h-3 w-3' : 'h-3.5 w-3.5')
const nodeLabelClass = computed(() => props.compact ? 'text-[8px]' : 'text-[9px]')
const nodeGapClass = computed(() => props.compact ? 'gap-1.5' : 'gap-2')
</script>

<template>
  <div class="flex overflow-x-auto pb-1 -mx-1 px-1" :class="gapClass">
    <div
      v-for="(branch, bi) in branches"
      :key="branch.label"
      class="flex-1 flex flex-col items-center"
      :class="minWClass"
    >
      <div class="relative w-full" :class="[stubClass, { invisible: branches.length === 1 }]">
        <span
          class="pipe-flow-h absolute top-0 h-px"
          :class="[
            bi === 0 ? 'left-1/2 right-0' : '',
            bi === branches.length - 1 ? 'left-0 right-1/2' : '',
            bi > 0 && bi < branches.length - 1 ? 'left-0 right-0' : '',
          ]"
        />
        <span class="pipe-flow-v absolute top-0 left-1/2 -translate-x-1/2" :class="stubClass" />
      </div>

      <span
        :title="branch.label"
        class="relative z-10 font-bold uppercase tracking-wide text-primary bg-surface-container border border-primary/40 rounded-full text-center truncate max-w-full shadow-sm"
        :class="labelClass"
      >{{ branch.label }}</span>

      <div class="flex flex-col items-center" :class="nodeGapClass">
        <template v-for="(node, ni) in branch.nodes" :key="node.label">
          <div class="flex flex-col items-center gap-1" :title="node.label">
            <div class="rounded-lg bg-surface border border-outline/20 shadow-sm flex items-center justify-center shrink-0" :class="nodeBoxClass">
              <FlowNodeIcon :node="node" :size="nodeIconSize" />
            </div>
            <span class="text-on-surface-variant text-center leading-tight line-clamp-2" :class="nodeLabelClass">{{ node.label }}</span>
          </div>
          <span v-if="ni < branch.nodes.length - 1" class="pipe-flow-v" :class="stubClass" />
        </template>
      </div>

      <div v-if="converge" class="relative w-full mt-2" :class="[stubClass, { invisible: branches.length === 1 }]">
        <span class="pipe-flow-v absolute bottom-0 left-1/2 -translate-x-1/2" :class="stubClass" />
        <span
          class="pipe-flow-h absolute bottom-0 h-px"
          :class="[
            bi === 0 ? 'left-1/2 right-0' : '',
            bi === branches.length - 1 ? 'left-0 right-1/2' : '',
            bi > 0 && bi < branches.length - 1 ? 'left-0 right-0' : '',
          ]"
        />
      </div>
    </div>
  </div>
</template>
