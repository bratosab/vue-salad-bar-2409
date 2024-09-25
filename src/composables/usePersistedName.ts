import { onMounted, ref } from 'vue'

export function usePersistedName() {
  const name = ref('')

  onMounted(() => {
    name.value = localStorage.getItem('name') ?? ''
  })

  return { name }
}
