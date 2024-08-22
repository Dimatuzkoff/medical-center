<script setup>
import UserInfo from "./UserInfo.vue";
</script>

<template>
  <div class="header">
    <div class="logo">
      <NuxtLink to="/">
        <img src="/img/logo.svg" alt="logo" />
      </NuxtLink>
    </div>

    <div class="user">
      <UserInfo />
    </div>
  </div>
</template>

<style  scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px 15px;
}

.logo img {
  width: 140px;
  height: 28px;
}

@media (min-width: 768px) {
  .header {
    padding: 10px 30px;
  }
}
</style>