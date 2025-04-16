<script setup lang="ts">
import SectionWrapper from '../layouts/SectionWrapper.vue';
import AppTitle from '../parts/AppTitle.vue';
import StaffCard from '../parts/StaffCard.vue';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
</script>
<template>
  <SectionWrapper :width="true" class="flex flex-col items-center gap-12 bg-[url('/sky.jpg')] bg-cover" id="staff">
    <AppTitle>
      <template #title>STAFF</template>
      <template #description>スタッフ</template>
    </AppTitle>
    <div class="container">
      <div class="">
        <Swiper
          :loop="true"
          :spaceBetween="20"
          :slidesPerView="1.5"
          :modules="[Autoplay, Pagination, Navigation]"
          :centered-slides="true"
          :autoplay="{ delay: 3000 }"
          :breakpoints="{
            0: {
              // スマホ（〜599px）
              slidesPerView: 1,
            },
            1024: {
              // タブレット以上
              slidesPerView: 3,
            },
          }"
        >
          <SwiperSlide>
            <StaffCard
              imagePath="/staff1.png"
              name="高江洲　和樹"
              text="飲食業界や営業職など、様々な職業を経験した後、現在は軽貨物ドライバーとして新たな挑戦をしています。現在は、「2児の父」「飲食店経営者」「軽貨物ドライバー」として、3つの役割を掛け持ちながら日々奮闘しています。限られた時間の中で、働きやすい環境を提供してくれる職場のおかげで、これらをうまく両立させることができています。"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaffCard
              imagePath="/staff2.png"
              name="池田　大輔"
              text="営業職から軽貨物ドライバーに転職し、ドライバー不足の問題をきっかけに運送業界への関心が高まりました。これを機に、自分自身で会社を立ち上げ、挑戦してみる決意を固めました。まだ未熟な点も多いですが、ドライバーとしての道を歩みながら日々奮闘しています。世界中から届く荷物を、沖縄県民の皆様の笑顔のためにお届けできるよう努力を重ねています。"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaffCard
              imagePath="/staff3.png"
              name="岩代　景多"
              text="未経験から軽貨物ドライバーに挑戦し、充実した研修制度のおかげで、2週間で150個の荷物を運べるようになりました。さらに、今年新しい命を授かり、家族が増える喜びを感じながら、これからも一層努力していこうという決意でいっぱいです。"
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaffCard imagePath="/staff4.png" name="一緒に働きませんか？" text="一緒に働いてくれるメンバー募集しています！ぜひ一緒に働きましょう！詳しくはコチラ" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </SectionWrapper>
</template>
