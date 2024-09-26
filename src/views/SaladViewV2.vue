<script setup lang="ts">
import ToppingsList from '@/components/v2/ToppingsList.vue'
import { defineAsyncComponent, onErrorCaptured } from 'vue'
import { useOrderStore } from '../stores/order'
import { storeToRefs } from 'pinia'

const orderStore = useOrderStore()
const { name } = storeToRefs(orderStore)

onErrorCaptured((error) => {
  console.log('error catched', error)
})

const ChosenToppings = defineAsyncComponent({
  loader: () => import('@/components/v2/ChosenToppings.vue'),
  timeout: 400
})
</script>

<template>
  <h2>{{ name }}, personalise your salad</h2>

  <div>
    <ToppingsList />
    <ChosenToppings />
  </div>
</template>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  margin: 24px;
}
</style>
