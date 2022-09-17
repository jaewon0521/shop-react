import React from 'react';
import Category from '../nav/Category';
import EventNav from '../nav/EventNav';
import Logo from '../nav/Logo';
import NavSide from '../nav/NavSide';

const Header = () => {
  return (
    <div className="fixed z-10 w-full navbar shadow-lg bg-white dark:bg-neutral text-neutral-content">
      <div className="flex w-full xl:container xl:m-auto">
        <NavSide />
        <Logo />
        <Category />
        <EventNav />
      </div>
    </div>
  );
};

export default Header;
