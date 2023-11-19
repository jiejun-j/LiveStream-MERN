import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:5002/api',
    timeout: 1000,
});

apiClient.interceptors.request.use(
    (config) => {
        const userDetails = localStorage.getItem('user');

        if (userDetails) {
            const token = JSON.parse(userDetails).token;
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
        ````
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const login = async (data) => {
    try {
    return await apiClient.post('/auth/login', data);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

export const register = async (data) => {
    try {
    return await apiClient.post('/auth/register', data);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};

export const getChannelSettings = async () => {
    try {
        return await apiClient.get(`/settings/channel`);
    } catch (exception) {
        return {
            error: true,
            exception,
        };
    }
};