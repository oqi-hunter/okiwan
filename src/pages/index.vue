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
    <template #first-view>
      <div class="h-[33vh] bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat md:h-[90vh]">
        <h1 class="text-outline absolute top-[5%] left-[5%] font-serif-jp text-4xl font-bold text-orange-500 md:top-[20%] md:left-[10%] md:text-7xl">荷物で「うむい」をつなぐ</h1>
      </div>
    </template>
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
<style scoped lang="scss">
.text-outline {
  -webkit-text-stroke: 0.5px white;
}
</style>
