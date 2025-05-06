<script lang="ts" setup>
const props = defineProps({
  number: Number,
  title: String,
  description: String,
  isLast: Boolean, // 最後の要素だけ横棒を出さない
});
</script>
<template>
  <div class="flex w-full flex-col items-center gap-2.5 text-center md:w-1/4">
    <div class="relative">
      <div class="flex h-24 w-24 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
        {{ props.number }}
      </div>
      <div v-if="!isLast" class="absolute top-1/2 left-full hidden h-1 w-20 bg-orange-500 md:block"></div>
    </div>
    <div class="mt-2 font-bold">{{ props.title }}</div>
    <div class="mt-1 text-sm">{{ props.description }}</div>
  </div>
</template>
