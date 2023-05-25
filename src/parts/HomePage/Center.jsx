import React from "react";
import {
  BellIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/react/24/outline";
import DestinationFavorite from "./Center/DestinationFavorite";
import BestDestination from "./Center/BestDestination";

function Center() {
  return (
    <div className="p-5">
      <header className="flex justify-between">
        <div className="grid grid-cols-1">
          <h1 className="text-2xl font-semibold">Hello, Dityo!</h1>
          <p>Welcome back and explore the world</p>
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
                  class="block w-64 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500  dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Mockups, Logos..."
                  required
                />
              </div>
            </form>
          </div>
          <div className="flex justify-end bg-white rounded-full p-2 ml-3 w-10">
            <BellIcon className="h-6 w-6" />
          </div>
        </div>
      </header>
      <DestinationFavorite />
      <div className="bg-white rounded-xl mt-3">
        <BestDestination />
      </div>
      <div className="">
        <div class="relative w-auto m-2 ">
          <a href="#" className="flex">
            <img
              class="rounded-s-lg z-0 w-full h-40"
              src="/images/hiking-2.jpeg"
              alt=""
            />
            <img
              class="z-0 rounded-e-lg w-full h-40"
              src="/images/hiking.jpeg"
              alt=""
            />
          </a>
          <div className="flex z-10">
            <h3 class="absolute text-xl text-gray-700 top-5 left-5">
              Promo 50% OFF
            </h3>
            <span class="absolute text-lg text-white bottom-12 right-20">
              Let's Explore the World!
            </span>
            <span class="absolute text-xs text-gray-300 bottom-8 right-16 -translate-x-1/2">
              Get special offers & news
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;
