<script setup lang="ts">
import AppH2 from './AppH2.vue';
</script>
<template>
  <div class="flex flex-col items-center gap-6 md:flex-row md:gap-12">
    <div>
      <slot name="image"></slot>
    </div>
    <div class="flex flex-col justify-center gap-6 md:flex-1/2">
      <AppH2 class="text-orange-500">
        <slot name="title"></slot>
      </AppH2>
      <p class="leading-8 text-gray-700">
        <slot name="description"></slot>
      </p>
    </div>
  </div>
</template>
