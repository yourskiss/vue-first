import axios from 'axios'
import { ref } from 'vue';

export default function useUsers() {
  const isLoad = ref<boolean>(false);
  interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  }
  interface Userlist {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: User[];
    support: {
      url: string;
      text: string;
    };
  }


  const baseURL = import.meta.env.VITE_API_BASE_URL_REQRES || '';
  const resultUser = ref<Userlist | null>(null)
  const resultError = ref<string | null>(null);
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': import.meta.env.VITE_API_KEY_REQRES || 'reqres-free-v1',  // api key
    },
  }
  /* ####################  get all posts  #################### */
  const getUsers = async (pagenumber: number) => {
    resultUser.value = null;
    resultError.value = null;
    isLoad.value = true
    try {
      const res = await axios.get<Userlist>(baseURL + pagenumber, config);
      resultUser.value = res.data;
      console.log(res);
    } catch (err) {
      resultError.value = (err as Error).message;
      console.log(err);
    } finally {
      isLoad.value = false
    }
  }


  return { isLoad, resultUser, resultError, getUsers }
}
