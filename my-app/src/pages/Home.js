import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
            <h2 className="title-font sm:text-4xl text-6xl font-medium text-white">
              Collections
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
              src="https://dummyimage.com/720x600"
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
                      src="https://dummyimage.com/103x103"
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
                    <span className="mr-6">1</span>
                    <img
                      alt="blog"
                      src="https://dummyimage.com/103x103"
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
                  <td className="border-t-[0.5px] border-darkgray px-4 py-3 text-lg ">
                    $24
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-3 title-font  flex items-center tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl text-left border-t-[0.5px] border-darkgray">
                    <span className="mr-6">2</span>
                    <img
                      alt="blog"
                      src="https://dummyimage.com/103x103"
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
                      src="https://dummyimage.com/103x103"
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
                      src="https://dummyimage.com/103x103"
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
                      src="https://dummyimage.com/103x103"
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
                      src="https://dummyimage.com/103x103"
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
                      src="https://dummyimage.com/103x103"
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
                      src="https://dummyimage.com/103x103"
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
                      src="https://dummyimage.com/103x103"
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
                      src="https://dummyimage.com/103x103"
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
          </div>
        </div>
      </section>

      {/* card */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/601x361"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/601x361"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/4 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/601x361"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* twitter */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/5 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/601x361"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/5 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/601x361"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/5 sm:w-1/2 p-4">
              <div className="flex relative">
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/5 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/601x361"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/5 sm:w-1/2 p-4">
              <div className="flex relative">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src="https://dummyimage.com/601x361"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white ">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    THE SUBTITLE
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    The Catalyzer
                  </h1>
                  <p className="leading-relaxed">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
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
