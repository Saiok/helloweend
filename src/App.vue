<template>
  <div class="container">
    <Navbar />
    <Home />
    <Category />
    <TrickOrTreat />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Category from "./components/Category.vue";
import TrickOrTreat from "./components/TrickOrTreat.vue";

export default {
  name: "App",
  components: { Navbar, Home, Category, TrickOrTreat },
};
</script>

<style></style>
