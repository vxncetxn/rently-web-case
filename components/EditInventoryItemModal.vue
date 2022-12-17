<script setup>
import itemsReference from "~/data/items-reference.json";
import { bool, func, string, integer } from "vue-types";

const props = defineProps({
  isOpen: bool().isRequired,
  closeHandler: func().isRequired,
  name: string().isRequired,
  quantity: integer().isRequired,
  type: string().isRequired,
  image: string(),
});

const formState = useFormState();
const formRef = ref(null);

const isDirty = ref(false);
const itemField = ref({
  selectedValue: props.name,
  group: props.type,
});
const quantityField = ref(props.quantity);
const imageFileField = ref(null);

watchEffect(() => {
  if (
    itemField.value.selectedValue !== props.name ||
    quantityField.value !== props.quantity
  ) {
    isDirty.value = true;
  } else {
    isDirty.value = false;
  }
});

const uploadHandler = (e) => {
  imageFileField.value = e;
};

const submitHandler = (e) => {
  e.preventDefault();
  const isValid = formRef.value.checkValidity();
  formRef.value.reportValidity();

  if (isValid) {
    const newState = JSON.parse(JSON.stringify(formState.value.state));
    newState.items[newState.items.findIndex((d) => d.name === props.name)] = {
      name: itemField.value.selectedValue,
      quantity: quantityField.value,
      type: itemField.value.group,
      image: props.image,
    };
    formState.value = {
      state: newState,
      isTouched: true,
    };

    props.closeHandler();
  }
};
</script>

<template>
  <Modal
    :isOpen="isOpen"
    :close-handler="closeHandler"
    title="Edit Inventory Item"
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
        <PrimaryButton @click="submitHandler" :disabled="!isDirty"
          >Edit item</PrimaryButton
        >
      </div>
    </form></Modal
  >
</template>
