<template>
  <div class="mbti-selector">
    <div v-for="char in MBTI" class="mbti-btn" @click="toggleBtnState">
      <span class="btn-text">{{ char }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const MBTI = ['E', 'S', 'T', 'J', 'I', 'N', 'F', 'P'];

function toggleBtnState(e: MouseEvent) {
  const target = e.target as HTMLDivElement;
  target.classList.toggle('active');
}
</script>

<style lang="scss" scoped>
.mbti-selector {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  padding-top: 20px;
  .mbti-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 65px;
    height: 65px;
    background: url('~/assets/img/mbti-button.png') no-repeat center;
    background-size: contain;
    cursor: pointer;
    .btn-text {
      font-size: 24px;
      color: white;
    }
    &.active {
      background: url('~/assets/img/mbti-button-active.png') no-repeat center;
      background-size: contain;
      .btn-text {
        opacity: 0.5;
      }
    }
  }
}
</style>
