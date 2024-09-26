<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const router = useRouter()

function handleStartOrder() {
  if (!name.value) {
    return
  }

  localStorage.setItem('name', name.value)
  router.push('salad')
}
</script>

<template>
  <h2>Enter your name</h2>
  <form @submit.prevent="handleStartOrder">
    <div>
      <label for="name">Name</label>
      <input v-model="name" id="name" type="text" placeholder="What is your name..." />
    </div>
    <button type="submit">Start order</button>
  </form>
</template>
