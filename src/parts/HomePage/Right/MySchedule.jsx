import React from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

const schedules = [
  {
    name: "Guttannen",
    image: "best-destination-1.jpeg",
    schedule: "01-04 July 2023",
  },
  {
    name: "Moraine Lake",
    image: "best-destination-2.jpeg",
    schedule: "15-18 July 2023",
  },
  {
    name: "Ice Lake",
    image: "best-destination-3.jpeg",
    schedule: "07-12 August 2023",
  },
  {
    name: "Canggu",
    image: "destination-3.jpeg",
    schedule: "21-25 August 2023",
  },
];

function MySchedule() {
  return (
    <div>
      <h1 className="text-lg font-sans">My Schedule</h1>
      {schedules.map((schedule) => (
        <div className="flex items-center mt-3 mb-3 rounded-xl ring-2 ring-slate-300 m-2">
          <div key={schedule.name} className="flex items-center rounded-xl ">
            <img
              src={`/images/${schedule.image}`}
              alt={schedule.name}
              className="p-2 h-20 w-20 rounded-3xl"
            />
          </div>
          <div className="">
            <div className="pl-5">
              <h1 className="text-base font-semibold">{schedule.name}</h1>
            </div>
            <div className="ml-4 flex items-center justify-start pl-1">
              <CalendarDaysIcon className="h-4 w-4 text-gray-500 " />

              <p className="text-sm text-gray-500 ml-1">{schedule.schedule}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MySchedule;
