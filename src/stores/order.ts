import { defineStore } from 'pinia'
import { ref } from 'vue'
import { Status } from '../models/Status.enum'

export const useOrderStore = defineStore('order', () => {
  const name = ref('')
  const id = ref(0)
  const status = ref<Status>(Status.New)

  function setName(newName: string) {
    name.value = newName
  }

  function setId(newId: number) {
    id.value = newId
  }

  function setStatus(newStatus: Status) {
    status.value = newStatus
  }

  function initOrder(name: string) {
    setName(name)
    setId(Math.floor(Math.random() * 1000))
    setStatus(Status.InProgress)
  }

  return { name, id, status, initOrder, setName, setId, setStatus }
})
