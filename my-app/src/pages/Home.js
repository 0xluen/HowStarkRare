import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

function Home() {
  return (
    <>
      <Header />

      {/*1. kısım  */}
      <section className=" text-gray body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-6xl mb-4 font-medium text-white">
              Discover Rare {""}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue">
                NFTs
              </span>
            </h1>
            <h2 className="title-font sm:text-4xl text-6xl font-medium text-white inline-block">
              Collections{" "}
              <img
                className="inline-block align-middle"
                src="./icons/Vector.svg"
              />
            </h2>

            <p className="mb-8 mt-8 ml-0 text-left leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum aliquet lorem sit amet mauris ornare varius. Fusce
              lacinia luctus elementum
            </p>
            <div className=" flex w-full md:justify-start items-end md:w-full lg:w-full xl:w-1/2">
              <button class=" bg-gradient-to-r from-purple to-blue   hover:to-blue hover:from-darkpurple text-darkpurple bg-indigo-500 border-0 py-3 px-20 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                EXPLORE
              </button>
            </div>

            <div className="flex lg:flex-row md:flex-col">
              <button className=" flex flex-col py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                <h2 className="title-font font-medium text-3xl text-white">
                  1500K
                </h2>
                <p className="leading-relaxed border-b-[0.5px] border-blue ">
                  Collections
                </p>
              </button>
              <button className=" flex flex-col py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                <h2 className="title-font font-medium text-3xl text-white">
                  2.2M
                </h2>
                <p className="leading-relaxed border-b-[0.5px] border-blue ">
                  Items
                </p>
              </button>
              <button className=" flex flex-col py-3 px-5 rounded-lg items-center lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-gray-200 focus:outline-none">
                <h2 className="title-font font-medium text-3xl text-white">
                  22K
                </h2>
                <p className="leading-relaxed border-b-[0.25px] border-blue ">
                  Owners
                </p>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./img/Vector 45.png"
            />
          </div>
        </div>
      </section>

      {/* tablo */}
      <section className="text-gray body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full text-left">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Top 50 Collections
            </h1>
          </div>
          <div className="lg:w-2/3 w-full mx-auto overflow-auto">
            <table className="table-auto w-full text-center whitespace-no-wrap">
              <thead>
                <tr>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl text-left">
                    <span className="mr-6">#</span>
                    COLLECTİONS
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium  text-sm  rounded-tl rounded-bl">
                    FLOOR PRİCE
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium  text-sm  rounded-tl rounded-bl">
                    ITEMS
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium text-sm ">
                    HOLDERS
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium  text-sm ">
                    ONSALE
                  </th>
                  <th className="px-4 py-3 title-font tracking-wider font-medium  text-sm">
                    FLOOR MC
                  </th>
                  <th className="w-10 title-font tracking-wider font-medium  text-sm  rounded-tr rounded-br" />
                </tr>
              </thead>
              <tbody className=" border-darkgray border-[1px] divide-solid ">
                <tr>
                  <td className="px-4 py-3 title-font  flex items-center tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl text-left">
                    <span className="mr-6">1</span>
                    <img
                      alt="blog"
                      src="./img/Rectangle 264.png"
                      className="w-auto h-8 mb-1 flex-shrink-0 object-cover object-center mr-4"
                    />
                    Start
                  </td>
                  <td className="px-4 py-3">5 Mb/s</td>
                  <td className="px-4 py-3">15 GB</td>
                  <td className="px-4 py-3 text-lg text-gray">Free</td>
                  <td className="px-4 py-3 text-lg text-gray">Free</td>
                  <td className="px-4 py-3 text-lg text-gray">Free</td>
                </tr>

                <tr>
                  <td className="px-4 py-3 title-font  flex items-center tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl text-left border-t-[0.5px] border-darkgray">
                    <span className="mr-6">2</span>
                    <img
                      alt="blog"
                      src="./img/Rectangle 265.png"
                      className="w-auto h-8 mb-1 flex-shrink-0 object-cover object-center mr-4"
                    />
                    Start
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3">
                    25 Mb/s
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3">
                    25 GB
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px] border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px] border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 title-font  flex items-center tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl text-left border-t-[0.5px] border-darkgray">
                    <span className="mr-6">3</span>
                    <img
                      alt="blog"
                      src="./img/Rectangle 266.png"
                      className="w-auto h-8 mb-1 flex-shrink-0 object-cover object-center mr-4"
                    />
                    Start
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3">
                    25 Mb/s
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3">
                    25 GB
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 title-font  flex items-center tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl text-left border-t-[0.5px] border-darkgray">
                    <span className="mr-6">4</span>
                    <img
                      alt="blog"
                      src="./img/Rectangle 267.png"
                      className="w-auto h-8 mb-1 flex-shrink-0 object-cover object-center mr-4"
                    />
                    Start
                  </td>
                  <td className="border-t-[0.5px] border-darkgray px-4 py-3">
                    25 Mb/s
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3">
                    25 GB
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 title-font  flex items-center tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl text-left border-t-[0.5px] border-darkgray">
                    <span className="mr-6">5</span>
                    <img
                      alt="blog"
                      src="./img/Rectangle 268.png"
                      className="w-auto h-8 mb-1 flex-shrink-0 object-cover object-center mr-4"
                    />
                    Start
                  </td>
                  <td className="border-t-[0.5px] border-darkgray px-4 py-3">
                    25 Mb/s
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3">
                    25 GB
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 title-font  flex items-center tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl text-left border-t-[0.5px] border-darkgray">
                    <span className="mr-6">6</span>
                    <img
                      alt="blog"
                      src="./img/Rectangle 269.png"
                      className="w-auto h-8 mb-1 flex-shrink-0 object-cover object-center mr-4"
                    />
                    Start
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3">
                    25 GB
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 title-font  flex items-center tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl text-left border-t-[0.5px] border-darkgray">
                    <span className="mr-6">7</span>
                    <img
                      alt="blog"
                      src="./img/Rectangle 270.png"
                      className="w-auto h-8 mb-1 flex-shrink-0 object-cover object-center mr-4"
                    />
                    Start
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3">
                    25 Mb/s
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3">
                    25 GB
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 title-font  flex items-center tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl text-left border-t-[0.5px] border-darkgray">
                    <span className="mr-6">8</span>
                    <img
                      alt="blog"
                      src="./img/Rectangle 271.png"
                      className="w-auto h-8 mb-1 flex-shrink-0 object-cover object-center mr-4"
                    />
                    Start
                  </td>
                  <td className="border-t-[0.5px] border-darkgray px-4 py-3">
                    25 Mb/s
                  </td>
                  <td className="border-t-[0.5px] border-darkgray px-4 py-3">
                    25 GB
                  </td>
                  <td className="border-t-[0.5px] border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 title-font  flex items-center tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl text-left border-t-[0.5px] border-darkgray">
                    <span className="mr-6">9</span>
                    <img
                      alt="blog"
                      src="./img/Rectangle 272.png"
                      className="w-auto h-8 mb-1 flex-shrink-0 object-cover object-center mr-4"
                    />
                    Start
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3">
                    25 Mb/s
                  </td>
                  <td className="border-t-[0.5px] border-darkgray px-4 py-3">
                    25 GB
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 title-font  flex items-center tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl text-left border-t-[0.5px] border-darkgray">
                    <span className="mr-4">10</span>
                    <img
                      alt="blog"
                      src="./img/Rectangle 273.png"
                      className="w-auto h-8 mb-1 flex-shrink-0 object-cover object-center mr-4"
                    />
                    Start
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3">
                    25 Mb/s
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3">
                    25 GB
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                  <td className="border-t-[0.5px]  border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flex mt-8 justify-center">
              <img className="mr-10 h-10" src="./icons/Left.svg" />
              <img className="h-10" src="./icons/Right.svg" />
            </div>
          </div>
        </div>
      </section>

      <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full text-left">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-5 text-white">
              Categories
            </h1>
          </div>

          <span class="inline-flex space-x-4 text-sm sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start lg:justify-between w-full">
            <a href="#" class="flex flex-col items-center">
              <img src="./img/game.png" alt="Game" class="mb-1" />
              <span>GAME</span>
            </a>
            <a href="#" class="flex flex-col items-center">
              <img src="./img/3d.png" alt="3D Abstract" class="mb-1" />
              <span>3D ABSTRACT</span>
            </a>
            <a href="#" class="flex flex-col items-center">
              <img src="./img/MUSİC.png" alt="Music" class="mb-1" />
              <span>MUSIC</span>
            </a>
            <a href="#" class="flex flex-col items-center">
              <img src="./img/ART.png" alt="Art" class="mb-1" />
              <span>ART</span>
            </a>
            <a href="#" class="flex flex-col items-center">
              <img src="./img/metaverse.png" alt="Metaverse" class="mb-1" />
              <span>METAVERSE</span>
            </a>
            <a href="#" class="flex flex-col items-center">
              <img src="./img/f.png" alt="PFP" class="mb-1" />
              <span>PFP</span>
            </a>
          </span>
        </div>
      </section>

      {/* card */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full text-left">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-5 text-white">
              Featured Collections
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="./img/c1.png"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-xl text-center font-medium text-white mb-3">
                    Being by Parin Heidari{" "}
                    <img
                      className="inline-block align-middle"
                      src="./icons/blue.svg"
                    />
                  </h1>

                  <div className="flex justify-center items-center flex-wrap gap-x-4">
                    <p className="text-sm text-gray flex-1 text-center">
                      Floor
                    </p>
                    <p className="text-sm text-gray flex-1 text-center">
                      24H Volume
                    </p>
                  </div>
                  <div className="flex justify-center items-center flex-wrap gap-x-4">
                    <p className="text-sl text-white flex-1 text-center">
                      0.048 ETH
                    </p>
                    <p className="text-xl text-white flex-1 text-center">
                      0.048 ETH
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="./img/c2.png"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-xl text-center font-medium text-white mb-3">
                    Monster Party{" "}
                    <img
                      className="inline-block align-middle"
                      src="./icons/blue.svg"
                    />
                  </h1>

                  <div className="flex justify-center items-center flex-wrap gap-x-4">
                    <p className="text-sm text-gray flex-1 text-center">
                      Floor
                    </p>
                    <p className="text-sm text-gray flex-1 text-center">
                      24H Volume
                    </p>
                  </div>
                  <div className="flex justify-center items-center flex-wrap gap-x-4">
                    <p className="text-sl text-white flex-1 text-center">
                      0.048 ETH
                    </p>
                    <p className="text-xl text-white flex-1 text-center">
                      0.048 ETH
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="./img/c3.png"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-xl text-center font-medium text-white mb-3">
                    /// by Snowfro{" "}
                    <img
                      className="inline-block align-middle"
                      src="./icons/blue.svg"
                    />
                  </h1>

                  <div className="flex justify-center items-center flex-wrap gap-x-4">
                    <p className="text-sm text-gray flex-1 text-center">
                      Floor
                    </p>
                    <p className="text-sm text-gray flex-1 text-center">
                      24H Volume
                    </p>
                  </div>
                  <div className="flex justify-center items-center flex-wrap gap-x-4">
                    <p className="text-sl text-white flex-1 text-center">
                      0.048 ETH
                    </p>
                    <p className="text-xl text-white flex-1 text-center">
                      0.048 ETH
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-8 justify-center">
            <img className="mr-10 h-10" src="./icons/Left.svg" />
            <img className="h-10" src="./icons/Right.svg" />
          </div>
        </div>
      </section>

      {/* twitter */}
      <section className="text-gray body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full text-left">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-5 text-white">
              Trending Artists
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/5 sm:w-1/2 p-4">
              <div className="flex relative">
                <div className="h-full border-[1px] bg-twbg border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="./img/bg-1.png"
                    alt="blog"
                  />
                  <img
                    src="./icons/jane.svg"
                    className="absolute top-0 right-0 bottom-0 left-0 m-auto"
                  />
                  <div className="p-6">
                    <h1 className="title-font mt-5 text-xl text-center font-medium text-white mb-3">
                      Jane Cooper{" "}
                      <img
                        className="inline-block align-middle"
                        src="./icons/blue.svg"
                      />
                    </h1>

                    <div className="flex justify-center items-center flex-wrap gap-x-2">
                      <p className="text-xl text-gray flex-1 text-center">
                        1.7K
                      </p>
                      <p className="text-xl text-gray border-x-green border-y-twbg border-[0.5px] flex-1 text-center">
                        1.7K
                      </p>
                      <p className="text-xl text-gray flex-1 text-center">
                        1.7K
                      </p>
                    </div>
                    <div className="flex justify-center items-center flex-wrap gap-x-4">
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/5 sm:w-1/2 p-4">
              <div className="flex relative">
                <div className="h-full border-[1px] bg-twbg border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="./img/bg-2.png"
                    alt="blog"
                  />
                  <img
                    src="./icons/jane.svg"
                    className="absolute top-0 right-0 bottom-0 left-0 m-auto"
                  />
                  <div className="p-6">
                    <h1 className="title-font mt-5 text-xl text-center font-medium text-white mb-3">
                      Jane Cooper{" "}
                      <img
                        className="inline-block align-middle"
                        src="./icons/blue.svg"
                      />
                    </h1>

                    <div className="flex justify-center items-center flex-wrap gap-x-2">
                      <p className="text-xl text-gray flex-1 text-center">
                        1.7K
                      </p>
                      <p className="text-xl text-gray border-x-green border-y-twbg border-[0.5px] flex-1 text-center">
                        1.7K
                      </p>
                      <p className="text-xl text-gray flex-1 text-center">
                        1.7K
                      </p>
                    </div>
                    <div className="flex justify-center items-center flex-wrap gap-x-4">
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/5 sm:w-1/2 p-4">
              <div className="flex relative">
                <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple bg-twbg rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="./img/bg-3.png"
                    alt="blog"
                  />
                  <img
                    src="./icons/jane.svg"
                    className="absolute top-0 right-0 bottom-0 left-0 m-auto"
                  />
                  <div className="p-6">
                    <h1 className="title-font mt-5 text-xl text-center font-medium text-white mb-3">
                      Jane Cooper{" "}
                      <img
                        className="inline-block align-middle"
                        src="./icons/blue.svg"
                      />
                    </h1>

                    <div className="flex justify-center items-center flex-wrap gap-x-2">
                      <p className="text-xl text-gray flex-1 text-center">
                        1.7K
                      </p>
                      <p className="text-xl text-gray flex-1 border-x-green border-y-twbg border-[0.5px] text-center">
                        1.7K
                      </p>
                      <p className="text-xl text-gray flex-1 text-center">
                        1.7K
                      </p>
                    </div>
                    <div className="flex justify-center items-center flex-wrap gap-x-4">
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/5 sm:w-1/2 p-4">
              <div className="flex relative">
                <div className="h-full border-[1px] bg-twbg border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="./img/bg-4.png"
                    alt="blog"
                  />
                  <img
                    src="./icons/jane.svg"
                    className="absolute top-0 right-0 bottom-0 left-0 m-auto"
                  />
                  <div className="p-6">
                    <h1 className="title-font mt-5 text-xl text-center font-medium text-white mb-3">
                      Jane Cooper{" "}
                      <img
                        className="inline-block align-middle"
                        src="./icons/blue.svg"
                      />
                    </h1>

                    <div className="flex justify-center items-center flex-wrap gap-x-2">
                      <p className="text-xl text-gray flex-1 text-center">
                        1.7K
                      </p>
                      <p className="text-xl text-gray border-x-green border-y-twbg border-[0.5px] flex-1 text-center">
                        1.7K
                      </p>
                      <p className="text-xl text-gray flex-1 text-center">
                        1.7K
                      </p>
                    </div>
                    <div className="flex justify-center items-center flex-wrap gap-x-4">
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/5 sm:w-1/2 p-4">
              <div className="flex relative">
                <div className="h-full border-[1px] bg-twbg border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="./img/bg-5.png"
                    alt="blog"
                  />
                  <img
                    src="./icons/jane.svg"
                    className="absolute top-0 right-0 bottom-0 left-0 m-auto"
                  />
                  <div className="p-6">
                    <h1 className="title-font mt-5 text-xl text-center font-medium text-white mb-3">
                      Jane Cooper{" "}
                      <img
                        className="inline-block align-middle"
                        src="./icons/blue.svg"
                      />
                    </h1>

                    <div className="flex justify-center items-center flex-wrap gap-x-2">
                      <p className="text-xl text-gray flex-1 text-center">
                        1.7K
                      </p>
                      <p className="text-xl border-x-green border-y-twbg border-[0.5px] text-gray flex-1 text-center">
                        1.7K
                      </p>
                      <p className="text-xl text-gray flex-1 text-center">
                        1.7K
                      </p>
                    </div>
                    <div className="flex justify-center items-center flex-wrap gap-x-4">
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                      <p className="text-xs text-darkgray flex-1 text-center">
                        Items
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
