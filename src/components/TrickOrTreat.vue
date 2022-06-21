<template>
  <section id="trick-or-treat" class="flex flex-col items-center py-32">
    <h2 class="my-10 text-6xl font-bold text-white">Trick or Treat</h2>

    <div class="grid grid-cols-3 gap-10">
      <div
        class="tot-item"
        v-for="tot of tots"
        :key="tot.title"
      >
        <div>
          <img :src="tot.image" :alt="tot.title" />
        </div>
        <div class="flex flex-col items-center justify-end mt-4">
          <h3 class="text-2xl font-bold">{{ tot.title }}</h3>
          <p class="text-center text-[13px] mt-2.5">{{ tot.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import tots from "../data/trickOrTreat";
</script>

<style scoped>
.tot-item {
  @apply flex flex-col items-center justify-center text-white py-7 px-10 max-w-[310px] transition-transform duration-300 hover:translate-y-[-30px] bg-gradient-to-b from-primary-200/20 to-primary-200/10 hover:from-primary-200/100 hover:to-primary-200/50;
}
</style>
