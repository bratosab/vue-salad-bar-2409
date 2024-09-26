<script setup lang="ts">
import saladImg from '@/assets/salad.jpg'
import { useSaladStore } from '../../stores/salad'
import { storeToRefs } from 'pinia'

const saladStore = useSaladStore()
const { chosenToppings, price } = storeToRefs(saladStore)
</script>

<template>
  <div>
    <img :src="saladImg" alt="Salad image" width="250" />
    <p>Your choices :</p>
    <p>Total price : {{ price }}€</p>
    <ul>
      <li v-for="topping in chosenToppings" :key="topping.id">
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
