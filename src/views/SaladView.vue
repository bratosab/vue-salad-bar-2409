<script setup lang="ts">
import { usePersistedName } from '@/composables/usePersistedName'
import ToppingsList from '@/components/ToppingsList.vue'
import { onErrorCaptured } from 'vue'

const { name } = usePersistedName()

onErrorCaptured((error) => {
  console.log('error catched', error)
})
</script>

<template>
  <h2>{{ name }}, personalise your salad</h2>

  <suspense>
    <template #default>
      <ToppingsList />
    </template>
    <template #fallback>
      <p>Loading toppings...</p>
    </template>
  </suspense>
</template>

<style></style>
