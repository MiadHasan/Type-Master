import axios from 'axios';

const url = 'http://localhost:5000/'

export const createUser = (newUser) => axios.post(url + 'signup', newUser);
export const login = (user) => axios.post(url + 'login', user);
export const updateStates = (states) => axios.patch(url + 'update', states);
export const getStates = (email) => axios.post(url + 'profile', email);