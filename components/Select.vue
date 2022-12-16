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
    <label
      class="font-sans text-16 sm:text-18 lg:text-20 capsize"
      :for="name"
      >{{ label }}</label
    >
    <div class="relative">
      <select
        class="w-full px-16 py-12 font-sans border text-16 sm:text-18 lg:text-20 capsize bg-neutral-50 border-neutral-200 rounded-8"
        :name="name"
        :id="name"
        :required="required"
        :value="modelValue"
        @input="inputHandler"
      >
        <slot></slot>
      </select>
      <div
        class="absolute top-px right-px flex items-center justify-center w-48 h-[calc(100%-2px)] bg-neutral-50 rounded-8 pointer-events-none"
      >
        <svg class="w-24 h-24">
          <use href="#chevron-down-icon" />
        </svg>
      </div>
    </div>
  </div>
</template>
