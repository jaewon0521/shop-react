import React from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { productValueFilter } from '../../module/ProductModule';
import BreadCrumb from '../common/BreadCrumb';
import ItemList from '../common/ItemList';

interface IProps {
  category: string;
}

const CategoryItem = ({ category }: IProps) => {
  const location = useLocation().pathname.split('/')[1];
  const data = useRecoilValue(productValueFilter);
  const filterdData = data.filter((item) => item.name === category);

  debugger;

  return (
    <section className="pt-4 lg:pt-5 pb-4 lg:pb-8 px-4 xl:px-2 xl:container mx-auto">
      <BreadCrumb name="홈" title={category} />
      <ItemList data={filterdData[0].data} title={category} />
    </section>
  );
};

export default CategoryItem;
