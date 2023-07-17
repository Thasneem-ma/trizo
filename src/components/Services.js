import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";


function Services() {
  return (
    <div className='w-full h-[60vh] text-center py-20 space-y-4'>
    <h1 className='md:text-4xl text-3xl font-medium leading-8 md:max-w-3xl max-w-sm text-center
    mx-auto text-teal-950 '>
      We offer a range of professional services <br></br> to meet your needs</h1>

      <div className='md:max-w-2xl mx-auto'>

    <Carousel
      autoPlay
      autoFocus
      infiniteLoop
      showArrows={false}
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={3000}
    >
      <div className=" p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-2">Graphic Designing</h3>
            <p className="text-gray-700 text-sm">
            Captivate your audience with stunning visuals and compelling designs that leave a lasting impression. Our expert 
            designers will bring your ideas to life, creating eye-catching logos, branding materials, and engaging graphics.
            </p>
          </div>


          <div className="bg-white p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-2">Website Development</h3>
            <p className="text-gray-700 text-sm">
            Establish a strong online presence with a visually appealing and user-friendly website. Our skilled developers will
             craft a custom website that reflects your brand identity, drives conversions, and ensures a seamless user experience.
            </p>
          </div>


          <div className="bg-white p-6 transform hover:scale-105 transition duration-300 ease-in-out">
            <h3 className="text-xl font-semibold mb-2">Event Media Controlling</h3>
            <p className="text-gray-700 text-sm">
            Elevate your events with flawless audiovisual setups, lighting, and multimedia presentations. Our experienced team 
            will handle every aspect of event media, ensuring a memorable and immersive experience for your attendees.
            </p>
          </div>

    </Carousel>
      </div>


    </div>
  )
}

export default Services
