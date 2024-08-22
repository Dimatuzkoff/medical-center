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
            size="20px"
            :color="link.title == activeLink ? '#4BAD3B' : 'grey'"
          />
          <span
            :style="{ color: link.title === activeLink ? '#4BAD3B' : 'grey' }"
            >{{ link.title }}</span
          >
        </Nuxt-Link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  width: 295px;
  height: 683px;
  padding: 30px;
}

ul {
  padding: 0;
}

li {
  display: flex;
  flex-direction: row;
  height: 22px;
  margin-bottom: 20px;
}

li a {
  display: flex;
  text-decoration: none;
}

li span {
  margin-left: 15px;
}
</style>