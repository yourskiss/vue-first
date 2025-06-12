<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import useProducts from '@/services/useProducts';

const { products, isLoad, error, fetchProducts, totalProducts } = useProducts();

const currentPage = ref(1);
const pageSize = 10;

const totalPages = computed(() => Math.ceil(totalProducts.value / pageSize));

onMounted(() => {
  fetchProducts(0, pageSize);
});

const goToPage = (page: number) => {
  currentPage.value = page;
  fetchProducts((page - 1) * pageSize, pageSize);
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) goToPage(currentPage.value + 1);
};

const prevPage = () => {
  if (currentPage.value > 1) goToPage(currentPage.value - 1);
};
</script>

<template>
  <div>
    <h1>
    Paginated Products (10 per page) <br />
    totalProducts - {{ totalProducts }} <br />
    totalPages - {{totalPages}} <br />
    currentPage - {{currentPage}}
    </h1>

    <div v-if="isLoad">Loading...</div>
    <div v-if="error">{{ error }}</div>

    <ul v-if="totalProducts">
      <li v-for="(prod, index) in products" :key="index">
        {{ prod.title }}
        {{ prod.description }}
      </li>
    </ul>

    <div class="pagination" v-if="totalPages > 0">
      <button @click="prevPage" :disabled="currentPage === 1">Prev</button>

      <button
        v-for="page in totalPages"
        :key="page"
        :class="{ active: currentPage === page }"
        @click="goToPage(page)"
      >
        {{ page }}
      </button>

      <button @click="nextPage" :disabled="currentPage === totalPages">Next</button>
    </div>
  </div>
</template>



<style scoped>
.pagination {
  margin-top: 20px;
}
button {
  margin: 0 5px;
  padding: 6px 10px;
}
button.active {
  background-color: #007bff;
  color: white;
  font-weight: bold;
}
</style>
