<script lang="ts" setup>
import { useForm, Field, ErrorMessage } from 'vee-validate';
import * as yup from 'yup';
import { RouterLink } from 'vue-router';
import usePosts from '@/services/usePosts';
import LoadingBar from '@/components/LoadingBar.vue';

const { isLoad, resultPost, resultError, addSinglePost } = usePosts();

// Form data interface
interface Datapost {
  title: string;
  body: string;
}

// Yup validation schema
const schema = yup.object({
  title: yup.string().min(3, 'Minimum 3 characters').required('Title is required'),
  body: yup.string().min(10, 'Minimum 10 characters').required('Body is required'),
});

const { handleSubmit } = useForm<Datapost>({
  validationSchema: schema,
});

// Submit function
const onSubmit = handleSubmit(async (values) => {
  console.log('Form values:', values);
  await addSinglePost(values);
});
</script>

<template>
  <h1>
    Add New Post
    <RouterLink to="/posts" class="rightfloat">Back</RouterLink>
  </h1>

  <LoadingBar :status="isLoad" />

  <div v-if="resultError" class="error">
    {{ resultError }}
  </div>

  <div v-else-if="resultPost">
    <p>✅ Post submitted successfully:</p>
    <pre>{{ resultPost }}</pre>
  </div>

  <div v-else>
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label for="title">Title</label><br />
        <Field id="title" name="title" as="input" type="text" placeholder="Enter title" validateOnInput /><br />
        <ErrorMessage name="title" class="error" />
      </div>

      <div class="form-group">
        <label for="body">Body</label><br />
        <Field id="body" name="body" as="textarea" placeholder="Enter body content" validateOnInput /><br />
        <ErrorMessage name="body" class="error" />
      </div>

      <button type="submit" :disabled="isLoad">
        {{ isLoad ? 'Submitting...' : 'Submit' }}
      </button>
    </form>
  </div>
</template>

<style scoped>
.error {
  color: red;
  margin-top: 4px;
}
.rightfloat {
  float: right;
}
.form-group {
  margin-bottom: 1rem;
}
</style>
