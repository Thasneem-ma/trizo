import React from 'react'
import { TbBrandAirtable } from "react-icons/tb";
import { RiSlideshowView } from "react-icons/ri";
import { GoFileMedia } from "react-icons/go";
import { GrTechnology } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";


function ServiceBox() {
  return (
    <div className='bg-white relative -top-32 rounded-xl z-50 w-[80%] shadow-lg px-6 py-12 container mx-auto 
    justify-around items-center  content-center grid grid-flow-row md:grid-flow-col-dense gap-8 md:gap-5 text-center 
    '>
      <div className='w-fit flex flex-col items-center'>
        <TbBrandAirtable className='text-brand-primary' size={80} />
        <h1 className='text-lg font-semibold text-brand-primary'>Branding</h1>
        <h1 className='font-light pt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit culpa in, ad eveniet quisquam voluptatum vitae dolor atque doloremque, labore quis, aliquid cumque! Omnis vel maxime porro culpa repellendus odit?</h1>
        <div className='flex pt-2 items-center space-x-1 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-100 hover:text-brand-secondary duration-300'>
          <button>Know More</button>
          <MdOutlineNavigateNext size={25} />
        </div>
      </div>
      <div className='w-full md:w-0.5 h-0.5 md:h-full bg-gray-200 rounded-full'></div>
      <div className='w-fit flex flex-col items-center'>
      <RiSlideshowView className='text-brand-primary' size={80}/>
        <h1 className='text-lg font-semibold text-brand-primary'>Website Development</h1>
        <h1 className='font-light pt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit culpa in, ad eveniet quisquam voluptatum vitae dolor atque doloremque, labore quis, aliquid cumque! Omnis vel maxime porro culpa repellendus odit?</h1>
        <div className='flex pt-2 items-center space-x-1 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-100 hover:text-brand-secondary duration-300'>
          <button>Know More</button>
          <MdOutlineNavigateNext size={25} />
        </div>
      </div>
      <div className='w-full md:w-0.5 h-0.5 md:h-full bg-gray-200 rounded-full'></div>
      <div className='w-fit flex flex-col items-center'>
      <GoFileMedia className='text-brand-primary' size={80} />
        <h1 className='text-lg font-semibold text-brand-primary'>Social Media Ads</h1>
        <h1 className='font-light pt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit culpa in, ad eveniet quisquam voluptatum vitae dolor atque doloremque, labore quis, aliquid cumque! Omnis vel maxime porro culpa repellendus odit?</h1>
        <div className='flex pt-2 items-center space-x-1 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-100 hover:text-brand-secondary duration-300'>
          <button>Know More</button>
          <MdOutlineNavigateNext size={25} />
        </div>
      </div>
      <div className='w-full md:w-0.5 h-0.5 md:h-full bg-gray-200 rounded-full'></div>
      <div className='w-fit flex flex-col items-center'>
      <GrTechnology className='text-brand-primary' size={80} />
        <h1 className='text-lg font-semibold text-brand-primary'>Software Developments</h1>
        <h1 className='font-light pt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit culpa in, ad eveniet quisquam voluptatum vitae dolor atque doloremque, labore quis, aliquid cumque! Omnis vel maxime porro culpa repellendus odit?</h1>
        <div className='flex pt-2 items-center space-x-1 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-100 hover:text-brand-secondary duration-300'>
          <button>Know More</button>
          <MdOutlineNavigateNext size={25} />
        </div>
      </div>
    </div>
  )
}

export default ServiceBox
