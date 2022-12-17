<script setup>
import itemsReference from "~/data/items-reference.json";
import { bool, func, string } from "vue-types";

const props = defineProps({
  isOpen: bool().isRequired,
  closeHandler: func().isRequired,
});

const formState = useFormState();
const formRef = ref(null);

const itemField = ref({
  selectedValue: "",
  group: "",
});
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
    const newState = JSON.parse(JSON.stringify(formState.value.state));
    newState.items.push({
      name: itemField.value.selectedValue,
      quantity: quantityField.value,
      type: itemField.value.group,
      image: "",
    });
    formState.value = {
      state: newState,
      isTouched: true,
    };

    itemField.value = {
      selectedValue: "",
      group: "",
    };
    quantityField.value = 1;
    imageFileField.value = null;
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
          label="Item"
          :required="true"
          v-model="itemField"
          ><option value="">Choose an item</option>
          <optgroup
            v-for="group in itemsReference"
            :key="group.name"
            :label="group.name"
          >
            <option
              v-for="item in group.items"
              :key="item"
              :disabled="formState.state.items.find((i) => i.name === item)"
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
          :modelValue="imageFileField"
          @file-change="uploadHandler"
        />
        <PrimaryButton @click="submitHandler">Add item</PrimaryButton>
      </div>
    </form></Modal
  >
</template>
