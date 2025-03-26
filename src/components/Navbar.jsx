import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-indigo-600 p-4">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="flex justify-between items-center w-full lg:w-auto">
            <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-orange-600 hover:cursor-pointer">
              Porfolio
            </div>
            <div className="lg:hidden">
              <button 
                className="text-white focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg className="h-6 w-6 transition-transform duration-300 ease-in-out" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path 
                    strokelinecap="round" 
                    strokelinejoin="round" 
                    strokewidth={2} 
                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                    className="transition-all duration-300 ease-in-out"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div 
            className={`lg:flex flex-col lg:flex-row lg:space-x-4 lg:mt-0 mt-4 items-center text-xl lg:ml-auto transition-all duration-300 ease-in-out
              ${isOpen ? 'flex opacity-100 max-h-96' : 'hidden opacity-0 max-h-0 lg:opacity-100 lg:max-h-96'}`}
          >
            <Link to="/" className="text-white px-4 py-2 hover:text-orange-600 transition-colors duration-200">Home</Link>
            <Link to="/service" className="text-white px-4 py-2 hover:text-orange-600 transition-colors duration-200">Services</Link>
            <Link to="/project" className="text-white px-4 py-2 hover:text-orange-600 transition-colors duration-200">Project</Link>
            <Link to="/about" className="text-white px-4 py-2 hover:text-orange-600 transition-colors duration-200">About</Link>
            <Link to="/contact" className="text-white px-4 py-2 hover:text-orange-600 transition-colors duration-200">Contact Me</Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar