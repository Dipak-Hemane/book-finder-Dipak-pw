import React from 'react';
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='py-24'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-12'>
          <h2 className='text-3xl font-bold text-gray-800'>About</h2>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-16 items-center'>
          <div className='max-h-[600px] overflow-hidden rounded-lg shadow-lg'>
            <img 
              src={aboutImg} 
              alt="About BookHub" 
              className='w-full h-full object-cover transform hover:scale-105 transition-transform duration-300' 
            />
          </div>
          <div className='about-text'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-4'>About BookHub</h2>
            <p className='text-lg text-gray-600 opacity-80 mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus dignissimos consequuntur vero commodi provident maiores, iusto atque corrupti voluptate vel sequi consectetur unde aliquam corporis saepe animi non, tempora reiciendis molestias sed laudantium dolores. Assumenda aperiam fuga quo voluptate commodi ullam aliquam expedita voluptas delectus.
            </p>
            <p className='text-lg text-gray-600 opacity-80 mb-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, dicta, possimus inventore eveniet atque voluptatibus repellendus aspernatur illo aliquam dignissimos illum. Commodi, porro omnis dolore amet neque modi quas eum!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
