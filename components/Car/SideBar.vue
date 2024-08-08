<script setup>
const modal = ref({
  location: false,
  make: false,
  price: false
})
const city = ref('')
const route = useRoute()

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
</script>
<template>
  <div class="shadow border w-64 mr-10 h-[196px]">
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="font-medium">Location</h3>
      <h3 @click="updateModal('location')" class="text-red-600 capitalize">{{ route.params.city }}</h3>
      <div v-if="modal.location" class="absolute border shadow left-56 p-5 top-1 -m1 bg-white">
        <input type="text" class="border p-1 rounded outline-none" placeholder="Search" v-model="city">
        <button class="bg-blue-400 text-white mt-2 w-full rounded" @click="onChangeLocation">Apply</button>
      </div>
    </div>
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="font-medium">Make</h3>
      <h3 @click="updateModal('make')" class="text-red-600 capitalize">Toyota</h3>
      <div v-if="modal.make" class="absolute border shadow left-56 p-5 top-1 -m1 bg-white">
        <input type="text" class="border p-1 rounded outline-none" placeholder="Search">
        <button class="bg-blue-400 text-white mt-2 w-full rounded">Apply</button>
      </div>
    </div>
    <div class="p-5 flex justify-between relative cursor-pointer border-b">
      <h3 class="font-medium">Price</h3>
    </div>
  </div>
</template>