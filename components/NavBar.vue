<script setup>
import { ref } from "vue";
import Icon from "./Icon.vue";
const links = ref([
  { title: "Сканер", url: "/scaner", icon: "scaner" },
  { title: "Співробітники", url: "/employees", icon: "employees" },
  { title: "Клієнти", url: "/clients", icon: "clients" },
  { title: "Вправи", url: "/exercises", icon: "exercises" },
  { title: "Банери", url: "/baners", icon: "baners" },
]);

const activeLink = ref("");

const setActive = (title) => {
  activeLink.value = title;
};
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="link in links"
        :key="link.title"
        @click="setActive(link.title)"
      >
        <Nuxt-Link :to="link.url" class="icon-link">
          <Icon
            :icon="link.icon"
            size="30px"
            :color="link.title == activeLink ? 'green' : 'grey'"
          />
          <span
            :style="{ color: link.title === activeLink ? 'green' : 'grey' }"
            >{{ link.title }}</span
          >
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

li {
  display: flex;
  flex-direction: row;
}

li a {
  /* color: green */
  display: flex;

  text-decoration: none;
  padding: 0.5rem;
}
</style>