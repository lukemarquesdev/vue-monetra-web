import type { User } from '@/types/user'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: localStorage.getItem('token'),
    user: null as User | null
  }),

  getters: {
    isAuthenticated: (state) => !!state.token
  },

  actions: {
    login(token: string, user: User) {
      this.token = token
      this.user = user
      localStorage.setItem('token', token)
    },

    logout() {
      this.token = null
      this.user = null
      localStorage.removeItem('token')
    }
  }
})
