<script setup>
import heartFilled from '@/assets/icons/heartFilled.png'
import heartOutline from '@/assets/icons/heartOutline.png'

const props = defineProps({
  car: Object,
  favourite: Boolean
})

const emit = defineEmits(['favor'])
</script>
<template>
  <div class="relative shadow border w-full overflow-hidden mb-5 cursor-pointer h-[200px] group">
    <img :src="favourite ? heartFilled : heartOutline" alt="camaro" class="absolute w-7 right-5 top-2 z-20"
      @click="emit('favor', car.id)">
    <div class="flex h-full" @click="navigateTo(`/car/${car?.name}-${car?.id}`)">
      <div class="thumbnail flex overflow-hidden">
        <NuxtImg :src="car?.image" alt="camaro"
          class="w-[300px] h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-150 z-10" />
      </div>
      <div class="w-full p-4 flex flex-col">
        <h1 class="text-xl text-red-800">{{ car?.name }}</h1>
        <p class="text-gray-700">{{ car?.description }}</p>
        <h1 class="mt-auto text-2xl">${{ car?.price }}</h1>
      </div>
    </div>
  </div>
</template>