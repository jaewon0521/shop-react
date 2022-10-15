import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { productValueFilter } from '../module/ProductModule';
import ItemList from './common/ItemList';
import { getProductsApi } from '../api/producs';
import ItemSkeleton from './common/ItemSkeleton';

const ProductContainer = () => {
  const { fashion, accessory, digital } = useRecoilValue(productValueFilter);

  return (
    <>
      <ItemList
        data={fashion.filter((_: any, idx: number) => 4 > idx)}
        onLoading={<ItemSkeleton count={4} />}
        title={'패션'}
      />
      <ItemList
        data={accessory.filter((_: any, idx: number) => 4 > idx)}
        onLoading={<ItemSkeleton count={4} />}
        title={'액세서리'}
      />
      <ItemList
        data={digital.filter((_: any, idx: number) => 4 > idx)}
        onLoading={<ItemSkeleton count={4} />}
        title={'디지털'}
      />
    </>
  );
};

export default ProductContainer;
