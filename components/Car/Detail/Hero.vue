<script setup>
const props = defineProps({
  car: Object
})
</script>
<template>
  <div class="mt-10">
    <NuxtImg :src="car?.image" alt="" class="w-full object-cover" />
    <h1 class="mt-10 text-4xl">{{ car?.name }}</h1>
    <div class="text-slate-500 flex text-lg mt-3 border-b pb-5 justify-between">
      <div class="flex">
        <p class="mr-2">{{ car?.seats }}</p>
        <p class="mr-2">|</p>
        <p class="mr-2">{{ car?.miles }} mi</p>
      </div>
      <div>
        <p class="font-bold text-2xl">${{ car?.price }}</p>
      </div>
    </div>
  </div>
</template>