<script setup lang="ts">
import { useCounterStoreB } from '@/stores/counterB';
const counter2 = useCounterStoreB();

interface Props {
  msg: string
}
const props = defineProps<Props>()


</script>
<template>
<h1 class="green">{{ props.msg }}</h1>
<div>
  <p>
    Single Count: {{ counter2.count }}
  </p>
  <p>
    Double Count: {{ counter2.doubleCount }}
  </p>
  <p>
    Square Count : {{ counter2.squareCount }}
  </p>
  <p>
    Cubes Count : {{ counter2.cubesCount }}
  </p>
</div>


</template>
<style scoped>
</style>
