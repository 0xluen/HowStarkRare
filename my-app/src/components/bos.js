import React from "react";

function Search() {
  return (
    <div>
      <div className=" md:flex-nowrap hidden  flex-wrap justify-center items-end md:justify-start">
        <div className="relative sm:w-64 w-40 sm:mr-4 mr-2">
          <input
            type="text"
            id="footer-field"
            name="footer-field"
            className="w-full rounded-full bg-black border-1 border-blue  border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-purple focus:border-blue text-base outline-none text-gray py-2 px-10 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}

export default Search;
