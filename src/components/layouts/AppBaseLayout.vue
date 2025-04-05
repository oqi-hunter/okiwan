<script setup lang="ts">
import { Head } from '@vueuse/head';
import AppHeader from './AppHeader.vue';
import AppFooter from './AppFooter.vue';
</script>
<template>
  <slot name="first-view"></slot>
  <Head>
    <title>沖ワン物流.com</title>
    <meta name="description" content="沖ワン物流.com" />
  </Head>
  <AppHeader />
  <slot name="main"></slot>
  <AppFooter />
</template>
