<script setup>
import { useAppStore } from "../stores/AppStore";
const appStore = useAppStore();
</script>
<template>
  <table v-if="appStore.clients" class="table-wrapper-desktop">
    <thead>
      <tr>
        <th>Ім’я/Нікнейм</th>
        <th>Категорія</th>
        <th>Телефон</th>
        <th>Дата оновлення</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="client in appStore.clients" :key="client.name">
        <td class="td-name">{{ client.name }}</td>
        <td class="td-category">{{ client.category }}</td>
        <td class="td-phone">{{ client.phone }}</td>
        <td class="td-lastUpdated">
          <span>{{ client.lastUpdated }}</span>
          <button @click="appStore.deleteClient(client.name)" class="del-btn">
            <img src="/public/img/icons/delete.svg" alt="delete" />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
      
      
  <style scoped>
.table-wrapper-desktop {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 20px;
  font-size: 14px;
}

.table-wrapper-desktop td {
  padding: 20px;
  height: 20px;
}

.table-wrapper-desktop th {
  padding: 0 20px;
}

.table-wrapper-desktop th {
  font-weight: normal;
  text-align: left;
  color: #9c9f9b;
}
.table-wrapper-desktop .td-name {
  border-top: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-radius: 10px 0 0 10px;
}

.table-wrapper-desktop .td-category,
.table-wrapper-desktop .td-phone {
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
}

.table-wrapper-desktop .td-lastUpdated {
  display: flex;
  justify-content: space-between;
  height: 100%;
  border-top: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-radius: 0 10px 10px 0;
}

.table-wrapper-desktop .td-lastUpdated .del-btn {
  border: none;
  padding: 0;
  margin-left: 10px;
  background-color: transparent;
  cursor: pointer;
}
</style>