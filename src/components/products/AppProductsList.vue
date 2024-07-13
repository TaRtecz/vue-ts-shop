<script setup lang="ts">
import { onMounted, ref } from 'vue'
import AppProductItem from '@/components/products/AppProductItem.vue'
import { useProductStore } from '@/stores/productStore'

const productStore = useProductStore()
const products = ref([])

onMounted(async () => {
  await getProducts()
})

const getProducts = async () => {
  const res = await productStore.getProducts()
  products.value = res.products
}
</script>

<template>
  <div class="grid product-grid gap-8">
    <template v-for="product in products" :key="product.id">
      <app-product-item :product="product" />
    </template>
  </div>
</template>

<style scoped>
.product-grid {
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>
