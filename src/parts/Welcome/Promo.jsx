import React from "react";

function Promo() {
  return (
    <div className="">
      <div className="absolute text-xs bg-gray-300 bg-opacity-70 bottom-0 right-1 z-0 -translate-x-1/2 h-40 w-56 rounded-t-xl">
        <div className="p-4 z-10">
          <div className="text-xl font-bold text-gray-800 p-3 pb-0">
            Our Experts are here to help you
          </div>
          <p className="mt-3 font-semibold text-sm">
            A reliable and responsive customer service
          </p>
        </div>
      </div>
      <div className="absolute text-xs bg-gray-300 bg-opacity-70 bottom-0 right-64 z-0 -translate-x-1/2 h-40 w-56 rounded-t-xl">
        <div className="p-4 z-10">
          <div className="text-xl font-bold text-gray-800 p-3 pb-0">
            Best Discounts
          </div>
          <p className="mt-3 font-semibold text-sm">
            Exclusive prices and exceptional discounts of up to 70%
          </p>
        </div>
      </div>
      <div className="absolute text-xs bg-gray-300 bg-opacity-70 bottom-0 right-1/3 z-0 -translate-x-1/2 h-40 w-56 rounded-t-xl">
        <div className="p-4 z-10">
          <div className="text-xl font-bold text-gray-800 p-3 pb-0">
            Inspirational Offer
          </div>
          <p className="mt-3 font-semibold text-sm">Handpicked travel offers</p>
        </div>
      </div>
    </div>
  );
}

export default Promo;
