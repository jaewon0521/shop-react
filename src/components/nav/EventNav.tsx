import React from 'react';
import Cart from './Cart';
import DarkLightToggle from './DarkLightToggle';
import SearchInput from './SearchInput';

const EventNav = () => {
  return (
    <div className="flex items-center px-2">
      <DarkLightToggle />
      <SearchInput />
      <Cart />
    </div>
  );
};

export default EventNav;
