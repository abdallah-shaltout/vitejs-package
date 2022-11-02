<template>
  <section class="flex flex-col gap-12 py-14">
    <img src="@/assets/images/logo.png" class="w-64 mx-auto" alt="">
    <h1 class="text-center text-white text-5xl font-bold">Welcome</h1>
    <h1 @click="store.increment()" class="text-center text-white text-5xl font-bold select-none cursor-pointer">Hello
      "{{
          store.name.toUpperCase()
      }}"
      clicked
      ({{ store.clicked }}) I am from Pinia</h1>
    <p class="text center text-rose-400 text-4xl mt-9">Testing Store Getters {{ store.plus }}</p>
  </section>
</template>

<script setup>
import { useMainStore } from "@/store"
const store = useMainStore()


</script>