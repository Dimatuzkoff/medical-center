<script setup>
import { ref } from "vue";
import { inject } from "vue";
const links = ref([
  { title: "Сканер", url: "/scaner", icon: "scaner" },
  { title: "Співробітники", url: "/employees", icon: "employees" },
  { title: "Клієнти", url: "/clients", icon: "clients" },
  { title: "Вправи", url: "/exercises", icon: "exercises" },
  { title: "Банери", url: "/baners", icon: "baners" },
]);

const activeLink = inject("activeLink");
const onHover = ref(null);

const setActive = (title) => {
  activeLink.value = title;
};

const setHover = (name) => {
  onHover.value = name;
};
</script>

<template>
  <nav>
    <ul>
      <li
        v-for="link in links"
        :key="link.title"
        @click="setActive(link.title)"
        @mouseover="setHover(link.title)"
        @mouseleave="setHover(null)"
      >
        <Nuxt-Link :to="link.url" class="icon-link">
          <Icon
            :icon="link.icon"
            size="20px"
            :color="
              link.title === activeLink || link.title === onHover
                ? 'var(--active)'
                : 'var(--text-grey)'
            "
          />
          <span
            :style="{
              color:
                link.title === activeLink || link.title === onHover
                  ? 'var(--active)'
                  : 'var(--text-grey)',
            }"
            >{{ link.title }}</span
          >
        </Nuxt-Link>
      </li>
      <li @mouseover="setHover('log-out')" @mouseleave="setHover(null)">
        <a href="#">
          <Icon
            icon="log-out"
            size="20px"
            :color="
              onHover === 'log-out' ? 'var( --danger)' : 'var(--text-grey)'
            "
          />
          <span
            :style="{
              color:
                onHover === 'log-out' ? 'var(--danger)' : 'var(--text-grey)',
            }"
            >Вийти</span
          >
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  display: block;
  height: 683px;
  padding: 30px;
  background-color: var(--white);
  position: relative;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

li {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 22px;
  margin-bottom: 20px;
  cursor: pointer;
  flex: 1;
}

li a {
  display: flex;
  text-decoration: none;
  flex: 1;
}

li span {
  margin-left: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

nav ul li:last-child {
  position: absolute;
  bottom: 0;
}

@media (max-width: 768px) {
  nav {
    position: fixed;
    z-index: 5;
    width: 100%;
    left: 0;
    bottom: 0;
    height: fit-content;
    padding: 0;
  }

  nav ul {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }

  nav ul li {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 60px;
    justify-content: center;
    overflow: hidden;
    gap: 10px;
    margin: 0;
  }

  nav ul li svg {
    height: 30px;
    width: 30px;
  }

  nav ul li a {
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: center;
    width: 100%;
  }

  nav ul li:last-child span,
  nav ul li a span {
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    font-size: 13px;
    text-align: center;
  }

  nav ul li:last-child {
    position: static;
    bottom: auto;
  }
}

@media (min-width: 1000px) {
  nav {
    min-width: 295px;
  }
}
</style>