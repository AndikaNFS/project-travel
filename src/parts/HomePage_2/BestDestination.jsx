import React from "react";

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
function BestDestination() {
  return (
    <div>
      <div className="flex justify-between mt-10">
        <div className="">
          <h1 className="text-xl text-gray-600 font-bold">
            Jelajahi Destinasi
          </h1>
          <p className="text-sm text-gray-500">
            Pilih kota yang ingin kamu kunjungi
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
      <div className="flex overflow-x-auto overflow-visible ">
        {destinations.map((destination) => (
          <div class="relative flex-none mr-4 ">
            <img
              src={`/images/${destination.imageUrl}`}
              className=" rounded-2xl h-64 w-52 m-2 object-cover"
            />
            <div class="absolute bottom-0 left-0 right-0 px-4 py-2 ">
              <h3 class="text-xl text-white font-bold pb-2">
                {destination.name}
              </h3>
              {/* <p class="mt-2 text-sm text-gray-300">
              Some description text. Some dummy text here. Welcome to
              KindaCode.com
            </p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BestDestination;
