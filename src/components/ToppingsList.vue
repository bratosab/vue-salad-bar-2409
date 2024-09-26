<script setup lang="ts">
import { ref } from 'vue'
import { getToppings } from '@/services/salad.service'
import type { Topping } from '@/models/Topping.model'

const toppings = ref<Topping[]>([])

await getToppings().then((value) => (toppings.value = value))

function handleChooseTopping(topping: Topping) {
  const rawToppings = localStorage.getItem('topping-choices')
  const currentToppings: Topping[] = rawToppings ? JSON.parse(rawToppings) : []

  localStorage.setItem('topping-choices', JSON.stringify([...currentToppings, topping]))

  const refreshChosenToppings = new Event('chosen-toppings')
  document.dispatchEvent(refreshChosenToppings)
}
</script>

<template>
  <ul>
    <li v-for="topping in toppings" :key="topping.id">
      {{ topping.name }} ({{ topping.price }} €)
      <button @click="handleChooseTopping(topping)">+1</button>
    </li>
  </ul>
</template>
