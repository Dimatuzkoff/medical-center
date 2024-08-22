<script setup>
import { useAppStore } from "../stores/AppStore";
const appStore = useAppStore();
</script>
<template>
  <div class="wrapper-panel">
    <div class="amount">
      <span class="text">KЛІЄНТИ</span>
      <div class="">
        <span>{{ appStore.clients.length }}</span>
        <span> чоловік</span>
      </div>
    </div>
    <div class="search"></div>
    <div class="select"></div>
    <div class="add-client">
      <button class="add-btn">
        <span>Додати</span>
        <img src="/public/img/icons/add.svg" alt="add" />
      </button>
    </div>
  </div>
</template>
<style  scoped>
.wrapper-panel {
  display: flex;
  height: 45px;
}

.wrapper-panel .amount {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.wrapper-panel .amount .text {
  font-weight: bold;
  font-size: 20px;
}
.wrapper-panel .amount div {
  color: #9c9f9b;
}

.wrapper-panel .add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 45px;
  font-size: 16px;
  background-color: transparent;
  border-radius: 50px;
  border: 1px solid #4bad3b;
  color: #4bad3b;
  cursor: pointer;
}

.wrapper-panel .add-btn img {
  margin-left: 10px;
}
</style>