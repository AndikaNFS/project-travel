import React from "react";
import Sidebar from "../parts/Sidebar";

const HomePage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex">
        <div className="w-64 bg-gray-800 text-white">
          <Sidebar />
        </div>
        <div className="flex-grow w-96 grid">
          <div className=" bg-gray-400 w-full grid justify-center">
            Column1{" "}
          </div>
        </div>
        <div className="flex-grow grid gap-4">
          <div className="bg-gray-300 grid justify-center ">Column 2</div>
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
