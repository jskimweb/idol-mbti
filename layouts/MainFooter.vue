<template>
  <footer class="main-footer">
    <button v-if="$route.name === 'list'" class="btn-home" @click="goHome">Home</button>
  </footer>
</template>

<script setup lang="ts">
const router = useRouter();

function goHome() {
  router.replace({ name: 'index' });
}
</script>

<style lang="scss" scoped>
.main-footer {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: $main-footer-height;
  background-image: url('~/assets/img/main-footer.png');
  background-size: 100%;
  @media (orientation: portrait) {
    background-size: 200%;
  }
  .btn-home {
    font-size: 20px;
  }
}
</style>
