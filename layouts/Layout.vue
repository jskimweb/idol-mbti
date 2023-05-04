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
</script>

<style lang="scss" scoped>
.content {
  height: $main-content-height;
  background: linear-gradient(to top, white, rgb(70, 203, 255));
  padding: 16px;
  overflow-y: auto;
}
</style>
