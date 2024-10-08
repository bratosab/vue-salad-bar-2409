import { onMounted, ref } from 'vue'
import type { Topping } from '../models/Topping.model'

export function usePersistedToppingChoices() {
  const toppings = ref<Topping[]>([])

  function refreshToppings() {
    const rawToppings = localStorage.getItem('topping-choices')
    toppings.value = rawToppings ? JSON.parse(rawToppings) : []
  }

  onMounted(() => {
    refreshToppings()
  })

  document.addEventListener('chosen-toppings', () => {
    refreshToppings()
  })

  return { toppings }
}
