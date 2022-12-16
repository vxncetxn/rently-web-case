<script setup>
import { string, bool } from "vue-types";

defineProps({
  name: string().isRequired,
  label: string().isRequired,
  required: bool().def(false),
  modelValue: string().isRequired,
});

const emit = defineEmits(["update:modelValue"]);

const inputHandler = (e) => {
  emit("update:modelValue", e.target.value);
};
</script>

<template>
  <div class="flex flex-col gap-y-16">
    <label class="font-sans text-20 capsize" :for="name">{{ label }}</label>
    <select
      class="px-16 py-12 font-sans border text-20 capsize bg-neutral-50 border-neutral-200 rounded-8"
      :name="name"
      :id="name"
      :required="required"
      :value="modelValue"
      @input="inputHandler"
    >
      <slot></slot>
    </select>
  </div>
</template>
