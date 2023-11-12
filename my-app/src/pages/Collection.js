import React from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

function Collection() {
  return (
    <div>
      <Header />
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full text-left">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-5 text-white">
              More From This Collections
            </h1>
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

      <Footer />
    </div>
  );
}

export default Collection;
