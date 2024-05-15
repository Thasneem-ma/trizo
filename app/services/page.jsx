import React from 'react'

function page() {
  return (
    <div className=' flex-col gap-10 md:flex-row items-center  py-12 px-16 md:px-44 space-x-6'>
      <div className='text-center py-10 flex flex-col gap-5'>
        <h1 className='text-4xl md:text-3xl font-bold text-zinc-500'>What's for you!</h1>
        <h1 className='text-lg md:text-base font-sans  text-zinc-400'>Our team emphasizes providing innovative solutions that uphold international standards. We strive to create new standards in the development and marketing</h1>
      </div>
      <div className='flex flex-col lg:flex-row justify-between gap-10 pt-10 w-full space-x-3 items-center'>
        <div className='w-full lg:w-1/2 text-start flex flex-col gap-3'>
          <h1 className='text-zinc-400'>Who We Are</h1>
          <h1 className='text-brand-primary font-bold text-6xl md:text-5xl'>WE ARE A CREATIVE DIGITAL AGENCY</h1>
        </div>
        <p className='w-full lg:w-1/2 text-sm md:text-sm tracking-wider leading-6'>Webmax Digital Solutions LLP is a Full-Service Digital Agency Based in India & GCC. Webmax provides market research, event marketing, Media productions, digital marketing, web development, app development, brand development, motion graphics, content writing & print manufacture. Our clients are involved in every step along the way because we are wired for long-term contracts and retained customers.</p>
      </div>

    </div>
  )
}

export default page
