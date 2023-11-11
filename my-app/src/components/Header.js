import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div>
      <>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/Loopple/loopple-public-assets@main/motion-tailwind/motion-tailwind.css"
        />
        <div className="container flex flex-col mx-auto bg-primary">
          <div className="relative flex flex-wrap items-center justify-between w-full  group py-7 shrink-0">
            <div>
              <img className="h-8" src="./img/HowStark.png" />
            </div>
            <div className="items-center justify-between hidden gap-12 text-black md:flex">
              <a
                className="text-sm font-normal  hover:text-dark-grey-900 text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue"
                href="javascript:void(0)"
              >
                Home
              </a>
              <a
                className="text-sm font-normal text-white hover:text-blue"
                href="javascript:void(0)"
              >
                Collection
              </a>
            </div>

            <form>
              <div className="group text-sm bg-gradient border-1 px-10 mx-4 py-2 ">
                <input
                  type="text "
                  className="opacity-0 from-purple text-sm  to-blue rounded-[30px] shadow border border-t-blue border-l-blue border-b-purple border-r-purple border-opacity-50 group-hover:opacity-100 bg-transparent border-1 border-blue focus:outline-none w-50 lg:w-60 transition duration-500"
                />
                <button className="-ml-4 group-hover:ml-0 duration-500 w-6 h-6">
                  <i className="fas fa-search text-purple group-hover:text-blue transition duration-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="0.75em"
                      viewBox="0 0 512 512"
                      fill="#5FC4E0"
                    >
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                  </i>
                </button>
              </div>
            </form>

            <div className="items-center gap-8 sm:hidden md:flex">
              <button className="flex items-center rounded-[30px]  px-8 py-2 text-base  sm:hidden   bg-gradient-to-r from-purple to-blue   hover:to-blue hover:from-darkpurple text-darkpurple hover:text-gray transition duration-300">
                Search
              </button>

              <button className="flex items-center px-20 py-2  text-center text-xs  md:text-sm border-1 border sm:hidden  rounded-[30px] m-auto border-t-blue border-l-blue border-b-purple border-r-purple bg-black  font-bold md:px-1 md:py-2  bg-primary hover:to-blue hover:from-darkpurple hover:text-gray transition duration-300">
                Connect Wallet
              </button>
            </div>
            <button
              onclick="(() => { this.closest('.group').classList.toggle('open')})()"
              className="flex md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="white"
              >
                <path
                  d="M3 8H21C21.2652 8 21.5196 7.89464 21.7071 7.70711C21.8946 7.51957 22 7.26522 22 7C22 6.73478 21.8946 6.48043 21.7071 6.29289C21.5196 6.10536 21.2652 6 21 6H3C2.73478 6 2.48043 6.10536 2.29289 6.29289C2.10536 6.48043 2 6.73478 2 7C2 7.26522 2.10536 7.51957 2.29289 7.70711C2.48043 7.89464 2.73478 8 3 8ZM21 16H3C2.73478 16 2.48043 16.1054 2.29289 16.2929C2.10536 16.4804 2 16.7348 2 17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17C22 16.7348 21.8946 16.4804 21.7071 16.2929C21.5196 16.1054 21.2652 16 21 16ZM21 11H3C2.73478 11 2.48043 11.1054 2.29289 11.2929C2.10536 11.4804 2 11.7348 2 12C2 12.2652 2.10536 12.5196 2.29289 12.7071C2.48043 12.8946 2.73478 13 3 13H21C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11Z"
                  fill="black"
                />
              </svg>
            </button>
            <div className="absolute flex md:hidden transition-all duration-300 ease-in-out flex-col items-start shadow-main justify-center w-full gap-3 overflow-hidden bg-white max-h-0 group-[.open]:py-4 px-4 rounded-2xl group-[.open]:max-h-64 top-full">
              <a
                className="text-sm font-normal  hover:text-dark-grey-900 text-transparent bg-clip-text bg-gradient-to-r from-purple to-blue"
                href="javascript:void(0)"
              >
                Home
              </a>
              <a
                className="text-sm font-normal text-white hover:text-blue"
                href="javascript:void(0)"
              >
                Collection
              </a>

              <button className="flex items-center text-sm font-normal text-black">
                Log In
              </button>
              <button className="flex items-center px-4 py-2 text-sm font-bold rounded-xl bg-purple-blue-100 text-purple-blue-600 hover:bg-purple-blue-600 hover:text-white transition duration-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Header;
