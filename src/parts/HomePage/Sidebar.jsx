import React from "react";
import {
  TicketIcon,
  HomeIcon,
  HeartIcon,
  CreditCardIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

const menus = [
  {
    name: "Dashboard",
    icon: HomeIcon,
  },
  {
    name: "My Tickets",
    icon: TicketIcon,
  },
  {
    name: "Favorite",
    icon: HeartIcon,
  },
  {
    name: "Transaction",
    icon: CreditCardIcon,
  },
  {
    name: "Setting",
    icon: Cog6ToothIcon,
  },
];

function Sidebar() {
  return (
    <>
      <div className=" text-gray-500 h-screen w-full flex flex-col p-8">
        <img src="/images/moonton.svg" alt="logo" />
        <div className="flex-grow pt-8 ">
          {menus.map((menu) => (
            <div
              key={menu.name}
              className="p-6 flex hover:bg-green-400 hover:rounded-xl hover:text-white"
            >
              <div className="grid grid-cols-2 ">
                <menu.icon className="h-6 w-6 " />
              </div>
              <div className="pl-3">{menu.name}</div>
            </div>
          ))}
        </div>
        <div className="flex-grow">
          <div className="">Log Out</div>
        </div>
      </div>
    </>
    // <div className="bg-gray-300 text-white h-screen w-64 flex flex-col">
    // </div>
  );
}

export default Sidebar;
