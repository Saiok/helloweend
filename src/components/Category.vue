<template>
  <section id="category" class="flex flex-col items-center py-32">
    <h2 class="my-10 text-6xl font-bold text-white">Category</h2>
    <div class="flex w-full justify-around items-center my-12">
      <div
        class="w-64 p-1.5 text-white text-center"
        v-for="category of categories"
        :key="category.title"
      >
        <img :src="category.image" :alt="category.title" />
        <h3 class="text-3xl font-bold my-2">{{ category.title }}</h3>
        <p class="text-[13px]">{{ category.description }}</p>
      </div>
    </div>
  </section>

  <section class="flex items-end justify-center space-x-4 mb-24">
    <div class="w-1/2">
      <img src="../assets/images/category/category2-img.webp" alt="category2" />
    </div>
    <div class="w-1/2 pr-24">
      <div class="text-6xl text-white">
        <h2 class="font-bold">What's that</h2>
        <div class="flex items-center space-x-3">
          <h2 class="font-bold">Halloween</h2>
          <img class="mt-5" src="../assets/images/category/head2.webp" alt="head2" />
        </div>
        <p class="text-[25px] leading-[35px] w-[80%]">
          Halloween or Hallowe'en, also known as Allhalloween, All Hallows' Eve,
          or All Saints' Eve, is a celebration observed in many countries on 31
          October, the eve of the Western Christian feast of All Hallows' Day.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import category1 from "../assets/images/category/category1.png";
import category2 from "../assets/images/category/category2.png";
import category3 from "../assets/images/category/category3.png";

const categories = [
  {
    title: "Ghost",
    image: category1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.",
  },
  {
    title: "Witch",
    image: category2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.",
  },
  {
    title: "Pumpkin",
    image: category3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id id consequat, eu faucibus nulla. Ultrices mattis lacus, sed maecenas nascetur.",
  },
];
</script>
