<template>
  <header class="main-header">
    <img class="main-logo" src="~/assets/img/main-logo.png" alt="메인로고" />
  </header>
</template>

<style lang="scss" scoped>
.main-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: $main-header-height;
  background: rgb(70, 203, 255);
  .main-logo {
    height: 60%;
    object-fit: contain;
  }
}
</style>
