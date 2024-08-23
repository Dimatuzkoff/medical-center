<script setup>
import { ref, provide } from "vue";

const activeLink = ref("");

provide("activeLink", activeLink);
provide("resetActiveTab", () => {
  activeLink.value = "";
});
</script>

<template>
  <div class="main-wrapper">
    <Header />
    <div class="wrapper">
      <NavBar />
      <slot></slot>
    </div>
  </div>
</template> 


<style scoped>
.main-wrapper {
  font-family: "Open Sans";
}
.wrapper {
  display: flex;
  flex-direction: row;
}
</style>