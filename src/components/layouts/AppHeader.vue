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
      <a href="/okiwan/#introduction">会社紹介</a>
      <a href="/okiwan/#service">サービス</a>
      <a href="/okiwan/#staff">スタッフ</a>
      <a href="/okiwan/#recruit">採用情報</a>
      <a href="/okiwan/#sns">ソーシャルメディア</a>
      <a href="/okiwan/#access">アクセス</a>
    </nav>

    <!-- ハンバーガーメニュー（モバイル表示） -->
    <button @click="isOpen = !isOpen" class="text-white focus:outline-none xl:hidden">
      <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>

    <!-- モバイル用ドロワーメニュー -->
    <div v-if="isOpen" class="absolute top-20 right-0 flex h-max flex-col space-y-4 bg-orange-500 px-6 py-6 font-bold text-white md:hidden">
      <a href="/okiwan/#introduction" @click="isOpen = false">会社紹介</a>
      <a href="/okiwan/#service" @click="isOpen = false">サービス</a>
      <a href="/okiwan/#staff" @click="isOpen = false">スタッフ</a>
      <a href="/okiwan/#recruit" @click="isOpen = false">採用情報</a>
      <a href="/okiwan/#sns" @click="isOpen = false">ソーシャルメディア</a>
      <a href="/okiwan/#access" @click="isOpen = false">アクセス</a>
    </div>
  </header>
  <div class="h-20"></div>
</template>
