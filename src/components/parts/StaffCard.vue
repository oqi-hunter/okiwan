<script setup lang="ts">
const props = defineProps({
  imagePath: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
</script>
<template>
  <div class="flex flex-col items-center justify-center gap-4 p-4">
    <div class="">
      <img :src="props.imagePath" alt="Staff Image" class="w-[250px] md:w-[300px]" />
    </div>
    <h3 class="text-2xl font-bold text-orange-500">{{ props.name }}</h3>
    <p class="text-center leading-8 text-gray-900">{{ props.text }}</p>
  </div>
</template>
