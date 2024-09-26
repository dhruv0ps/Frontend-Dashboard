import React from 'react';
import WallClockCard from './Clock';

const EmployeeCard = ({ title, count, icon }) => {
  return (
    <div className="w-1/4 p-4">
        
      <div className="h-full rounded overflow-hidden shadow-2xl bg-white flex flex-col">
        
        <div className="pt-8 pb-10 pl-1  pr-6  flex-grow">
          <div className="font-bold text-xl mb-2 capitalize">{title}</div>
          <div className="flex items-center justify-between pt-4">
            <h3 className="text-2xl font-bold ml-4">{count}</h3>
            {icon}
          </div>
        </div>
      </div>
    </div>
  );
};

const CardGrid = () => {
  const cardData = [
    {
      title: 'Total Employees',
      count: 90,
      icon: (
        <svg
          className="h-14 w-16 text-pink-600 bg-pink-300 border-2 rounded-full p-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      title: "Total Departments",
      count: 5,
      icon: (
        <svg className="h-14 w-16 text-pink-500  bg-pink-300 border-2 rounded-full p-1 inline-block mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 2 7 12 12 22 7 12 2" />
            <polyline points="2 17 12 22 22 17" />
            <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      title: "Total Holidays",
      count: 10,
      icon: (
        <svg className="h-14 w-16 text-pink-600 bg-pink-300 border-2 rounded-full p-1"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7" /></svg>
      ),
    },
    {
      title: "Paid Leaves",
      count: 15,
      icon: (
        <svg class="h-14 w-16 text-pink-600  bg-pink-300 border-2 rounded-full p-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="5" y="3" width="14" height="18" rx="2" />  <line x1="9" y1="7" x2="15" y2="7" />  <line x1="9" y1="11" x2="15" y2="11" />  <line x1="9" y1="15" x2="13" y2="15" /></svg>
      ),
    },
    {
      title: "On Leave Today",
      count: 3,
      icon: (
        <svg class="h-14 w-16 text-pink-600  bg-pink-300 border-2 rounded-full p-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="5" y="3" width="14" height="18" rx="2" />  <line x1="9" y1="7" x2="15" y2="7" />  <line x1="9" y1="11" x2="15" y2="11" />  <line x1="9" y1="15" x2="13" y2="15" /></svg>
      ),
    },
    {
      title: "Pending  Requests",
      count: 4,
      icon: (
        <svg class="h-14 w-16 text-pink-600  bg-pink-300 border-2 rounded-full p-1"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />  <line x1="8" y1="9" x2="16" y2="9" />  <line x1="8" y1="13" x2="14" y2="13" /></svg>
      ),
    },
    {
      title: "Total Check-Ins Today",
      count: 80,
      icon: (
        <svg className="h-14 w-16 text-pink-600  bg-pink-300 border-2 rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7h20L12 2z" />
        </svg>
      ),
    },
    {
      title: "Total Check-Outs Today",
      count: 75,
      icon: (
        <svg className="h-14 w-16 text-pink-600  bg-pink-300 border-2 rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7h20L12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <>
    
    <div className='max-w-full flex'>

      <div className="flex flex-wrap w-3/4 justify-between">
      
        {cardData.slice(0, 4).map((data, index) => (
          <EmployeeCard key={index} title={data.title} count={data.count} icon={data.icon} />
        ))}
        {cardData.slice(4).map((data, index) => (
          <EmployeeCard key={index + 4} title={data.title} count={data.count} icon={data.icon} />
        ))}
      </div>
      <div className="w-1/4 p-4">
        <WallClockCard />
      </div>
    </div>
    </>
  );
};

export default CardGrid;

