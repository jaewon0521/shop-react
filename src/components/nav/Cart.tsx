import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as CartSvg } from '../../assets/svg/cart.svg';

const Cart = () => {
  return (
    <Link to="/" className="btn btn-ghost w-10 sm:w-12 ml-1">
      <span className="relative">
        <CartSvg />
        <span className="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">
          0
        </span>
      </span>
    </Link>
  );
};

export default Cart;
