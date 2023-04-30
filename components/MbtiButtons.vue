<template>
  <div class="mbti-buttons">
    <div class="mbti-selector">
      <div v-for="options in mbti" class="option-group">
        <button
          v-for="option in options"
          class="option"
          :class="{ active: option.isActived }"
          @click="onClickMbtiBtn"
        >
          <span class="btn-text">{{ option.name }}</span>
        </button>
      </div>
    </div>
    <div class="menu-buttons">
      <button class="menu-btn start" :class="{ disable: !canStart }" @click="start">
        <span class="menu-btn-text">START</span>
      </button>
      <button class="menu-btn clear" @click="clear">
        <span class="menu-btn-text">CLEAR</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const mbti = reactive([
  [
    { name: 'E', isActived: false },
    { name: 'I', isActived: false },
  ],
  [
    { name: 'S', isActived: false },
    { name: 'N', isActived: false },
  ],
  [
    { name: 'T', isActived: false },
    { name: 'F', isActived: false },
  ],
  [
    { name: 'J', isActived: false },
    { name: 'P', isActived: false },
  ],
]);

const canStart = computed(() => {
  return mbti.every((options) => {
    return options.some((option) => {
      return option.isActived;
    });
  });
});

function onClickMbtiBtn(e: MouseEvent) {
  const target = e.target as HTMLDivElement;

  for (const options of mbti) {
    const optionIdx = options.findIndex((option) => {
      return option.name === target.innerText;
    });
    if (optionIdx > -1) {
      if (options[optionIdx].isActived) {
        options[optionIdx].isActived = false;
      } else {
        for (const option of options) {
          option.isActived = false;
        }
        options[optionIdx].isActived = true;
      }
    }
  }
}

function start() {}

function clear() {
  for (const options of mbti) {
    for (const option of options) {
      option.isActived = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.mbti-buttons .mbti-selector {
  display: flex;
  gap: 10px;
  padding-top: 20px;
  .option-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .option {
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

.mbti-buttons .menu-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
  .menu-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 50px;
    cursor: pointer;
    .menu-btn-text {
      font-size: 18px;
    }
    &:active {
      .menu-btn-text {
        opacity: 0.5;
      }
    }
    &.start {
      background: url('~/assets/img/menu-button.png') no-repeat center;
      background-size: cover;
      &:active {
        background: url('~/assets/img/menu-button-active.png') no-repeat center;
        background-size: cover;
      }
    }
    &.clear {
      background: url('~/assets/img/clear-button.png') no-repeat center;
      background-size: cover;
      &:active {
        background: url('~/assets/img/clear-button-active.png') no-repeat center;
        background-size: cover;
      }
    }
  }
}
</style>
