<script setup>
const route = useRoute()
const { data: cars, refresh } = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice, 
  maxPrice: route.query.maxPrice, 
  make: route.params.make
})
const { toTitleCase } = useUtilities()
useHead({
  title: `${route.params.make ? toTitleCase(route.params.make) : 'Cars'} in ${toTitleCase(route.params.city)}`
})

definePageMeta({
  layout: 'custom'
})
watch(
  () => route.query,
  () => {
    window.location.reload(true)
  }
)
</script>
<template>
  <div class="mt-32 flex ">
    <NuxtErrorBoundary>
      <CarSideBar />
      <CarCards v-if="cars.length" :cars="cars"/>
      <h1 v-else class="text-center mx-auto flex flex-col text-red-600">No cars found</h1>
      <template #error="{ error }">
        <div class="text-center mx-auto flex flex-col">
          <h1 class="text-5xl text-red-600 mb-4"> Sorry, Something went wrong</h1>
          <code class="text-center">{{ error }}</code>
          <button class="text-white bg-blue-400 px-10 py-2 rounded mt-4" @click="error.value = null">Go Back</button>
        </div>
      </template>
    </NuxtErrorBoundary>
  </div>
</template>