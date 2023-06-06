import React from 'react';
import { Link } from 'react-router-dom';

const CardSlideItem = ({ item }) => {
  console.log(item);
  console.log('123123123');

  const backgroundPhoto = item.photo[0].photos.slice(0, 1)[0].subPhotos;
  const API_IMG = process.env.REACT_APP_API_IMG;
  const bannerImg = `${API_IMG}/${backgroundPhoto}`;

  const posterPhoto = item.photo[0].photos.slice(1, 2)[0].subPhotos;
  const posterImg = `${API_IMG}/${posterPhoto}`;
  console.log(item);
  return (
    <div
      className="relative w-full px-0 pb-4 bg-center bg-no-repeat bg-cover pt-28 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-text-color-1/60 after:absolute after:bottom-0 after:left-0 after:w-full after:h-24 after:bg-gradient-to-t after:from-text-color-1 after:to-text-color-1/5 md:py-44 "
      style={{ backgroundImage: `url(${bannerImg})` }}
    >
      <div className="container relative flex flex-row items-center justify-center w-full px-5 mx-auto md:px-6">
        <div className="relative flex flex-col w-full py-0 text-white h-96 md:w-3/5 gap-9">
          <h1 className="text-4xl font-bold sm:text-6xl md:text-7xl">
            {item.name}
          </h1>
          <h2 className="text-sm font-bold">
            {item.description.length > 250
              ? `${item.description.substring(0, 250)}....`
              : item.description}
          </h2>
          <div className="flex flex-row gap-5 font-semibold lg:text-2xl">
            <Link
              to={`/product/${item._id}`}
              className="px-4 py-1 shadow-xl bg-secondary-color-2 md:px-7 md:py-2 rounded-3xl"
            >
              Book Now
            </Link>
            {/* <button
              className="px-4 py-1 border-2 md:px-7 md:py-2 rounded-3xl"
              onClick={() => {
                setModal(true);
                setTrailerId(item.id);
              }}
            >
              Watch trailer
            </button> */}
          </div>
        </div>
        <div className="relative flex items-center justify-start flex-1 max-md:hidden">
          <img
            src={posterImg}
            className="w-[400px] rounded-3xl shadow-xl max-w-full md:h-[500px] lg:h-[600px]"
          />
        </div>
      </div>
    </div>
  );
};

export default CardSlideItem;
