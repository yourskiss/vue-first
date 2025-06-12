import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStoreA = defineStore('counterA', () => {
  const count = ref(0)

  function getIncrement() {
    count.value++
  }
  function getDecrement() {
    count.value--
  }
  const doubleCount = computed(() => count.value * 2)
  const squareCount = computed(() => count.value * count.value);
  const cubesCount = computed(() => count.value * count.value * count.value);


  return { count, doubleCount, getIncrement, getDecrement, squareCount, cubesCount }
})
