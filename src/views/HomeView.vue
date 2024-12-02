<script setup>
// import TheWelcome from '../components/TheWelcome.vue'

import { ref, onMounted, getCurrentInstance } from 'vue'

const data = ref({})

// const axios = inject('$axios');
const { proxy } = getCurrentInstance();
const axios = proxy.$axios;
onMounted(() => {
  fetchData();
});


async function fetchData() {
  try {
    const response = await axios.get('/cats');
    data.value = response;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div>in Home {{ data }}</div>
  </main>
</template>
