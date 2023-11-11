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
      <div className="w-[355px] hidden h-[57px]  from-purple  to-blue rounded-[30px] shadow border border-t-blue border-l-blue border-b-purple border-r-purple border-opacity-50">
        <div className="w-6 h-6 relative"></div>
      </div>
      <div className=" hidden w-full md:justify-start items-end">
        {" "}
        {/*flex */}
        <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-full">
          <button className="btn btn-wide px-16 py-4 sm:btn-sm md:btn-md lg:btn-lg  bg-gradient-to-r from-purple to-blue   hover:to-blue hover:from-darkpurple text-darkpurple hover:text-gray ">
            Wide
          </button>
        </div>
      </div>
      {/* asıl tablo */}
      <section className="body-font hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full text-left">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray">
              Top 50 Collections
            </h1>
          </div>
          <div>
            <section className="text-gray  mt-0 body-font">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-2/3 w-full mx-auto overflow-auto">
                  <table className="table-fixed w-full text-left whitespace-no-wrap">
                    <thead>
                      <tr>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray text-sm bg-gray-800 rounded-tl rounded-bl">
                          # COLLECTİONS
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray text-sm bg-gray-800">
                          FLOOR PRİCE
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray text-sm ">
                          ITEMS
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray text-sm bg-gray-800">
                          HOLDER
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray text-sm bg-gray-800">
                          ONSALE
                        </th>
                        <th className="px-4 py-3 title-font tracking-wider font-medium text-gray text-sm  bg-gray-800">
                          FLOOR MC
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-3">
                          <img
                            alt="blog"
                            src="https://dummyimage.com/103x103"
                            className="w-8 h-8 mb-1 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          Start
                        </td>
                        <td className="px-4 py-3">0.05</td>
                        <td className="px-4 py-3">9999</td>
                        <td className="px-4 py-3">9999</td>
                        <td className="px-4 py-3">9999</td>
                        <td className="px-4 py-3">9999</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <img
                            alt="blog"
                            src="https://dummyimage.com/103x103"
                            className="w-8 h-8 mb-1 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          Start
                        </td>
                        <td className="px-4 py-3">0.05</td>
                        <td className="px-4 py-3">9999</td>
                        <td className="px-4 py-3">9999</td>
                        <td className="px-4 py-3">9999</td>
                        <td className="px-4 py-3">9999</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <img
                            alt="blog"
                            src="https://dummyimage.com/103x103"
                            className="w-8 h-8 mb-1 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          Start
                        </td>
                        <td className="px-4 py-3">0.05</td>
                        <td className="px-4 py-3">9999</td>
                        <td className="px-4 py-3">9999</td>
                        <td className="px-4 py-3">9999</td>
                        <td className="px-4 py-3">9999</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3">
                          <img
                            alt="blog"
                            src="https://dummyimage.com/103x103"
                            className="w-8 h-8 mb-1 rounded-full flex-shrink-0 object-cover object-center"
                          />
                          Start
                        </td>
                        <td className="px-4 py-3">0.05</td>
                        <td className="px-4 py-3">9999</td>
                        <td className="px-4 py-3">9999</td>
                        <td className="px-4 py-3">9999</td>
                        <td className="px-4 py-3">9999</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
