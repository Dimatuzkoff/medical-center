<script setup>
import { useAppStore } from "../stores/AppStore";
const appStore = useAppStore();
</script>
<template>
  <div
    class="wrapper-mobile-list"
    v-for="client in appStore.clients"
    :key="client.phone"
  >
    <div class="client-property border">
      <div class="client-key">Ім’я/Нікнейм</div>
      <div class="client-value">{{ client.name }}</div>
    </div>
    <div class="client-property border">
      <div class="client-key">Категорія</div>
      <div class="client-value">{{ client.category }}</div>
    </div>
    <div class="client-property border">
      <div class="client-key">Телефон:</div>
      <div class="client-value">{{ client.phone }}</div>
    </div>
    <div class="client-property">
      <div class="client-key">Дата оновлення</div>
      <div class="client-value">{{ client.lastUpdated }}</div>
    </div>
    <button @click="appStore.deleteClient(client.name)" class="del-btn-mobil">
      <img src="/public/img/icons/delete.svg" alt="delete" />
    </button>
  </div>
</template>

<style>
.wrapper-mobile-list {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 274px;
  padding: 15px;
  font-size: 14px;
  background-color: var(--white);
  border-radius: 10px;
  margin-bottom: 15px;
}

.wrapper-mobile-list .client-key {
  width: 50%;
  color: var(--text-grey);
}

.wrapper-mobile-list .client-property {
  display: flex;
  flex-direction: row;
  padding: 15px 0;
}

.wrapper-mobile-list .client-property.border {
  border-bottom: 1px solid var(--border);
}

.wrapper-mobile-list .del-btn-mobil {
  position: absolute;
  bottom: 30px;
  right: 20px;
  border: none;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
}
.wrapper-mobile-list .del-btn-mobil img {
  width: 24px;
  height: 24px;
}
</style>