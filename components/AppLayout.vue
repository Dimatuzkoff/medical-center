<script setup>
import NavBar from "./NavBar.vue";
</script>

<template>
  <div class="">
    <Header />
    <div class="main-wrapper">
      <NavBar />
      <slot></slot>
    </div>

    <p>низ</p>
  </div>
</template>


<style scoped>
.main-wrapper {
  display: flex;
  flex-direction: row;
}
</style>