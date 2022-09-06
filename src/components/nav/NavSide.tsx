import React from 'react';
import { ReactComponent as Side } from '../../assets/svg/side.svg';

const NavSide = () => {
  return (
    <label
      htmlFor="side-menu"
      className="flex-none lg:hidden btn btn-square btn-ghost w-10 sm:w-auto"
    >
      <Side />
    </label>
  );
};

export default NavSide;
