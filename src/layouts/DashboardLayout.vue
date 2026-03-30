<script setup lang="ts">
import AppHeader from '@/components/header/AppHeader.vue'
import AppSidebar from '@/components/sidebar/AppSidebar.vue'
</script>

<template>
  <div
    class="
      min-h-screen
      flex
      flex-col
      bg-gradient-to-r
      from-[#0b030a]
      via-[#190d21]
      to-[#101e39]
    "
  >
    <!-- HEADER -->
    <AppHeader />

    <!-- BODY -->
    <div class="flex flex-1 overflow-hidden">

      <!-- SIDEBAR -->
      <AppSidebar />

      <!-- CONTENT -->
      <main
        class="
          flex-1
          p-6
          overflow-y-auto
        "
      >
        <router-view />
      </main>

    </div>
  </div>
</template>