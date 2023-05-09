<template>
  <div>
    <MainHeader />
    <div class="content">
      <slot />
    </div>
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import MainHeader from './MainHeader.vue';
import MainFooter from './MainFooter.vue';

if (process.client) setScreenSize();
if (process.client) window.addEventListener('resize', setScreenSize);

function setScreenSize() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
</script>

<style lang="scss" scoped>
.content {
  height: calc(var(--vh, 1vh) * 100 - #{$main-header-height} - #{$main-footer-height});
  background: linear-gradient(to top, white, rgb(70, 203, 255));
  padding: 16px;
  overflow-y: auto;
}
</style>
