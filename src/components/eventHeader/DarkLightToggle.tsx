import React, { useEffect, useState } from 'react';
import { ReactComponent as DarkSvg } from '/src/assets/svg/dark.svg';
import { ReactComponent as LightSvg } from '/src/assets/svg/light.svg';

const DarkLightToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const localDark = localStorage.getItem('theme');
    if (localDark === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      setDark(!dark);
    }
  }, []);

  const toggleDarkMode = () => {
    if (!dark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      setDark(!dark);
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      setDark(!dark);
    }
  };
  return (
    <label
      htmlFor=""
      className="swap swap-rotate mr-2 sm:mr-4"
      onClick={toggleDarkMode}
    >
      <input type="checkbox" className="js-theme" checked={!dark} readOnly />
      <DarkSvg />
      <LightSvg />
    </label>
  );
};

export default DarkLightToggle;
