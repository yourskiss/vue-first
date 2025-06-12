<script lang="ts" setup>
import { watch, onMounted, ref } from 'vue';
import { useForm, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { RouterLink } from 'vue-router';
import { useRoute } from "vue-router";
import usePosts from "@/services/usePosts";
import LoadingBar from '@/utils/LoadingBar.vue'

const {isLoad, resultPatch, resultData, resultError, getSinglePost, updatePostByPatch } = usePosts();
const {params} = useRoute();
const resultID = ref<number | null>(null);



// Form data interface
interface Datapost {
 // title: string;
  body: string;
}

// Yup validation schema
const schema = yup.object({
 // title: yup.string().min(3, 'Minimum 3 characters').required('Title is required'),
  body: yup.string().min(10, 'Minimum 10 characters').required('Body is required'),
});

// Set up form
const { handleSubmit, setValues } = useForm<Datapost>({
  validationSchema: schema,
  initialValues: {
  //  title: '',
    body: ''
  }
});

// Fetch post and update form
onMounted(async () => {
  resultID.value = Number(params.id);
  await getSinglePost(resultID.value);
});

 // Update form values when API result changes
watch(resultData, (newData) => {
  if (newData) {
    setValues({
    //  title: newData.title,
      body: newData.body,
    });
  }
});



// Submit function
const onSubmit = handleSubmit(async (values) => {
  if (resultID.value !== null) {
    console.log('Updating post:', resultID.value, values);
    await updatePostByPatch(resultID.value, values);
  }
  else
  {
     console.log('error in submition post:', resultID.value, values);
  }
});
</script>

<template>
  <h1>
    Update Post by Patch - (ID:{{ params.id }})
    <RouterLink to="/posts" class="rightfloat">Back</RouterLink>
  </h1>

  <LoadingBar :status="isLoad" />

  <div v-if="resultError">
      {{ resultError }}
  </div>

  <div v-if="resultPatch">
    <p>✅ Successfully updated!</p>
    <br />
    <pre>{{resultPatch}}</pre>
  </div>

  <div v-if="resultData && !resultPatch">
    <form @submit.prevent="onSubmit">
    <!--
      <div class="form-group">
        <label>Title</label><br />
        <Field name="title" as="input" placeholder="Enter title" validateOnInput /><br />
        <ErrorMessage name="title" class="error" />
      </div>
    -->
      <div class="form-group">
        <label>Body</label><br />
        <Field name="body" as="textarea" placeholder="Enter body content" validateOnInput /><br />
        <ErrorMessage name="body" class="error" />
      </div>

      <button type="submit" :disabled="isLoad">
        {{ isLoad ? 'Submitting...' : 'Update Post' }}
      </button>
    </form>
  </div>


</template>

<style>
.rightfloat {
  float: right;
}
.error {
  color: red;
  margin-top: 4px;
}
.form-group {
  margin-bottom: 1rem;
}
</style>
