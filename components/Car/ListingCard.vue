<script setup>
const props = defineProps({
  listing: Object,
})
</script>
<template>
  <div class="shadow rouded overflow-hidde flex justify-between mb-4">
    <div class="flex">
      <img
        :src="listing.url"
        :alt="listing.name"
        class="w-80 mr-3 h-44"
      />
      <div class="p-3">
        <h1 class="text-2xl">
          {{ listing.name }}
        </h1>
        <p class="text-blue-400">${{ listing.price }}</p>
      </div>
    </div>
    <div class="p-2 flex">
      <NuxtLink :to="`/profile/listings/view/${listing.id}`">View</NuxtLink>
      <p class="text-red-400 cursor-pointer">Delete</p>
    </div>
  </div>
</template>
