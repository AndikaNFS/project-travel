import React from "react";
import {
  BellIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="container mx-auto">
      <div className="flex justify-between p-4">
        <div className="flex items-center">
          <img src="/images/moonton.svg" alt="" />
        </div>
        <div className="flex grid-cols-2 items-center ">
          <div className="">
            <form>
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block w-96 h-10 p-4 pl-10 mr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Destination, Hotel..."
                  required
                />
              </div>
            </form>
          </div>
          {/* <div className="flex justify-end bg-white rounded-full p-2 ml-3 w-10">
          <BellIcon className="h-6 w-6" />
        </div> */}
          <div className="flex">
            <ul className="flex ml-3 mr-3 text-gray-500">
              <li className="mr-10">Cari Kegiatan</li>
              <li className="mr-10">Pesanan Saya</li>
              <li className="mr-10">Article</li>
              <li>Masuk</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
