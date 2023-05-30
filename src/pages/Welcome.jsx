import React from "react";
import Header from "../parts/Welcome/Header";
import Content from "../parts/Welcome/Content";
import Promo from "../parts/Welcome/Promo";
import backgroundImage from "./../assets/images/welcome-3.jpg";

function Welcome() {
  return (
    <div
      className="overflow-hidden fixed"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100vh",
      }}
    >
      <div className="container mx-auto mt-2">
        <Header />
        <div className="w-full h-96 flex items-center justify-start  mt-4 ">
          <Content />
        </div>
        <Promo />
      </div>
    </div>
  );
}

export default Welcome;
