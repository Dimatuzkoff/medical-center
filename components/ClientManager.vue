<script setup>
import { useAppStore } from "../stores/AppStore";
import { ref, computed } from "vue";
const appStore = useAppStore();
</script>
<template>
  <div class="wrapper-panel">
    <div class="amount-search">
      <div class="amount">
        <div class="wrapper-amount">
          <span class="text">KЛІЄНТИ</span>
          <div>
            <span>{{ appStore.filteredClients.length }}</span>
            <span> чоловік</span>
          </div>
        </div>
      </div>
      <div class="search">
        <img src="/img/icons/search.svg" alt="search" />
        <input type="search" placeholder="Пошук" v-model="appStore.query" />
      </div>
    </div>
    <div class="select-add-client">
      <div class="select">
        <div class="arrow">↓</div>
        <select v-model="appStore.currentCategory">
          <option value="" disabled selected hidden>Виберіть зі списку</option>
          <option value="">Всі категорії</option>
          <option value="категорія 1">Категорія 1</option>
          <option value="категорія 2">Категорія 2</option>
        </select>
      </div>
      <div class="add-client">
        <button class="add-btn" @click="appStore.addRandomClients">
          <span>Додати</span>
          <div class="icon-add"></div>
        </button>
      </div>
    </div>
  </div>
</template>
<style  scoped>
.wrapper-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 225px;
  margin-bottom: 20px;
}

.select-add-client,
.amount-search {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 105px;
}
.wrapper-panel .amount .wrapper-amount {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.wrapper-panel .amount {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
  height: 45px;
}

.wrapper-panel .amount .wrapper-amount .text {
  font-weight: bold;
  font-size: 20px;
}
.wrapper-panel .amount .wrapper-amount div {
  color: var(--text-grey);
}

.wrapper-panel .search {
  display: flex;
  flex-direction: row;
  width: 300px;
  padding: 11px;
  background-color: var(--white);
  height: 45px;
}

.wrapper-panel .search img {
  margin-right: 11px;
}

.wrapper-panel .search input {
  width: 100%;
  height: 100%;
  border: none;
  font-size: 16px;
}

.wrapper-panel .search input:focus {
  outline: none;
}

.wrapper-panel .search input::placeholder {
  color: var(--text-grey);
}

.wrapper-panel .select {
  width: 300px;
  background-color: var(--white);
  padding: 11px;
  height: 45px;
  position: relative;
}

.wrapper-panel .select .arrow {
  position: absolute;
  top: 13px;
  right: 35px;
}

.wrapper-panel .select select {
  width: 100%;
  height: 100%;
  border: none;
  font-size: 16px;
  -webkit-appearance: none;
  appearance: none;
}

.wrapper-panel .select select:focus {
  outline: none;
}

.wrapper-panel .add-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 45px;
  font-size: 16px;
  background-color: transparent;
  border-radius: 50px;
  border: 1px solid var(--active);
  color: var(--active);
  cursor: pointer;
}

.wrapper-panel .add-btn img {
  margin-left: 10px;
}

.wrapper-panel .add-btn .icon-add {
  margin-left: 10px;
  width: 16px;
  height: 16px;
  background-image: url("/img/icons/add.svg");
  background-size: contain;
  background-repeat: no-repeat;
}

.wrapper-panel .add-btn:hover {
  background-color: var(--active);
  color: var(--white);
  border: 1px solid var(--white);
}

.wrapper-panel .add-btn:hover .icon-add {
  background-image: url("/img/icons/add-white.svg");
}

@media (min-width: 375px) {
  .wrapper-panel .amount,
  .wrapper-panel .search,
  .wrapper-panel .select,
  .wrapper-panel .add-btn {
    width: 360px;
  }
}

@media (min-width: 768px) {
  .wrapper-panel {
    flex-direction: row;
    height: 90px;
  }

  .wrapper-panel .amount {
    width: 96px;
  }

  .wrapper-panel .search {
    width: 229px;
  }

  .wrapper-panel .select {
    width: 280px;
  }
  .wrapper-panel .add-btn {
    width: 220px;
  }
}

@media (min-width: 1200px) {
  .wrapper-panel {
    flex-direction: row;
    height: 45px;
  }

  .select-add-client,
  .amount-search {
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
  }
  .amount-search {
    width: 38%;
  }

  .select-add-client {
    width: 60%;
  }
}
</style>