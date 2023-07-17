import React from 'react'
import {BsArrowRightCircle} from 'react-icons/bs'
import Link from 'next/link'

function About() {
  return (
    <div className='w-full overflow-hidden md:h-[60vh] h-fit py-10 md:py-0 grid md:grid-flow-col grid-flow-row md:text-start text-center md:gap-48 gap-4 place-content-center main auto-cols-auto auto-rows-auto'>
        <h1 className='relative lg:left-2 md:left-24 text-5xl font-light'>Transforming <br></br>Ideas into <br></br>Experiences</h1>
        <div>
        <h2 className=' md:max-w-xl max-w-xs  md:text-lg md:leading-6 leading-5 font-light'>At Trizo, we specialize in graphic designing, website development, 
        and event media controlling. Our passionate team of experts is dedicated to transforming your ideas into captivating experiences. 
        With stunning designs, engaging websites, and seamless event media, we bring your vision to life. Discover how we can elevate your 
        brand and create unforgettable experiences.
        <div className='relative left-28 md:left-0 mt-3' >

       <Link href='/aboutus' className='flex items-center space-x-2 italic text-teal-800'>
       <BsArrowRightCircle className=' text-xl'/>
        <h1>
          About us
          </h1>
          </Link>
        </div>
        </h2>
        </div>
      {/* <div className='relative w-fit items-center  flex'>
      </div> */}
    </div>
  )
}

export default About
