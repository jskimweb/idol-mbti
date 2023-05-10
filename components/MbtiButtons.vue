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
      <button class="menu-btn clear" @click="clear">
        <span class="menu-btn-text">리셋</span>
      </button>
      <button class="menu-btn start" :disabled="!selectedMbti" @click="start">
        <span class="menu-btn-text">시작</span>
      </button>
      <button class="menu-btn gender" @click="changeGender">
        <span class="menu-btn-text">{{ currentGenderName }}</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

interface IGenderMap {
  [key: string]: { key: string; name: string };
}

const GENDER_MAP: IGenderMap = {
  all: { key: 'all', name: '전체' },
  male: { key: 'male', name: '남돌' },
  female: { key: 'female', name: '여돌' },
};

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
const currentGender = ref(
  process.client
    ? localStorage.getItem('genderSetting') || GENDER_MAP.all.key
    : GENDER_MAP.all.key
);

const selectedMbti = computed(() => {
  const mbtiString = mbti
    .map((options) => {
      return options.find((option) => option.isActived)?.name;
    })
    .join('');
  return mbtiString.length === 4 ? mbtiString : '';
});

const currentGenderName = computed(() => {
  return GENDER_MAP[currentGender.value]?.name;
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

async function start() {
  router.push({
    name: 'list',
    query: { mbti: selectedMbti.value, gender: GENDER_MAP[currentGender.value].key },
  });
}

function clear() {
  for (const options of mbti) {
    for (const option of options) {
      option.isActived = false;
    }
  }
  currentGender.value = 'all';
  if (process.client) {
    localStorage.setItem('genderSetting', currentGender.value);
  }
}

function changeGender() {
  switch (currentGender.value) {
    case 'all':
      currentGender.value = 'male';
      break;
    case 'male':
      currentGender.value = 'female';
      break;
    case 'female':
      currentGender.value = 'all';
      break;
  }
  if (process.client) {
    localStorage.setItem('genderSetting', currentGender.value);
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
    width: 60px;
    height: 60px;
    background: url('~/assets/img/mbti-button.png') no-repeat center;
    background-size: contain;
    cursor: pointer;
    .btn-text {
      font-size: 24px;
      color: white;
      padding: 0 0 2px 2px;
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
      padding-bottom: 4px;
    }
    &:active {
      .menu-btn-text {
        opacity: 0.5;
      }
    }
    &.clear {
      width: 75px;
      background: url('~/assets/img/clear-button.png') no-repeat center;
      background-size: contain;
      &:active {
        background: url('~/assets/img/clear-button-active.png') no-repeat center;
        background-size: contain;
      }
      .menu-btn-text {
        font-size: 15px;
      }
    }
    &.start {
      background: url('~/assets/img/start-button.png') no-repeat center;
      background-size: cover;
      &:active {
        background: url('~/assets/img/start-button-active.png') no-repeat center;
        background-size: cover;
      }
    }
    &.gender {
      width: 75px;
      background: url('~/assets/img/gender-button.png') no-repeat center;
      background-size: contain;
      &:active {
        background: url('~/assets/img/gender-button-active.png') no-repeat center;
        background-size: contain;
      }
      .menu-btn-text {
        font-size: 15px;
      }
    }
  }
}
</style>
