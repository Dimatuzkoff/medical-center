import { defineStore } from 'pinia';
import apiService from '@/services/api';

export const useAppStore = defineStore('app', {
    state: () => ({
        clients: [],
        test: 'wewr'
    }),
    actions: {
        async getClients() {
            this.clients = await apiService.getClients()
        }
    },
});
