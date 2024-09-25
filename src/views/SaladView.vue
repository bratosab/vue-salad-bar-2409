<script setup>
import { usePersistedName } from '@/composables/usePersistedName'

const { name } = usePersistedName()
</script>

<template>
  <h2>{{ name }}, personalise your salad</h2>
</template>

<style></style>
