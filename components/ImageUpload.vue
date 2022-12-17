<script setup>
import { string, bool, custom } from "vue-types";
import { useDropZone } from "@vueuse/core";

const props = defineProps({
  name: string().isRequired,
  label: string().isRequired,
  required: bool().def(false),
  modelValue: custom((value) => {
    if (value) {
      return value instanceof File;
    } else {
      return value === null;
    }
  }).isRequired,
});

const emit = defineEmits(["file-change"]);

const uploadedImageRef = ref(null);
const dropZoneRef = ref();
const inputRef = ref();

const uploadHandler = (e) => {
  emit("file-change", e.target.files[0]);
};
function dropHandler(files) {
  const dataTransfer = new DataTransfer();
  dataTransfer.items.add(files[0]);
  inputRef.value.files = dataTransfer.files;
  inputRef.value.dispatchEvent(new Event("change"));
}
const { isOverDropZone } = useDropZone(dropZoneRef, dropHandler);

const removeImageHandler = () => {
  emit("file-change", null);
};
const changeImageHandler = () => {
  inputRef.value.click();
};

watchEffect(() => {
  if (props.modelValue) {
    const fileReader = new FileReader();
    fileReader.onload = function () {
      uploadedImageRef.value.src = fileReader.result;
    };
    fileReader.readAsDataURL(props.modelValue);
  }
});
</script>

<template>
  <div class="flex flex-col gap-y-16">
    <Text>{{ label }}</Text>
    <div
      :class="`relative rounded-8 w-full aspect-[3/2] ${
        modelValue ? '' : 'border border-neutral-200 p-16'
      }`"
      ref="dropZoneRef"
    >
      <div class="relative w-full h-full group" v-if="modelValue">
        <img
          class="object-cover w-full h-full rounded-8"
          ref="uploadedImageRef"
          src=""
          alt=""
        />
        <div
          class="absolute top-0 right-0 z-10 flex px-16 sm:px-20 lg:px-24 py-8 sm:py-12 translate-x-8 translate-y-8 bg-black opacity-0 rounded-8 gap-x-12 sm:gap-x-16 lg:gap-x-24 group-hover:opacity-100 group-hover:-translate-y-8 transition-[opacity,transform] duration-[200ms] ease-[cubic-bezier(0.45, 0, 0.55, 1)] hover-none:opacity-100 hover-none:-translate-y-8"
        >
          <button
            class="font-sans text-white text-14 sm:text-16 lg:text-18 capsize"
            @click="changeImageHandler"
          >
            Change Image
          </button>
          <button
            class="font-sans text-white text-14 sm:text-16 lg:text-18 capsize"
            @click="removeImageHandler"
          >
            Remove
          </button>
        </div>
      </div>
      <label
        :class="`flex flex-col gap-y-12 justify-center items-center w-full h-full border border-dashed p-32 sm:p-48 lg:p-64 rounded-4 ${
          isOverDropZone
            ? 'bg-teal-50 border-teal-200'
            : 'bg-neutral-50 border-neutral-200'
        }`"
        v-else
        :for="name"
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
      <input
        class="absolute top-0 left-0 w-0 h-0 opacity-0"
        ref="inputRef"
        type="file"
        :id="name"
        :name="name"
        :required="required"
        accept="image/png, image/jpeg"
        @change="uploadHandler"
      />
    </div>
  </div>
</template>
