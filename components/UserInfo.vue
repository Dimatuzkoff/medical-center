<script setup>
import { useAppStore } from "../stores/AppStore";
const appStore = useAppStore();
</script>

<template>
  <div class="wrapper-user-info">
    <span>Привіт, </span>
    <span class="user-name"> {{ appStore.userName }}</span>
    <img src="/img/avatar.svg" alt="avatar" />
  </div>
</template>

<style scoped>
.wrapper-user-info {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
}
.user-name {
  font-weight: bold;
  margin-left: 4px;
}

.wrapper-user-info img {
  width: 40px;
  margin-left: 10px;
}
</style>