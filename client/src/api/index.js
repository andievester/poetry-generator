import axios from 'axios';

const url = 'https://poetry-app-server.herokuapp.com/poem';

export const fetchPoems = () => axios.get(url);

export const fetchSinglePoem = (id) => axios.get(`${url}/${id}`);