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

<div className="w-[355px] hidden h-[57px]  from-purple  to-blue rounded-[30px] shadow border border-t-blue border-l-blue border-b-purple border-r-purple border-opacity-50">
<div className="w-6 h-6 relative"></div>
</div>
  );
}

export default Search;
