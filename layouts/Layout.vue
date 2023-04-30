<template>
  <div>
    <MainHeader />
    <slot />
    <MainFooter />
  </div>
</template>

<script setup lang="ts">
import MainHeader from './MainHeader.vue';
import MainFooter from './MainFooter.vue';
</script>
