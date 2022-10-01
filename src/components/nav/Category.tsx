import React from 'react';
import { Link } from 'react-router-dom';
import { category } from '../../constance/category';

const CategoryItem = () => {
  return (
    <>
      {category.map(({ key, name }) => (
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
