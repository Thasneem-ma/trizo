import React from 'react'
import { CgWebsite } from "react-icons/cg";
import { AiOutlineLike } from "react-icons/ai";
import { BsMouse } from "react-icons/bs";
import { GiMiniSubmarine } from "react-icons/gi";
import { SlUserFemale } from "react-icons/sl";


function page() {
  return (
    <div className=' flex-col gap-10 md:flex-row items-center scroll-smooth  py-12 px-14 md:px-44 space-x-6'>
      <div className='text-center py-20 flex flex-col gap-2.5'>
        <h1 className='text-4xl md:text-3xl font-bold text-zinc-500'>What's for you!</h1>
        <h1 className='text-lg md:text-base font-sans  text-zinc-400'>Our team emphasizes providing innovative solutions that uphold international standards. We strive to create new standards in the development and marketing</h1>
      </div>
      <div className='flex flex-col lg:flex-row  '>
        <div className=''>
          <h1 className='text-zinc-400'>Who We Are</h1>
          <h1 className='text-brand-secondary font-bold text-6xl md:text-5xl'>WE ARE A CREATIVE DIGITAL AGENCY</h1>
        </div>
        <p className='w-full lg:w-1/2 text-sm md:text-sm tracking-wider leading-6'>Trizo Digital Solutions LLP is a Full-Service Digital Agency Based in India & GCC. Webmax provides market research, event marketing, Media productions, digital marketing, web development, app development, brand development, motion graphics, content writing & print manufacture. Our clients are involved in every step along the way because we are wired for long-term contracts and retained customers.</p>
      </div>
      <div className='flex flex-col lg:flex-row justify-between  pt-32 space-x-3'>
        <div>
          <h1 className='text-4xl md:text-2xl text-zinc-400'>WHAT TRIZO</h1>
          <h1 className='text-5xl md:text-4xl font-bold text-brand-secondary'>DO?</h1>
        </div>
        <p className=' text-sm'>Focus on development & marketing, Brand managment, World class- quality, Creative design, Efficent service & follow up</p>
      </div>
      <div className='flex flex-col lg:flex-row  gap-2 py-20 px-5 md:px-0 space-x-3  text-center'>
        <div className='items-center flex flex-col gap-2.5 content-center shadow-green-100 shadow-lg p-5 hover:shadow-lg rounded-sm '>
          <CgWebsite className='text-brand-primary' size={30} />
          <h1 className='text-3xl font-bold text-zinc-700'>Creative Design</h1>
          <h1 className=' text-sm'>Your website is your own kingdom. Not only does it make your business available to millions of internet users, but also gives it personality, charisma and authority. Add to that a mobile application with useful features, and everyone will be walking around with your brand in their pockets.</h1>
        </div>
        <div className=' items-center flex flex-col gap-2.5 content-center shadow-green-100 shadow-lg p-5 hover:shadow-lg rounded-sm '>
          <CgWebsite className='text-brand-primary' size={30} />
          <h1 className='text-3xl font-bold text-zinc-700'>Branding</h1>
          <h1 className=' text-sm'>Your website is your own kingdom. Not only does it make your business available to millions of internet users, but also gives it personality, charisma and authority. Add to that a mobile application with useful features, and everyone will be walking around with your brand in their pockets.</h1>
        </div>
        <div className=' items-center flex flex-col gap-2.5 content-center shadow-green-100 shadow-lg p-5 hover:shadow-lg rounded-sm '>
          <CgWebsite className='text-brand-primary' size={30} />
          <h1 className='text-3xl font-bold text-zinc-700'>Video Photography</h1>
          <h1 className=' text-sm'>Your website is your own kingdom. Not only does it make your business available to millions of internet users, but also gives it personality, charisma and authority. Add to that a mobile application with useful features, and everyone will be walking around with your brand in their pockets.</h1>
        </div>
        <div className='items-center flex flex-col  content-center shadow-green-100 shadow-lg p-5 hover:shadow-lg rounded-sm '>
          <CgWebsite className='text-brand-primary' size={30} />
          <h1 className='text-3xl font-bold text-zinc-700'>Web Development</h1>
          <h1 className=' text-sm'>Your website is your own kingdom. Not only does it make your business available to millions of internet users, but also gives it personality, charisma and authority. Add to that a mobile application with useful features, and everyone will be walking around with your brand in their pockets.</h1>
        </div>
      </div>
      <div className='text-center'>
        <h1 className='text-2xl text-zinc-500'>W H Y</h1>
        <h1 className='text-5xl md:text-4xl font-bold text-brand-secondary'>WEBMAX?</h1>
      </div>
      <div className='flex flex-col lg:flex-row   gap-2 py-10 px-2 space-x-3 items-center text-center content-center'>
        <div className='flex flex-col items-center'>
          <BsMouse className='text-brand-primary' size={40} />
          <h1 className='text-lg font-semibold text-brand-primary'>Creative Ideas</h1>
          <h1 className='font-light pt-2'>Content Strategy: Develop a content strategy that is aligned with the target audience and business goals, and create content that is engaging, informative, and shareable.</h1>
        </div>
        <div className='flex flex-col items-center'>
          <AiOutlineLike  className='text-brand-primary' size={40} />
          <h1 className='text-lg font-semibold text-brand-primary'>Quality First</h1>
          <h1 className='font-light pt-2'>Content Strategy: Develop a content strategy that is aligned with the target audience and business goals, and create content that is engaging, informative, and shareable.</h1>
        </div>
        <div className=' flex flex-col items-center'>
          <GiMiniSubmarine className='text-brand-primary' size={40} />
          <h1 className='text-lg font-semibold text-brand-primary'>Ontime Submission</h1>
          <h1 className='font-light pt-2'>Content Strategy: Develop a content strategy that is aligned with the target audience and business goals, and create content that is engaging, informative, and shareable.</h1>
        </div>
        <div className='flex flex-col items-center'>
          <SlUserFemale className='text-brand-primary' size={40} />
          <h1 className='text-lg font-semibold text-brand-primary'>Website Development</h1>
          <h1 className='font-light pt-2'>Content Strategy: Develop a content strategy that is aligned with the target audience and business goals, and create content that is engaging, informative, and shareable.</h1>
        </div>
      </div>
    </div>
  )
}

export default page
