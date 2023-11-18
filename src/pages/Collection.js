import React, { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { useRouter } from 'next/router';
import axios from "axios";
function Collection() {
  const router = useRouter();
  const [data,setData] = useState([])
  const [items,setItems] = useState([])
  const getProjects =async ()=>{
    if (router.query.address) {
      const res = await axios.get("https://api.pyramid.market/api/collection/" + router.query.address);
      setData(res.data.data)
    }     
  }

 

  const collection = async()=>{
    const requestBody = {
      contractAddress: router.query.address,
      pageSize: 50,
      orderBy: "priceLowToHigh",
      query: null,
      onlyOnSale: false,
      price: {
        min: "0",
        max: null
      },
      attributes: []
    };
    
    const res = await  axios.post('https://api.pyramid.market/api/collection/detail/nfts?pageSize=50&pageIndex=0', requestBody)
      .then(response => {
      
        setItems( response.data.data);
      })
      .catch(error => {
        console.error('Hata:', error);
      });
     
  }

  useEffect(()=>{
    collection();
    getProjects();
  },[router.query.address])
  return (
    <>
      <Nav />
      <>
        <div className="min-h-full">
          <div className="flex justify-between w-full">
            <div className="relative w-full lg:flex px-4 py-6 sm:px-6 lg:px-8">
              <img
                src={data.bannerImage}
                className="absolute top-0 left-0  w-full h-full object-cover object-center z-0"
              />

              <div className="relative ml-5 z-10">
                <img
                  className="w-15 h-15 shadow-lg"
                  src={data.image}
                  style={{width:'25%',borderRadius:'23px'}}
                />

                <div className="flex flex-col mt-2">
                  <div className="flex items-center">
                    <span className="mx-2 text-xl whitespace-nowrap text-white">
                    {data.name}
                    </span>
                    <img className="align-middle" src="./icons/blue.svg" />
                  </div>

                  <div>
                    <span className="mx-2 mt-2 text-sm text-[#D3D3D3] whitespace-nowrap">
                      {data.description}
                    </span>
                    <div className="flex justify-between">
                      <span className="flex items-center mx-2 mt-2 text-sm text-[#D3D3D3] whitespace-nowrap">
                        <img src="./icons/birth.svg" className="mr-2" />
                        Volume: {data.collectionVolume}
                        <img src="./icons/mintprice.svg" className="ml-2" />
                      </span>
                      <span className="flex items-center mx-2 mt-2 text-sm text-[#D3D3D3] whitespace-nowrap">
                        Floor Price: {""} {data.floorPrice}
                        <img src="./icons/mintprice.svg" className="ml-2" />
                      </span>
                      <span className="flex items-center mx-2 mt-2 text-sm text-[#D3D3D3] whitespace-nowrap">
                        Total Supply: {""} {data.totalSupply}
                      </span>
                      {/*
                      <div className="flex justify-end text-center space-x-4">
                        <span className="flex flex-col  text-sm text-[#D3D3D3]  whitespace-nowrap">
                          <p className="text-3xl">1500</p>
                          Items
                        </span>

                        <span className="flex flex-col text-sm text-[#D3D3D3] whitespace-nowrap">
                          <p className="text-3xl">1500</p>
                          Items
                        </span>

                        <span className="flex flex-col text-sm text-[#D3D3D3] whitespace-nowrap">
                          <p className="text-3xl">1500</p>
                          Items
                        </span>
                      </div>*/}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>

      <section className="text-gray-600 body-font">
    <div className="flex flex-wrap md:flex-nowrap container mx-auto p-5 flex-col md:flex-row items-center">
          <img src="./icons/ion_filter.svg" />
          <span class="ml-3 text-xs text-center text-darkgray">
          {data.totalSupply} results
          </span>{" "}
          <input
            type="search"
            className="relative ml-10 block w-full flex-auto border rounded-[30px] border-solid border-t-blue border-l-blue border-b-purple border-r-purple bg-black  bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] outline-none transition duration-200 ease-in-out "
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />{" "}
           { /*  <select className="select ml-10 rounded-[30px] text-gray border-t-blue border-l-blue border-b-purple border-r-purple bg-black ">
            <option disabled selected>
              Price low to high
            </option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </select>*/}
                    </div>
      </section>

      <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
  <h1 className="sm:text-4xl text-3xl font-medium title-font mb-5 text-white">
    More From This Collection
  </h1>
  <div className="flex flex-wrap -m-4">
    {/** Koleksiyon öğesi */}
    {items.map((item,index)=>{
      return(
        <div className="p-3 md:w-1/4">
      <div className="h-full border-[1px] border-t-blue border-l-blue border-b-purple border-r-purple rounded-lg overflow-hidden relative">
        <img
          className="lg:h-48 md:h-36 w-full p-2 rounded-lg object-fill"
          src={item.metadata.image}
          alt="blog"
          style={{width:'100%' ,height:'auto'}}
        />
        <img
          src="./img/like.png"
          className="h-10 absolute top-0 right-0 m-4"
          alt="like"
        />
        <div>
          <h1 className="title-font text-lg text-left p-3 font-medium text-transparent bg-clip-text text-white mb-3">
          {item.metadata.name}
            <span className="text-white ml-6"></span>
          </h1>
          <div className="flex justify-center mb-3 text-darkgray text-xs items-center flex-wrap gap-x-4 text-center">
          Created at : {(item.createdAt).substring(0, 10)}   </div>
          <div className="flex justify-start items-center flex-wrap gap-x-4 border-[5.5px]">
            <div className="text-xl text-white flex items-center">
             {item.orders.listing && item.orders.listing.price} {item.orders.listing && 'ETH'}
             {item.orders.listing && <img src="./icons/48.svg" className="h-5 ml-2" alt="ETH" />}      
            </div>
          </div>
          <div className="flex justify-center p-2 border-b-green border-[0.5px] border-x-0 border-t-0 items-center text-[#D3D3D3] flex-wrap gap-x-4">
          {/*   <p className="text-xs flex-1 text-left">
              <span className="text-gray text-lg"> Mint Price: 0.05</span>
            </p>
           <p className="text-xs flex-1 text-left">
              Total Supply: <span className="text-gray">0.05</span>
      </p>*/}
          </div>
          <div className="flex justify-center">
            <a href={"https://pyramid.market/asset/"+ router.query.address+"/"+item.tokenId} target="_blank" className="title-font text-lg text-left p-3 font-medium text-transparent text-white mb-3">
              BUY
            </a>
          </div>
        </div>
      </div>
    </div>
      )
    })}
    {/** Diğer koleksiyon öğeleri buraya eklenir */}
  </div>
</div>

      </section>

      <Footer />
    </>
  );
}

export default Collection;
