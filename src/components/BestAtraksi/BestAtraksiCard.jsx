import React from 'react';
import { Link } from 'react-router-dom';
import { NumericFormat } from 'react-number-format';

const BestAtraksiCard = ({ item }) => {
  const API_IMG = process.env.REACT_APP_API_IMG;
  const IMG1 = item?.photo[0].photos.slice(0, 1)[0].subPhotos;
  const backgroundIMG = `${API_IMG}/${IMG1}`;

  const title = item?.category.filter(
    (r) => r.name.includes('private-trip') || r.name.includes('open-trip'),
  )[0];

  const startFrom = item?.ticket?.sort((a, b) => a.price - b.price)[0]?.price;

  return (
    <Link to={`/product/${item._id}`}>
      <div className="flex flex-col bg-secondary-color-1 rounded-2xl">
        <div
          style={{ backgroundImage: `url(${backgroundIMG})` }}
          className="relative w-full bg-center bg-no-repeat bg-cover pt-52 md:pt-64 rounded-t-2xl before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-secondary-color-2/20 before:rounded-t-2xl "
        ></div>
        <div className="flex flex-col p-2 md:p-3 lg:p-3 xl:p-4 font-Montserrat">
          <p className="h-12 text-xs font-bold md:text-sm md:h-12 lg:h-12 xl:h-12 text-text-color-1">
            {item?.name}
          </p>
          <p className="text-xs font-semibold md:text-sm text-text-color-3">
            Location : Default
          </p>
          <div className="flex flex-col items-end pt-2 md:pt-3 lg:pt-3 xl:pt-4">
            <p className="text-xs md:text-sm text-text-color-3">Mulai dari</p>
            <NumericFormat
              value={startFrom}
              prefix="Rp. "
              thousandSeparator="."
              decimalSeparator=","
              displayType="text"
              className="text-xs font-semibold sm:text-base md:text-base lg:text-lg xl:text-xl text-text-color-1 "
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BestAtraksiCard;
