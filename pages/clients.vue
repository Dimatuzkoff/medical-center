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
  padding-bottom: 100px;
}

.wrapper-client .wrapper-desktop {
  display: none;
}

@media (min-width: 768px) {
  .wrapper-client {
    margin-left: 20px;
    padding-bottom: 0;
  }
  .wrapper-client .wrapper-mobile {
    display: none;
  }
  .wrapper-client .wrapper-desktop {
    display: block;
    padding: 5px;
    background-color: var(--white);
  }
}
@media (min-width: 1000px) {
  .wrapper-client .wrapper-desktop {
    padding: 30px;
  }
}
</style>
    