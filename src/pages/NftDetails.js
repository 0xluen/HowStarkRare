import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

import React from "react";

function NftDetails() {
  return (
    <>
      <Nav />

      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap border-[0.5px] p-6 border-t-blue rounded-2xl border-l-blue border-b-purple border-r-purple">
            <img
              alt="ecommerce"
              class="lg:w-1/2 md:w-full w-full lg:h-auto h-64 object-cover object-center rounded"
              src="./img/nft.png"
            />

            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="flex items-center text-white text-3xl title-font font-medium mb-1">
                <span>NFT NAME #0000</span>
                <img src="./img/clip2.png" className="ml-10" />
              </div>
              <div className="flex border-b-darkgray border-[0.5px] border-x-0 border-t-0 mb-4 text-xs">
                <img src="./icons/birth.svg" className="mr-2" />
                Min Date: <span className="text-darkgray ml-2">02.02.2022</span>
              </div>
              <div className="flex items-center text-sm">
                <img src="./icons/eye.svg" />
                <span className="text-darkgray ml-1 mr-6 ">2.1K views</span>

                <img src="./icons/hearth.svg" />
                <span className="text-darkgray ml-1 mr-6">2.1K favorites</span>

                <img src="./icons/user.svg" />
                <span className="text-darkgray ml-1 mr-6">2.1K owners</span>
              </div>

              <div className="overflow-x-auto text-sm text-[#D3D3D3] ">
                <table className="table-auto w-full">
                  <tbody>
                    <tr>
                      <td className="px-4 py-4">Year</td>
                      <td className="px-4 py-4">2023</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4">Dimensions:</td>
                      <td className="px-4 py-4">40 x 50</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4">Blockchain:</td>
                      <td className="flex items-center px-4 py-4">
                        <img src="./icons/bnb.svg" className="h-4 mr-2" />
                        <span>BNB Chain</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4">
                        Certificate of Authenticity:
                      </td>
                      <td className="px-4 py-4">Included</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4">Token ID:</td>
                      <td className="px-4 py-4">1234</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4">Contract Address:</td>
                      <td className="px-4 py-4">xx..x..x</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4">Current Price:</td>
                      <td className="px-4 py-4">**</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex">
                <div className="flex items-center title-font font-medium text-2xl text-[#D3D3D3]">
                  <span>0.048ETH</span>
                  <img src="./icons/48.svg" className="ml-2" />
                </div>
                <button className="flex m-auto bg-gradient-to-r from-purple to-blue hover:to-blue hover:from-darkpurple text-darkpurple border-0 py-3 px-7 focus:outline-none rounded-3xl sm:px-14 sm:py-3">
                  CLAIM
                </button>
              </div>
            </div>

            <div className="flex items-center sm:text-sm mt-7 space-x-3">
              <div className="flex items-center title-font text-2xl font-medium text-white mb-3 mr-6">
                <img src="./img/details.png" className="rounded-full" />
                <span className="mx-2 whitespace-nowrap hidden sm:flex ">
                  SolanaMonkeyBusiness(SMB)
                </span>
                <img
                  className="align-middle hidden sm:flex"
                  src="./icons/blue.svg"
                />
              </div>
              <img src="./img/like.png" className="h-10 mb-4 " />
            </div>
          </div>
        </div>
      </section>

      {/* card */}
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full text-left">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-5 text-white">
              More From This Collections
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 ">
            <div className="p-4 md:w-1/4">
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple rounded-lg overflow-hidden relative">
                <img
                  className="lg:h-48 md:h-36 w-full p-2 rounded-lg object-fill"
                  src="./img/collection.png"
                  alt="blog"
                />
                <img
                  src="./img/like.png"
                  className="h-10 absolute top-0 right-0 m-4"
                  alt="like"
                />
                <div>
                  <h1 className="title-font text-lg text-left p-3  font-medium text-transparent  bg-clip-text bg-gradient-to-r from-purple to-blue mb-3">
                    NFT Collection Name
                    <span className="text-white ml-6">#0000</span>
                  </h1>

                  <div className="flex ml-3 mb-4 text-xs">
                    <img src="./icons/birth.svg" className="mr-1" />
                    Min Date:
                    <span className="text-darkgray ml-2">02.02.2022</span>
                  </div>
                  <div className="flex justify-center mb-3 ml-3 text-darkgray text-xs items-center flex-wrap gap-x-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vestibulum aliquet lorem sit amet mauris ornare varius.
                  </div>
                  <div className="flex justify-start items-center ml-3 flex-wrap gap-x-4">
                    <div className="text-xl text-white flex items-center">
                      0.048 ETH{" "}
                      <img src="./icons/48.svg" className="h-5 ml-2" />
                    </div>
                  </div>
                  <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
                    <p className="text-xs ml-3 flex-1 text-left">
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
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple rounded-lg overflow-hidden relative">
                <img
                  className="lg:h-48 md:h-36 w-full p-2 rounded-lg object-fill"
                  src="./img/collection2.png"
                  alt="blog"
                />
                <img
                  src="./img/like.png"
                  className="h-10 absolute top-0 right-0 m-4"
                  alt="like"
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
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple rounded-lg overflow-hidden relative">
                <img
                  className="lg:h-48 md:h-36 w-full p-2 rounded-lg object-fill"
                  src="./img/collection3.png"
                  alt="blog"
                />
                <img
                  src="./img/like.png"
                  className="h-10 absolute top-0 right-0 m-4"
                  alt="like"
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
              <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple rounded-lg overflow-hidden relative">
                <img
                  className="lg:h-48 md:h-36 w-full p-2 rounded-lg object-fill"
                  src="./img/collection4.png"
                  alt="blog"
                />
                <img
                  src="./img/like.png"
                  className="h-10 absolute top-0 right-0 m-4"
                  alt="like"
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
          <div className="flex mt-8 justify-center">
            <img className="mr-10 h-10" src="./icons/Left.svg" />
            <img className="h-10" src="./icons/Right.svg" />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default NftDetails;
