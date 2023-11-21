'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import axios from "axios";
function Index() {
  const [nfts,setNfts] = useState([])
  const [project , setProjects] = useState([])

  const twitter=()=>{
    const url = "https://twitter.com/StarknetBunny";
    window.open(url, "_blank");
  }

  const getData =async ()=>{
    const res = await axios.get(
      "https://api.pyramid.market/api/collection/trending?sort=volume&duration=DAY_7"
    );
    setNfts(res.data.data)
  }
  
  const getProjects =async ()=>{
    const res = await axios.get(
      "https://api.pyramid.market/api/collection/intro"
    );
    setProjects(res.data.data)
  }
  useEffect(()=>{
    getData();
    getProjects();
  },[])
  return (
    <>
      <Nav />

      {/*1. kısım  */}
      <section className=" text-gray body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-6xl mb-4 font-medium text-white">
              Discover Rare {""}
              <span className="text-transparent    bg-clip-text bg-gradient-to-r from-purple to-blue">
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
            Discover the rarities of Starknet NFT collectibles
            </p>
            <div className=" flex w-full md:justify-start items-end md:w-full lg:w-full xl:w-1/2">
              <button onClick={twitter} class=" bg-gradient-to-r from-purple to-blue   hover:to-blue hover:from-darkpurple text-darkpurple bg-indigo-500 border-0 py-3 px-20 rounded text-lg">
                Follow us
              </button>
            </div>
            <div className="flex lg:flex-row md:flex-col mt-5 ml-0 items-start justify-start">
             {/* <div className="flex flex-col items-center md:ml-0 md:mt-4 mt-0 lg:mt-0">
                <h2 className="title-font font-medium text-3xl text-white">
                  1500K
                </h2>
                <p className="leading-relaxed border-b-[0.5px] border-blue">
                  Collections
                </p>
              </div>
              <div className="flex flex-col items-center lg:ml-6 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0">
                <h2 className="title-font font-medium text-3xl text-white">
                  2.2M
                </h2>
                <p className="leading-relaxed border-b-[0.5px] border-blue">
                  Items
                </p>
             </div>
              <div className="flex flex-col items-center lg:ml-6 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0">
                <h2 className="title-font font-medium text-3xl text-white">
                  22K
                </h2>
                <p className="leading-relaxed border-b-[0.25px] border-blue">
                  Owners
                </p>
              </div>*/}
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./img/homeb2.png"
            />
          </div>
        </div>
      </section>

      {/* tablo */}
      <section className="text-gray body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full text-center">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white">
              Top 10 Collections
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
                    VOLUME
                  </th>
               
                  <th className="w-10 title-font tracking-wider font-medium  text-sm  rounded-tr rounded-br" />
                </tr>
              </thead>
              <tbody className=" border-darkgray border-[1px] divide-solid ">
             

       {nfts.map((item,index)=>{
        return(
          <tr key={index}>
          <td className="px-4 py-3 title-font  flex items-center tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl text-left border-t-[0.5px] border-darkgray">
            <span className="mr-6">{index + 1 }</span>
            <img
              alt="blog"
              src={item.data.image}
              className="w-auto h-8 mb-1 flex-shrink-0 object-cover object-center mr-4"
            />
           <Link href={"/Collection"+"?address="+item.data.address}  >{item.data.name}</Link>
          </td>
          <td className="border-t-[0.5px]  border-darkgray px-4 py-3">
          {Number(item.data.floorPrice).toFixed(6)} ETH
          </td>
          <td className="border-t-[0.5px]  border-darkgray px-4 py-3">
          {Number(item.data.collectionVolume).toFixed(4)} ETH
          </td>
         
        </tr>
        )
       })}
             
              </tbody>
            </table>
        {/*    <div className="flex mt-8 justify-center">
              <img className="mr-10 h-10" src="./icons/Left.svg" />
              <img className="h-10" src="./icons/Right.svg" />
  </div>*/ }
          </div>
        </div>
      </section>

      

      {/* <section className=" body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full text-left">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-5 text-white">
              Categories
            </h1>
          </div>

          <span class="inline-flex space-x-4 text-sm sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start lg:justify-between w-full">
          <Link href="#" class="flex flex-col items-center">
              <img src="./img/gamebg.png" alt="Game" class="mb-1" />
              <span style={{color:"white"}}>GAME</span>
            </Link>
            <Link href="#" class="flex flex-col items-center">
              <img src="./img/artbg.png" alt="Art" class="mb-1" />
              <span  style={{color:"white"}}>ART</span>
            </Link>
            <Link href="#" class="flex flex-col items-center">
              <img src="./img/metaversebg.png" alt="Metaverse" class="mb-1" />
              <span style={{color:"white"}}>METAVERSE</span>
            </Link>
            <Link href="#" class="flex flex-col items-center">
              <img src="./img/pfbg.png" alt="PFP" class="mb-1" />
              <span style={{color:"white"}}>PFP</span>
            </Link>
          </span>
        </div>
      </section> */}
      
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full text-left">
            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-5 text-white">
              Featured Collections
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
          {project.map((item,index)=>{
         
          return(
            <div key={index} className="p-4 md:w-1/3">
            <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple  rounded-lg overflow-hidden">
              <img
                className="lg:h-48 md:h-36 w-full object-cover object-center"
                src={item.bannerImage}
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-xl text-center font-medium text-white mb-3">
                <Link href={"/Collection"+"?address="+item.address}  >{item.name}</Link>
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
                   {Number(item.floorPrice).toFixed(4)} ETH
                  </p>
                  <p className="text-xl text-white flex-1 text-center">
                    {Number(item.collectionVolume).toFixed(4)} ETH
                  </p>
                </div>
              </div>
            </div>
          </div>
          )
         }
          )}
          
          </div>
         {/* <div className="flex mt-8 justify-center">
            <img className="mr-10 h-10" src="./icons/Left.svg" />
            <img className="h-10" src="./icons/Right.svg" />
        </div>*/}
        </div>
      </section>

      {/* twitter */}
     {/*   <section className="text-gray body-font">
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
      </section>*/ }
      <Footer />
    </>
  );
}

export default Index;
