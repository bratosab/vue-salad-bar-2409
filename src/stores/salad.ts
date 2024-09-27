import { defineStore } from 'pinia'
import type { Topping } from '../models/Topping.model'
import { computed, ref } from 'vue'
import { getToppings } from '../services/salad.service'

const useToppingPrivateStore = defineStore('topping', () => {
  const toppings = ref<Topping[]>([])

  function setToppings(someToppings: Topping[]) {
    toppings.value = someToppings
  }

  return { toppings, setToppings }
})

export const useSaladStore = defineStore('salad', () => {
  const toppingStore = useToppingPrivateStore()
  const { setToppings } = toppingStore

  const chosenToppings = ref<Topping[]>([])
  const dressing = ref('')
  const loading = ref<boolean>(false)

  const toppings = computed(() => toppingStore.toppings)

  const price = computed(() => {
    console.log('computed')
    return chosenToppings.value.reduce((total, topping) => {
      return (total += topping.price)
    }, 0)
  })

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
    price,
    chooseTopping,
    setDressing,
    loadToppings
  }
})
