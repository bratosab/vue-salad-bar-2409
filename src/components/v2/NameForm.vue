<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useOrderStore } from '../../stores/order'
import { storeToRefs } from 'pinia'

const name = ref('')
const router = useRouter()

const store = useOrderStore()
const { id } = storeToRefs(store)
const { initOrder } = store

function handleStartOrder() {
  if (!name.value) {
    return
  }

  initOrder(name.value)
  // router.push(`/v2/salad/${id.value}`)
  router.push({ name: 'salad2', params: { id: id.value } })
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
