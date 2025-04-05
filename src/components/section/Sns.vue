<script setup lang="ts">
import SectionWrapper from '../layouts/SectionWrapper.vue';
import AppTitle from '../parts/AppTitle.vue';
</script>
<template>
  <SectionWrapper class="bg-teal-600" id="introduction">
    <AppTitle color="white">
      <template #title>SNS</template>
      <template #description>ソーシャルメディア</template>
    </AppTitle>
  </SectionWrapper>
</template>
