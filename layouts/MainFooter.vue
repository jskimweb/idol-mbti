<template>
  <footer class="main-footer"></footer>
</template>

<style lang="scss" scoped>
.main-footer {
  @include main-header-height;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-image: url('~/assets/img/main-footer.png');
  background-size: 100%;
  @media (orientation: portrait) {
    background-size: 200%;
  }
}
</style>
