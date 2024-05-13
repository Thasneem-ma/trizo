'use client'
import React from 'react'
import { logos } from '@/constants/trustedLogos.js'
import Image from 'next/image'
import Marquee from "react-fast-marquee";

function OurClients() {
  return (
    <div className='flex-1 items-center space-y-5'>
      <div className='self-stretch text-center'>
        <h1 className='text-5xl font-semibold opacity-10'>Trusted By</h1>
      </div>

      {/* Carousel */}
      <div className='flex justify-center items-center w-full'>
        <Marquee play >
          <div className='flex space-x-10 md:space-x-16 pr-10 md:pr-16'>
            {logos.map((logo, i) => (
              <Image key={i} src={logo} alt='logo' className='w-24 md:w-28' width={0} height={0} />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default OurClients;
