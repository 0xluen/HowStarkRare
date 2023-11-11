import React from "react";

function Footer() {
  return (
    <div>
      <footer className="text-gray body-font">
        <div className="container px-5 py-8 mx-auto  flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray">
            <img className="h-12" src="./img/HowStark.png" />
          </a>

          <span class="inline-flex space-x-4 text-sm sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start lg:justify-between w-full">
            <a class="text-gray inline-flex items-center">
              <img src="./img/x.png" class="mr-2" /> Twitter
            </a>
            <a class="ml-3 text-gray-400 inline-flex items-center">
              <img src="./img/telegram.png" class="mr-2" /> Telegram
            </a>
            <a class="ml-3 text-gray-400 inline-flex items-center">
              <img src="./img/instagram.png" class="mr-2" /> Instagram
            </a>
            <a class="ml-3 text-gray-400 inline-flex items-center">
              <img src="./icons/dc.svg" class="mr-2" /> Discord
            </a>
          </span>

          <p className="text-sm text-footergray sm:ml-4 sm:pl-4   sm:py-2 sm:mt-0 mt-4">
            2023 HowStarkRare All rights reserved
            <a
              href="#"
              className="text-footergray ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @ozgeboztass
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
