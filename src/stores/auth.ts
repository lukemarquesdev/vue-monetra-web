import { defineStore } from 'pinia'
import { AuthService } from '@/services/auth/AuthService'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: AuthService.getUser(),
    token: AuthService.getToken(),
  }),

  getters: {
    isAuthenticated: (state) => !!state.token,
  },

  actions: {
    async login(email: string, password: string) : Promise<any> {
      const data = await AuthService.login({
        email,
        password,
      })

      if (!data) {
        throw new Error('Invalid credentials')
      }

      AuthService.saveSession(data)

      this.user = data.user
      this.token = data.token

      return data
    },

    logout() {
      AuthService.logout()
      this.user = null
      this.token = null
    },
  },
})