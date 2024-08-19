<script setup>
definePageMeta({
  layout: 'custom',
})

const supabase = useSupabaseClient()

const login = async () => {
  const { data,error } = await supabase.auth.signInWithOAuth({
    provider: 'github',
    options: {
      redirectTo: 'http://localhost:2221/confirm',
    }
  })
  if(error) {
    console.log(error)
  }
}
</script>
<template>
  <div class="mt-10">
    <h1 class="text-5xl font-bold mb-7">Login</h1>
    <button
      class="bg-red-400 p-3 rounded text-w font-bold"
      @click="login"
    >
      Login 
    </button>
  </div>
</template>
