<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { useProductStore } from '@/stores/productStore'
import { useRoute } from 'vue-router'

const route = useRoute()
const { getProduct } = useProductStore()

const product = ref({})
const prodID = route.params.id

onMounted(async () => {
  product.value = await getProduct(prodID)
})

const isCard = computed(() => effectRef.value === 'card')
const isLoading = computed(() => !product.value)
const effectRef = ref('slide')
</script>

<template>
  <div class="p-6 max-w-[1200px] mx-auto">
    <div class="bg-white w-full shadow-xl rounded-xl px-8 py-6">
      <div class="text-[32px] mb-4 font-semibold">{{ product.title }}</div>
      <div class="flex max-[1000px]:flex-col gap-x-6 gap-y-6 justify-between">
        <div class="max-w-[450px] max-h-[450px] w-full bg-gray-200 rounded-xl">
          <n-skeleton v-if="isLoading" width="450px" height="100%" class="rounded-xl" />
          <n-carousel
            v-else
            :key="effectRef"
            :effect="effectRef"
            :centered-slides="isCard"
            :slides-per-view="isCard ? 'auto' : 1"
            draggable
          >
            <template v-for="(image, index) in product.images" :key="index">
              <n-carousel-item :style="{ width: isCard ? '60%' : '100%' }">
                <img class="carousel-img" :src="image" />
              </n-carousel-item>
            </template>
          </n-carousel>
        </div>
        <div class="flex flex-col">
          <div>
            Brand: <span class="font-semibold">{{ product.brand }}</span>
          </div>
          <div>
            Rating:
            <span class="font-semibold">
              ⭐{{ product.rating }}
              <span v-if="product.reviews" class="font-normal">
                (Reviews {{ product.reviews.length }})
              </span>
            </span>
          </div>
          <div class="mt-6">{{ product.description }}</div>

          <div class="max-w-[350px] max-h-[4350px] w-full bg-white rounded-xl py-6">
            <n-skeleton v-if="isLoading" width="100px" height="50px" class="rounded-xl" />
            <span v-else class="text-[24px] font-bold">$ {{ product.price }}</span>
            <button
              class="w-full px-5 py-4 mt-4 text-2xl font-bold text-black-300 bg-gray-300 rounded-lg hover:cursor-pointer hover:opacity-75 transition-opacity duration-300"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel-img {
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
