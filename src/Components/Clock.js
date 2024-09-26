import React, { useState, useEffect } from 'react';

const WallClockCard = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDegree = (seconds / 60) * 360;
  const minuteDegree = (minutes / 60) * 360 + (seconds / 60) * 6;
  const hourDegree = (hours % 12 / 12) * 360 + (minutes / 60) * 30;

  const day = time.toLocaleDateString(undefined, { weekday: 'long' });
  const date = time.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg m-4  bg-white p-4">
      <div className="relative flex items-center justify-center w-full h-64 bg-gray-200 rounded-full border-4 border-gray-700">
        {Array.from({ length: 12 }, (_, index) => {
          const angle = index * 30;
          return (
            <div
              key={index}
              className="absolute text-lg font-bold"
              style={{
                transform: `rotate(${angle}deg) translate(0, -110px) rotate(-${angle}deg)`,
                transformOrigin: 'center',
              }}
            >
              {index === 0 ? 12 : index}
            </div>
          );
        })}
        <div
          className="absolute bg-gray-700 h-16 w-1 origin-bottom"
          style={{ transform: `rotate(${hourDegree}deg)` }}
        ></div>
        <div
          className="absolute bg-gray-600 h-20 w-1 origin-bottom"
          style={{ transform: `rotate(${minuteDegree}deg)` }}
        ></div>
        <div
          className="absolute bg-red-600 h-24 w-1 origin-bottom"
          style={{ transform: `rotate(${secondDegree}deg)` }}
        ></div>
        <div className="absolute bg-black h-4 w-4 rounded-full"></div>
      </div>
      <div className="mt-4 text-blue-600 text-lg font-bold text-center">{day}</div>
      <div className="text-blue-600 text-lg font-bold text-center">{date}</div>
      <div className="mt-6 flex justify-around">
        <div className="flex flex-col items-center">
          <div className="text-green-500 font-bold">Check In</div>
          <div className="border-b-2 border-dashed border-green-500 w-24"></div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-red-500 font-bold">Check Out</div>
          <div className="border-b-2 border-dashed border-red-500 w-24"></div>
        </div>
      </div>
    </div>
  );
};

export default WallClockCard;

