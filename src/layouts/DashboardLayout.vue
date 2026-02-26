<script setup lang="ts">
import AppHeader from '@/components/header/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen
          flex
          flex-col
          bg-gradient-to-r
          from-[#0b030a]
          via-[#190d21]
          to-[#101e39]">
    <AppHeader />
    <router-view />
  </div>
</template>
