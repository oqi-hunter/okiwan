<script setup lang="ts">
import SectionWrapper from '../layouts/SectionWrapper.vue';
import AppTitle from '../parts/AppTitle.vue';
import RecruitStepItem from '../parts/RecruitStepItem.vue';
</script>
<template>
  <SectionWrapper class="flex flex-col items-center gap-12 bg-orange-500/26" id="recruit">
    <AppTitle>
      <template #title>RECRUIT</template>
      <template #description>採用情報</template>
    </AppTitle>
    <div class="container">
      <div class="mx-3 flex flex-col items-center">
        <div class="flex max-w-3xl flex-col justify-center gap-6">
          <div class="flex flex-col justify-around gap-6 text-center md:flex-row">
            <RouterLink
              to="/recruit-info"
              class="flex h-[200px] w-full max-w-[300px] items-center justify-center rounded-lg border-2 border-orange-500 bg-white p-4 text-xl font-bold text-orange-500 shadow-md transition duration-300 ease-in-out hover:bg-orange-500 hover:text-white"
            >
              詳細情報
            </RouterLink>
          </div>
          <div class="flex flex-col justify-center gap-6 py-10 md:flex-row">
            <RecruitStepItem :number="1" title="応募" description="応募フォームまたはお電話にて応募ください。" />
            <RecruitStepItem :number="2" title="面接" description="1〜2回の面接を行います。" />
            <RecruitStepItem :number="3" title="内定" description="選考通過者には内定のご連絡をいたします。" />
            <RecruitStepItem :number="4" title="入社" description="入社日に合わせて各種手続きを行います。" :isLast="true" />
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
