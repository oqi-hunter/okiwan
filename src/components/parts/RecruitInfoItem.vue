<script setup lang="ts">
const props = withDefaults(defineProps<{ border?: boolean }>(), {
  border: true,
});
</script>

<template>
  <div class="flex flex-col gap-2 p-6" :class="{ 'border-b': props.border }">
    <div class="text-xl font-semibold text-orange-500">
      <slot name="title"></slot>
    </div>
    <div class="text-lg text-gray-600">
      <slot name="description"></slot>
    </div>
  </div>
</template>
