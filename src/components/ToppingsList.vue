<script setup lang="ts">
import { ref } from 'vue'
import { getToppings } from '@/services/salad.service'
import type { Topping } from '@/models/Topping.model'

const toppings = ref<Topping[]>([])

await getToppings().then((value) => (toppings.value = value))
</script>

<template>
  <ul>
    <li v-for="topping in toppings" :key="topping.id">
      {{ topping.name }} ({{ topping.price }} €)
    </li>
  </ul>
</template>
