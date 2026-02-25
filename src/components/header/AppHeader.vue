<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/login')
}
</script>

<template>
  <header class="
      h-16
      px-6
      flex
      items-center
      justify-between
      border-b-2
      border-[#101e39]
      bg-[#0b030a]/70
      backdrop-blur-md
      text-white
    ">
    <!-- LEFT -->
    <div class="flex items-center gap-3">
      <h1 class="font-bold text-lg">
        Monetra
      </h1>
    </div>

    <!-- RIGHT -->
    <div class="flex items-center gap-4">
      <div v-if="auth.token">
        <!-- User -->
        <span class="text-sm text-gray-300">
          {{ auth.user?.name ?? 'User' }}
        </span>

        <!-- Logout -->
        <button @click="logout" class="
          px-4 py-2
          rounded-lg
          bg-[#190d21]
          hover:bg-[#2a1236]
          transition
        ">
          Logout
        </button>
      </div>

      <div v-else>
        <!-- Login -->
        <router-link to="/about" class="
          px-4 py-2
          rounded-lg
          bg-[#190d21]
          hover:bg-[#2a1236]
          transition
        ">
          Sobre
        </router-link>
      </div>
    </div>
  </header>
</template>