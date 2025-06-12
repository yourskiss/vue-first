<script setup lang="ts">
import CounterValue1 from '@/components/CounterValue1.vue'
import CounterValue2 from '@/components/CounterValue2.vue'
import CounterAction1 from '@/components/CounterAction1.vue'
import CounterAction2 from '@/components/CounterAction2.vue'
const head1 : string = "Counter A"
const head2 : string = "Counter B"
const text1 : string = "Action A "
const text2 : string = "Action B"
</script>

<template>
  <h1>Pinia State Management</h1>

    <CounterValue1 :msg="head1" />
    <CounterAction1 :msg="text1" />

    <CounterValue2 :msg="head2" />
    <CounterAction2 :msg="text2" />

</template>
