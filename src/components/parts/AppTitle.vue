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
    <p class="text-lg font-semibold">
      <slot name="title"></slot>
    </p>
    <AppH2 :class="color" class="drop border-b-4 border-orange-500 drop-shadow-lg">
      <slot name="description"></slot>
    </AppH2>
  </header>
</template>
