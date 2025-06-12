<script lang="ts" setup>
interface Props {
  status: boolean
}
const props = defineProps<Props>()
</script>
<template>
<section v-if="props.status" class="spinner">
</section>
</template>
<style>

.spinner {
  width: 24px;
  height: 24px;
  border: 3px solid #ccc;
  border-top-color: #42b983;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
