import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import libraryImg from "../../images/library-img.jpg";

const Header = () => {
  return (
    <div className='relative min-h-[80vh] flex flex-col'>
      <div className='absolute inset-0 z-0'>
        <img 
          src={libraryImg} 
          alt="Library Background" 
          className='w-full h-full object-cover opacity-40'
        />
      </div>
      <header className='container mx-auto px-6 flex-grow flex flex-col justify-center relative z-10'>
        <Navbar />
        <div className='header-content flex flex-col items-center text-center text-white space-y-8 py-16'>
          <h2 className='text-5xl font-bold text-capitalize tracking-wide leading-tight'>
            Find Your Book of Choice
          </h2>
          <p className='text-xl font-light max-w-3xl mx-auto opacity-90'>
            Discover a world of knowledge and imagination. Our extensive collection spans genres, 
            from timeless classics to contemporary masterpieces. Your next great read awaits.
          </p>
          <div className='w-full max-w-2xl'>
            <SearchForm />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header;