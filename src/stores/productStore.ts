import { defineStore } from 'pinia'

export const useProductStore = defineStore('productStore', () => {
  const getProduct = async (productId: Number) => {
    const data = await fetch(`https://dummyjson.com/products/${productId}`)
    return data.json()
  }

  const getProducts = async () => {
    const data = await fetch(`https://dummyjson.com/products`)
    return data.json()
  }
  return { getProduct, getProducts }
})
