<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <footer class="bg-orange-500 px-6 py-8 text-white md:px-12">
    <div class="flex flex-wrap items-center justify-center space-x-3 border-b-1 border-dashed border-white pb-4">
      <!-- ロゴ -->
      <img src="/okiwan-logo-s.svg" alt="okiwan" class="h-[60px]" />
      <nav class="flex flex-wrap justify-center space-x-6 text-sm font-bold md:space-x-12">
        <RouterLink to="/#introduction">会社紹介</RouterLink>
        <RouterLink to="/#service">サービス</RouterLink>
        <RouterLink to="/#staff">スタッフ</RouterLink>
        <RouterLink to="/#recruit">採用情報</RouterLink>
        <RouterLink to="/#sns">ソーシャルメディア</RouterLink>
        <RouterLink to="/#access">アクセス</RouterLink>
      </nav>
    </div>
    <div class="flex items-end justify-end space-x-4">
      <FontAwesomeIcon :icon="['fab', 'x-twitter']" bounce style="--fa-animation-duration: 2s" class="text-4xl" />
      <FontAwesomeIcon :icon="['fab', 'instagram']" bounce style="--fa-animation-duration: 2s" class="text-4xl" />
      <FontAwesomeIcon :icon="['fab', 'line']" bounce style="--fa-animation-duration: 2s" class="text-4xl" />
    </div>
    <p class="mt-4">&copy; {{ new Date().getFullYear() }}</p>
  </footer>
</template>
