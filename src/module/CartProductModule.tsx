import { atom, selector, selectorFamily } from 'recoil';
import { recoilPersist } from 'recoil-persist';

interface CartInfo {
  id: number;
  count: number;
}

interface Cart {
  [key: number]: CartInfo;
}

const { persistAtom } = recoilPersist();

export const cartProductAtom = atom({
  key: 'LIST_CART_PRODUCT',
  default: {} as Cart,
  effects_UNSTABLE: [persistAtom],
});

export const addCart = selector({
  key: 'ADD_CART_PRODUCT',
  get: ({ get }) => get(cartProductAtom),
  set: ({ get, set }, newVal) => {
    const prevData = get(cartProductAtom);
    const newData = {
      ...prevData,
      [newVal]: {
        id: newVal,
        count: prevData[newVal] ? prevData[newVal]['count'] + 1 : 1,
      },
    };
    set(cartProductAtom, newData);
  },
});

export const removeCart = selector({
  key: 'REMOVE_CART_PRODUCT',
  get: ({ get }) => get(cartProductAtom),
  set: ({ get, set }, newVal) => {
    return set(cartProductAtom, newVal);
  },
});

export const totalCartCount = selector({
  key: 'GET_TOTAL_COUNT_CART',
  get: ({ get }) => {
    const originalData = get(cartProductAtom);
    let totalCount = 0;
    for (let item in originalData) {
      totalCount += originalData[item]['count'];
    }

    return totalCount;
  },
});
