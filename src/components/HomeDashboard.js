import React from 'react'
import {Typewriter,Cursor} from 'react-simple-typewriter'
import dashBoardIcon from '../assets/dashBoardIcon.svg'
import Image from 'next/image'

function HomeDashboard() {
  

  return (
    <div className=' w-full  lg:h-[90vh] md:h-[84vh] h-[90vh] overflow-hidden grid md:grid-flow-col-dense grid-flow-row-dense row-span-3 md:col-span-3
     items-center md:place-content-stretch place-content-center auto-cols-auto auto-rows-auto md:space-y-0 space-y-4'>
      
      <div className='relative  w-fit md:col-start-3 row-start-1'>
      <Image src={dashBoardIcon} width={600} height={600} className='w-[600px] animate-pulse' alt="art" />
      </div>
      {/* text area */}
      <div className='relative md:top-0 w-fit -z-10 lg:left-36 md:left-24 left-24 md:col-start-1 md:col-end-3
      md:pb-0 pb-24'>
        <div className='font-medium md:text-6xl text-3xl text-teal-950 text-center md:text-start -space-y-1 md:space-y-0 md:opacity-10 
        '>
          <h1>Transforming Ideas, <br></br></h1>
          <h1>Online Precence,<br></br></h1>
          <h1>and Events: <br></br></h1>
          <h1 className='font-semibold md:text-7xl text-4xl md:pt-0 pt-2'>Trizo&apos;s Expertise,<br></br></h1>
        </div>
      <div className= 'absolute md:block hidden inset-0 md:top-20 w-fit z-10 '>
        <h1 className='font-medium md:text-7xl text-4xl text-teal-950 md:text-end text-center'>
       <Typewriter
       words = {['Transforming ','Ideas,','Online ','Presence,','and Events:', "Trizo's Expertise"]}

       loop={0}
            typeSpeed={120}
            deleteSpeed={30}
            delaySpeed={1000}
            cursor
            
       />
       {}
      
        
        </h1>
        
      </div>
      </div>
    </div>
  )
}

export default HomeDashboard
