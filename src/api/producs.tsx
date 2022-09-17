import client from './client';

export const getProducts = () => client.get(`products`);

export const getIdProducts = (id: number) => client.get(`products/${id}`);
