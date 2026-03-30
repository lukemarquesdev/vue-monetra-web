<script setup lang="ts">
import { useAuthStore } from '@/stores/auth'
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

function logout() {
  auth.logout()
  router.push('/auth/login')
}

const open = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as Node

  if (
    dropdownRef.value &&
    !dropdownRef.value.contains(target)
  ) {
    open.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})

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

    <div class="flex items-center gap-3">
      <h1 class="font-bold text-lg">
        Monetra
      </h1>
    </div>

    <div class="flex items-center gap-4">
      <div
  v-if="auth.token"
  ref="dropdownRef"
  class="flex items-center relative"
>
  <!-- Avatar -->
  <div class="mr-3">
    <div class="
      w-10 h-10
      rounded-full
      bg-purple-600
      flex items-center
      justify-center
      text-white
      font-semibold
      overflow-hidden
    ">
      <!-- <img
        v-if="auth.user?.avatar"
        :src="auth.user.avatar"
        class="w-full h-full object-cover"
      /> -->

      <!-- <span v-else> -->
        {{ auth.user?.name?.charAt(0).toUpperCase() ?? 'U' }}
      <!-- </span> -->
    </div>
  </div>

  <!-- Nome -->
  <span class="text-lg text-gray-300 mr-2">
    Olá, {{ auth.user?.name ?? 'User' }}
  </span>

  <!-- Botão seta -->
  <button
    @click="open = !open"
    class="p-2 rounded-lg hover:bg-[#2a1236] transition"
  >
    ▼
  </button>

  <!-- Dropdown -->
  <div
    v-if="open"
    class="
      absolute
      right-0
      top-14
      w-40
      bg-[#190d21]
      rounded-lg
      shadow-lg
      py-2
    "
  >
    <button class="w-full text-left px-4 py-2 hover:bg-[#2a1236]">
      Perfil
    </button>

    <button
      @click="logout"
      class="w-full text-left px-4 py-2 hover:bg-[#2a1236] text-red-400"
    >
      Sair
    </button>
  </div>
</div>

      <div v-else>
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