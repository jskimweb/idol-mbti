<template>
  <div class="list-page">
    <div v-for="item in list" :key="item.id" class="card">
      <span class="pixel top-left" />
      <span class="pixel top-right" />
      <span class="pixel bot-left" />
      <span class="pixel bot-right" />
      <div class="card-text-group">
        <span class="card-text">{{ item.name }}</span>
        <span class="card-text">{{ item.group }}</span>
      </div>
      <img class="card-image" :src="item.photo" alt="프로필 사진" />
    </div>
  </div>
</template>

<script setup>
const supabase = inject('supabase');

const route = useRoute();
const router = useRouter();

const list = ref([]);

fetchList();

async function fetchList() {
  const { mbti, gender } = route.query;
  if (!mbti) return router.replace({ name: 'index' });

  if (gender === 'all') {
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
}
</script>

<style lang="scss" scoped>
$pixel: 8px;

.list-page {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(calc(#{$pixel} * 30), 1fr));
  gap: 10px;
  .pixel {
    position: absolute;
    width: $pixel;
    height: $pixel;
    background-color: black;
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
  .card {
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
      .card-text {
        display: block;
        font-size: 20px;
        text-align: center;
        color: white;
      }
    }
    .card-image {
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
