<script setup>
const props = defineProps({
  desc: String,
})
</script>
<template>
  <div class="mt-5">
    <p class="mb-10">
      {{ desc }}
    </p>
  </div>
</template>