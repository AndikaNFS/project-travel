import React from "react";

function Content() {
  return (
    <div className="flex flex-col text-gray-200 mt-32">
      <h1 className="w-2/4 text-6xl font-bold">
        It’s A Big World Out There,Go Explore
      </h1>
      <p className="w-96 text-xl mt-4 font-semibold">
        The most picturesque and jaw-dropping landscape east coast state of
        India
      </p>
      <div className="flex">
        <div className="w-96 flex justify-start mt-4">
          <button className="bg-red-500 p-2 rounded-xl w-64">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default Content;
