<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const route = useRoute()
const auth = useAuthStore()

const menu = [
  { name: 'Dashboard', icon: '🏠', path: '/' },
  { name: 'Pagamentos', icon: '💳', path: '/payments' },
  { name: 'Relatórios', icon: '📊', path: '/reports' },
  { name: 'Configurações', icon: '⚙️', path: '/settings' }
]

function logout() {
  auth.logout()
  router.push('/auth/login')
}

const isActive = (path: string) => route.path === path
</script>

<template>
  <aside
    class="
      w-64
      h-screen
      bg-[#12081a]
      text-gray-300
      flex
      flex-col
      border-r border-purple-900/30
    "
  >
    <!-- Menu -->
    <nav class="flex-1 px-3 space-y-2 mt-4">
      <button
        v-for="item in menu"
        :key="item.path"
        @click="$router.push(item.path)"
        class="
          w-full
          flex
          items-center
          gap-3
          px-4
          py-3
          rounded-lg
          transition
          hover:bg-[#1e0f2a]
        "
        :class="isActive(item.path)
          ? 'bg-[#2a1236] text-white'
          : ''"
      >
        <span>{{ item.icon }}</span>
        <span>{{ item.name }}</span>
      </button>
    </nav>

    <!-- User -->
    <div class="p-4 border-t border-purple-900/30">
      <div class="flex items-center gap-3">

        <!-- Avatar -->
        <div
          class="
            w-10 h-10
            rounded-full
            bg-purple-600
            flex
            items-center
            justify-center
            font-semibold
          "
        >
          {{ auth.user?.name?.charAt(0).toUpperCase() ?? 'U' }}
        </div>

        <div class="flex-1">
          <p class="text-sm text-white">
            {{ auth.user?.name }}
          </p>

          <button
            @click="logout"
            class="text-xs text-red-400 hover:text-red-300"
          >
            Sair
          </button>
        </div>

      </div>
    </div>
  </aside>
</template>