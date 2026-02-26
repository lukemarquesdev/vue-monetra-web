import { defineStore } from "pinia";

export const useToastStore = defineStore('toast', {
  state: () => ({
    message: '',
    show: false,
    timeout: 3000
  }),

  actions: {
    setToast(message: string, show = true, timeout = 3000) {
        this.message = message
        this.show = show
        setTimeout(() => {
            this.closeToast()
        }, timeout)
    },

    closeToast() {
        this.show = false
        this.message = ''
    }
  }
})
