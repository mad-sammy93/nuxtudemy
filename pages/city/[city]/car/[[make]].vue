<script setup>
const route = useRoute()
const { data: cars, refresh } = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make,
})
const { toTitleCase } = useUtilities()
useHead({
  title: `${route.params.make ? toTitleCase(route.params.make) : 'Cars'} in ${toTitleCase(route.params.city)}`,
})

watch(
  () => route.query,
  () => {
    window.location.reload(true)
  }
)
</script>
<template>
  <div>
    <div class="mx-auto mt-4 mx-w-7xl space-y-4 px-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5">
      <div class="mt-32 flex">
        <CarSideBar />
        <CarCards :cars="cars" />
      </div>
    </div>
  </div>
</template>
