<script setup>
const { makes } = useCars()
const modal = ref({
  location: false,
  make: false,
  price: false
})
const city = ref('')
const priceRange = ref({ min: 0, max: 0 })
const priceRangeText = computed(() => {
  const minPrice = route.query.minPrice
  const maxPrice = route.query.maxPrice
  if (!minPrice && !maxPrice) return 'Any'
  else if (!minPrice && maxPrice)
    return `Under $${maxPrice}`
  else if (minPrice && !maxPrice)
    return `Over $${minPrice}`
  else return `$${minPrice} - $${maxPrice}`
})
const route = useRoute()
const router = useRouter()

const updateModal = (key) => {
  modal.value[key] = !modal.value[key]
}

const onChangeLocation = () => {
  if (!city.value) return
  if (!isNaN(parseInt(city.value))) {
    throw createError({
      statusCode: 400,
      message: 'Invalid city format'
    })
  }
  updateModal('location')
  navigateTo(`/city/${city.value}/car/${route.params.make}`)
  city.value = ''
}
const onChangeMake = (make) => {
  updateModal('make')
  navigateTo(`/city/${route.params.city}/car/${make}`)
}

const onChangePrice = () => {
  updateModal('price')
  if (priceRange.value.min && priceRange.value.max) {
    if (priceRange.value.min > priceRange.value.max) return
  }
  router.push({
    query: {
      minPrice: priceRange.value.min,
      maxPrice: priceRange.value.max
    }
  })
  // priceRange.value = { min: 0, max: 0 }
}
</script>
<template>
  <div class="shadow border w-64 mr-10 h-[196px]">
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="font-medium">Location</h3>
      <h3 @click="updateModal('location')" class="text-red-600 capitalize">{{ route.params.city }}</h3>
      <div v-if="modal.location" class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white z-50">
        <input type="text" class="border p-1 rounded outline-none" placeholder="Search" v-model="city">
        <button class="bg-blue-400 text-white mt-2 w-full rounded" @click="onChangeLocation">Apply</button>
      </div>
    </div>
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="font-medium">Make</h3>
      <h3 @click="updateModal('make')" class="text-red-600 capitalize">{{ route.params.make || 'Any' }}</h3>
      <div v-if="modal.make"
        class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white w-[600px] flex flex-wrap justify-between z-50">
        <h4 v-for="make in makes" :key="make" class="w-1/3" @click="onChangeMake(make)">
          {{ make }}
        </h4>
      </div>
    </div>
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="font-medium">Price</h3>
      <h3 class="text-red-600 capitalize" @click="updateModal('price')">{{ priceRangeText }}</h3>
      <div class="absolute border shadow left-56 p-5 top-1 -m-1 bg-white z-50" v-if="modal.price">
        <input type="number" class="flex border p-1 mb-1 rounded outline-none" placeholder="Min"
          v-model="priceRange.min">
        <input type="number" class="flex border p-1 rounded outline-none" placeholder="Max" v-model="priceRange.max">
        <button class="bg-blue-400 w-full mt-2 rounded text-white p-1" @click="onChangePrice">Apply</button>
      </div>
    </div>
  </div>
</template>