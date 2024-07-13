<template>
  <header
    class="w-full flex flex-col justify-between items-center text-black text-xl bg-white min-h-[100px] py-2 shadow-xl sticky top-0"
  >
    <div class="text-[32px] tracking-widest font-semibold">MyFakeShop</div>
    <nav class="flex gap-4">
      <RouterLink to="/">Главная</RouterLink>
      <RouterLink to="/products">Товары</RouterLink>
      <RouterLink to="/about">О нас</RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
