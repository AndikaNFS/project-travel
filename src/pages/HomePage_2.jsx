import React from "react";

import Header from "../parts/HomePage_2/Header";
import Category from "../parts/HomePage_2/Category";
import BestDestination from "../parts/HomePage_2/BestDestination";
import RekomenDestination from "../parts/HomePage_2/RekomenDestinasion";

function HomePage_2() {
  return (
    <div className="container mx-auto">
      <Header />
      <Category />
      <BestDestination />
      <RekomenDestination />
    </div>
  );
}

export default HomePage_2;
