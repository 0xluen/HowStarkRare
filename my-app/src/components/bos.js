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

                {/* <div className="lg:w-4/5 mx-auto flex border-[0.5px] p-6 border-t-blue rounded-2xl border-l-blue border-b-purple border-r-purple flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-20 object-cover object-center rounded"
              src="./img/nft.png"
            /> */}
              </div>

              <div className="flex border-b-darkgray border-[0.5px] border-x-0 border-t-0 mb-4 text-xs">
                <img src="./icons/birth.svg" className="mr-2" />
                Min Date: <span className="text-darkgray ml-2">02.02.2022</span>
              </div>
            </section>
          </div>
        </div>
      </section>

      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full text-left">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-5 text-white">
              More From This Collections
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/4 ">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection2.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection3.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection4.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection2.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection3.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection4.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection2.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection3.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full p-2  rounded-lg object-fill "
                  src="./img/collection4.png"
                  alt="blog"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex  mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                      <img src="./img/like.png" className="h-7 mb-4 ml-0 " />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs  flex-1 text-left">
                      Mint Price: <span className="text-gray">0.05</span>
                    </p>
                    <p className="text-xs  flex-1 text-left">
                      Total Supply: <span className="text-gray">0.05</span>
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <button className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                      CLAIM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-8 text-[#D9D9D9] justify-center items-center">
            <img className="h-10" src="./icons/Left.svg" />
            <div className=" mr-5 ml-5 text-center">
              <p>1 2 3 4</p>
            </div>
            <img className="h-10" src="./icons/Right.svg" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
