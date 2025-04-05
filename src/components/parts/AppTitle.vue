<script setup lang="ts">
withDefaults(
  defineProps<{
    color?: string;
  }>(),
  {
    color: 'gray-700',
  },
);
</script>
<template>
  <header class="flex flex-col items-center gap-4 text-center" :class="`text-${color}`">
    <h2 class="text-center text-4xl font-black drop-shadow-lg">
      <slot name="title"></slot>
    </h2>
    <p class="border-b-4 border-orange-500 text-2xl font-semibold drop-shadow-2xl">
      <slot name="description"></slot>
    </p>
  </header>
</template>
