<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const loading = ref(false)

const submit = async () => {
  loading.value = true

  // TODO: chamar API login
  console.log(email.value, password.value)

  setTimeout(() => {
    loading.value = false
  }, 1000)
}
</script>

<template>
  <main class="min-h-screen w-full flex items-center justify-center bg-[#190d21]">

    <!-- <div class="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">
          Monetra
        </h1>
        <p class="text-gray-500 mt-2">
          Entre na sua conta
        </p>
      </div>

      <form @submit.prevent="submit" class="space-y-5">

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>

          <input
            v-model="email"
            type="email"
            placeholder="seu@email.com"
            required
            class="w-full px-4 py-2 border rounded-lg
                   focus:ring-2 focus:ring-blue-500
                   focus:outline-none"
          />
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">
            Senha
          </label>

          <input
            v-model="password"
            type="password"
            placeholder="********"
            required
            class="w-full px-4 py-2 border rounded-lg
                   focus:ring-2 focus:ring-blue-500
                   focus:outline-none"
          />
        </div>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-blue-600 text-white py-2 rounded-lg
                 hover:bg-blue-700 transition
                 disabled:opacity-50"
        >
          <span v-if="loading">Entrando...</span>
          <span v-else>Entrar</span>
        </button>

      </form>

    </div> -->

  </main>
</template>