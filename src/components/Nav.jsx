import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white border-gray-200 shadow-md">
      <div className="max-w-screen-xl flex flex-col lg:flex-row items-center justify-between mx-auto p-4">
        <Link to="/" className="text-2xl font-bold text-gray-900">SD</Link>
        
        <button 
          id="navbar-toggle" 
          type="button" 
          className="inline-flex items-center p-2 ml-4 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>

        <div className={`md:hidden w-full ${isOpen ? 'block mt-4' : 'hidden'}`} id="navbar-menu">
          <ul className="font-semibold flex flex-col p-4 space-y-2 bg-white border rounded-xl shadow-lg">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)} className="block py-3 px-4 rounded-lg hover:bg-blue-50 text-blue-700 font-bold border-b-2 border-blue-500">Home</Link>
            </li>
            <li>
              <Link to="/games" onClick={() => setIsOpen(false)} className="block py-3 px-4 rounded-lg hover:bg-gray-50">Games</Link>
            </li>
            <li>
              <Link to="/music" onClick={() => setIsOpen(false)} className="block py-3 px-4 rounded-lg hover:bg-gray-50">Music</Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-3 px-4 rounded-lg hover:bg-gray-50">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
              location.pathname === '/' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/games" 
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
              location.pathname === '/games' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            Games
          </Link>
          <Link 
            to="/music" 
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
              location.pathname === '/music' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            Music
          </Link>
          <Link 
            to="/contact" 
            className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 ${
              location.pathname === '/contact' 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

