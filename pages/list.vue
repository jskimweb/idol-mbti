<template>
  <div class="list-page">
    <span v-if="isLoading" class="loading">로딩중...</span>
    <span v-else-if="isEmpty" class="empty">빈 목록입니다.</span>
    <div v-else class="card-list">
      <div v-for="item in list" :key="item.id" class="card">
        <span class="pixel top-left" />
        <span class="pixel top-right" />
        <span class="pixel bot-left" />
        <span class="pixel bot-right" />
        <div class="card-text-group">
          <span v-if="isGroupPage" class="card-text">
            {{ item.mbti.toUpperCase() }}
          </span>
          <span class="card-text">{{ item.name }}</span>
          <span class="card-text">{{ item.group }}</span>
          <button
            class="btn-more"
            :class="{ hide: !item.group || isGroupPage }"
            @click="fetchMembers(item.group)"
          >
            MORE
          </button>
        </div>
        <img class="card-image" :src="item.photo" alt="프로필 사진" />
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = inject('supabase');

const route = useRoute();
const router = useRouter();

const isLoading = ref(false);
const list = ref([]);

const isEmpty = computed(() => list.value.length === 0);
const isGroupPage = computed(() => Object.keys(route.query).includes('group'));

watch(() => route.query, fetchList, { deep: true });

fetchList();

async function fetchList() {
  const { mbti, gender, group } = route.query;

  isLoading.value = true;
  try {
    if (group) {
      const { data } = await supabase
        .from('idol-mbti')
        .select()
        .eq('group', group)
        .order('name', { ascending: true });
      list.value = data;
    } else if (gender === 'all') {
      const { data } = await supabase
        .from('idol-mbti')
        .select()
        .eq('mbti', mbti)
        .order('name', { ascending: true });
      list.value = data;
    } else {
      const { data } = await supabase
        .from('idol-mbti')
        .select()
        .eq('mbti', mbti)
        .eq('gender', gender)
        .order('name', { ascending: true });
      list.value = data;
    }
  } finally {
    isLoading.value = false;
  }
}

function fetchMembers(group) {
  router.push({ name: 'list', query: { group } });
}
</script>

<style lang="scss" scoped>
$pixel: 8px;

.list-page {
  position: relative;
  height: 100%;
  .loading,
  .empty {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .card-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(calc(#{$pixel} * 30), 1fr));
    gap: 10px;
    padding-bottom: 16px;
  }
}

.list-page .card-list .card {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc(#{$pixel} * 30);
  height: calc(#{$pixel} * 40);
  background: url('~/assets/img/card.png') no-repeat center;
  background-size: contain;
  padding: $pixel;
  margin: 0 auto;
  .card-text-group {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 0 calc(#{$pixel} + 10px);
    opacity: 0.5;
    z-index: 1;
    .card-text {
      display: block;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      word-break: keep-all;
      color: white;
    }
    .btn-more {
      position: absolute;
      left: 50%;
      bottom: -20px;
      transform: translateX(-50%);
      color: yellow;
      opacity: 0;
      cursor: pointer;
      &:hover {
        color: blue;
      }
      &.hide {
        display: none;
      }
    }
  }
  .card-image {
    height: 100%;
    object-fit: cover;
    content-visibility: auto;
  }
  &::before {
    content: '';
    position: absolute;
    width: calc(100% - (#{$pixel} * 2));
    height: calc(100% - (#{$pixel} * 2));
    background-color: black;
    opacity: 0;
    z-index: 1;
  }
  &:hover {
    &::before {
      opacity: 0.5;
    }
    .card-text-group {
      opacity: 1;
      .btn-more {
        opacity: 1;
      }
    }
  }
}

.list-page .card-list .card .pixel {
  position: absolute;
  width: $pixel;
  height: $pixel;
  background-color: black;
  z-index: 1;
  &.top-left {
    top: calc(0% + #{$pixel});
    left: calc(0% + #{$pixel});
  }
  &.top-right {
    top: calc(0% + #{$pixel});
    right: calc(0% + #{$pixel});
  }
  &.bot-left {
    bottom: calc(0% + #{$pixel});
    left: calc(0% + #{$pixel});
  }
  &.bot-right {
    bottom: calc(0% + #{$pixel});
    right: calc(0% + #{$pixel});
  }
}
</style>
