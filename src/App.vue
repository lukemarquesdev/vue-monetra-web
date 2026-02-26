<script setup lang="ts">
import { useToastStore } from './stores/toast';
import SnackBase from './components/snackbars/SnackBase.vue'

const toast = useToastStore()
</script>

<template>
  <router-view />
  <SnackBase 
    :message="toast.message"
    :show="toast.show"
    :timeout="toast.timeout"
    @close="toast.closeToast()"
  />
</template>