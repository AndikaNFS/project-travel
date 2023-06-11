import React from 'react';
import Navbar from '../components/Navbar';

const NotFound = () => {
  return (
    <div className="relative w-full h-screen bg-primary-color-1">
      <Navbar />
      <div className="fixed -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
        <img
          src="/images/img-404.png"
          className="max-w-xs mx-auto md:max-w-sm lg:max-w-lg xl:mb-8"
        />
        <div className="flex flex-col items-center gap-2 xl:gap-4">
          <h1 className="text-xl font-extrabold md:text-2xl lg:text-3xl xl:text-4xl ">
            This page is under construction.
          </h1>
          <p className="text-text-color-1">Please check back later.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
