import React from 'react'
import {TbBrandGravatar} from 'react-icons/tb'

function Navbar() {
  return (
    <div className='sticky top-0 bg-white z-50 w-full border-b shadow-sm'>
      <nav className='relative w-full md:h-20 h-20 grid grid-flow-col place-items-center '>
        <div className='relative lg:right-28 md:right-20 right-5 flex space-x-3 '>
            <h2 className='text-xs'>Logo Goes<br></br> here</h2>
            <h2 className='font-semibold text-xl'>Trizo</h2>
        </div>
        <div className='grid grid-flow-row place-items-end -space-y-1.5 relative lg:left-24 left-0'>
          <div className='space-x-5 flex font-medium items-center'>

            <button className='md:block hidden hover:underline underline-offset-1 duration-100' >Log In</button>
            <button className='md:block hidden hover:underline underline-offset-1 duration-100'>Explore</button>
            <div className='bg-gray-500 rounded-full p-1 hover:bg-gray-400 hover:cursor-pointer duration-100'>
                <TbBrandGravatar className='text-xl text-white' />
            </div>
          </div>
          <h1 className='italic text-sm font-light mr-12'>Please Sign in</h1>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
