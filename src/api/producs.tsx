import client from './client';

export const getProducts = () => client.get(`products`);
