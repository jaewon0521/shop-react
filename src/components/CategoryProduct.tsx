import React from 'react';
import { useRecoilValue } from 'recoil';
import { productValueFilter } from '../module/ProductModule';
import BreadCrumb from './common/BreadCrumb';
import ItemList from './common/ItemList';

interface IProps {
  category: string;
}

const CategoryProduct = ({ category }: IProps) => {
  const data = useRecoilValue(productValueFilter);
  const categoryEn =
    category === '패션'
      ? 'fashion'
      : category === '액세서리'
      ? 'accessory'
      : 'digital';
  const filterdData = data[categoryEn];

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb name="홈" title={category} />
      <ItemList data={filterdData} title={category} />
    </section>
  );
};

export default CategoryProduct;
