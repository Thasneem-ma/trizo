"use client"
import { useState } from 'react';
import { portImages } from '@/constants/images';
import Image from 'next/image';



const sections = ["All", "Brochure", "Brand Identity", "Social Media", "Web designing"];

function Page() {
  const [activeSection, setActiveSection] = useState("All");

  const filteredImages = activeSection === "All" 
    ? portImages 
    : portImages.filter(image => image.section === activeSection);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='flex flex-col  items-center py-12 px-16 md:px-44 space-x-6'>
      <div className='flex items-center justify-center'>
        <h1 className='text-5xl md:text-9xl font-bold text-brand-primary opacity-10'>PORTFOLIO</h1>
      </div>
      <div className='flex gap-5 justify-center items-center text-sm md:text-sm py-10 cursor-pointer  text-slate-500'>
        {sections.map(section => (
          <button
            key={section}
            onClick={() => handleSectionClick(section)}
            className={`transition ease-in-out delay-150 hover:translate-y-1 hover:text-brand-secondary duration-300 ${
              activeSection === section ? 'text-brand-secondary' : ''
            }`}
          >
            {section}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
        {filteredImages.map((port, i) => (
          <div  className='relative'>
            <div key={i} className="image-container">
              <Image src={port.image} alt='portfolio' className="cursor-pointer w-300 h-200" />
              <div className="overlay">
                <div className='flex justify-center items-center h-full'>
                  <h1 className='text-white'>hafeex</h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;


