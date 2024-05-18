import React from 'react';
import { MdOutlineNavigateNext } from "react-icons/md";

function WhatWe() {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-14 md:px-44 space-x-0 md:space-x-6">
      <div className="">
        <h1 className="text-2xl md:text-5xl  text-zinc-300 opacity-1">What</h1>
        <h1 className="text-6xl md:text-8xl font-bold text-brand-primary">WE DO?</h1>
      </div>
      <div className='max-w-xl'>
        <p className="text-3xl md:text-lg text-zinc-700 dark:text-zinc-700 leading-" >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente
          amet consectetur adipisicing
        </p>
        <p className='text-xl md:text-sm text-zinc-300 '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam hic
          Lorem ipsum dolor sit amet consectetur.
        </p>
        <div className='flex space-x-2 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-100 hover:text-brand-secondary duration-300'>
          <button className="">Know More</button>
          <MdOutlineNavigateNext size={25} />
        </div>
      </div>

    </div>
  );
}

export default WhatWe;
