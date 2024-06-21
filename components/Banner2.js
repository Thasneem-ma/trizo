import Image from 'next/image'
import React from 'react'
import cut2 from '@/assets/3rdComponentBgCut.png'
import { motion, useScroll  , useTransform } from "framer-motion"


function Banner2() {
  const { scrollYProgress } = useScroll();
  const isMediumScreen = typeof window !== 'undefined' && window.innerWidth >= 640;
  const imageX = isMediumScreen? useTransform(scrollYProgress, [0, 1], [0, 290]): useTransform(scrollYProgress, [0, 1], [0, 60]) ;
  const textX = isMediumScreen? useTransform(scrollYProgress, [0, 1], [0, -250]): useTransform(scrollYProgress, [0, 1], [0, -280]);
  

  return (
    <div className='bg-brand-secondary h-screen sticky top-0 flex flex-col md:flex-row items-center content-center justify-center md:justify-between space-y-4 md:space-y-0'>
      
      <motion.h1
      style={{x:imageX}}
      className='text-white text-4xl md:text-6xl font-medium text-center md:text-start hidden md:block'>Promoting <br />brands beyond <br /><span className='text-2xl md:text-3xl font-light'>boundaries</span></motion.h1>

<h1
      style={{x:imageX}}
      className='text-white text-4xl md:text-6xl font-medium text-center md:text-start block md:hidden'>Promoting<br />brands beyond <br /><span className='text-2xl md:text-3xl font-light'>boundaries</span></h1>

      <motion.div
      style={{x:textX}}
      >
      <Image src={cut2} className='max-w-[80%] md:max-w-[560px] max-h-[32rem] relative left-44 md:left-0 '  alt='cut2'/>
      </motion.div>
    </div>
  )
}

export default Banner2
