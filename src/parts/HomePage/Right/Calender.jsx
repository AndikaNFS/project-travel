import React, { useState } from 'react';
console.log('develop');

const Calendar = () => {
  const [selectedRange, setSelectedRange, setSelectedDate, selectedDate] =
    useState({
      start: null,
      end: null,
    });

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  const handleDateClickRange = (date) => {
    if (!selectedRange.start) {
      setSelectedRange({ start: date, end: null });
    } else if (!selectedRange.end && date > selectedRange.start) {
      setSelectedRange({ ...selectedRange, end: date });
    } else {
      setSelectedRange({ start: date, end: null });
    }
  };

  const isWithinSelectedRange = (date) => {
    if (!selectedRange.start || !selectedRange.end) return false;
    return date >= selectedRange.start && date <= selectedRange.end;
  };

  const getCalendarDays = () => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const days = [];
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const date = new Date(year, month, i);
      const isCurrentMonth = date >= firstDayOfMonth && date <= lastDayOfMonth;

      days.push(
        <div
          key={i}
          className={`text-center p-2 cursor-pointer hover:bg-blue-400 ${
            isCurrentMonth ? 'text-gray-800' : 'text-gray-400'
          } ${isWithinSelectedRange(date) ? 'bg-blue-500 text-white' : ''}`}
          onClick={() => handleDateClickRange(date)}
        >
          {i}
        </div>,
      );
      days.push(
        <div
          key={i}
          className={`text-center p-2 cursor-pointer ${
            isCurrentMonth ? 'text-gray-800' : 'text-gray-400'
          } ${
            date.toDateString() === selectedDate.toDateString()
              ? 'bg-blue-500 text-white'
              : ''
          }`}
          onClick={() => handleDateClick(date)}
        >
          {i}
        </div>,
      );
    }

    return days;
  };

  return (
    <div className="container mx-auto">
      <h1 className="mb-4 text-2xl font-bold">Calendar</h1>
      <div className="grid grid-cols-7 gap-2">
        <div className="font-bold text-center">Sun</div>
        <div className="font-bold text-center">Mon</div>
        <div className="font-bold text-center">Tue</div>
        <div className="font-bold text-center">Wed</div>
        <div className="font-bold text-center">Thu</div>
        <div className="font-bold text-center">Fri</div>
        <div className="font-bold text-center">Sat</div>
        {getCalendarDays()}
      </div>
    </div>
  );
};

export default Calendar;
