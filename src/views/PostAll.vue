<script lang="ts" setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router';
import usePosts from "@/services/usePosts";
import LoadingBar from '@/components/LoadingBar.vue'

const {isLoad, resultList, resultError, getAllPosts, deleteSinglePost } = usePosts();

onMounted(async () => {
  await getAllPosts();
});

const deletepost = async(id:number) => {
  if(!(window.confirm("Are you sure ?"))) return
 await deleteSinglePost(id);
}
</script>

<template>
  <h1>
    All Posts
    <RouterLink to="/addpost" class="rightfloat">Add New Post</RouterLink>
  </h1>

  <LoadingBar :status="isLoad" />

  <div v-if="resultError">
        {{ resultError }}
  </div>
  <ul v-else-if="resultList">
    <li v-for="itm in resultList" :key="itm.id">
      <b> {{ itm.title}}</b>
      <br />

      <RouterLink :to="`/viewpost/${itm.id}`" >View</RouterLink>
        ||
      <RouterLink :to="`/edit-by-put/${itm.id}`">Edit by put</RouterLink>
         ||
      <RouterLink :to="`/edit-by-patch/${itm.id}`">Edit by patch</RouterLink>
         ||
      <span @click="deletepost(itm.id)">Delete</span>
    </li>
  </ul>



</template>

<style>
@media (min-width: 1024px) {
  .rightfloat { float:right; }
}
</style>
