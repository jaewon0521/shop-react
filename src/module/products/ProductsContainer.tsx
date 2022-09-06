import { AxiosResponse } from 'axios';
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../api/producs';
import Products from '../../components/products/Products';
import { ProductsProps } from '../../type/data';

const ProductsContainer = () => {
  const [data, setData] = useState<ProductsProps[]>([]);

  const getData = async () => {
    const data: AxiosResponse = await getProducts();
    setData(data.data);
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return <Products></Products>;
};

export default ProductsContainer;
