<script setup>
import { useAppStore } from "../stores/AppStore";
const appStore = useAppStore();

onMounted(() => {
  appStore.getClients();
});
</script>


<template>
  <div class="wrapper-client">
    <ClientManager />
    <div class="wrapper-desktop">
      <DesktopClientList />
    </div>
    <div class="wrapper-mobile">
      <MobileClientList />
    </div>
  </div>
</template>
 
<style>
.wrapper-client {
  width: 100%;
}

.wrapper-client .wrapper-desktop {
  display: none;
}

@media (min-width: 768px) {
  .wrapper-client .wrapper-mobile {
    display: none;
  }
  .wrapper-client .wrapper-desktop {
    display: block;
    padding: 30px;
  }
}
</style>
    