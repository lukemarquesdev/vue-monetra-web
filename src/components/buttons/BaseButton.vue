<script setup lang="ts">
defineProps<{
  label?: string
  type?: 'button' | 'submit' | 'reset'
  loading?: boolean
}>()
</script>

<template>
  <button
    :type="type ?? 'button'"
    class="
      w-full
      bg-[#190d21]
      hover:bg-[#2a1236]
      text-white
      font-semibold
      py-3
      px-4
      rounded-lg
      transition
      duration-200
      disabled:opacity-50
      disabled:cursor-not-allowed
      flex
      items-center
      justify-center
      gap-2
    "
    :disabled="loading"
  >
    <span v-if="loading" class="flex flex-row space-x-4">
        <p>Carregando</p>
      <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>
    <span v-else>
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>
