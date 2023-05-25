import React, { useState } from "react";
import Calendar from "react-calendar";

import "../../../assets/css/calendar.css";
import "react-calendar/dist/Calendar.css";

function Calender() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="mt-4 w-80">
      <div className="calendar-container">
        <div className="">
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>
      <div className="text-center">Selected date: {date.toDateString()}</div>
    </div>
  );
}

export default Calender;
