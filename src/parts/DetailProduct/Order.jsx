import React from "react";

function Order() {
  return (
    <div className="fixed container mx-auto bg-white w-screen bottom-0 flex justify-center">
      <div className="w-full">
        <div className="flex justify-between">
          <h4 className="text-xl mb-3">Harga per tiket</h4>
          <h4 className="text-xl text-blue-500 mb-3 font-semibold">
            Rp. 2.500.000
          </h4>
        </div>
        <div className="">
          <button className="text-gray-100 text-lg font-bold w-full h-10 bg-blue-500 rounded-full">
            Pesan
          </button>
        </div>
      </div>
    </div>
  );
}

export default Order;
