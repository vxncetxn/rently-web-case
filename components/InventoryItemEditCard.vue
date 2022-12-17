<script setup>
import { string, integer } from "vue-types";

const props = defineProps({
  name: string().isRequired,
  quantity: integer().isRequired,
  image: string(),
  type: string().isRequired,
});

const formState = useFormState();

const deleteHandler = () => {
  const newState = JSON.parse(JSON.stringify(formState.value.state));
  newState.items.splice(
    newState.items.findIndex((d) => d.name === props.name),
    1
  );
  formState.value = {
    state: newState,
    isTouched: true,
  };
};

const isOpen = ref(false);
const openHandler = () => (isOpen.value = true);
const closeHandler = () => (isOpen.value = false);
</script>

<template>
  <div class="relative group">
    <InventoryItemCard
      :name="name"
      :quantity="quantity"
      :image="image ? image : ''"
    />
    <div
      class="absolute top-0 right-0 z-10 flex px-16 sm:px-20 lg:px-24 py-8 sm:py-12 translate-x-8 translate-y-8 bg-black opacity-0 rounded-8 gap-x-12 sm:gap-x-16 lg:gap-x-24 group-hover:opacity-100 group-hover:-translate-y-16 transition-[opacity,transform] duration-[200ms] ease-[cubic-bezier(0.45, 0, 0.55, 1)]"
    >
      <button
        class="font-sans text-white text-14 sm:text-16 lg:text-18 capsize"
        @click="openHandler"
      >
        Edit
      </button>
      <button
        class="font-sans text-white text-14 sm:text-16 lg:text-18 capsize"
        @click="deleteHandler"
      >
        Delete
      </button>
    </div>
  </div>
  <EditInventoryItemModal
    :isOpen="isOpen"
    :close-handler="closeHandler"
    :name="name"
    :quantity="quantity"
    :type="type"
    :image="image"
  />
</template>
