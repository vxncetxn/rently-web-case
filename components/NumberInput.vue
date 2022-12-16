<script setup>
import { string, integer, bool } from "vue-types";

defineProps({
  name: string().isRequired,
  label: string().isRequired,
  min: integer(),
  max: integer(),
  required: bool().def(false),
  placeholder: string(),
  modelValue: integer().isRequired,
});

const emit = defineEmits(["update:modelValue"]);

const inputHandler = (e) => {
  emit("update:modelValue", parseInt(e.target.value));
};
</script>

<template>
  <div class="flex flex-col gap-y-16">
    <label
      class="font-sans text-16 sm:text-18 lg:text-20 capsize"
      :for="name"
      >{{ label }}</label
    >
    <input
      class="px-16 py-8 font-sans border text-16 sm:text-18 lg:text-20 capsize bg-neutral-50 border-neutral-200 rounded-8"
      type="number"
      :id="name"
      :name="name"
      :min="min"
      :max="max"
      :required="required"
      :placeholder="placeholder"
      :value="modelValue"
      @input="inputHandler"
    />
  </div>
</template>
