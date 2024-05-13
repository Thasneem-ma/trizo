"use client"
import React from 'react'
import { motion, useScroll  , useTransform } from "framer-motion"
import Image from 'next/image';
import bgPiece from '@/assets/2ndComponentBgCut.png'

function Banner() {
  const { scrollYProgress } = useScroll();
  const isMediumScreen = typeof window !== 'undefined' && window.innerWidth >= 768;
  const imageX = isMediumScreen? useTransform(scrollYProgress, [0, 1], [0, 160]): useTransform(scrollYProgress, [0, 1], [0, 180]) ;
  const textX = isMediumScreen? useTransform(scrollYProgress, [0, 1], [0, -160]): 0;
  return (
    <div className='bg-brand-primary flex flex-col content-center md:flex-row overflow-x-hidden overflow-y-hidden items-center pb-8 md:pb-20 h-screen md:h-fit sticky top-0'>
      <motion.div
        style={{ x: imageX }}
      >
      <Image src={bgPiece} className='max-w-[40rem] md:max-w-[60rem] ' alt='cut' />
      </motion.div>
      <motion.h1 style={{x:textX}} className='text-4xl md:text-5xl text-center md:text-right text-white font-light'>Let&apos;s make a <br/>Long lasting <br/><span className='font-semibold text-5xl md:text-7xl'>Impression</span></motion.h1>
      {/* <h1 style={{x:textX}} className='text-2xl md:text-5xl text-center md:text-right text-white font-light'>Let&apos;s make a <br/>Long lasting <br/><span className='font-semibold text-3xl md:text-7xl'>Impression</span></h1> */}
    </div>
  )
}

export default Banner
