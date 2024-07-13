<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<template>
  <AppHeader />
  <main class="min-h-[calc(100vh-100px-52px)]">
    <RouterView />
  </main>
  <AppFooter />
</template>

<style scoped></style>
