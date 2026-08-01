<script setup lang="ts">
import type { FlowNode } from '../../types/caseStudy'

const props = withDefaults(defineProps<{ node: FlowNode; size?: string }>(), {
  size: 'h-4 w-4'
})

const imgFailed = ref(false)
const fallbackIcon = computed(() => props.node.icon ?? `simple-icons:${props.node.slug}`)
const logoSrc = computed(() => getBrandIconUrl(props.node.slug ?? ''))
</script>

<template>
  <img
    v-if="node.type === 'logo' && !imgFailed"
    :src="logoSrc"
    :alt="node.label"
    :class="size"
    class="object-contain"
    @error="imgFailed = true"
  />
  <Icon v-else :name="fallbackIcon" :class="size" class="text-primary" />
</template>
