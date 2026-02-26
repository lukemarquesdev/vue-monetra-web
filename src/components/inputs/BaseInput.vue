<script setup lang="ts">
defineProps<{
  modelValue: string
  label?: string
  placeholder?: string
  type?: string
  error?: string
}>()

const emit = defineEmits(['update:modelValue'])

function updateValue(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="flex flex-col gap-1 w-full">
    
    <!-- Label -->
    <label
      v-if="label"
      class="text-sm text-gray-300 font-medium"
    >
      {{ label }}
    </label>

    <!-- Input -->
    <input
      :type="type ?? 'text'"
      :value="modelValue"
      :placeholder="placeholder"
      @input="updateValue"
      class="
        w-full
        px-4
        py-3
        rounded-lg
        bg-[#190d21]
        border
        border-purple-800
        text-white
        placeholder-gray-400
        outline-none
        focus:ring-2
        focus:ring-purple-600
        focus:border-transparent
        transition
      "
    />

    <!-- Error -->
    <span
      v-if="error"
      class="text-sm text-red-400"
    >
      {{ error }}
    </span>

  </div>
</template>