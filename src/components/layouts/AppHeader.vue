<script setup lang="ts">
import { ref } from 'vue';

const isOpen = ref(false); // メニューの開閉状態を管理
</script>

<template>
  <header class="right-0 left-0 h-20 items-center justify-between bg-orange-500 ps-3 pe-6 transition-all duration-300 xl:px-12" :class="[isOpen ? 'fixed inset-0 z-50' : 'sticky top-0 z-50 md:top-0']">
    <div class="relative flex h-full flex-row items-center justify-between">
      <!-- ロゴ -->
      <img src="/okiwan-logo-l.svg" alt="okiwan" class="relative z-50 h-[60px]" />

      <!-- メニュー（PC表示） -->
      <nav class="hidden space-x-12 text-xl font-bold text-white xl:flex">
        <a href="/okiwan/#introduction" class="transition-opacity hover:opacity-70">会社紹介</a>
        <a href="/okiwan/#service" class="transition-opacity hover:opacity-70">サービス</a>
        <a href="/okiwan/#staff" class="transition-opacity hover:opacity-70">スタッフ</a>
        <a href="/okiwan/#recruit" class="transition-opacity hover:opacity-70">採用情報</a>
        <a href="/okiwan/#sns" class="transition-opacity hover:opacity-70">ソーシャルメディア</a>
        <a href="/okiwan/#access" class="transition-opacity hover:opacity-70">アクセス</a>
      </nav>

      <!-- ハンバーガーメニュー（モバイル表示） -->
      <button @click="isOpen = !isOpen" class="relative z-30 h-8 w-8 text-white focus:outline-none xl:hidden">
        <span class="absolute block h-0.5 w-8 bg-white transition-all duration-300" :class="{ 'top-4 rotate-45': isOpen, 'top-2': !isOpen }"></span>
        <span class="absolute top-4 block h-0.5 w-8 bg-white transition-all duration-300" :class="{ 'opacity-0': isOpen }"></span>
        <span class="absolute block h-0.5 w-8 bg-white transition-all duration-300" :class="{ 'top-4 -rotate-45': isOpen, 'top-6': !isOpen }"></span>
      </button>

      <!-- フルスクリーンメニュー -->
      <div
        class="fixed inset-0 top-20 z-20 bg-orange-500/95 transition-all duration-500 xl:hidden"
        :class="{ 'visible translate-y-0 opacity-100': isOpen, 'invisible -translate-y-full opacity-0': !isOpen }"
      >
        <div class="justify-sta flex h-screen w-full p-6">
          <nav class="flex w-full flex-col gap-8">
            <a href="/okiwan/#introduction" @click="isOpen = false" class="block w-full border-b border-dashed border-white pb-4 text-2xl font-bold text-white"> 会社紹介 </a>
            <a href="/okiwan/#service" @click="isOpen = false" class="block w-full border-b border-dashed border-white pb-4 text-2xl font-bold text-white"> サービス </a>
            <a href="/okiwan/#staff" @click="isOpen = false" class="block w-full border-b border-dashed border-white pb-4 text-2xl font-bold text-white"> スタッフ </a>
            <a href="/okiwan/#recruit" @click="isOpen = false" class="block w-full border-b border-dashed border-white pb-4 text-2xl font-bold text-white"> 採用情報 </a>
            <a href="/okiwan/#sns" @click="isOpen = false" class="block w-full border-b border-dashed border-white pb-4 text-2xl font-bold text-white"> ソーシャルメディア </a>
            <a href="/okiwan/#access" @click="isOpen = false" class="block w-full border-b border-dashed border-white pb-4 text-2xl font-bold text-white"> アクセス </a>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
