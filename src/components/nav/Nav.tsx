import Category from './Category';
import EventNav from './EventNav';
import Logo from './Logo';
import NavSide from './NavSide';

const Nav = () => {
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

export default Nav;
