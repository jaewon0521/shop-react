import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as SearchSvg } from '../../assets/svg/search.svg';

const SearchItem = () => {
  return (
    <ul className="!fixed left-0 sm:!absolute sm:top-14 menu dropdown-content w-full sm:w-64 max-h-96 shadow text-base-content overflow-y-auto bg-white dark:bg-gray-600">
      <li>
        <Link to="/" className="text-left js-searchedItem">
          <span className="text-gray-600 dark:text-white line-clamp-2">
            1234
          </span>
        </Link>
      </li>
      <li>
        <Link to="/" className="text-left js-searchedItem">
          <span className="text-gray-600 dark:text-white line-clamp-2">
            12345
          </span>
        </Link>
      </li>
    </ul>
  );
};

const SearchInput = () => {
  return (
    <div className="dropdown">
      <button
        type="button"
        className="flex sm:hidden w-10 sm:w-auto mx-0 px-0 sm:mx-2 sm:px-2 btn btn-ghost js-search"
      >
        <SearchSvg />
      </button>
      <input
        type="text"
        className="fixed left-0 top-4 -z-10 opacity-0 sm:opacity-100 sm:static sm:flex w-full input input-ghost focus:outline-0 rounded-none sm:rounded bg-gray-300 dark:bg-gray-600 !text-gray-800 dark:!text-white sm:transform-none transition-all js-searchInput w-56"
        placeholder="검색"
      />
      <SearchItem />
    </div>
  );
};

export default SearchInput;
