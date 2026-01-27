<template>
  <div class="overflow-hidden">
    <div class="slide-wrap">
      <Swiper :modules="[Autoplay, Pagination, Navigation]" :loop="true" :slides-per-view="1" :speed="700"
        :autoplay="{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }"
        :pagination="{ clickable: true }" :navigation="false">
        <SwiperSlide v-for="(item, i) in images" :key="i">
          <img class="slide-img" :src="item.src" :alt="item.alt" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="quick-link">
      <div class="quick-link-wrap">
        <span class="bg-[#ffce32]">매장찾기</span>
        <span>가맹 신청 문의</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'


import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import img01 from '@/assets/image/slide-img-01.png'
import img02 from '@/assets/image/slide-img-02.png'
import img03 from '@/assets/image/slide-img-03.jpg'
import img04 from '@/assets/image/slide-img-04.jpg'

const images = [
  { src: img01, alt: 'slide 1' },
  { src: img02, alt: 'slide 2' },
  { src: img03, alt: 'slide 3' },
  { src: img04, alt: 'slide 4' },
]
</script>

<style scoped>
.slide-wrap {
  width: 100%;
  max-width: 2560px;
  margin: 0 auto;
}

@media screen and (min-width:1920px) {
  .slide-img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    display: block;
    border-radius: 16px;
  }
}

.slide-img {
  display: block;
  width: 100%;
  height: auto;
  object-fit: contain;
}

/* 버튼/페이지네이션 위치 약간 다듬고 싶으면 아래처럼 */
:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  transform: scale(0.9);
}

:deep(.swiper-pagination-bullets) {
  bottom: 12px;
}

:deep(.swiper-pagination) {
  bottom: 14px;
  /* 아래로 내리거나 올리고 싶으면 여기 */
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  opacity: 0.5;
  /* Swiper 기본은 background가 들어가는데, 원하는 색으로 바꾸려면 */
  background: rgba(255, 255, 255, 0.8);
  margin: 0 6px !important;
  border-radius: 15px;

  /* ✅ 애니메이션 */
  transition: width 250ms ease, opacity 250ms ease, background-color 250ms ease;
  will-change: width;
  border: 1px solid rgba(0, 0, 0, 0.45);
}

/* 활성 점 */
:deep(.swiper-pagination-bullet-active) {
  width: 30px;
  opacity: 1;
  background: #ffc300;
  border: 1px solid rgb(47 47 47 / 25%);
}

/* 점을 아래 중앙에 예쁘게 정렬(기본도 중앙이지만 더 안정적으로) */
:deep(.swiper-pagination-bullets) {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
