import React from 'react';
import { Link } from 'react-router-dom';
import { SwiperSlide, Swiper } from 'swiper/react';
import BestWisataCard from './BestWisataCard';

const BestWisata = ({ item }) => {
  return (
    <div className="flex flex-col px-6 md:container md:mx-auto md:px-6 lg:px-6">
      <div className="flex flex-row items-center justify-between w-full py-8">
        <p className="text-sm font-bold md:text-lg lg:text-xl xl:text-2xl text-text-color-1">
          Recommended Tour Packages
          <span className="block text-xs font-semibold md:text-sm lg:text-base xl:text-lg text-text-color-3 ">
            New experiences for you!
          </span>
        </p>
        <Link
          to="/tour-package"
          className="text-xs font-bold text-text-color-1 md:text-sm lg:text-base xl:text-lg"
        >
          Show All
        </Link>
      </div>
      <div className="best-card-list">
        <Swiper
          grabCursor={true}
          spaceBetween={15}
          slidesPerView={'auto'}
          breakpoints={{
            768: {
              spaceBetween: 20,
            },
            1024: {
              spaceBetween: 30,
            },
            1280: {
              spaceBetween: 35,
            },
            1536: {
              spaceBetween: 40,
            },
          }}
        >
          {item.map((result, i) => (
            <SwiperSlide key={i}>
              <BestWisataCard item={result} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BestWisata;
