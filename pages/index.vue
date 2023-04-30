<template>
  <div class="content">
    <span class="desc">나랑 같은 MBTI를 가진 아이돌은 누굴까?</span>
    <span class="my-mbti">내 MBTI 는</span>
    <MbtiSelctor />
  </div>
</template>

<script setup lang="ts">
import MbtiSelctor from '~/components/MbtiSelector.vue';
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: $main-content-height;
  background: linear-gradient(to top, white, rgb(70, 203, 255));
  padding: 0 16px;
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
}
</style>
