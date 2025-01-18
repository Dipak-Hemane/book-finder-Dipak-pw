import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import {FaArrowLeft} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const URL = "https://openlibrary.org/works/";

const BookDetails = () => {
  const {id} = useParams();
  const [loading, setLoading] = useState(false);
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    async function getBookDetails(){
      try{
        const response = await fetch(`${URL}${id}.json`);
        const data = await response.json();

        if(data){
          const {description, title, covers, subject_places, subject_times, subjects} = data;
          const newBook = {
            description: description ? description.value : "No description found",
            title: title,
            cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : coverImg,
            subject_places: subject_places ? subject_places.join(", ") : "No subject places found",
            subject_times : subject_times ? subject_times.join(", ") : "No subject times found",
            subjects: subjects ? subjects.join(", ") : "No subjects found"
          };

          setBook(newBook);
        } else {
          setBook(null);
        }
        setLoading(false);
      } catch(error){
        console.log(error);
        setLoading(false);
      }
    }

    getBookDetails();
  }, [id]);

  if(loading) return <Loading />;

  return (
    <section className='py-20 bg-gray-50 min-h-screen'>
      <div className='container mx-auto px-6'>
        <div className='flex justify-start mb-12'>
          <button 
            onClick={() => navigate(-1)} 
            className='flex items-center text-blue-600 hover:text-blue-800 text-xl transition-colors'
          >
            <FaArrowLeft className='mr-3' />
            <span className='font-semibold'>Back to Book List</span>
          </button>
        </div>

        {book && (
          <div className='grid md:grid-cols-2 gap-16 bg-white rounded-xl shadow-xl p-12'>
            <div className='flex justify-center items-center'>
              <img 
                src={book.cover_img} 
                alt={book.title} 
                className='max-w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300'
              />
            </div>

            <div className='space-y-8'>
              <h2 className='text-5xl font-bold text-gray-900 mb-6'>{book.title}</h2>

              <div className='bg-gray-100 p-6 rounded-lg'>
                <h3 className='text-2xl font-semibold text-gray-800 mb-4'>Description</h3>
                <p className='text-xl text-gray-600 leading-relaxed'>{book.description}</p>
              </div>

              <div className='grid md:grid-cols-2 gap-6'>
                <div>
                  <h4 className='text-xl font-semibold text-gray-800 mb-3'>Subject Places</h4>
                  <p className='text-lg text-gray-600'>{book.subject_places}</p>
                </div>
                <div>
                  <h4 className='text-xl font-semibold text-gray-800 mb-3'>Subject Times</h4>
                  <p className='text-lg text-gray-600'>{book.subject_times}</p>
                </div>
              </div>

              <div>
                <h4 className='text-xl font-semibold text-gray-800 mb-3'>Subjects</h4>
                <p className='text-lg text-gray-600'>{book.subjects}</p>
              </div>
            </div>
          </div>
        )}

        {!book && (
          <div className='text-center'>
            <p className='text-3xl text-gray-600'>Book details not found</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default BookDetails;