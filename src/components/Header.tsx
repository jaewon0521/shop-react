import React from 'react';
import DarkLightToggle from './eventHeader/DarkLightToggle';
import SearchInput from './eventHeader/SearchInput';
import { Link } from 'react-router-dom';

import { ReactComponent as SideSvg } from '/src/assets/svg/side.svg';
import { ReactComponent as CartSvg } from '/src/assets/svg/cart.svg';

const SideMenu = () => {
  return (
    <label
      htmlFor="side-menu"
      className="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto"
    >
      <SideSvg />
    </label>
  );
};

const Logo = () => {
  return (
    <h1 className="shrink-0 flex md:flex-none flex-1 mx-1 sm:mx-2">
      <Link
        to="/"
        className="text-lg text-gray-700 dark:text-white font-bold whitespace-nowrap"
      >
        React Shop
      </Link>
    </h1>
  );
};

const Category = () => {
  const category = [
    { key: 'fashion', name: '패션' },
    { key: 'accessory', name: '액세서리' },
    { key: 'digital', name: '디지털' },
  ];

  return (
    <div className="flex-none hidden md:flex md:flex-1 ml-2">
      {category.map(({ key, name }) => (
        <Link
          to={`/${key}`}
          key={`${key}`}
          className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

const EventNav = () => {
  return (
    <div className="flex items-center px-2">
      <DarkLightToggle />
      <SearchInput />
      <Link to="/cart" className="btn btn-ghost w-10 sm:w-12 ml-1">
        <span className="relative">
          <CartSvg />
          <span className="inline-flex items-center justify-center absolute top-0 right-0 px-2 py-1 rounded-full bg-red-500 text-xs font-bold leading-none text-gray-200 transform translate-x-1/2 -translate-y-1/2">
            0
          </span>
        </span>
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
      <div className="flex w-full xl:container xl:m-auto">
        <SideMenu />
        <Logo />
        <Category />
        <EventNav />
      </div>
    </div>
  );
};

export default Header;
