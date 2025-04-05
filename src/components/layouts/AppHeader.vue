<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false); // メニューの開閉状態を管理
</script>

<template>
  <header class="fixed top-0 right-0 left-0 z-10 flex h-20 items-center justify-between bg-orange-500 ps-3 pe-6 xl:px-12">
    <!-- ロゴ -->
    <img src="/okiwan-logo-l.svg" alt="okiwan" class="h-[60px]" />
    <!-- メニュー（PC表示） -->
    <nav class="hidden space-x-12 text-xl font-bold text-white xl:flex">
      <RouterLink to="/#introduction">会社紹介</RouterLink>
      <RouterLink to="/#service">サービス</RouterLink>
      <RouterLink to="/#staff">スタッフ</RouterLink>
      <RouterLink to="/#recruit">採用情報</RouterLink>
      <RouterLink to="/#sns">ソーシャルメディア</RouterLink>
      <RouterLink to="/#access">アクセス</RouterLink>
    </nav>

    <!-- ハンバーガーメニュー（モバイル表示） -->
    <button @click="isOpen = !isOpen" class="text-white focus:outline-none xl:hidden">
      <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- モバイル用ドロワーメニュー -->
    <div v-if="isOpen" class="absolute top-20 right-0 flex h-max flex-col space-y-4 bg-orange-500 px-6 py-6 font-bold text-white md:hidden">
      <RouterLink to="/#introduction" @click="isOpen = false">会社紹介</RouterLink>
      <RouterLink to="/#service" @click="isOpen = false">サービス</RouterLink>
      <RouterLink to="/#staff" @click="isOpen = false">スタッフ</RouterLink>
      <RouterLink to="/#recruit" @click="isOpen = false">採用情報</RouterLink>
      <RouterLink to="/#sns" @click="isOpen = false">ソーシャルメディア</RouterLink>
      <RouterLink to="/#access" @click="isOpen = false">アクセス</RouterLink>
    </div>
  </header>
</template>
