<script setup>
import { bool, func, string } from "vue-types";

defineProps({
  isOpen: bool().isRequired,
  closeHandler: func().isRequired,
  title: string().isRequired,
});
</script>

<template>
  <ClientOnly
    ><Teleport to="#portal">
      <Transition name="overlay-anim"
        ><div
          class="fixed top-0 left-0 z-30 flex justify-end w-screen h-screen p-64 bg-black/50"
          v-if="isOpen"
          @click="closeHandler"
        ></div
      ></Transition>
      <Transition name="modal-anim"
        ><div
          class="fixed z-30 bg-white border border-neutral-200 w-[640px] max-h-[calc(100vh-128px)] rounded-8 bottom-64 right-64 overflow-y-scroll overscroll-none"
          v-if="isOpen"
        >
          <div
            class="sticky top-0 left-0 flex items-center justify-between w-full px-40 py-16 bg-white"
          >
            <HeaderThree>{{ title }}</HeaderThree>
            <button
              class="flex items-center justify-center w-48 h-48"
              @click="closeHandler"
            >
              <svg class="w-24 h-24">
                <use href="#x-mark-icon" />
              </svg>
            </button>
          </div>
          <div class="px-40 py-32">
            <slot></slot>
          </div></div
      ></Transition> </Teleport
  ></ClientOnly>
</template>
