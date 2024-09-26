<script setup lang="ts">
import { usePersistedToppingChoices } from '../composables/usePersistedToppingChoices'
import saladImg from '@/assets/salad.jpg'

const { toppings } = usePersistedToppingChoices()
</script>

<template>
  <div>
    <img :src="saladImg" alt="Salad image" width="250" />
    <p>Your choices :</p>
    <ul>
      <li v-for="topping in toppings" :key="topping.id">
        {{ topping.name }} ({{ topping.price }} €)
      </li>
    </ul>
  </div>
</template>
<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>
