import { defineStore } from 'pinia';
import apiService from '@/services/api';
import { ref } from "vue";
import { randomClients } from "../data/randomClients";


export const useAppStore = defineStore('app', {
    state: () => ({
        clients: [],
        userName: 'Адмін',
        query: ref(""),
        currentCategory: ref("")
    }),
    actions: {
        async getClients() {
            this.clients = await apiService.getClients()
        },
        deleteClient(clientName) {
            const clientIdx = this.clients.findIndex((elem) => elem.name === clientName);
            if (clientIdx !== -1) {
                this.clients.splice(clientIdx, 1);
            }
        },
        addRandomClients() {
            const clientIndex = Math.floor(Math.random() * randomClients.length);
            const newClient = randomClients[clientIndex];
            this.clients.unshift(newClient);

        }
    },

    getters: {
        filteredClients() {
            return this.clients.filter(client => {
                const clientName = client.name.toLowerCase().includes(this.query.toLowerCase());
                const clientCategory = this.currentCategory ? client.category === this.currentCategory : true;
                return clientName && clientCategory;
            });
        },
    },
});
