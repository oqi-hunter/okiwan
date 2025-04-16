<script setup lang="ts">
import SectionWrapper from '../layouts/SectionWrapper.vue';
import AppTitle from '../parts/AppTitle.vue';
import EmbedplayTikTokVue from 'embedplay-tiktok-vue';
</script>
<template>
  <SectionWrapper class="flex flex-col items-center gap-12 bg-teal-600" id="sns">
    <AppTitle color="white">
      <template #title>SNS</template>
      <template #description>ソーシャルメディア</template>
    </AppTitle>
    <div class="container">
      <div class="mx-3 flex flex-col items-center justify-center gap-12 md:flex-row">
        <div>
          <EmbedplayTikTokVue
            postId="7466859276242341127"
            :autoplay="false"
            :controls="true"
            :progressBar="true"
            :playButton="true"
            :volumeControl="true"
            :fullscreenButton="true"
            :timestamp="true"
            :loop="false"
            :musicInfo="true"
            :description="false"
            :rel="false"
            :nativeContextMenu="false"
            :width="340"
            :height="600"
            :borderRadius="10"
          />
        </div>
        <div class="flex items-center">
          <div class="rounded-2xl bg-white">
            <img src="/instagram_qr.png" alt="Instagram QR Code" />
          </div>
        </div>
      </div>
    </div>
  </SectionWrapper>
</template>
