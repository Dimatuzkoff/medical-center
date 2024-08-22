import { defineStore } from 'pinia';
import apiService from '@/services/api';

export const useAppStore = defineStore('app', {
    state: () => ({
        clients: [],
        userName: 'Адмін',
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
});
