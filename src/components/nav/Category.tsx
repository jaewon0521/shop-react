import React from 'react';
import { Link } from 'react-router-dom';

const Item = [
  { key: 'fashion', name: '패션' },
  { key: 'accessory', name: '액세서리' },
  { key: 'digital', name: '디지털' },
];

const CategoryItem = () => {
  return (
    <>
      {Item.map(({ key, name }) => (
        <Link
          to={`/${key}`}
          key={`${key}`}
          className="btn btn-ghost btn-sm rounded-btn text-gray-700 dark:text-white"
        >
          {name}
        </Link>
      ))}
    </>
  );
};

const Category = () => {
  return (
    <div className="flex-none hidden md:flex md:flex-1 ml-2">
      <CategoryItem />
    </div>
  );
};

export default Category;
