<script setup>
import itemTypes from "~/item-types.json";
import { bool, func, string } from "vue-types";

const props = defineProps({
  isOpen: bool().isRequired,
  closeHandler: func().isRequired,
  title: string().isRequired,
});

const formState = useFormState();
const formRef = ref(null);

const itemField = ref("");
const quantityField = ref(1);
const imageFileField = ref(null);

const uploadHandler = (e) => {
  imageFileField.value = e;
};

const submitHandler = (e) => {
  e.preventDefault();
  const isValid = formRef.value.checkValidity();
  formRef.value.reportValidity();

  if (isValid) {
    const newFormState = { ...formState.value };
    newFormState.items.push({
      name: itemField.value,
      quantity: quantityField.value,
      type: "Bedroom",
      image: "",
    });
    formState.value = newFormState;

    props.closeHandler();
    window.scrollBy({
      top: 100000,
      left: 0,
      behavior: "smooth",
    });
  }
};
</script>

<template>
  <Modal
    :isOpen="isOpen"
    :close-handler="closeHandler"
    title="Add Inventory Item"
    ><form ref="formRef">
      <div class="flex flex-col gap-y-32">
        <Select
          name="item-field"
          label="Quantity"
          :required="true"
          v-model="itemField"
          ><option value="">Choose an item</option>
          <optgroup
            v-for="group in itemTypes"
            :key="group.name"
            :label="group.name"
          >
            <option
              v-for="item in group.items"
              :key="item"
              :disabled="formState.items.find((i) => i.name === item)"
            >
              {{ item }}
            </option>
          </optgroup></Select
        >
        <NumberInput
          name="quantity-field"
          label="Quantity"
          :min="1"
          :max="20"
          :required="true"
          placeholder="1"
          v-model="quantityField"
        />
        <ImageUpload
          name="image-field"
          label="Image"
          :required="true"
          :modelValue="imageFileField"
          @upload="uploadHandler"
        />
        <PrimaryButton @click="submitHandler">Add item</PrimaryButton>
      </div>
    </form></Modal
  >
</template>
