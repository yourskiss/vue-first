<script lang="ts" setup>
import { computed } from 'vue'


// const now = computed(() => new Date());
const now = computed(() => {
  const date = new Date();
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
  const year = String(date.getFullYear()) // .slice(-2); // Get last two digits of year
  return `${day} / ${month} / ${year}`;
});
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{now}}</h2>
  </div>

</template>

<style>
@media (min-width: 1024px) {

}
</style>
