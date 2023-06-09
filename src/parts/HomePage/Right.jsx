import React from "react";
import { UserCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import Calendar from "./Right/Calender";
import MySchedule from "./Right/MySchedule";

function Right() {
  return (
    <>
      <div className=" ">
        <div className="flex">
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="ml-3">
            <h2 className="text-sm">Dityo Hendyawan</h2>
            <span className="text-xs text-gray-400">Traveler Enthusiast</span>
          </div>
          <div className="flex items-center pl-6 ">
            <ChevronDownIcon className="h-4 w-4" />
          </div>
        </div>
        <div className="">
          <div className="flex justify-center">
            <Calendar />
          </div>
        </div>
        <div className="mt-4">
          <MySchedule />
        </div>
      </div>
    </>
  );
}

export default Right;
