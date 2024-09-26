import React, { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`flex flex-col ${isOpen ? 'w-16' : 'w-0'} bg-white h-screen shadow-lg transition-width duration-300`}>
     
      <button onClick={toggleSidebar} className="text-gray-800 hover:text-gray-600 mb-4 ml-4 mt-2">
        <svg className="h-8 w-8 text-stone-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="15" y1="9" x2="9" y2="15" />
          <line x1="9" y1="9" x2="15" y2="15" />
        </svg>
      </button>
      <div className="flex flex-col items-center mt-4">

        <div className="mb-6"></div>

    
        <a href="#" className="text-gray-800 hover:text-gray-600 mb-4">
          <svg className="h-8 w-8 text-stone-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3z" />
          </svg>
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600 mb-4">
          <svg className="h-8 w-8 text-stone-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-4.42 0-8 3.58-8 8h16c0-4.42-3.58-8-8-8z" />
          </svg>
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600 mb-4">
          <svg className="h-8 w-8 text-stone-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.87-7-7.93 0-1.6.52-3.08 1.41-4.27l10.86 10.86C13.08 18.41 12.6 19.43 11 19.93z" />
          </svg>
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600 mb-4">
          <svg className="h-8 w-8 text-stone-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 12.5c0 4.1-3.2 7.5-7.1 7.5H6.5V4h7.4C17.8 4 21 7.3 21 12.5zM12 2C6.48 2 2 6.48 2 12.5S6.48 23 12 23c5.52 0 10-4.48 10-10S17.52 2 12 2z" />
          </svg>
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600 mb-4">
          <svg className="h-8 w-8 text-stone-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3V3zm0 0H3h0zm3 15h12v2H6v-2zm0-4h12v2H6v-2zm0-4h12v2H6v-2zm0-4h12v2H6V6z" />
          </svg>
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600 mb-4">
          <svg className="h-8 w-8 text-stone-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v1.1c-4.8 0-8.7 4.3-8.7 9.7 0 5.4 3.9 9.7 8.7 9.7V21c-6.1 0-11-4.9-11-11S5.9 3 12 3zm9 11h-4.1c-.6 2.5-2.6 4.5-5.4 4.5v1.1c4.2 0 7.7-3.4 7.7-7.7 0-.5-.1-1-.2-1.5h-1.9c.3.8.5 1.7.5 2.6z" />
          </svg>
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600 mb-4">
          <svg className="h-8 w-8 text-stone-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <path d="M10 13l2.538-.003c2.46 0 4.962-2.497 4.962-4.997 0-3-1.89-5-4.962-5H7c-.5 0-1 .5-1 1L4 18c0 .5.5 1 1 1h2.846L9 14c.089-.564.43-1 1-1zm7.467-5.837C19.204 8.153 20 10 20 12c0 2.467-2.54 4.505-5 4.505h.021-2.629l-.576 3.65a.998.998 0 01-.988.844l-2.712-.002a.5.5 0 01-.494-.578L7.846 19" />
          </svg>
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600 mb-4">
          <svg className="h-8 w-8 text-stone-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </a>
        <a href="#" className="text-gray-800 hover:text-gray-600 mb-4">
          <svg className="h-8 w-8 text-stone-500" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z"/>
            <polyline points="12 4 4 8 12 12 20 8 12 4" />
            <polyline points="4 12 12 16 20 12" />
            <polyline points="4 16 12 20 20 16" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
