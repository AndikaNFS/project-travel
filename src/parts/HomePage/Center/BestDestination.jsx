import React from "react";
import {
  MapPinIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/outline";

// import fetch from "../../../helpers/fetch";
// import useAsync from "../../../helpers/hooks/useAsync";

const bestDestinations = [
  {
    name: "Guttannen",
    image: "best-destination-1.jpeg",
    location: "Switzerland",
    rating: "4.8",
    price: "$100",
  },
  {
    name: "Moraine Lake",
    image: "best-destination-2.jpeg",
    location: "Canada",
    rating: "4.9",
    price: "$150",
  },
  {
    name: "Ice Lake",
    image: "best-destination-3.jpeg",
    location: "Nepal",
    rating: "4.9",
    price: "$200",
  },
];

function BestDestination() {
  // const { data, status, error, run, isLoading } = useAsync({});

  // useEffect(() => {
  //   run(fetch({ url: "/api/categories/?page=1&limit=4" }));
  // }, [run]);
  // console.log(data, status, error);

  return (
    <div className="p-5">
      <div className="flex justify-between">
        <div className="">
          <h1 className="text-xl text-gray-600 font-bold">Best Destination</h1>
          <p className="text-sm text-gray-500">3 Destination found</p>
        </div>
        <div className="flex items-center">
          <div className="flex rounded-lg p-2 h-7 text-sm items-center ring-2 ring-slate-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
              />
            </svg>

            <span className=" text-gray-500 text-sm">Filters</span>
          </div>
        </div>
      </div>
      <ul class="max-w-md mt-3">
        {/* {data.data.map((item, index) => {
          <li key={item.id} class="pb-3 sm:pb-4">
          <div class="flex items-center justify-between space-x-4">
            <div class="flex-shrink-0">
              <img
                class="w-20 h-20 rounded-xl"
                src={`/images/${item.image}`}
                alt="Neil image"
              />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-xl font-medium text-gray-900 truncate dark:text-black">
                {bestDesti.name}
              </p>
              <p class="text-sm text-gray-500 truncate dark:text-gray-400 flex">
                <MapPinIcon className="h-5 w-5" />
                {bestDesti.location}
              </p>
            </div>
            <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
              <div className="flex justify-end">{bestDesti.price}/Day</div>
            </div>
          </div>
        </li>
        })} */}

        {bestDestinations.map((bestDesti) => (
          <li key={bestDesti.name} class="pb-3 sm:pb-4">
            <div class="flex items-center justify-between space-x-4">
              <div class="flex-shrink-0">
                <img
                  class="w-20 h-20 rounded-xl"
                  src={`/images/${bestDesti.image}`}
                  alt="Neil image"
                />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-xl font-medium text-gray-900 truncate dark:text-black">
                  {bestDesti.name}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400 flex">
                  <MapPinIcon className="h-5 w-5" />
                  {bestDesti.location}
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-black">
                <div className="flex justify-end">{bestDesti.price}/Day</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BestDestination;
