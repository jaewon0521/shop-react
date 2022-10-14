import client from './client';

export const getProductsApi = () => client.get(`products`);

export const getIdProductsApi = (id: string) => client.get(`products/${id}`);
