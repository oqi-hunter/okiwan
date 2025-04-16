<script setup lang="ts">
import AppH2 from './AppH2.vue';

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
    <AppH2 :class="color">
      <slot name="title"></slot>
    </AppH2>
    <p class="border-b-4 border-orange-500 text-2xl font-semibold drop-shadow-2xl">
      <slot name="description"></slot>
    </p>
  </header>
</template>
