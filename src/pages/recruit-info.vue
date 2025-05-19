<script setup lang="ts">
import AppBaseLayout from '../components/layouts/AppBaseLayout.vue';
import AppTitle from '../components/parts/AppTitle.vue';
import RecruitInfoItem from '../components/parts/RecruitInfoItem.vue';
</script>

<template>
  <AppBaseLayout>
    <template #first-view>
      <div class="h-[33vh] bg-[url('/bg.png')] bg-cover bg-center bg-no-repeat md:h-[90vh]">
        <h1 class="text-outline font-serifjp absolute top-[5%] left-[5%] text-4xl font-bold text-orange-500 md:top-[20%] md:left-[10%] md:text-7xl">荷物で「うむい」をつなぐ</h1>
      </div>
    </template>
    <template #main>
      <div class="relative overflow-hidden">
        <!-- デコレーション背景 -->
        <div class="pointer-events-none absolute inset-0 z-0">
          <div class="absolute top-24 left-24 hidden h-[400px] w-[400px] animate-pulse rounded-full bg-orange-100 opacity-70 blur-2xl md:block"></div>
          <div class="absolute right-32 bottom-32 hidden h-[350px] w-[350px] animate-pulse rounded-full bg-orange-200 opacity-60 blur-2xl md:block"></div>
          <div class="absolute top-10 right-10 h-32 w-32 rotate-12 rounded-full bg-orange-300 opacity-40 blur-xl"></div>
          <div class="absolute bottom-10 left-10 h-24 w-24 rotate-6 rounded-full bg-orange-400 opacity-30 blur-lg"></div>
          <!-- 追加のふわふわ -->
          <div class="absolute top-0 left-1/3 h-40 w-40 animate-pulse rounded-full bg-orange-200 opacity-40 blur-2xl"></div>
          <div class="absolute right-1/4 bottom-1/3 h-32 w-32 animate-pulse rounded-full bg-orange-300 opacity-30 blur-2xl"></div>
          <div class="absolute bottom-1/2 left-10 h-24 w-24 animate-pulse rounded-full bg-orange-100 opacity-30 blur-2xl"></div>
          <div class="absolute top-1/2 right-10 h-28 w-28 animate-pulse rounded-full bg-orange-200 opacity-20 blur-2xl"></div>
        </div>
        <section class="flex flex-col items-center gap-6 py-12 md:gap-12 md:py-24">
          <div class="px-6 md:w-4xl">
            <div class="flex flex-col gap-12 md:gap-24">
              <AppTitle>
                <template #description>配送ドライバー</template>
              </AppTitle>
              <div class="flex flex-col gap-2 rounded-lg border">
                <RecruitInfoItem>
                  <template #title>仕事内容</template>
                  <template #description>
                    軽貨物車両を用いて、個人宅や企業へお荷物を直接配送する業務！<br />
                    配達が終わり次第勤務終了！那覇空港内で、航空貨物で送られてきた荷物の仕分け作業を行ってもらいます‼️<br />
                  </template>
                </RecruitInfoItem>
                <RecruitInfoItem>
                  <template #title>勤務時間</template>
                  <template #description> 9：00～21：00の間でフリー 配達終わり次第、帰宅OK</template>
                </RecruitInfoItem>
                <RecruitInfoItem>
                  <template #title>給与</template>
                  <template #description>
                    1個配達完了：150円<br />
                    1日100～120件配送<br />
                    ＜配達の数次第で変動します！＞<br />
                    【在籍スタッフの月収例】<br />
                    150円×100～120件×月20日＝月収30万円〜36万円<br />
                    150円×100～120件×月24日＝月収36万円〜43.2万円
                  </template>
                </RecruitInfoItem>
                <RecruitInfoItem>
                  <template #title>資格</template>
                  <template #description>
                    普通自動車運転免許(AT限定可)<br />
                    ※事業用ナンバー車両あれば尚可<br />
                  </template>
                </RecruitInfoItem>
                <RecruitInfoItem :border="false">
                  <template #title>福利厚生</template>
                  <template #description>
                    車両貸出あり(条件あり)<br />
                    ユニフォーム支給<br />
                    髪型、髪色自由<br />
                    ネイル、ピアス、ヒゲOK<br />
                    確定申告のサポート<br />
                    社員割制度<br />
                    昼飯手当制度<br />
                    勤続祝い
                  </template>
                </RecruitInfoItem>
              </div>
            </div>
          </div>
        </section>
        <section class="flex flex-col items-center gap-6 py-12 md:gap-12 md:py-24">
          <div class="px-6 md:w-4xl">
            <div class="flex flex-col gap-12 md:gap-24">
              <AppTitle>
                <template #description>配送ドライバー</template>
              </AppTitle>
              <div class="flex flex-col gap-2 rounded-lg border">
                <RecruitInfoItem>
                  <template #title>仕事内容</template>
                  <template #description>
                    一般の人が立ち入ることのできない、空港の貨物ターミナル地区で働けます🤙<br />
                    那覇空港内で、航空貨物で送られてきた荷物の仕分け作業を行ってもらいます‼️<br />
                    1日1〜3件程度の配達有り<br />
                    <br />
                    目ずらいし求人なので、やってみたい方を大募集🙆<br />
                    <br />
                    簡単な仕分け作業なので初心者でも安心🔰<br />
                    お気軽にご応募ください💪
                  </template>
                </RecruitInfoItem>
                <RecruitInfoItem>
                  <template #title>勤務時間</template>
                  <template #description>9:00〜18:00 休憩1時間</template>
                </RecruitInfoItem>
                <RecruitInfoItem>
                  <template #title>給与</template>
                  <template #description>
                    日給11000円<br />
                    ※自給換算1,375円<br />
                    ※週5日からの勤務になります<br />
                    <br />
                    🌈月収例<br />
                    週5勤務の場合 253,000円<br />
                    週6勤務の場合 297,000円
                  </template>
                </RecruitInfoItem>
                <RecruitInfoItem>
                  <template #title>資格</template>
                  <template #description>普通自動車運転免許(AT限定可) ※事業用ナンバー車両あれば直可</template>
                </RecruitInfoItem>
                <RecruitInfoItem :border="false">
                  <template #title>福利厚生</template>
                  <template #description>
                    車両貸出あり(条件あり)<br />
                    ユニフォーム支給<br />
                    髪型、髪色自由<br />
                    ネイル、ピアス、ヒゲOK<br />
                    確定申告のサポート<br />
                    社員割制度<br />
                    昼飯手当制度<br />
                    勤続祝い
                  </template>
                </RecruitInfoItem>
              </div>
            </div>
          </div>
        </section>
      </div>
    </template>
  </AppBaseLayout>
</template>
