import { atom, selector } from 'recoil';

interface CartInfo {
  id: number;
  count: number;
}

interface Cart {
  [key: number]: CartInfo;
}

export const cartProductAtom = atom<Cart>({
  key: 'LIST_CART_PRODUCT',
  default: {},
});

export const addCart = selector({
  key: 'ADD_CART_PRODUCT',
  get: ({ get }) => get(cartProductAtom),
  set: ({ get, set }, newVal) => {
    const item = get(cartProductAtom);
    return set(cartProductAtom, newVal);
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
    const item = get(cartProductAtom);
    return item;
  },
});
