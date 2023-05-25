import React from "react";
import Sidebar from "../parts/HomePage/Sidebar";
import Center from "../parts/HomePage/Center";
import Right from "../parts/HomePage/Right";
// import sideRight from "../parts/HomePage/sideRight";

const HomePage = () => {
  return (
    <div className="container mx-auto pt-4">
      <div className="flex">
        <div className="w-64 text-white h-screen sticky top-0">
          <Sidebar />
        </div>
        <div className="flex-grow w-96 grid">
          <div className=" bg-green-100 w-full grid rounded-2xl">
            <Center />
          </div>
        </div>
        <div className="flex-grow grid gap-4">
          <div className=" ">
            <Right />
          </div>
        </div>
      </div>
    </div>

    // <div className="grid grid-flow-row-dense grid-cols-3 gap-2">
    //   <div className="col-span-1/2 bg-gray-100 p-4 flex justify-center">
    //     <Sidebar />
    //   </div>

    //   <div className="bg-gray-200 p-4 flex justify-center">Column 2</div>
    //   <div className="bg-gray-300 p-4 flex justify-center">Column 3</div>
    // </div>
  );
};

export default HomePage;
