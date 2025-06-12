<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import LoadingBar from '@/utils/LoadingBar.vue'

import useUsers from "@/services/useUsers";
const { isLoad, resultUser, resultError, getUsers  } = useUsers();


onMounted(async () => {
  await getUsers(1);
});


const currentPage = ref(1);
const nextPage = () => {
  if (resultUser.value && currentPage.value < resultUser.value.total_pages) {
    currentPage.value++;
    getUsers(currentPage.value);
  }
};
const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
    getUsers(currentPage.value);
  }
};

</script>

<template>
  <div class="avvv">
    <h1>Pagination</h1>
    <LoadingBar :status="isLoad" />
    <div v-if="resultError">
        {{ resultError }}
    </div>
    <div v-else-if="resultUser">
      <h3>
        page no - {{ resultUser.page }} <br />
        per page - {{ resultUser.per_page }}  <br />
        total results - {{ resultUser.total }}  <br />
        total pages - {{ resultUser.total_pages }}
      </h3>
      <dl class="userlist">
        <dd v-for="(itm, index) in resultUser.data" :key="index">
          <p>{{ itm.id }}. {{ itm.first_name }} {{ itm.last_name }}</p>
          <img :src="itm.avatar" :alt="itm.first_name" />
          <p>{{ itm.email }}</p>
        </dd>
      </dl>

      <div v-if="resultUser" class="pagination">
        <button @click="prevPage" :disabled="resultUser.page === 1">Previous</button>
        <span>Page {{ resultUser.page }} of {{ resultUser.total_pages }}</span>
        <button @click="nextPage" :disabled="resultUser.page === resultUser.total_pages">Next</button>
      </div>
    </div>
  </div>
</template>

<style>
.userlist {
    display:flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 15px;
}
.userlist dd { border:solid 1px #999; padding:10px; }
.userlist dd img { width:190px; height:auto; }

.pagination {
  margin-top: 20px;
}
button {
  margin: 0 5px;
}
</style>
