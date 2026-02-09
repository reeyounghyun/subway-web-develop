<template>
  <div class="overflow-hidden">
    <div class="slide-wrap relative">
      <Swiper :modules="[Autoplay, Pagination, Navigation]" :loop="true" :slides-per-view="1" :speed="700"
        :autoplay="{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }"
        :pagination="{ clickable: true }" :navigation="false">
        <SwiperSlide v-for="(item, i) in images" :key="i">
          <img class="slide-img" :src="item.src" :alt="item.alt" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="quick-link w-[80%] absolute z-[100] mt-[-30px]">
      <div class="quick-link-wrap flex items-center justify-end">
        <span class="link-01 bg-[#ffce32] text-[#292929] text-[22px] pl-[27px] rounded-tl-[20px] tracking-[-0.02em]">
          매장찾기
        </span>
        <span class="link-02 bg-[#009223] text-white text-[22px] pl-[27px] rounded-br-[20px] tracking-[-0.02em]">가맹 신청
          문의
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>spq
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
/*  슬라이드  */
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

:deep(.swiper-button-prev),
:deep(.swiper-button-next) {
  transform: scale(0.9);
}

:deep(.swiper-pagination-bullets) {
  bottom: 12px;
}

:deep(.swiper-pagination) {
  bottom: 14px;
}

:deep(.swiper-pagination-bullet) {
  width: 8px;
  height: 8px;
  opacity: 0.5;
  background: rgba(255, 255, 255, 0.8);
  margin: 0 6px !important;
  border-radius: 15px;

  /* ✅ 애니메이션 */
  transition: width 250ms ease, opacity 250ms ease, background-color 250ms ease;
  will-change: width;
  border: 1px solid rgba(0, 0, 0, 0.45);
}

:deep(.swiper-pagination-bullet-active) {
  width: 30px;
  opacity: 1;
  background: #ffc300;
  border: 1px solid rgb(47 47 47 / 25%);
}

:deep(.swiper-pagination-bullets) {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 퀵 메뉴  */
.quick-link-wrap>span {
  display: inline-block;
  flex: 1 1 18.7rem;
  max-width: 18.75rem;
  min-height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  text-align: center;
}

.quick-link-wrap .link-01 {
  position: relative;
}

.quick-link-wrap .link-01::before {
  content: '';
  position: absolute;
  left: 90px;
  top: 50%;
  transform: translateY(-50%);
  background: url(../assets/image/icon_map.png) no-repeat center / 24px 24px;
  background-size: contain;
  width: 24px;
  height: 30px;
}

.quick-link-wrap .link-02 {
  position: relative;
}

.quick-link-wrap .link-02::after {
  content: '';
  position: absolute;
  left: 56px;
  top: 50%;
  transform: translateY(-50%);
  background: url(../assets/image/icon_franchise.png) no-repeat center / 24px 24px;
  background-size: contain;
  width: 34px;
  height: 30px;
}
</style>
