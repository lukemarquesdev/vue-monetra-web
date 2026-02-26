<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/buttons/BaseButton.vue'

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
  <main class="min-h-screen w-full flex items-center justify-center">

    <div class="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">
          Monetra
        </h1>
        <p class="text-gray-500 mt-2">
          Registre sua conta aqui
        </p>
      </div>

      <form @submit.prevent="submit">

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
          <label class="block text-sm font-medium text-gray-700 mb-1 mt-4">
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

        <div class="text-right mt-1 mb-4">
          <a href="#" class="text-sm text-gray-600 hover:text-gray-800 hover:underline">
            Esqueceu sua senha?
          </a>
        </div>

        <div>
          <BaseButton
            type="submit"
            :loading="loading"
          >
            Registrar
          </BaseButton>
        </div>

      </form>

    </div>

  </main>
</template>