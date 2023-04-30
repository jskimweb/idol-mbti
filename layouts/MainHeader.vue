<template>
  <header class="main-header">
    <img class="main-logo" src="~/assets/img/main-logo.png" alt="메인로고" />
  </header>
</template>

<style lang="scss" scoped>
.main-header {
  @include main-header-height;
  display: flex;
  justify-content: center;
  align-items: center;
  .main-logo {
    height: 60%;
    object-fit: contain;
  }
}
</style>
