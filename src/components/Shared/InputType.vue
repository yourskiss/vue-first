<script lang="ts" setup>
interface InputProps {
  type: string;
  modelValue: string | number | undefined | null;
  id: string;
  name?: string;
  label?: string;
  placeholder?: string;
  error?: string | null | undefined;
}
const props = defineProps<InputProps>();
const emits = defineEmits<{(e: "update:modelValue", value: string | number): void;}>();
const handleInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const value = props.type === 'number' ? Number(target.value) : target.value;
  emits("update:modelValue", value);
};

</script>
<template>
  <div class="field">
    <label
      class="input-label"
      :class="[{'input-label-error': props.error }]"
      :for="props.id">
      {{ props.label }}
    </label>
    <input
      class="input-field"
      :class="[{'input-field-error': props.error }]"
      :placeholder="props.placeholder"
      :id="props.id"
      :type="props.type"
      :value="props.modelValue"
      @input="handleInput"
    />
    <span
      v-if="props.error"
      class="error-message">
      {{ props.error }}
    </span>
  </div>
</template>
<style scoped>
.field { width:100%; margin:1rem 0; }
.input-label { width:100%; margin:0 0 0.5rem 0; color:black; font-size:18px; font-weight:500; }
.input-label-error { color:red; }
.input-field { border:solid 1px gray; outline:none; width:100%; margin:0 0 0.5rem 0; color:gray; font-size:18px; font-weight:500;  }
.input-field-error { border-color:red; }
.error-message { width:100%; margin:0 0 0.5rem 0; color:red; font-size:14px; font-weight:400; }
</style>
