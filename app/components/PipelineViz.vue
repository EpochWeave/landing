<script setup lang="ts">
import { heroPipeline } from '../utils/heroPipeline'
</script>

<template>
  <div class="relative w-full max-w-[420px] mx-auto">
    <div class="pipeline-glow absolute inset-0 pointer-events-none" />

    <div class="relative">
      <WorkflowTriggerRow :nodes="[heroPipeline.trigger]" compact />

      <div class="flex justify-center">
        <span class="pipe-flow-v h-4" />
      </div>

      <WorkflowAiNode :node="heroPipeline.reasoning" compact />

      <div class="flex justify-center mb-1">
        <span class="pipe-flow-v h-4" />
      </div>

      <p class="text-center text-[9px] font-label-mono text-primary uppercase tracking-widest mb-2">
        {{ heroPipeline.decisionLabel }}
      </p>

      <WorkflowBranches :branches="heroPipeline.branches" converge compact />

      <div class="flex justify-center mt-1 mb-1">
        <span class="pipe-flow-v h-4" />
      </div>

      <div class="flex flex-col items-center gap-1.5">
        <span
          :title="heroPipeline.convergence.label"
          class="text-[8px] font-bold uppercase tracking-wide text-primary bg-surface-container border border-primary/40 rounded-full px-2 py-0.5 text-center truncate max-w-[90%] shadow-sm"
        >{{ heroPipeline.convergence.label }}</span>

        <div class="flex items-center gap-4">
          <div
            v-for="node in heroPipeline.convergence.nodes"
            :key="node.label"
            class="flex flex-col items-center gap-1"
            :title="node.label"
          >
            <div class="h-7 w-7 rounded-lg bg-surface border border-outline/20 shadow-sm flex items-center justify-center">
              <FlowNodeIcon :node="node" size="h-3.5 w-3.5" />
            </div>
            <span class="text-[8px] text-on-surface-variant text-center leading-tight line-clamp-2">{{ node.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
