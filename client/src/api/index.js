import axios from 'axios';

const url = 'http://localhost:3000/poem';

export const fetchPoems = () => axios.get(url);

export const fetchSinglePoem = (id) => axios.get(`${url}/${id}`);