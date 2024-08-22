<script setup>
import { ref } from "vue";
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
            :color="
              link.title == activeLink ? 'var(--active)' : 'var(--text-grey)'
            "
          />
          <span
            :style="{
              color:
                link.title === activeLink
                  ? 'var(--active)'
                  : 'var(--text-grey)',
            }"
            >{{ link.title }}</span
          >
        </Nuxt-Link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: none;
  height: 683px;
  width: 295px;
  padding: 30px;
  background-color: var(--white);
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

@media (min-width: 768px) {
  nav {
    display: block;
  }
}
</style>