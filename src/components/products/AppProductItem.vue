<script setup lang="ts">
import { onMounted, ref, toRefs } from 'vue'
import { useProductStore } from '@/stores/productStore'

const props = defineProps({
  product: {
    type: Object,
    default: null
  }
})
const { product } = toRefs(props)
const productStore = useProductStore()
const products = ref([])

onMounted(async () => {})
</script>

<template>
  <div
    class="w-full bg-white rounded-2xl p-5 flex flex-col gap-6 shadow-xl border border-gray border-solid hover:cursor-pointer"
  >
    <a :href="`/product/${product.id}`"
      ><div class="w-full min-h-[250px] flex items-center justify-center">
        <img :src="product.thumbnail" class="w-full max-w-[150px] block object-contain" /></div
    ></a>
    <hr />
    <div class="flex flex-col gap-4">
      <a :href="`/product/${product.id}`">
        <h3 class="text-xl font-bold text-gray-900 min-h-[90px]">
          {{ product.title }}
        </h3>
        <p class="text-xl">$ {{ product.price }}</p>
      </a>
      <button
        class="w-full px-5 py-4 text-2xl font-bold text-green-300 bg-gray-900 rounded-lg hover:cursor-pointer hover:opacity-75 transition-opacity duration-300"
      >
        Add to cart
      </button>
    </div>
  </div>
</template>

<style scoped></style>
