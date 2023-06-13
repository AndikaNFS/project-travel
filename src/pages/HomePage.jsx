import React from 'react';
import Navbar from '../components/Navbar';
import LandingPage from '../components/LandingPage';
import ProductDetail from '../components/ProductDetail';

function HomePage() {
  return (
    <div className="bg-primary-color-1">
      <Navbar />
      <LandingPage />

      <ProductDetail bestWisata />
      <ProductDetail bestAttraction />
      <div className="container py-20 mx-auto text-center">Footer</div>
    </div>
  );
}

export default HomePage;
