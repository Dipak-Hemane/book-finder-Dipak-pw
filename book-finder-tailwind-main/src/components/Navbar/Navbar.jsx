import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import logoImg from "../../images/logo.png";
import {HiOutlineMenuAlt3} from "react-icons/hi";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='bg-white shadow-md fixed top-0 left-0 w-full z-50'>
      <div className='container mx-auto px-6 py-5 flex justify-between items-center'>
        <div className='flex items-center space-x-6'>
          <Link to="/" className='flex items-center space-x-4'>
            <img 
              src={logoImg} 
              alt="site logo" 
              className='h-14 w-14 object-contain'
            />
            <span className='text-2xl font-bold text-gray-800 uppercase tracking-wider'>
              BookHub
            </span>
          </Link>
          <button 
            type="button" 
            className='md:hidden focus:outline-none'
            onClick={handleNavbar}
          >
            <HiOutlineMenuAlt3 
              size={40} 
              className={`transition-colors duration-300 ${toggleMenu ? 'text-white' : 'text-gray-800'}`} 
            />
          </button>
        </div>

        <div className={`
          fixed inset-0 bg-black bg-opacity-50 z-40 
          ${toggleMenu ? 'block' : 'hidden'}
          md:static md:block md:bg-transparent md:z-auto
        `}>
          <ul className={`
            flex flex-col absolute top-0 right-0 w-72 h-full bg-white 
            transform ${toggleMenu ? 'translate-x-0' : 'translate-x-full'}
            transition-transform duration-300 ease-in-out
            md:flex-row md:relative md:w-auto md:h-auto md:bg-transparent md:translate-x-0
            space-y-6 md:space-y-0 md:space-x-8 p-8 md:p-0
          `}>
            <li className='md:hidden text-right'>
              <button 
                onClick={handleNavbar} 
                className='text-gray-600 hover:text-gray-900 text-xl focus:outline-none'
              >
                Close
              </button>
            </li>
            <li>
              <Link 
                to="book" 
                className='text-gray-800 hover:text-blue-600 font-semibold text-xl uppercase tracking-wide transition-colors'
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="about" 
                className='text-gray-800 hover:text-blue-600 font-semibold text-xl uppercase tracking-wide transition-colors'
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;