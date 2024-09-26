<script setup lang="ts">
import { usePersistedName } from '@/composables/usePersistedName'
import ToppingsList from '@/components/ToppingsList.vue'
import { defineAsyncComponent, onErrorCaptured } from 'vue'

const { name } = usePersistedName()

onErrorCaptured((error) => {
  console.log('error catched', error)
})

const ChosenToppings = defineAsyncComponent({
  loader: () => import('@/components/ChosenToppings.vue'),
  timeout: 400
})
</script>

<template>
  <h2>{{ name }}, personalise your salad</h2>

  <div>
    <suspense>
      <template #default>
        <ToppingsList />
      </template>
      <template #fallback>
        <p>Loading toppings...</p>
      </template>
    </suspense>
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
