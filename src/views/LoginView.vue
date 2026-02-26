<script setup lang="ts">
import { ref } from 'vue'
import BaseButton from '@/components/buttons/BaseButton.vue'
import OutlineButton from '@/components/buttons/OutlineButton.vue'
import BaseInput from '@/components/inputs/BaseInput.vue'
import { useAuthStore } from '@/stores/auth'
import { useToastStore } from '@/stores/toast'
import router from '@/router'

const email = ref('')
const password = ref('')
const loading = ref(false)
const auth = useAuthStore()
const toast = useToastStore()

const submit = async () => {
  loading.value = true

  try {
    const response = await auth.login(email.value, password.value)
    
    if (!response) {
      toast.setToast('Email e/ou senha inválidos')
      return
    }

    toast.setToast('Login realizado com sucesso', true)
    
    router.push('/dashboard')
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main class="flex-1 flex items-center justify-center">

    <div class="w-full max-w-md bg-[#0b030a]/30 shadow-2xl shadow-[#101e39]/90 border-2 border-[#101e39] rounded-2xl p-8">

      <div class="text-center mb-8">
        <h1 class="text-3xl font-bold text-white">
          Monetra
        </h1>
      </div>

      <form @submit.prevent="submit">

        <div>
          <BaseInput
            v-model="email"
            type="email"
            label="E-mail"
            placeholder="Digite seu e-mail"
            required
          />
        </div>

        <div class="mt-4">
          <BaseInput
            v-model="password"
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            required
          />
        </div>

        <div class="text-right mt-1 mb-4">
          <a href="#" class="text-sm text-gray-400 hover:underline">
            Esqueceu sua senha?
          </a>
        </div>

        <div>
          <BaseButton
            type="submit"
            :loading="loading"
          >
            Entrar
          </BaseButton>
        </div>

        <div class="text-center mt-4 mb-4">
          <div class="text-sm text-gray-400">
            Não tem uma conta? Registre-se
          </div>
        </div>

        <div>
          <OutlineButton type="button">
            Registre-se
          </OutlineButton>
        </div>

      </form>
   
    </div>

  </main>
</template>