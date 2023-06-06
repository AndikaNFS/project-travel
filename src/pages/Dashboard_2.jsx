import React from "react";

// import Header from '../parts/HomePage_2/Header';
import Category from "../parts/HomePage_2/Category";
import BestDestination from "../parts/HomePage_2/BestDestination";
import RekomenDestination from "../parts/HomePage_2/RekomenDestinasion";
import Navbar from "../components/Navbar";
import Footer from "../parts/Footer";

function Dashboard2() {
  return (
    <div className="container mx-auto">
      {/* <Header /> */}
      <Navbar />
      <div className=" mt-40 mb-20">
        <Category />
        <BestDestination />
        <RekomenDestination />
      </div>
      <Footer />
    </div>
  );
}

export default Dashboard2;
