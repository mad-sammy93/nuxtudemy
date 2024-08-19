<script setup>
const { listings } = useCars()
definePageMeta({
  layout: 'custom',
  middleware: 'auth',
})
</script>
<template>
  <div>
    <div class="flex justify-between mt-24 items-center">
      <h1 class="text-6xl">My listings</h1>
      <NuxtLink
        to="/profile/listings/create"
        class="bg-cyan-800 w-9 h-9 flex justify-center items-center rounded-full text-white font-bold cursor-pointer text-2xl"
      >
        +
      </NuxtLink>
    </div>
    <div class="shadow rounded p-3 mt-5">
      <CarListingCard
        v-for="listing in listings"
        :key="listing.id"
        :listing="listing"
      />
    </div>
  </div>
</template>
