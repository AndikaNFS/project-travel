import React, { useState } from 'react';
import CardPrice from './CardPrice';
import Cookies from 'js-cookie';
import { SwiperSlide, Swiper } from 'swiper/react';
import { useNavigate } from 'react-router-dom';

const HeroItem = ({ item }) => {
  const API_IMG = process.env.REACT_APP_API_IMG;
  const IMG1 = item?.photo[0].photos.slice(0, 1)[0].subPhotos;
  const IMG2 = item?.photo[0].photos.slice(1, 2)[0].subPhotos;

  const title = item?.category?.filter(
    (r) => r.name.includes('private-trip') || r.name.includes('open-trip'),
  )[0];

  const backgroundIMG = `${API_IMG}/${IMG1}`;
  const posterIMG = `${API_IMG}/${IMG2}`;

  // console.log(item?.ticket);
  const [ticketItem, setTicketItem] = useState('');

  const onTicketItemChange = (data) => {
    setTicketItem(data);
  };
  console.log(ticketItem === '');
  console.log(ticketItem);

  const navigate = useNavigate();
  const cookiesData = Cookies.get('token');
  const onSubmit = () => {
    if (!cookiesData) {
      navigate('/sign-in');
    } else if (ticketItem === '') {
      alert('Silahkan pilih ticket pembelian');
    } else {
      const data = {
        ticketItem,
      };
      localStorage.setItem('data-pembelian', JSON.stringify(data));
      navigate('/checkout');
    }
  };

  return (
    <div className="relative w-full h-full bg-black">
      <div
        style={{
          backgroundImage: `url(${backgroundIMG})`,
        }}
        className={
          'relative bg-cover bg-no-repeat bg-center h-[50vh] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/60 after:absolute after:bottom-0 after:left-0 after:w-full after:h-24 after:bg-gradient-to-t after:from-black after:to-black/5'
        }
      />
      <div className="relative flex w-full px-6 pb-8 mx-auto mb-auto text-white -m-72 md:-m-64 md:mb-auto md:container md:mx-auto md:px-6 md:pb-10 md:items-center md:gap-4">
        <img
          src={`${posterIMG}`}
          className="rounded-3xl shadow-xl max-w-full  md:w-[300px] lg:w-[400px] 2xl:w-[500px] relative max-md:hidden"
        />
        <div className="flex flex-col gap-3 md:gap-4">
          <h1 className="text-2xl font-bold md:text-5xl">
            {title && (
              <span>
                {title?.name === 'private-trip'
                  ? '[ PRIVATE TRIP ] '
                  : '[ OPEN TRIP ] '}
              </span>
            )}
            {item?.name}
          </h1>
          <h2 className="text-sm ">{item?.description}</h2>
          <h3 className="italic text-white/60 md:text-xl">Pilihan Ticket</h3>
          <div className="ticket-list">
            <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
              {item?.ticket.map((result) => (
                <SwiperSlide key={result._id}>
                  <CardPrice
                    result={result}
                    onChange={() => onTicketItemChange(result)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* <div className="flex flex-row justify-between gap-3">
            {item?.ticket.map((result) => (
              <CardPrice
                key={result._id}
                result={result}
                onChange={() => onTicketItemChange(result)}
              />
            ))}
          </div> */}
          <button onClick={onSubmit}>Pesan</button>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
