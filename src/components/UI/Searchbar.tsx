

import { FaSearch, FaTimes } from 'react-icons/fa';

const Search = () => {
  return (
    <div className="mt-[10px] mx-12 sm:mx-[600px] md:mx-12 lg:mx-24 ">
      <div className="flex items-center bg-green-200 p-2 rounded-full">
        <FaSearch className="mr-2 text-green-700" />
        <input
          type="text"
          placeholder="Search Here"
          className="flex-grow bg-green-200 text-green-800 border-none outline-none"
        />
        <FaTimes className="text-green-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default Search;
