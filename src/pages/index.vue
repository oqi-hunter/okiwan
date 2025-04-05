<script setup lang="ts">
import Introduction from '../components/section/Introduction.vue';
import Service from '../components/section/Service.vue';
import Staff from '../components/section/Staff.vue';
import Sns from '../components/section/Sns.vue';
import Access from '../components/section/Access.vue';
import Recruit from '../components/section/Recruit.vue';
import AppBaseLayout from '../components/layouts/AppBaseLayout.vue';
</script>
<template>
  <AppBaseLayout>
    <template #first-view></template>
    <template #main>
      <Introduction />
      <Service />
      <Sns />
      <Staff />
      <Recruit />
      <Access />
    </template>
  </AppBaseLayout>
</template>
