<script setup lang="ts"></script>
<template>
  <div class="flex flex-col items-center gap-4">
    <div class="flex h-32 w-32 items-center justify-center rounded-full bg-orange-500 text-2xl text-white">
      <slot name="header"></slot>
    </div>
    <p class="leading-8">
      <slot name="message"></slot>
    </p>
  </div>
</template>
