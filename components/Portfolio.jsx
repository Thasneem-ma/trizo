import React, { useState } from 'react';
import Link from 'next/link';
import { portImages } from '@/constants/images';
import Image from 'next/image';
import { MdOutlineNavigateNext, MdClose } from "react-icons/md";
import { CiZoomIn } from "react-icons/ci";


const sections = ["All", "Brand Identity", "Social Media"];

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeSection, setActiveSection] = useState("All");

  const openPopup = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const filteredImages = activeSection === "All" 
    ? portImages 
    : portImages.filter(image => image.section === activeSection);

  return (
    <div className='flex flex-col items-center  md:justify-center py-6 px-14 md:px-44 space-y-8'>
      <div className='flex justify-center items-center cursor-pointer gap-4'>
        {sections.map(section => (
          <button
            key={section}
            className={`transition ease-in-out delay-150 hover:translate-y-1 hover:text-brand-secondary duration-300 ${
              activeSection === section ? 'text-brand-secondary' : ''
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8'>
        {filteredImages.slice(0, 8).map((port, i) => (
          <div key={i} className='relative'>
            <div className="image-container" onClick={() => openPopup(port.image)}>
              <Image src={port.image} alt='portfolio' className="cursor-pointer w-full" />
              <div className="overlay">
                <div className='flex justify-center items-center h-full'>
                  <h1 className='text-white'><CiZoomIn  size={30}/></h1>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-20 " onClick={closePopup}>
          <div className="popup-inner relative">
            <Image src={selectedImage} alt="popup" width={400} height={300} />
            <button className="absolute top-4 right-10 text-gray-500" onClick={closePopup}><MdClose size={30}/></button>
          </div>
        </div>
      )}
      <div className='flex pt-2 items-center space-x-1 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-100 hover:text-brand-secondary duration-300'>
        <Link href='/portfolio' className='py-2 hover:text-brand-secondary'>View More</Link>
        <MdOutlineNavigateNext size={25} />
      </div>
    </div>
  );
}

export default Portfolio;
