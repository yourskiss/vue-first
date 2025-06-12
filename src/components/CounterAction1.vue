<script lang="ts" setup>
import { useCounterStoreA } from '@/stores/counterA';
const counter1 = useCounterStoreA();
interface Props {
  msg: string
}
const props = defineProps<Props>()
</script>
<template>
      <h2  class="green"> {{ props.msg }}</h2>
      <div>
        <button @click="counter1.getIncrement">Increment</button>
        <button @click="counter1.getDecrement">Decrement</button>
      </div>
</template>
<style scoped>
</style>
