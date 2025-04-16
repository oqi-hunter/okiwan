<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>

<template>
  <footer class="flex flex-col gap-6 bg-orange-500 px-6 py-8 text-white md:px-12">
    <div class="flex flex-wrap items-center justify-center space-x-3 border-b-1 border-dashed border-white pb-4">
      <!-- ロゴ -->
      <img src="/okiwan-logo-s.svg" alt="okiwan" class="h-[60px]" />
      <nav class="flex flex-wrap justify-center space-x-6 text-sm font-bold md:space-x-12">
        <a href="/okiwan/#introduction">会社紹介</a>
        <a href="/okiwan/#service">サービス</a>
        <a href="/okiwan/#staff">スタッフ</a>
        <a href="/okiwan/#recruit">採用情報</a>
        <a href="/okiwan/#sns">ソーシャルメディア</a>
        <a href="/okiwan/#access">アクセス</a>
      </nav>
    </div>
    <div class="">
      <div class="flex flex-col gap-3">
        <div>
          <div class="flex items-center gap-2">
            <FontAwesomeIcon :icon="['fas', 'location-dot']" />
            <span>住所</span>
          </div>
          <p>〒901-2125 浦添市仲西1-2-1</p>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <FontAwesomeIcon :icon="['fas', 'envelope']" />
            <span>メールアドレス</span>
          </div>
          <p>createone.okinawa@gmail.com</p>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <FontAwesomeIcon :icon="['fas', 'phone']" />
            <span>電話番号</span>
          </div>
          <p>090-3790-3560</p>
        </div>
        <div class="flex justify-between">
          <div>
            <div class="flex items-center gap-2">
              <FontAwesomeIcon :icon="['fas', 'clock']" />
              <span>営業時間</span>
            </div>
            <p>09:00～18:00</p>
          </div>
          <div class="flex space-x-4">
            <FontAwesomeIcon :icon="['fab', 'x-twitter']" bounce style="--fa-animation-duration: 2s" class="text-4xl" />
            <FontAwesomeIcon :icon="['fab', 'instagram']" bounce style="--fa-animation-duration: 2s" class="text-4xl" />
            <FontAwesomeIcon :icon="['fab', 'line']" bounce style="--fa-animation-duration: 2s" class="text-4xl" />
          </div>
        </div>
      </div>
    </div>
    <p class="text-center text-[12px]">Copyright &copy;{{ new Date().getFullYear() }} All Rights Reserved.</p>
  </footer>
</template>
