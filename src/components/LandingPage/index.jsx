import React, { useState, useCallback, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import { getLandingPage } from '../../services/user';
import CardSlideItem from './CardSlideItem';

const LandingPage = () => {
  const [bannerData, setBannerData] = useState([]);

  const getBannerList = useCallback(async () => {
    const data = await getLandingPage();
    setBannerData(data);
  }, [getLandingPage]);

  const sliceData = bannerData.slice(0, 3);

  SwiperCore.use([Autoplay]);
  useEffect(() => {
    getBannerList();
  }, []);

  console.log(sliceData);
  return (
    <div className="relative w-full h-full">
      <Swiper
        modules={[Autoplay]}
        grabCursor={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
      >
        {sliceData.map((item, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <CardSlideItem
                item={item}
                className={`${isActive ? 'active' : ''}`}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LandingPage;
