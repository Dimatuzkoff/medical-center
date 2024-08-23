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
        <div class="icon-add"></div>
      </button>
    </div>
  </div>
</template>
<style  scoped>
.wrapper-panel {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 45px;
  margin-bottom: 20px;
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
  color: var(--text-grey);
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
  border: 1px solid var(--active);
  color: var(--active);
  cursor: pointer;
}

.wrapper-panel .add-btn img {
  margin-left: 10px;
}

.wrapper-panel .add-btn .icon-add {
  margin-left: 10px;
  width: 16px;
  height: 16px;
  background-image: url("/img/icons/add.svg");
  background-size: contain;
  background-repeat: no-repeat;
}

.wrapper-panel .add-btn:hover {
  background-color: var(--active);
  color: var(--white);
  border: 1px solid var(--white);
}

.wrapper-panel .add-btn:hover .icon-add {
  background-image: url("/img/icons/add-white.svg");
}
</style>