<script setup>
import { inject } from "vue";

const resetActiveTab = inject("resetActiveTab");
</script>
<template>
  <div class="header">
    <div class="logo">
      <NuxtLink to="/" @click="resetActiveTab">
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
  background-color: var(--white);
  margin-bottom: 30px;
}

.header .logo {
  display: flex;
  align-items: center;
}

.header .logo a {
  height: 28px;
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