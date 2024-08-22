import axios from 'axios';

export const api = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});


export const getClients = async () => {
    try {
        const response = await api.get('/clients.json');
        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}


export default {
    getClients
}