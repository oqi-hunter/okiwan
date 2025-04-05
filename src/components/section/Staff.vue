<script setup lang="ts">
import SectionWrapper from '../layouts/SectionWrapper.vue';
import AppTitle from '../parts/AppTitle.vue';
</script>
<template>
  <SectionWrapper :width="true" class="bg-[url('/sky.jpg')] bg-cover" id="introduction">
    <AppTitle>
      <template #title>STAFF</template>
      <template #description>スタッフ</template>
    </AppTitle>
    <p>a</p>
  </SectionWrapper>
</template>
