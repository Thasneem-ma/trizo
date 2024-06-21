'use client'
import React, { useEffect } from 'react';
import { MdOutlineNavigateNext } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhatWe() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between px-14 md:px-44 space-x-0 md:space-x-6">
      <div data-aos="zoom-out-right" data-aos-duration="500" data-aos-once='true' className="flex flex-col space-y-2">
        <h1 className="text-2xl md:text-5xl  text-zinc-300 opacity-1">What</h1>
        <h1 className="text-6xl md:text-8xl font-bold text-brand-primary">WE DO?</h1>
      </div>
      <div data-aos="fade-left" data-aos-delay="500" data-aos-duration="1000" data-aos-once='true' className='max-w-xl space-y-2'>
        <p className="text-lg text-zinc-700 dark:text-zinc-700 leading-6" >
        At Trizo, we don&apos;t just create designs; we weave stories. Our passion lies in transforming abstract ideas into visually captivating masterpieces. Whether it&apos;s crafting elegant web designs, developing cutting-edge software solutions, or curating eye-catching ads, we infuse every project with creativity and precision. As we step into the future, we&apos;re excited to integrate AI advancements, pushing the boundaries of what&apos;s possible.
        </p>
        <p className='text-xl font-medium text-zinc-500 '>
        Welcome to Trizo, where imagination meets excellence.
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
