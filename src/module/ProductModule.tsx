import { atom, selector, selectorFamily } from 'recoil';
import { DetailProps } from '../type/data';

export const productValue = atom<DetailProps[]>({
  key: 'LIST_PRODUCT',
  default: [],
});

export const productValueFilter = selector({
  key: 'FILTER_LIST_PRODUCT',
  get: ({ get }) => {
    const data = get(productValue);
    const filterdData = data.reduce((acc: any, cur: DetailProps) => {
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
    return filterdData;
  },
});
