<script setup>
import { bool, func, string } from "vue-types";
import XMarkIcon from "~/assets/icons/x-mark.svg";

defineProps({
  isOpen: bool().def(false).isRequired,
  closeHandler: func().isRequired,
  title: string().isRequired,
});
</script>

<template>
  <Teleport to="#portal">
    <Transition name="overlay-anim"
      ><div
        class="fixed top-0 left-0 z-20 flex justify-end w-screen h-screen p-64 bg-black/50"
        v-if="isOpen"
        @click="closeHandler"
      ></div
    ></Transition>
    <Transition name="modal-anim"
      ><div
        class="fixed z-20 bg-white border border-[#EBEBEB] w-[480px] max-h-[calc(100vh-128px)] rounded-8 bottom-64 right-64 px-40 py-32 overflow-y-scroll"
        v-if="isOpen"
      >
        <div class="flex items-center justify-between">
          <h3 class="font-sans text-24 capsize">{{ title }}</h3>
          <button
            class="flex items-center justify-center w-48 h-48"
            @click="closeHandler"
          >
            <XMarkIcon class="w-24 h-24" />
          </button>
        </div>
        <div>
          <slot></slot>
        </div></div
    ></Transition>
  </Teleport>
</template>
