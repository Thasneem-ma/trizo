"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/assets/logo.svg'
import { TfiAlignJustify } from "react-icons/tfi";
import { MdClose } from "react-icons/md";
import './Nav.css'
import Link from 'next/link';

function Navbar() {
  const [responsiveBar , setResponsiveBar] = useState(false);

  const toggleResponsiveBar = () => {
    setResponsiveBar(!responsiveBar);
  }

  return (
    <div className='flex items-center justify-between px-14 md:px-44 py-5 shadow-sm sticky top-0 bg-white z-10 '>
      <Image src={logo} className='w-14 ' loading='lazy' alt='logo' />
      <div className='navbar hidden md:flex  space-x-6 items-center cursor-context-menu '>
        <Link href="/" className='max1 cursor-pointer  text-sm '>Home</Link>
        <Link href="/about" className='max1 cursor-pointer  text-sm '>About Us</Link>
        <Link href="/services" className='max1 cursor-pointer  text-sm '>Services</Link>
        <Link href="/portfolio" className='max1 cursor-pointer  text-sm '>Portfolio</Link>
        <Link href="/portfolio" className='max1 cursor-pointer  text-sm '>On Board</Link>
        <button className='text font-semibold bg-brand-primary px-2.5 py-0.5 text-white '>Hire Us</button>
      </div>
      <div className='relative flex flex-col md:hidden items-end'>
        <TfiAlignJustify onClick={toggleResponsiveBar} className='text-2xl cursor-pointer duration-100  ' /> 
        {responsiveBar &&
        <div className='absolute flex flex-col space-y-3 items-end cursor-pointer text-white bg-brand-secondary w-44 shadow-lg  p-5 rounded-tl-3xl  '>
           <MdClose size={30} onClick={toggleResponsiveBar} className='cursor-pointer duration-100 z-50 ' /> 
          <Link href="/" className='cursor-pointer text-base text-center '>Home</Link>
          <Link href="/about" className='cursor-pointer text-base '>About Us</Link>
          <Link href="/services" className='max1 cursor-pointer  text-sm '>Services</Link>
          <Link href="/portfolio" className='cursor-pointer text-base '>Portfolio</Link>
          <Link href="/portfolio" className='cursor-pointer text-base '>On Board</Link>
          <button className='font-semibold bg-brand-primary px-5 py-0.5 text-white'>Hire Us</button>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar
