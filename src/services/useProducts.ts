// composables/useProducts.ts
import axios from 'axios';
import { ref } from 'vue';

export default function useProducts() {
  const baseURL = import.meta.env.VITE_API_BASE_URL_ESCUELAJS || '';
  interface Prod {
    id: number,
    title: string,
    slug: string,
    price: number,
    description: string,
    category: {
      id: number,
      name: string,
      slug: string,
      image: string,
      creationAt: string,
      updatedAt: string
    },
    images: [],
    creationAt: string,
    updatedAt: string
  }

  const products = ref<Prod | null>(null);
  const isLoad = ref(false);
  const error = ref<string | null>(null);
  const totalProducts = ref<number>(0); // hardcoded fallback or from header if API supports

  const fetchProducts = async (offset: number = 0, limit: number = 10) => {
    isLoad.value = true;
    error.value = null;
    totalProducts.value = 0;
    products.value = null;
    try {
      const res = await axios.get(baseURL, {
        params: { offset, limit }
      });
      products.value = res.data;
      totalProducts.value = res.data.length;
    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      isLoad.value = false;
    }
  };

  return { products, isLoad, error, fetchProducts, totalProducts };
}
