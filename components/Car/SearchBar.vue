<script setup>
const city = ref('')
const cityError = ref(false)

const handleSearch = () => {
  if (!city.value) {
    return cityError.value = true
  }
  navigateTo(`/city/${city.value}/car`)
}
</script>
<template>
  <div
    class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-betweeen overflow-hidden drop-shadow-2xl mx-auto">
    <input type="text" class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none" placeholder="Search by city"
      :class="cityError ? 'border-red-500 border' : ''" v-model="city" @keyup.enter="handleSearch" />
    <button class="bg-cyan-950 px-10 text-white" @click="handleSearch">Search</button>
  </div>
</template>