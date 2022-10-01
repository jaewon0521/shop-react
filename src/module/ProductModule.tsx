import { atom, selector, selectorFamily } from 'recoil';
import { IProduct } from '../type/data';

export const productAtom = atom<IProduct[]>({
  key: 'LIST_PRODUCT',
  default: [],
});

export const productValueFilter = selector({
  key: 'FILTER_LIST_PRODUCT',
  get: ({ get }) => {
    const data = get(productAtom);
    const filterdArray = [];
    const filterdData = data.reduce((acc: any, cur: IProduct) => {
      switch (cur.category) {
        case 'electronics':
          acc.digital = acc.digital ? [...acc.digital, cur] : [cur];
          break;
        case 'jewelery':
          acc.jewelery = acc.jewelery ? [...acc.jewelery, cur] : [cur];
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
    for (let category in filterdData) {
      let name =
        category === 'digital'
          ? '디지털'
          : category === 'jewelery'
          ? '액세서리'
          : '패션';
      filterdArray.push({ data: filterdData[category], name });
    }
    return filterdArray;
  },
});
