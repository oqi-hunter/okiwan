<script setup lang="ts">
import SectionWrapper from '../layouts/SectionWrapper.vue';
import AppTitle from '../parts/AppTitle.vue';
import ServiceCard from '../parts/ServiceCard.vue';
</script>
<template>
  <SectionWrapper class="flex flex-col items-center gap-12 bg-gray-200" id="service">
    <AppTitle>
      <template #title>SERVICE</template>
      <template #description>サービス</template>
    </AppTitle>
    <div class="container">
      <div class="mx-3 flex flex-col items-center gap-12">
        <ServiceCard>
          <template #image>
            <img src="/driving.png" alt="driving" />
          </template>
          <template #title>【ドライバー部門】</template>
          <template #description
            >ヤマト運輸様や西濃運輸様、Amazon様などの大手運送会社向けに、軽貨物ドライバーの派遣を行っています。これにより、急な人手不足や繁忙期にも柔軟に対応できるようサポートしています。派遣するドライバーは、配送業務に必要な知識を持ち、安全かつスムーズにお届けできるよう努めています。お客様の物流業務がより円滑に進むよう、安心してお任せいただける体制を整えています。
          </template>
        </ServiceCard>
        <ServiceCard>
          <template #image>
            <img src="/sorting.png" alt="driving" />
          </template>
          <template #title>【仕分け部門】</template>
          <template #description
            >空港内で航空貨物の仕分け作業を行い、沖縄の物流を支える大切な役割を担っています。貨物を種類や配送先に応じて仕分け、スムーズな配送をサポートしています。地域の物流が円滑に進むよう、しっかりと取り組んでいます。</template
          >
        </ServiceCard>
      </div>
    </div>
  </SectionWrapper>
</template>
