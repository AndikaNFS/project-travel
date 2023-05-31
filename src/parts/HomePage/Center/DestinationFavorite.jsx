import React from "react";

const destfavs = [
  {
    image: "destination-1.jpeg",
    name: "Thaj Mahal",
    location: "India",
    rating: "4.0",
  },
  {
    image: "destination-2.jpeg",
    name: "Bukit Khayangan Magelang",
    location: "Magelang",
    rating: "4.3",
  },
  {
    image: "destination-3.jpeg",
    name: "Candi Bali",
    location: "Bali",
    rating: "4.5",
  },
];

function DestinationFavorite() {
  return (
    <div className="flex">
      {destfavs.map((destfav) => (
        <div
          key={destfav.name}
          class="relative w-auto m-2 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              class="rounded-lg z-0 h-64"
              src={`/images/${destfav.image}`}
              alt=""
            />
          </a>
          <div className="flex z-10">
            <span class="absolute text-sm text-gray-400 pb-2 bottom-6 left-1/3 -translate-x-1/2">
              {destfav.name}
            </span>
            <span class="absolute text-m text-gray-400 bottom-2 left-20 -translate-x-1/2">
              {destfav.location}
            </span>

            <span class="absolute text-lg text-green-300 bottom-4 right-5">
              {destfav.rating}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DestinationFavorite;
