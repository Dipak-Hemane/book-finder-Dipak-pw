import React from 'react';
import { Link } from 'react-router-dom';

const Book = (book) => {
  return (
    <div className="flex flex-col justify-between p-6 rounded shadow-sm transition-all hover:shadow-md bg-white">
      <div className="mx-auto">
        <img src={book.cover_img} alt="cover" className="max-w-md md:max-w-sm lg:max-w-xs" />
      </div>
      <div className="text-center mt-8">
        <Link to={`/book/${book.id}`} {...book}>
          <div className="text-lg font-bold mb-2">
            <span>{book.title}</span>
          </div>
        </Link>

        <div className="text-sm leading-5 mb-1">
          <span className="capitalize font-bold">Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className="text-sm leading-5 mb-1">
          <span className="capitalize font-bold">Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className="text-sm leading-5 opacity-60 italic">
          <span className="capitalize font-bold">First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
  )
}

export default Book;