import React from 'react';
import { useGlobalContext } from '../../context';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";

const BookList = () => {
  const {books, loading, resultTitle} = useGlobalContext();
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      id: (singleBook.id).replace("/works/", ""),
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  if(loading) return <Loading />;

  return (
    <section className='py-20 bg-gray-50'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
          <h2 className='text-5xl font-bold text-gray-800 tracking-tight'>
            {resultTitle}
          </h2>
          {booksWithCovers.length === 0 && (
            <p className='text-2xl text-gray-600 mt-6'>
              No books found. Try a different search term.
            </p>
          )}
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
          {booksWithCovers.slice(0, 30).map((item, index) => (
            <Book key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BookList;