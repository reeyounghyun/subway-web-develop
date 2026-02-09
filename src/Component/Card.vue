<template>
  <div class="mt-20 md:max-w-[1920px] md:w-auto md:mx-auto">
    <div class="flex items-center justify-between gap-3">
      <div class="card-item-01 card">
        <span class="text-white font-bold text-[30px] mt-auto block">이달의 추천메뉴</span>
        <span class="text-white font-medium text-[20px] block mt-3">Italian B.M.T 감성</span>
        <div class="link-btn mt-auto rounded-[30px] bg-white p-4">
          <a class="link-btn-icon block w-full text-base text-green-700 font-bold text-left">버거 둘러보기</a>
        </div>
      </div>
      <div class="card-item-02 card">
        <span class="text-white font-medium text-xl"></span>
        <span class="text-white font-medium text-base"></span>
        <div class="link-btn rounded-[30px] bg-white p-4">
          <a class="block w-full text-base text-green-700 font-bold text-center">해택 보러가기</a>
        </div>
      </div>
      <div class="card-item-03 card">
        <span class="text-white font-bold text-[30px] mt-auto block">예약 주문</span>
        <span class="text-white font-medium text-[20px] block mt-3">앱에서 주문하기</span>
        <div class="link-btn mt-auto rounded-[30px] bg-white p-4">
          <a class="link-btn-icon block w-full text-base text-green-700 font-bold text-left">자세히 보기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style>
.card {
  width: 100%;
}

.card-item-01 {
  position: relative;
  background-image: url('@/assets/image/card-bg-01.png');
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 331px;
}

.card-item-01::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 25px;
  width: 257px;
  height: 223px;
  background-image: url('@/assets/image/card-bg-icon-01.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

@media screen and (min-width:1920px) {
  .card-item-01::after {
    width: 340px;
    height: 312px;
  }
}

.card-item-02 {
  background-image: url('@/assets/image/card-bg-02.png');
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
  justify-content: end;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 331px;
  align-items: center;
}

.card-item-03 {
  background-image: url('@/assets/image/card-bg-03.png');
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  height: 331px;
}

.link-btn {
  width: 160px;
}

.link-btn-icon {
  position: relative;
}

.link-btn-icon::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 9px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  background-image: url('@/assets/image/icon-btn.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
</style>