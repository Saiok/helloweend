<template>
  <div class="container">
    <Navbar />
    <Home />
    <Category />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Home from "./components/Home.vue";
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: { Navbar, Home, Category },
};
</script>

<style></style>
