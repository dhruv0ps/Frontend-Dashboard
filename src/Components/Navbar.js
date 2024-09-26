import React, { useState } from 'react';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <nav className={`bg-white shadow p-4 flex justify-between items-center`}>
      <div className="relative flex items-center">
        <svg 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-6 w-6 text-stone-500" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          strokeWidth="2" 
          stroke="currentColor" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z"/>
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
        <input 
          type="text" 
          placeholder="Search..." 
          className="border rounded-full pl-10 pr-4 py-2 w-96" // Add padding for icon space
        />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <img 
            src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" 
            alt="US Flag" 
            className="h-6 w-6 mr-1 mt-1"
          />
          <h4>English</h4>
        </div>
        <button onClick={toggleDarkMode} className="border rounded-full p-2 flex items-center">
          <svg className="h-8 w-8 text-stone-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
          </svg>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
        <button className="border rounded-full p-2">
          Notifications
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
