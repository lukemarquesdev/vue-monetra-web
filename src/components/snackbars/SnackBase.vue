<script setup lang="ts">
import { watch } from 'vue'

const props = defineProps<{
  message: string
  show: boolean
  timeout: number
}>()

const emit = defineEmits(['close'])

watch(
  () => props.show,
  (value) => {
    if (value) {
      setTimeout(() => {
        emit('close')
      }, props.timeout)
    }
  }
)
</script>

<template>
  <transition name="fade">
    <div
        v-if="show"
        class="
            fixed
            bottom-6
            right-6
            z-[9999]
            bg-[#190d21]
            text-white
            px-6
            py-3
            rounded-lg
            shadow-[0_10px_40px_rgba(0,0,0,0.5)]
        "
    >

      {{ message }}
    </div>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>