<template>
  <div class="list-page">
    <div v-for="item in list" :key="item.id" class="card">
      <span class="card-text">{{ item.name }}</span>
      <span class="card-text">{{ item.group }}</span>
      <img class="card-image" :src="item.photo" alt="프로필 사진" />
    </div>
  </div>
</template>

<script setup>
const supabase = inject('supabase');

const route = useRoute();
const router = useRouter();

const list = ref([]);

const mbti = route.query.mbti;

fetchList();

async function fetchList() {
  if (!mbti) return router.replace({ name: 'index' });
  const { data } = await supabase
    .from('idol-mbti')
    .select()
    .eq('mbti', mbti)
    .order('name', { ascending: true });
  list.value = data;
}
</script>

<style lang="scss" scoped>
.list-page {
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 200px;
    background-color: black;
    border-radius: 10px;
    padding: 10px;
    .card-text {
      font-size: 20px;
      color: rgba(255, 255, 255, 0.5);
      z-index: 1;
    }
    .card-image {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) scale(1);
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
      transition: all 0.3s ease-in-out;
    }
    &:hover {
      .card-text {
        color: rgba(255, 255, 255, 1);
      }
      .card-image {
        opacity: 0.5;
        transform: translate(-50%, -50%) opacity(1) scale(1.2);
      }
    }
  }
}
</style>
