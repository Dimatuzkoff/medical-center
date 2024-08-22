<script setup>
import { useAppStore } from "../stores/AppStore";
const appStore = useAppStore();
onMounted(() => {
  appStore.getClients();
});
</script>


<template>
  <table class="table-wrapper">
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
        <td class="td-lastUpdated">{{ client.lastUpdated }}</td>
      </tr>
    </tbody>
  </table>
</template>
    
    
<style scoped>
.table-wrapper {
  width: 100%;
  padding: 30px;
  border-collapse: separate;
  border-spacing: 0 20px;
  font-size: 14px;
}

.table-wrapper td {
  padding: 20px;
}

.table-wrapper th {
  padding: 0 20px;
}

.table-wrapper th {
  font-weight: normal;
  text-align: left;
  color: #9c9f9b;
}
.table-wrapper .td-name {
  border-top: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-radius: 10px 0 0 10px;
}

.table-wrapper .td-category,
.table-wrapper .td-phone {
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
}

.table-wrapper .td-lastUpdated {
  border-top: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-radius: 0 10px 10px 0;
}
</style>