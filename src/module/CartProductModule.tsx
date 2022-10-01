import { atom, selector } from 'recoil';

export const cartProductAtom = atom({
  key: 'LIST_CART_PRODUCT',
  default: [],
});

export const cartProductSelector = selector({
  key: 'SERVICE_CART_PRODUCT',
  get: ({ get }) => get(cartProductAtom),
  set: ({ set }, newVal) => set(cartProductAtom, newVal),
});
