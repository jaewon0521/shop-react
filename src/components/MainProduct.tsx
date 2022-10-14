import { useRecoilValue } from 'recoil';
import { productValueFilter } from '../module/ProductModule';
import ItemList from './common/ItemList';

const ProductContainer = () => {
  const data = useRecoilValue(productValueFilter);

  if (!Object.keys(data).length) return <></>;

  return (
    <>
      {data.length > 0 &&
        data.map((item, idx) => (
          <ItemList
            key={idx}
            data={item.data.filter((_: any, idx: any) => 4 > idx)}
            title={item.name}
          />
        ))}
    </>
  );
};

export default ProductContainer;
