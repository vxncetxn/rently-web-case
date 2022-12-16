<script setup>
import itemTypes from "~/item-types.json";
import { useDropZone } from "@vueuse/core";
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
const uploadedImageRef = ref(null);

watchEffect(() => {
  if (props.isOpen && imageFileField.value) {
    const fileReader = new FileReader();
    fileReader.onload = function () {
      uploadedImageRef.value.src = fileReader.result;
    };
    fileReader.readAsDataURL(imageFileField.value);
  }
});

const testHandler = (e) => {
  imageFileField.value = e.target.files[0];
};

const dropZoneRef = ref();
function onDrop(files) {
  // called when files are dropped on zone
  imageFileField.value = files[0];
}
const { isOverDropZone } = useDropZone(dropZoneRef, onDrop);

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
        <div class="flex flex-col gap-y-16">
          <label class="font-sans text-20 capsize" for="item-name">Item</label>
          <select
            class="px-16 py-12 font-sans border text-20 capsize bg-neutral-50 border-neutral-200 rounded-8"
            name="item-name"
            id="item-name"
            required
            v-model="itemField"
          >
            <option value="">Choose an item</option>
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
            </optgroup>
          </select>
        </div>
        <NumberInput
          name="quantity-field"
          label="Quantity"
          :min="1"
          :max="20"
          :required="true"
          placeholder="1"
          v-model="quantityField"
        />
        <div class="flex flex-col gap-y-16">
          <Text>Image</Text>
          <div
            :class="`rounded-8 aspect-[3/2] ${
              imageFileField ? '' : 'border border-neutral-200 p-16'
            }`"
            ref="dropZoneRef"
          >
            <input
              class="absolute top-0 left-0 w-0 h-0 opacity-0"
              type="file"
              accept="image/png, image/jpeg"
              id="image-field"
              name="image-field"
              @change="testHandler"
            />
            <label
              :class="`flex flex-col gap-y-12 justify-center items-center w-full h-full border border-dashed p-32 sm:p-48 lg:p-64 rounded-4 ${
                isOverDropZone
                  ? 'bg-teal-50 border-teal-200'
                  : 'bg-neutral-50 border-neutral-200'
              }`"
              v-if="!imageFileField"
              for="image-field"
            >
              <svg
                :class="`w-24 h-24 ${
                  isOverDropZone ? 'stroke-teal-800' : 'stroke-black'
                }`"
              >
                <use href="#photo-icon" />
              </svg>
              <p
                :class="`font-sans text-16 sm:text-18 lg:text-20 capsize text-center ${
                  isOverDropZone ? 'text-teal-800' : 'text-black'
                }`"
              >
                Click to add image or drag your image here
              </p>
            </label>
            <div class="w-full h-full" v-else>
              <img
                class="object-cover w-full h-full rounded-8"
                ref="uploadedImageRef"
                src=""
                alt=""
              />
            </div>
          </div>
        </div>
        <PrimaryButton @click="submitHandler">Add item</PrimaryButton>
      </div>
    </form></Modal
  >
</template>
