<script setup lang="ts">
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
</script>
<template>
  <slot name="first-view"></slot>
  <main>
    <AppHeader />
    <slot name="main"></slot>
  </main>
  <AppFooter />
</template>
