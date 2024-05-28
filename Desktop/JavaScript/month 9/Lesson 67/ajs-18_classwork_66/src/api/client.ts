import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://attractor-2ca74-default-rtdb.europe-west1.firebasedatabase.app/',
});



