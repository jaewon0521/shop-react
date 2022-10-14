import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { productValueFilter } from '../module/ProductModule';
import ItemList from './common/ItemList';
import { useQuery } from 'react-query';
import { getProductsApi } from '../api/producs';

const ProductContainer = () => {
  const setProduct = useSetRecoilState(productValueFilter);
  const { digital, fashion, accessory } = useRecoilValue(productValueFilter);

  const { isLoading, error, data } = useQuery(
    ['product'],
    () => getProductsApi(),
    {
      refetchOnWindowFocus: false,
      retry: false,
      staleTime: 60 * 1000,
      onSuccess: (data) => {
        setProduct(data.data);
      },
      onError: (error) => {
        console.log(error);
      },
    },
  );

  if (error) {
    <div>에러</div>;
  }

  if (isLoading) {
    <div>로딩중...스켈리톤 UI 작업 가즈아...</div>;
  }

  return (
    <>
      <ItemList
        data={fashion.filter((_: any, idx: any) => 4 > idx)}
        title={'패션'}
      />
      <ItemList
        data={accessory.filter((_: any, idx: any) => 4 > idx)}
        title={'액세서리'}
      />
      <ItemList
        data={digital.filter((_: any, idx: any) => 4 > idx)}
        title={'디지털'}
      />
    </>
  );
};

export default ProductContainer;
