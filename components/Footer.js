import Image from 'next/image'
import React from 'react'
import logo from '@/assets/logo.svg'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaBehance,FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";


function Footer() {
  return (
    <div className='bg-slate-100 px-14 md:px-44 py-12'>
      <div className="grid grid-flow-row md:grid-flow-col gap-12 justify-between">
        <div className='flex flex-col space-y-4'>
            <Image src={logo} className='w-14 md:w-20' alt='logo' />
            <h1 className='text-sm font-light text-slate-400 max-w-md leading-4'>We&apos;re more than a design studio; we&apos;re your creative partners. Reach out to us for stunning web designs, innovative software solutions, and captivating ads. Let&apos;s transform ideas into reality together.</h1>
            <div className='flex space-x-3 items-center'>
            <FaInstagram size={23} className='cursor-pointer text-brand-primary' />
            <FaFacebookSquare size={23} className='cursor-pointer text-brand-primary' />
            <FaBehance size={23} className='cursor-pointer text-brand-primary' />
            <FaWhatsapp size={23} className='cursor-pointer text-brand-primary' />
            </div>
            <h1 className='text-sm font-light text-slate-600'>© 2024 Trizo Creatives . All rights reserved.</h1>
        </div>
        <div className='flex flex-col space-y-4'>
            <h1 className='font-semibold underline'>Services</h1>
            <div className='space-y-2 text-sm font-light text-slate-500'>
                <h1 className='hover:text-brand-primary cursor-pointer'>Branding</h1>
                <h1 className='hover:text-brand-primary cursor-pointer'>Website Designing
                    & <br />Development
                </h1>
                <h1 className='hover:text-brand-primary cursor-pointer'>Social Media Designs</h1>
                <h1 className='hover:text-brand-primary cursor-pointer'>Creative Ads</h1>
                <h1 className='hover:text-brand-primary cursor-pointer'>Print Media Design</h1>
            </div>
        </div>
        <div className='flex flex-col space-y-4'>
            <h1 className='font-semibold underline'>Contact Us</h1>
            <div className='space-y-2 text-sm font-light text-slate-500'>
                <div className='flex space-x-3 items-center hover:text-brand-primary'>
                <FaInstagram size={15} className='cursor-pointer' />
                <h1 className=' cursor-pointer'>Trizo_creatives</h1>
                </div>
                <div className='flex space-x-3 items-center hover:text-brand-primary'>
                <FaBehance size={15} className='cursor-pointer' />
                <h1 className=' cursor-pointer'>www.behance.net/thasneemma</h1>
                </div>
                <div className='flex space-x-3 items-center hover:text-brand-primary'>
                <FaWhatsapp size={15} className='cursor-pointer' />
                <h1 className=' cursor-pointer'>+91 9526 372386</h1>
                </div>
                <div className='flex space-x-3 items-center hover:text-brand-primary'>
                <FaTelegramPlane size={15} className='cursor-pointer' />
                <h1 className=' cursor-pointer'>Designer_thasnii</h1>
                </div>
                
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer
