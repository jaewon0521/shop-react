import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="p-10 footer bg-base-200 text-base-content footer-center">
      <div className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">
          제로베이스
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
