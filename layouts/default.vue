<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <div class="">
    <Header />
    <div class="wrapper">
      <NavBar />
      <slot></slot>
    </div>
  </div>
</template> 


<style scoped>
.wrapper {
  display: flex;
  flex-direction: row;
}
</style>