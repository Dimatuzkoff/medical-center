<script setup>
import { ref } from "vue";

const links = ref([
  { title: "Сканер", url: "/scaner", icon: "/img/icons/scaner.svg" },
  { title: "Співробітники", url: "/employees", icon: "/img/icons/scaner.svg" },
  { title: "Клієнти", url: "/clients", icon: "/img/icons/scaner.svg" },
  { title: "Вправи", url: "/exercises", icon: "/img/icons/scaner.svg" },
  { title: "Банери", url: "/baners", icon: "/img/icons/scaner.svg" },
]);
</script>

<template>
  <nav>
    <ul>
      <li v-for="link in links" :key="link.title">
        <Nuxt-Link :to="link.url" class="icon-link">
          <img :src="link.icon" :alt="link.title" />
          <span>{{ link.title }}</span>
        </Nuxt-Link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: fit-content;
  padding: 2rem;
}
</style>