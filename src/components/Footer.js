import React from "react";

function Footer() {
  return (
    <footer className="text-gray body-font">
      <div className="container px-5 py-8 mx-auto flex flex-col items-center justify-between">
        {/* <!-- Logo and Brand Name --> */}
        <a className="flex title-font font-medium items-center justify-center text-gray ">
          <img className="h-12" src="./img/HowStark.png" alt="HowStark Logo" />
        </a>

        {/* <!-- Social Media Links --> */}
        <div className="flex space-x-10 text-sm my-8 justify-between">
          <a className="text-gray flex items-center">
            <img src="./img/x.png" className="mr-2" alt="Twitter" />
          </a>
          
        {/*  <a className="text-gray-400 flex items-center">
            <img src="./img/telegram.png" className="mr-2" alt="Telegram" />
        </a>*/}
       
          <a className="text-gray-400 flex items-center">
            <img src="./icons/dc.svg" className="mr-2" alt="Discord" />
          </a>
        </div>

        {/* <!-- Copyright Notice --> */}
        <p className="text-sm text-footergray">
          © 2023 HowStarkRare All rights reserved
          <a
            href="#"
            className="text-footergray ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            StarknetBunny
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
