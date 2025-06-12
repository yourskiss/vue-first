import axios from 'axios'
import { ref } from 'vue';

export default function usePosts() {
  const isLoad = ref<boolean>(false);
  interface Datalist {
    id: number,
    title: string,
    body: string,
    userId: number
  }
  interface Datapost {
    title: string,
    body: string,
  }
  interface Datapatch {
    //  title: string,
    body: string,
  }

  const baseURL = import.meta.env.VITE_API_BASE_URL_JSONPLACEHOLDER || '';
  const resultList = ref<Datalist[]>([]);
  const resultData = ref<Datalist | null>(null);
  const resultPost = ref<Datapost | null>(null);
  const resultPatch = ref<Datapatch | null>(null);
  const resultError = ref<string | null>(null);


  /* ####################  get all posts  #################### */
  const getAllPosts = async () => {
    resultList.value = [];
    resultError.value = null;
    isLoad.value = true
    try {
      const res = await axios.get<Datalist[]>(baseURL + 'posts');
      resultList.value = res.data;
      console.log(res);
    } catch (err) {
      resultError.value = (err as Error).message;
      console.log(err);
    } finally {
      isLoad.value = false
    }
  }

  /* ####################  get single posts  #################### */
  const getSinglePost = async (id: number) => {
    resultData.value = null;
    resultError.value = null;
    isLoad.value = true
    try {
      const res = await axios.get<Datalist>(baseURL + 'posts/' + id);
      resultData.value = res.data;
      console.log(res);
    } catch (err) {
      resultError.value = (err as Error).message;
      console.log(err);
    } finally {
      isLoad.value = false
    }
  }

  /* ####################  add posts  #################### */
  const addSinglePost = async (formdata: Datapost) => {
    resultPost.value = null;
    resultError.value = null;
    isLoad.value = true
    const config = {
      method: "POST",
      url: baseURL + 'posts/',
      headers: {
        'Content-Type': 'application/json'
      },
      data: formdata // JSON.stringify(formdata)
    }
    try {
      const res = await axios.request(config);
      resultPost.value = res.data;
      console.log(res);
    } catch (err) {
      resultError.value = (err as Error).message;
      console.log(err);
    } finally {
      isLoad.value = false
    }
  }


  /* ####################  edit posts By Put #################### */
  const updatePostByPut = async (id: number, formdata: Datapost) => {
    resultPost.value = null;
    resultError.value = null;
    isLoad.value = true
    const config = {
      method: "PUT",
      url: baseURL + 'posts/' + id,
      headers: {
        'Content-Type': 'application/json'
      },
      data: formdata // JSON.stringify(formdata)
    }
    try {
      const res = await axios.request(config);
      resultPost.value = res.data;
      console.log(res);
    } catch (err) {
      resultError.value = (err as Error).message;
      console.log(err);
    } finally {
      isLoad.value = false
    }
  }

  /* ####################  edit posts By Patch #################### */
  const updatePostByPatch = async (id: number, formdata: Datapatch) => {
    resultPatch.value = null;
    resultError.value = null;
    isLoad.value = true
    const config = {
      method: "PATCH",
      url: baseURL + 'posts/' + id,
      headers: {
        'Content-Type': 'application/json'
      },
      data: formdata // JSON.stringify(formdata)
    }
    try {
      const res = await axios.request(config);
      resultPatch.value = res.data;
      console.log(res);
    } catch (err) {
      resultError.value = (err as Error).message;
      console.log(err);
    } finally {
      isLoad.value = false
    }
  }

  /* ####################  delete posts  #################### */
  const deleteSinglePost = async (id: number) => {
    resultPost.value = null;
    resultError.value = null;
    isLoad.value = true
    const config = {
      method: "DELETE",
      url: baseURL + 'posts/' + id,
      headers: {
        'Content-Type': 'application/json'
      },
    }
    try {
      const res = await axios.request(config);
      resultPost.value = res.data;
      console.log(res);
    } catch (err) {
      resultError.value = (err as Error).message;
      console.log(err);
    } finally {
      isLoad.value = false
    }
  }

  return { isLoad, resultList, resultData, resultPost, resultPatch, resultError, getAllPosts, getSinglePost, addSinglePost, updatePostByPut, updatePostByPatch, deleteSinglePost }
}
