import { defineStore } from 'pinia';
import apiService from '@/services/api';
import { computed, ref } from "vue";

export const useAppStore = defineStore('app', {
    state: () => ({
        clients: [],
        userName: 'Адмін',
        query: ref("")
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
        }
    },

    getters: {
        filteredClients() {
            return this.clients.filter(client =>
                client.name.toLowerCase().includes(this.query.toLowerCase())
            );
        },
    },
});
