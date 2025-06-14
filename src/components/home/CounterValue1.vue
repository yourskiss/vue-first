<script setup lang="ts">
import { useCounterStoreA } from '@/stores/counterA';
const counter1 = useCounterStoreA();


interface Props {
  msg: string
}
const props = defineProps<Props>()


</script>
<template>
<h1 class="green">{{ props.msg }}</h1>
<div>
  <p>
    Single Count: {{ counter1.count }}
  </p>
  <p>
    Double Count: {{ counter1.doubleCount }}
  </p>
  <p>
    Square Count : {{ counter1.squareCount }}
  </p>
  <p>
    Cubes Count : {{ counter1.cubesCount }}
  </p>
</div>

</template>
<style scoped>
</style>
