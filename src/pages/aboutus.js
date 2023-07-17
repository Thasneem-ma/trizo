import Navbar from '@/components/Navbar'
import React from 'react'
import {VscDebugBreakpointLog} from 'react-icons/vsc'

function about() {
  const company = 'Trizo';
  return (
    <div>
      <Navbar />
      <div className='w-full h-20'></div>
      <div className='w-full pt-16 pl-36 h-[150vh] relative space-y-12'>
        {/* main heading */}
        <div>
        <h1 className='relative  text-4xl'> <span className='font-medium text-teal-900'> 
           Trizo: <br></br>
          </span>
          Transforming Ideas into Experiences</h1>
          <h1 className='lg:max-w-6xl text-lg leading-7 mt-5'>Welcome to Trizo, where we bring ideas to life through our expertise in graphic designing, website development, and event media controlling. Since our establishment, we have been passionate about delivering exceptional services that leave a lasting impact. Our mission is to transform your ideas into captivating experiences that resonate with your audience.</h1>
        </div>
          {/* descrpt */}
          {/* services */}
          <div className='max-w-6xl'>
            <div className='space-y-4'>
            <h1 className='text-3xl font-normal'>Our Expertise:</h1>
             <h2 className='text-lg font-normal'> At {company} , we specialize in three core areas: </h2>

            <div className='font-normal'>
            <p className='flex items-center text-xl space-x-2'>
            <VscDebugBreakpointLog className=''/> 
            <span className='text-teal-800'>Graphic Designing:</span> 
            </p>
             <p className='max-w-3xl pl-7 font-light'>
               Our talented team of designers possesses a keen eye for aesthetics and a deep understanding of visual communication. We create stunning designs that evoke emotions, convey messages, and strengthen brand identities.
             </p>
            </div>
            <div className='font-normal'>
            <p className='flex items-center text-xl space-x-2'>
            <VscDebugBreakpointLog className=''/> 
            <span className='text-teal-800'>Website Development:</span> 
            </p>
             <p className='max-w-3xl pl-7 font-light'>
             We excel in crafting engaging and functional websites that captivate visitors and drive results. Using the latest technologies and best practices, we build user-friendly platforms that enhance your online presence and drive business growth.
               </p>
            </div>
            <div className='font-normal'>
            <p className='flex items-center text-xl space-x-2'>
            <VscDebugBreakpointLog className=''/> 
            <span className='text-teal-800'>Event Media Controlling:</span> 
            </p>
             <p className='max-w-3xl pl-7 font-light'>
             With our expertise in event media, we orchestrate seamless and immersive experiences. From audiovisual setups to lighting and multimedia presentations, we ensure every element is flawlessly executed, leaving a lasting impression on your attendees.
              </p>
            </div>
            
            </div>
          </div>
          {/* values */}
          <div className='max-w-6xl'>
            <div className='space-y-4'>
            <h1 className='text-3xl font-normal'>Approach and Values:</h1>
             <h2 className='text-lg font-light'> At {company} , we believe in collaboration and understanding your unique requirements. Our approach involves working closely with you to develop tailored solutions that meet your goals and exceed expectations. We value professionalism, creativity, attention to detail, and unwavering commitment to customer satisfaction. Your success is our priority.</h2>
            
            </div>
          </div>
        {/* team */}
        <div className='max-w-6xl'>
            <div className='space-y-4'>
            <h1 className='text-3xl font-normal'>Team:</h1>
             <h2 className='text-lg font-light'> Our team at {company} comprises passionate individuals who are experts in their respective fields. With diverse backgrounds and a shared dedication to excellence, we bring a wealth of knowledge and creativity to every project. Meet our talented team members who will partner with you to bring your vision to life.</h2>
            
            </div>
          </div>
        {/* Vision */}
        <div className='max-w-6xl'>
            <div className='space-y-4'>
            <h1 className='text-3xl font-normal'>Future Vision:</h1>
             <h2 className='text-lg font-light'> We are excited about the future of {company}. As we continue to grow, our vision is to expand our offerings, leverage emerging technologies, and stay at the forefront of our industry. We aim to forge long-lasting partnerships with our clients, providing them with innovative solutions that drive their success.</h2>
            
            </div>
          </div>

          <h1>
          Thank you for considering {company}. We look forward to collaborating with you and turning your ideas into memorable experiences.
          </h1>
      </div>
    </div>
  )
}

export default about
