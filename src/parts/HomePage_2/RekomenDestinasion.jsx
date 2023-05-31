import React from "react";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "India",
    imageUrl: "destination-1.jpeg",
  },
  {
    name: "Magelang",
    imageUrl: "destination-2.jpeg",
  },
  {
    name: "Bali",
    imageUrl: "destination-3.jpeg",
  },
  {
    name: "Nepal",
    imageUrl: "best-destination-1.jpeg",
  },
  {
    name: "Swiss",
    imageUrl: "best-destination-2.jpeg",
  },
  {
    name: "Yogyakarta",
    imageUrl: "best-destination-2.jpeg",
  },
  {
    name: "Yogyakarta",
    imageUrl: "best-destination-2.jpeg",
  },
];
function RekomenDestination() {
  return (
    <div>
      <div className="flex justify-between mt-10">
        <div className="">
          <h1 className="text-xl text-gray-600 font-bold">
            Rekomendasi Paket Wisata
          </h1>
          <p className="text-sm text-gray-500">
            Pesan paket wisata, pasti lebih murah!
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex  p-2 h-7 text-sm items-center    ">
            <span className=" text-blue-500 text-sm font-semibold">
              Lihat Semua
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ul className="flex">
          <li className="p-4 mr-4">Bali</li>
          <li className="p-4 mr-7">Daerah Istimewa Yogyakarta</li>
          <li className="p-4 mr-7">Banten</li>
          <li className="p-4 mr-7">Daerah Khusus Ibukota Jakarta</li>
          <li className="p-4 mr-7">Jawa Tengah</li>
          <li className="p-4 mr-7">Jawa Barat</li>
          <li className="p-4 mr-7">Jawa Timur</li>
        </ul>
      </div>
      <div className="flex  overflow-x-auto overflow-visible ">
        {destinations.map((destination) => (
          <Link to={"/detail"}>
            <div class="relative flex-none mr-4 w-52 ">
              <img
                src={`/images/${destination.imageUrl}`}
                className=" rounded-2xl h-64 w-52 m-2 object-cover"
              />
              <div class="absolute flex items-center top-8 left-0 right-0 px-4 py-2 bg-white h-7 w-32 rounded-e-3xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="h-5 w-5 mr-2"
                >
                  <path d="M144 56c0-4.4 3.6-8 8-8h80c4.4 0 8 3.6 8 8v72H144V56zm176 72H288V56c0-30.9-25.1-56-56-56H152C121.1 0 96 25.1 96 56v72H64c-35.3 0-64 28.7-64 64V416c0 35.3 28.7 64 64 64c0 17.7 14.3 32 32 32s32-14.3 32-32H256c0 17.7 14.3 32 32 32s32-14.3 32-32c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64zM112 224H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 128H272c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                </svg>
                <h3 class=" text-[10px] pt-2 text-black font-bold pb-2">
                  Paket Wisata
                  <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                </h3>
              </div>
              <div className=" bg-white absolute top-7 right-0 p-2 rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="h-5 w-5 font-light  "
                >
                  <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                </svg>
              </div>
              <div className="flex flex-col pl-4">
                <div class="pt-5 flex items-center text-gray-400">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="h-3 w-3 mr-2"
                  >
                    <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                  <span>Trip 3H 2M</span>
                </div>
                <h5 className="text-md font-semibold">
                  [OPEN TRIP] Pulau Bali
                </h5>
                <div className="flex items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="h-3 w-3 mr-2"
                  >
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                  <span className="text-sm text-gray-400">Canggu</span>
                </div>
                <div className="flex items-center ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="h-3 w-3 mr-2"
                  >
                    <path d="M288 80c-65.2 0-118.8 29.6-159.9 67.7C89.6 183.5 63 226 49.4 256c13.6 30 40.2 72.5 78.6 108.3C169.2 402.4 222.8 432 288 432s118.8-29.6 159.9-67.7C486.4 328.5 513 286 526.6 256c-13.6-30-40.2-72.5-78.6-108.3C406.8 109.6 353.2 80 288 80zM95.4 112.6C142.5 68.8 207.2 32 288 32s145.5 36.8 192.6 80.6c46.8 43.5 78.1 95.4 93 131.1c3.3 7.9 3.3 16.7 0 24.6c-14.9 35.7-46.2 87.7-93 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.6-80.6C48.6 356 17.3 304 2.5 268.3c-3.3-7.9-3.3-16.7 0-24.6C17.3 208 48.6 156 95.4 112.6zM288 336c44.2 0 80-35.8 80-80s-35.8-80-80-80c-.7 0-1.3 0-2 0c1.3 5.1 2 10.5 2 16c0 35.3-28.7 64-64 64c-5.5 0-10.9-.7-16-2c0 .7 0 1.3 0 2c0 44.2 35.8 80 80 80zm0-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256z" />
                  </svg>
                  <span className="text-sm text-gray-400">
                    Dilihat 3778 kali
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RekomenDestination;
