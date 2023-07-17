import React from 'react'

function Action() {
  return (
    <div className='w-full lg:h-[50vh] bg-black lg:py-16 py-14 text-white '>
        <div className=" grid lg:grid-flow-col grid-flow-row-dense place-content-center place-items-center 
        lg:text-start text-center lg:gap-40 gap-5 mx-auto">
            <h1 className='md:text-6xl text-5xl max-w-md'>
            Transform Ideas. Build Community.
            </h1>
            <div className='space-y-4'>
                <h1 className='max-w-sm text-sm font-light'>Join our creative community to transform your ideas into reality. Contact us to discuss your project, request a quote, or explore our portfolio. Let's collaborate and bring your vision to life!</h1>
                <div className=' h-12'>

                <button className='bg-white text-black font-medium p-1.5 rounded-sm text-lg px-3 hover:border hover:border-solid  hover:mt-2 hover:ml-2 
                 hover:border-white border-none border-spacing-1 hover:bg-transparent hover:text-white hover:duration-100'>Connect</button>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Action
