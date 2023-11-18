import React from "react";
import { connect, disconnect } from "get-starknet"
import { useState } from "react";
import Link from "next/link";
function Nav() {

  const [buttonStatus, setStatus] = useState(true)

  async function handleDisconnect() {
    await disconnect()
    setStatus(true)
}

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center  mb-4 md:mb-0">
           <Link href="/"> <img className="h-12" src="./img/HowStark.png" /></Link>
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4  	flex flex-wrap items-center text-base justify-center">
           { /* <a
              className="text-sm font-normal mr-5  bg-gradient-to-r from-purple via-green to-blue bg-clip-text"
              href="javascript:void(0)"
            >
              Home
           </a> */ }
      
          </nav>
          <div className="m-5 flex items-center">
         {/*   <input
              type="search"
              className="relative block flex-auto border rounded-[30px] border-solid border-t-blue border-l-blue border-b-purple border-r-purple bg-black px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3]"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
          <img src="./icons/ion_search.svg" />*/}
          </div>

      { /*   <button className="inline-flex md:hidden lg:flex  items-center rounded-[30px]  px-8 py-2 focus:outline-none  text-base mt-4 md:mt-0 bg-gradient-to-r from-purple to-blue   hover:to-blue hover:from-darkpurple text-darkpurple hover:text-gray mr-2">
            Searchs
  </button>*/}
           {/* buttonStatus == true ?
           <button onClick={
            async () => {
                try {
                    const wallet = await connect({
                        include: ["braavos","argentX"],/// ,"argentX"
                        
                    });
                    if (wallet) {
                        await wallet.enable({ showModal: true });
                        setStatus(false)
                    }
                } catch (err) {
                    console.error(err);
                }
            }
         } className="inline-flex px-8 py-2 text-center text-xs  items-center border border-1 rounded-[30px]   focus:outline-none   border-t-blue border-l-blue border-b-purple border-r-purple bg-black text-white font-bold mt-4 md:mt-0 hover:to-blue hover:from-darkpurple hover:text-gray  ">
           Connect Wallet
           <img
             src="./img/Money Wallet.png"
             className="h-5 object-center ml-2"
           />
         </button>
         :<button 
         className="inline-flex px-8 py-2 text-center text-xs  items-center border border-1 rounded-[30px]   focus:outline-none   border-t-blue border-l-blue border-b-purple border-r-purple bg-black text-white font-bold mt-4 md:mt-0 hover:to-blue hover:from-darkpurple hover:text-gray  " 
         onClick={() => handleDisconnect()}>
          Disconnect
         </button>*/}
         
        </div>
      </header>
    </div>
  );
}

export default Nav;
