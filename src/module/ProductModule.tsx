import { atom, selector, selectorFamily } from 'recoil';
import { IProduct } from '../type/data';

interface CategoryProduct {
  digital: IProduct[];
  accessory: IProduct[];
  fashion: IProduct[];
  [key: string]: any;
}

export const productAtom = atom<CategoryProduct>({
  key: 'LIST_PRODUCT',
  default: {
    digital: [],
    accessory: [],
    fashion: [],
  },
});

export const productValueFilter = selector({
  key: 'FILTER_LIST_PRODUCT',
  get: ({ get }) => get(productAtom),
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

    // for (let category in filterdData) {
    //   let name =
    //     category === 'digital'
    //       ? '디지털'
    //       : category === 'jewelery'
    //       ? '액세서리'
    //       : '패션';
    //   filterdArray.push({ data: filterdData[category], name });
    // }
    return set(productAtom, filterdData);
  },
});
