import React from "react";
import Navbar from "../components/Navbar";
import FormOrder from "../parts/Checkout/FormOrder";
import DetailCheckout from "../parts/Checkout/DetailCheckout";
import Footer from "../parts/Footer";

function CheckoutPage() {
  return (
    <div className="container mx-auto">
      {/* <Header /> */}
      <Navbar />
      <div className=" mt-40">
        <div className="flex items-center mb-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            className="h-6 w-6"
          >
            <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
          <span className="text-xl font-sans font-semibold">
            Checkout Pesanan Paket Wisata
          </span>
        </div>
        <div className="flex">
          <div className="w-full mb-12">
            <FormOrder />{" "}
          </div>
          <div className="w-full">
            <DetailCheckout />
          </div>
        </div>
        <div className="mt-24">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
