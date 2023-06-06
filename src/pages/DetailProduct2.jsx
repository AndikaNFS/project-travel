import React from "react";
import Header from "../parts/HomePage_2/Header";
import Preview from "../parts/DetailProduct/Preview";
import Order from "../parts/DetailProduct/Order";
import Tiket from "../parts/DetailProduct/Tiket";

function DetailProduct() {
  return (
    // <main>
    <div className="h-screen overflow-x-hidden">
      <div className="bg-gray-100 w-screen">
        <Header />
      </div>
      <div className="container mx-auto bottom-20 ">
        <Preview />
        <Tiket />
        <div className="h-20"></div>
        <Order />
      </div>
      {/* <div className="bg-white"></div> */}
    </div>
    // </main>
  );
}

export default DetailProduct;
