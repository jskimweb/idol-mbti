<template>
  <div class="index-page">
    <span class="desc">나랑 같은 MBTI를 가진 아이돌은 누구일까?</span>
    <span class="my-mbti">내 MBTI 는</span>
    <MbtiButtons />
    <div class="kakao-ad-pc">
      <ins
        class="kakao_ad_area"
        style="display: none"
        data-ad-unit="DAN-zGSQtjerLpXEfzfu"
        data-ad-width="160"
        data-ad-height="600"
      />
      <ins
        class="kakao_ad_area"
        style="display: none"
        data-ad-unit="DAN-na6vrlubIJvnJ5ia"
        data-ad-width="160"
        data-ad-height="600"
      />
    </div>
    <div class="kakao-ad-mb">
      <ins
        class="kakao_ad_area"
        style="display: none"
        data-ad-unit="DAN-sbq56OopcvrSvEkZ"
        data-ad-width="320"
        data-ad-height="50"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import MbtiButtons from '~/components/MbtiButtons.vue';
</script>

<style lang="scss" scoped>
.index-page {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  .desc {
    font-size: 22px;
    line-height: 1.5;
    text-align: center;
    word-break: keep-all;
    color: white;
  }
  .my-mbti {
    font-size: 40px;
    padding-top: 10px;
  }
  .kakao-ad-pc {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (orientation: portrait) {
      display: none;
    }
  }
  .kakao-ad-mb {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    @media (orientation: landscape) {
      display: none;
    }
  }
}
</style>
