<script setup>
import heartFilled from '@/assets/icons/heartFilled.png'
import heartOutline from '@/assets/icons/heartOutline.png'
const props = defineProps({
  car: Object
})
</script>
<template>
  <div class="shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px]"
    @click="navigateTo(`/car/${car?.name}-${car?.id}`)">
    <img src="" alt="camaro" class="absolute w-7 right-5 top-2 z-20">
    <div class="flex h-full">
      <NuxtImg :src="car?.image" alt="camaro" class="w-[300px] h-full object-cover" />
      <div class="p-4 flex flex-col">
        <h1 class="text-xl text-red-800">{{ car?.name }}</h1>
        <p class="text-gray-700">{{ car?.description }}</p>
        <h1 class="mt-auto text-2xl">${{ car?.price }}</h1>
      </div>
    </div>
  </div>
</template>