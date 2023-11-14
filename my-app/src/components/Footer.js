import React from "react";

function Footer() {
  return (
    <footer className="text-gray body-font">
      <div className="container px-5 py-8 mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* <!-- Logo and Brand Name --> */}
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray">
          <img className="h-12" src="./img/HowStark.png" />
        </a>

        {/* <!-- Social Media Links --> */}
        <div className="inline-flex space-x-4 text-sm justify-center md:justify-start flex-grow">
          <a className="text-gray inline-flex items-center">
            <img src="./img/x.png" className="mr-2" /> Twitter
          </a>
          <a className="text-gray-400 inline-flex items-center">
            <img src="./img/telegram.png" className="mr-2" /> Telegram
          </a>
          <a className="text-gray-400 inline-flex items-center">
            <img src="./img/instagram.png" className="mr-2" /> Instagram
          </a>
          <a className="text-gray-400 inline-flex items-center">
            <img src="./icons/dc.svg" className="mr-2" /> Discord
          </a>
        </div>

        {/* <!-- Copyright Notice --> */}
        <p className="text-sm text-footergray md:ml-4 md:pl-4 md:py-2 mt-4 md:mt-0">
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
  );
}

export default Footer;
