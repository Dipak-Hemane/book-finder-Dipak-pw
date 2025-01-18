import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';

const SearchForm = () => {
  const {setSearchTerm, setResultTitle} = useGlobalContext();
  const searchText = useRef('');
  const navigate = useNavigate();

  useEffect(() => searchText.current.focus(), []);
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempSearchTerm = searchText.current.value.trim();
    if((tempSearchTerm.replace(/[^\w\s]/gi,"")).length === 0){
      setSearchTerm("the lost world");
      setResultTitle("Please Enter Something ...");
    } else {
      setSearchTerm(searchText.current.value);
    }

    navigate("/book");
  };

  return (
    <div className='w-full'>
      <form 
        onSubmit={handleSubmit} 
        className='flex items-center bg-white rounded-full shadow-xl overflow-hidden'
      >
        <div className='flex-grow'>
          <input 
            type="text" 
            ref={searchText}
            placeholder='Search for books, authors, genres...' 
            className='w-full px-8 py-5 text-2xl text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>
        <button 
          type="submit" 
          className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-5 text-xl transition-colors duration-300 flex items-center'
        >
          <FaSearch className='mr-3' />
          <span>Search</span>
        </button>
      </form>
    </div>
  )
}

export default SearchForm;