<script setup>
import NavBar from "@/components/NavBar.vue";
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