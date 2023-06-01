import React from 'react';
import Sidebar from '../parts/HomePage/Sidebar';
import Center from '../parts/HomePage/Center';
import Right from '../parts/HomePage/Right';
// import sideRight from "../parts/HomePage/sideRight";
const Dashboard = () => {
  return (
    <div className="container pt-4 mx-auto">
      <div className="flex">
        <div className="sticky top-0 w-64 h-screen text-white">
          <Sidebar />
        </div>
        <div className="grid flex-grow w-96">
          <div className="grid w-full bg-green-100 rounded-2xl">
            <Center />
          </div>
        </div>
        <div className="sticky top-0 grid h-screen p-3 w-96">
          <div className="overflow-auto">
            <Right />
          </div>
        </div>
      </div>
    </div>

    // <div className="grid grid-flow-row-dense grid-cols-3 gap-2">
    //   <div className="flex justify-center p-4 bg-gray-100 col-span-1/2">
    //     <Sidebar />
    //   </div>

    //   <div className="flex justify-center p-4 bg-gray-200">Column 2</div>
    //   <div className="flex justify-center p-4 bg-gray-300">Column 3</div>
    // </div>
  );
};

export default Dashboard;
