import axios from 'axios';

const clienteAxios = axios.create({
    baseURL: process.env.URL
});

export default clienteAxios;