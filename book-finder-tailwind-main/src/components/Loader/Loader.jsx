import React from 'react';
import LoaderImg from "../../images/loader.svg";

const Loader = () => {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-white'>
      <div className='animate-pulse'>
        <img 
          src={LoaderImg} 
          alt="loader" 
          className='w-24 h-24 object-contain'
        />
      </div>
    </div>
  )
}

export default Loader;