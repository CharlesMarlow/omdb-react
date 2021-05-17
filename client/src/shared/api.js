import axios from 'axios';
const baseUrl = 'http://localhost:3001/';

export const fetchMovies = async (term = '') => {
    if (term) {
        return axios.get(`${baseUrl}?search=${term}`);
    } else {
        return axios.get(`${baseUrl}`);
    }
};