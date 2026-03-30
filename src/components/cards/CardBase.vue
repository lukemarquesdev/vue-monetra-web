<script setup lang="ts">
defineProps<{
  title?: string
  subtitle?: string
}>()
</script>

<template>
  <div
    class="
      bg-[#12081a]
      border border-purple-900/30
      rounded-2xl
      p-5
      shadow-md
      transition
      hover:border-purple-700/40
      hover:shadow-lg
    "
  >
    <!-- Header -->
    <div v-if="title" class="mb-4">
      <h3 class="text-lg font-semibold text-white">
        {{ title }}
      </h3>

      <p
        v-if="subtitle"
        class="text-sm text-gray-400"
      >
        {{ subtitle }}
      </p>
    </div>

    <!-- Content -->
    <div>
      <slot />
    </div>

    <!-- Footer -->
    <div v-if="$slots.footer" class="mt-4 pt-4 border-t border-purple-900/30">
      <slot name="footer" />
    </div>
  </div>
</template>