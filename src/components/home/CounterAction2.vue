<script lang="ts" setup>
import { useCounterStoreB } from '@/stores/counterB';
const counter2 = useCounterStoreB();
interface Props {
  msg: string
}
const props = defineProps<Props>()
</script>
<template>
      <h2  class="green"> {{ props.msg }}</h2>
      <div>
        <button @click="counter2.getIncrement">Increment</button>
        <button @click="counter2.getDecrement">Decrement</button>
      </div>
</template>
<style scoped>
</style>
