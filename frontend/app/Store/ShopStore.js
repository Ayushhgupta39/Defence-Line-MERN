import axios from "@utils/axiosConfig"
import { create } from "zustand"

const store = (set, get) => ({
    products: [],
    categoryProducts: [],
    fetchAllProducts: async () => {
        const res = await axios.get('/api/products?populate=*')
        set((state) => ({ products: res.data.data }))
        set(state => ({ categoryProducts: res.data.data }))
    },
    applyCategory: (category) => {
        const filteredProducts = get().products.filter(({ attributes }) => attributes.category == category)
        set(state => ({ categoryProducts: filteredProducts }))
    },
    sortProducts: (reverse) => {
        const prods = get().categoryProducts
        var sortedProducts = []
        if (reverse !== "reverse") sortedProducts = [...prods].sort((a, b) => a.attributes.name.localeCompare(b.attributes.name))
        else {
            sortedProducts = [...prods].sort((a, b) => (b.attributes.name.localeCompare(a.attributes.name)))
        }
        set(state => ({ categoryProducts: sortedProducts }))
    },
    priceFilter: (reverse) => {
        const prods = get().categoryProducts
        var filteredProducts = []

        if (reverse !== "reverse") filteredProducts = [...prods].sort((a, b) => (a.attributes.price - b.attributes.price))
        else filteredProducts = [...prods].sort((a, b) => (b.attributes.price - a.attributes.price))
       
        set(state => ({ categoryProducts: filteredProducts }))
    }
})

const useStore = create(store)

export default useStore