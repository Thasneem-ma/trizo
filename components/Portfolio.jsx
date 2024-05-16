import React, { useState } from 'react';
import Link from 'next/link';
import { portImages } from '@/constants/images';
import Image from 'next/image';
import { MdOutlineNavigateNext, MdClose } from "react-icons/md";
import '../app/portfolio/page.css';

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openPopup = (imageSrc) => {
    setSelectedImage(imageSrc);
    document.body.style.overflow = 'hidden';
  };

  const closePopup = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className='flex flex-col items-center justify-center py-12 px-16 md:px-44 space-y-8'>
      <div className='flex justify-center items-center cursor-pointer gap-4'>
        <Link href='/' className='transition ease-in-out delay-150 hover:translate-y-1  hover:text-brand-secondary duration-300'>All</Link>
        <Link href='/' className='transition ease-in-out delay-150 hover:translate-y-1  hover:text-brand-secondary duration-300'>Brand Identity</Link>
        <Link href='/' className='transition ease-in-out delay-150 hover:translate-y-1  hover:text-brand-secondary duration-300'>Social Media</Link>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
        {portImages.slice(0, 8).map((post, i) => (
          <div key={i} className='relative'>
            <div className="image-container" onClick={() => openPopup(post)}>
              <Image src={post} alt='portfolio' className="cursor-pointer w-300 h-200" />
              <div className="overlay">
                <div className='flex justify-center items-center h-full'>
                  <h1 className='text-white'>hafeex</h1>
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
            <button className="absolute top-4 right-10 text-green-400" onClick={closePopup}><MdClose size={30}/></button>
          </div>
        </div>
      )}
      <div className='flex pt-2 items-center space-x-1 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-100 hover:text-brand-secondary duration-300'>
        <Link href='/portfolio' className='py-2 hover:text-brand-se'>View More</Link>
        <MdOutlineNavigateNext size={25} />
      </div>
    </div>
  );
}

export default Portfolio;
