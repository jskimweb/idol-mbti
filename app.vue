<template>
  <Layout>
    <NuxtPage />
  </Layout>
</template>

<script setup lang="ts">
import Layout from '~/layouts/Layout.vue';

import { createClient } from '@supabase/supabase-js';

const config = useRuntimeConfig();
const supabase = createClient(config.public.supabaseUrl, config.public.supabaseKey);

provide('supabase', supabase);
</script>
