<script setup>
const route = useRoute()
const { data:car } = await useFetchCar(route.params.id)
const { toTitleCase } = useUtilities()
useHead({
  title: toTitleCase(route.params.name)
})
definePageMeta({
  layout: 'custom'
})
</script>
<template>
  <div v-if="car">
    <CarDetailHero :car="car" />
    <CarDetailAttributes :features="car?.features" />
    <CarDetailDescription :desc="car?.description" />
    <CarDetailContact />
  </div>
</template>