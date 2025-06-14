<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useRoute } from "vue-router";
import usePosts from "@/services/usePosts";
import LoadingBar from '@/components/LoadingBar.vue'

const { isLoad, resultData, resultError, getSinglePost } = usePosts();
const {params} = useRoute();
const resultID = ref<number | null>(null);
onMounted(async () => {
  resultID.value = Number(params.id);
  await getSinglePost(resultID.value);
});
</script>
<template>
  <h1>
    <RouterLink to="/posts" class="rightfloat">Back</RouterLink>
    Post Details - (ID:{{ params.id }})
  </h1>

  <LoadingBar :status="isLoad" />

  <div v-if="resultError">
        {{ resultError }}
  </div>
  <div v-else-if="resultData">
      <b> {{ resultData.title}}</b>
      <br />
      {{ resultData.body}}
  </div>
</template>
<style>
@media (min-width: 1024px) {
.rightfloat { float:right; }
}
</style>
