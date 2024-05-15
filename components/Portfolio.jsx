import React from 'react';
import logo from '../assets/2ndComponentBgCut.png'


function Portfolio() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center py-12 px-16 md:px-44 space-x-6'>
      <div className='flex justify-center items-center cursor-pointer gap-4'>
        <h1 className='transition ease-in-out delay-150 hover:translate-y-1  hover:text-brand-secondary duration-300'>All</h1>
        <h1 className='transition ease-in-out delay-150 hover:translate-y-1  hover:text-brand-secondary duration-300'>Brand Identity</h1>
        <h1 className='transition ease-in-out delay-150 hover:translate-y-1  hover:text-brand-secondary duration-300'>Social Media</h1>
      </div>
      <div>
      </div>
    </div>
  );
}

export default Portfolio;
