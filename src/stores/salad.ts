import { defineStore } from 'pinia'
import type { Topping } from '../models/Topping.model'
import { ref } from 'vue'
import { getToppings } from '../services/salad.service'

export const useSaladStore = defineStore('salad', () => {
  const toppings = ref<Topping[]>([])
  const chosenToppings = ref<Topping[]>([])
  const dressing = ref('')
  const loading = ref<boolean>(false)

  function setToppings(someToppings: Topping[]) {
    toppings.value = someToppings
  }

  function chooseTopping(aTopping: Topping) {
    chosenToppings.value.push(aTopping)
  }

  function setDressing(aDressing: string) {
    dressing.value = aDressing
  }

  async function loadToppings() {
    loading.value = true
    const fetchedToppings = await getToppings()
    setToppings(fetchedToppings)
    loading.value = false
  }

  return {
    toppings,
    chosenToppings,
    dressing,
    loading,
    setToppings,
    chooseTopping,
    setDressing,
    loadToppings
  }
})
