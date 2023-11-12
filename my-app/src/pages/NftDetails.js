import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function NftDetails() {
  return (
    <>
      <Header />

      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex border-[0.5px] p-6 border-t-blue rounded-2xl border-l-blue border-b-purple border-r-purple flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-20 object-cover object-center rounded"
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
              <div class="overflow-x-auto text-sm text-[#D3D3D3]">
                <table class="table-auto w-full">
                  <tbody>
                    <tr>
                      <td class="px-4 py-4">Year</td>
                      <td class="px-4 py-4">2023</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-4">Dimensions:</td>
                      <td class="px-4 py-4">40 x 50</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-4">Blockchain:</td>
                      <td class="flex items-center px-4 py-4">
                        <img src="./icons/bnb.svg" class="h-4 mr-2" />
                        <span>BNB Chain</span>
                      </td>
                    </tr>
                    <tr>
                      <td class="px-4 py-4">Certificate of Authenticity:</td>
                      <td class="px-4 py-4">Included</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-4">Token ID:</td>
                      <td class="px-4 py-4">1234</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-4">Contract Address:</td>
                      <td class="px-4 py-4">xx..x..x</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-4">Current Price:</td>
                      <td class="px-4 py-4">**</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex">
                <span className="title-font font-medium text-2xl text-white">
                  $58.00
                </span>
                <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Button
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center mt-7 space-x-3">
              <div className="flex items-center title-font text-2xl font-medium text-white mb-3 mr-6">
                <img src="./img/details.png" className="rounded-full" />
                <span className="mx-2 whitespace-nowrap">
                  SolanaMonkeyBusiness(SMB)
                </span>
                <img className="align-middle" src="./icons/blue.svg" />
              </div>
              <img src="./img/like.png" className="h-10 mb-4 " />
            </div>
          </div>
        </div>
      </section>

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

      <Footer />
    </>
  );
}

export default NftDetails;
