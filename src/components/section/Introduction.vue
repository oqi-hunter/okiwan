<script setup lang="ts">
import SectionWrapper from '../layouts/SectionWrapper.vue';
import AppTitle from '../parts/AppTitle.vue';
import IntroductionMessageCard from '../parts/IntroductionMessageCard.vue';
</script>
<template>
  <SectionWrapper id="introduction" class="flex flex-col items-center gap-12">
    <AppTitle>
      <template #title>INTRODUCTION</template>
      <template #description>会社紹介</template>
    </AppTitle>
    <div class="container">
      <div class="mx-3 flex flex-col items-center">
        <div class="flex max-w-3xl flex-col gap-6 bg-[url('/logo-opacity-25.png')] bg-contain bg-center bg-no-repeat">
          <p class="leading-9">
            <span class="text-2xl leading-9 font-bold text-orange-500">沖ワン物流.com</span
            >では、大手運輸会社や大手ECサイト様からの委託配送を主軸に、幅広い物流サービスを提供しています。お客様のニーズに合わせた柔軟な配送計画の立案から、商品の管理、配送、さらには配送後のサポートまで、トータルでお手伝いさせていただいております。
          </p>
          <div class="flex flex-col justify-around gap-6 text-center md:flex-row">
            <IntroductionMessageCard class="flex-1/3">
              <template #header> 沖縄 </template>
              <template #message>
                軽貨物ドライバーとは、<br />
                世界から沖縄に届く荷物を送り出す<br />
                最後の砦
              </template>
            </IntroductionMessageCard>
            <IntroductionMessageCard class="flex-1/3">
              <template #header> 思い </template>
              <template #message>
                軽貨物ドライバーとは、<br />
                待ってるお客様にお荷物を届ける<br />
                アンカー
              </template>
            </IntroductionMessageCard>
            <IntroductionMessageCard class="flex-1/3">
              <template #header> 遊び心 </template>
              <template #message>
                軽貨物ドライバーとは、<br />
                そんな重要な役割を果たしてるんだ<br />からカッコよくプライドを持ってあたりまえ
              </template>
            </IntroductionMessageCard>
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
