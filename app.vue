<script setup>
import { onMounted } from "vue";
import { useAppStore } from "../stores/AppStore";
const appStore = useAppStore();
onMounted(async () => {
  try {
    appStore.getClients();
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
  <div>
    {{ appStore.clients }}
  </div>
</template>
