import { useRecoilValue } from 'recoil';
import { productValueFilter } from '../module/ProductModule';
import ItemList from '../components/common/ItemList';
import { DetailProps } from '../type/data';

interface Data {
  fashion: DetailProps[];
  jewelery: DetailProps[];
  digital: DetailProps[];
}

const ProductContainer = () => {
  const data = useRecoilValue<Data>(productValueFilter);
  if (!Object.keys(data).length) return;

  return (
    <>
      <ItemList data={data.fashion.filter((_, idx) => 4 > idx)} title="패션" />
      <ItemList
        data={data.jewelery.filter((_, idx) => 4 > idx)}
        title="악세서리"
      />
      <ItemList
        data={data.digital.filter((_, idx) => 4 > idx)}
        title="디지털"
      />
    </>
  );
};

export default ProductContainer;
