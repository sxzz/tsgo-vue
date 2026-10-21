<script setup lang="ts">
defineProps<{
  label: string
  count?: number
}>()

const emit = defineEmits<{
  click: [count: number]
}>()
</script>

<template>
  <button type="button" @click="emit('click', count ?? 0)">
    {{ label }} ({{ count ?? 0 }})
  </button>
</template>
