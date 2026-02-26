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
      bg-[#5e5962]
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
    <span v-if="loading">Loading...</span>
    <span v-else>
      <slot>{{ label }}</slot>
    </span>
  </button>
</template>