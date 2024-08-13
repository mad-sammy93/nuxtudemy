<script setup>
const { cars } = useCars()

const favourite = useLocalStorage('favourite', {})
const handleFavourite = (carId) => {
  if (carId in favourite.value) {
    delete favourite.value[carId]
  } else {
    favourite.value = {
      ...favourite.value,
      [carId]: true
    }
  }
}
</script>
<template>
  <div class="w-full">
    <CarCard v-for="car in cars" :key="car.id" :car="car" @favor="handleFavourite" :favourite="car.id in favourite" />
  </div>
</template>