import { atom, selector, selectorFamily } from 'recoil';
import { IProduct } from '../type/data';

interface CategoryProduct {
  digital: IProduct[];
  accessory: IProduct[];
  fashion: IProduct[];
  [key: string]: any;
}

export interface ProductIntoName extends IProduct {
  name: string;
}

export const productOnceInfo = atom({
  key: 'ONCE_PRODUCT',
  default: {} as ProductIntoName,
});

export const productListAtom = atom<CategoryProduct>({
  key: 'LIST_PRODUCT',
  default: {
    digital: [],
    accessory: [],
    fashion: [],
  },
});

export const productValueFilter = selector({
  key: 'FILTER_LIST_PRODUCT',
  get: ({ get }) => {
    const product = get(productListAtom);
    const digital = product.digital;
    const accessory = product.accessory;
    const fashion = product.fashion;

    return { digital, accessory, fashion };
  },
  set: ({ get, set }, newVal) => {
    if (!Array.isArray(newVal)) return;

    const data = newVal;
    const filterdData = data.reduce((acc: any, cur: IProduct) => {
      switch (cur.category) {
        case 'electronics':
          acc.digital = acc.digital ? [...acc.digital, cur] : [cur];
          break;
        case 'jewelery':
          acc.accessory = acc.accessory ? [...acc.accessory, cur] : [cur];
          break;
        case `men's clothing`:
        case `women's clothing`:
          acc.fashion = acc.fashion ? [...acc.fashion, cur] : [cur];
          break;
        default:
          break;
      }
      return acc;
    }, {});
    return set(productListAtom, filterdData);
  },
});
