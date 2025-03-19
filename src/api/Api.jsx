import axios from 'axios';

const api = axios.create({
    baseUrl: 'http://localhost:8000',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default class AuctionApi {
    static getActiveAuctions() {
        api.get('/auctions');
    }
}; 
