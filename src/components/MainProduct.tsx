import { useRecoilState, useRecoilValue } from 'recoil';
import { productAtom, productValueFilter } from '../module/ProductModule';
import ItemList from './common/ItemList';
import { useQuery } from 'react-query';
import { getProducts } from '../api/producs';

const ProductContainer = () => {
  const [product, setProduct] = useRecoilState(productValueFilter);

  const { isLoading, error, data } = useQuery(
    ['product'],
    () => getProducts(),
    {
      retry: false,
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
        data={product.fashion.filter((_: any, idx: any) => 4 > idx)}
        title={'패션'}
      />
      <ItemList
        data={product.accessory.filter((_: any, idx: any) => 4 > idx)}
        title={'액세서리'}
      />
      <ItemList
        data={product.digital.filter((_: any, idx: any) => 4 > idx)}
        title={'디지털'}
      />
    </>
  );
};

export default ProductContainer;
