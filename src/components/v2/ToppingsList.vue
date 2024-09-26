<script setup lang="ts">
import { onMounted } from 'vue'
import type { Topping } from '@/models/Topping.model'
import { useSaladStore } from '../../stores/salad'
import { storeToRefs } from 'pinia'

const saladStore = useSaladStore()
const { loadToppings, chooseTopping } = saladStore
const { toppings, loading } = storeToRefs(saladStore)

onMounted(() => {
  loadToppings()
})

function handleChooseTopping(topping: Topping) {
  chooseTopping(topping)
}
</script>

<template>
  <p v-if="loading">Loading toppings...</p>
  <ul>
    <li v-for="topping in toppings" :key="topping.id">
      {{ topping.name }} ({{ topping.price }} €)
      <button @click="handleChooseTopping(topping)">+1</button>
    </li>
  </ul>
</template>
