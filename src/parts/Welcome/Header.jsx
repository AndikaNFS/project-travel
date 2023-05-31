import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="">
      <div className="flex items-center justify-between">
        <div className="">
          <img src="/images/moonton.svg" alt="" />
        </div>
        <div className="flex text-gray-700 text-xl font-semibold">
          <a href="/" className="mr-2 ml-2 hover:text-gray-300">
            Home
          </a>
          <a href="#" className="mr-2 ml-2 hover:text-gray-300">
            About
          </a>
          <a href="#" className="mr-2 ml-2 hover:text-gray-300">
            Blog
          </a>
          <a href="#" className="mr-2 ml-2 hover:text-gray-300">
            Contact Us
          </a>
        </div>
        <div className="flex text-gray-800 font-semibold text-xl">
          <div className="flex items-center mr-2 ml-2">
            <div className="hover:text-white">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                />
              </svg> */}
              <Link to={"/sign-in"}>Login</Link>
            </div>
          </div>
          <div className="flex items-center mr-2 ml-2">
            <div className="hover:text-white">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg> */}
              <Link to={"/sign-up"}>Register</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
