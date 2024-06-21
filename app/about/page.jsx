import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { BsMouse } from "react-icons/bs";
import { GiMiniSubmarine } from "react-icons/gi";
import { SlUserFemale } from "react-icons/sl";
function About() {
    return (
        <div className=' flex-col md:flex-row items-center px-16 md:px-44 space-y-28'>
            <div className='flex flex-col items-center justify-center py-16'>
                <h1 className='text-5xl md:text-9xl font-bold text-brand-primary opacity-10'>About Us</h1>
                <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl md:5xl text-slate-500 font-bold'>Crafting Design, Development, and Web Solutions</h1>
                <h1 className='text-3xl md:5xl text-slate-500 font-bold'>Under One Roof!</h1>
            </div>
            </div>
            
            <div className='flex  items-center  flex-col lg:flex-row gap-6 justify-between'>
                <div className=''>
                    <h1 className='text-zinc-400 text-4xl'>Who We Are</h1>
                    <h1 className='text-green-900 font-bold text-6xl md:text-5xl'>Trizo – Where Creativity  <br /> MEETS STRATEGY</h1>
                </div>
                <p className='w-full lg:w-1/2 text-sm md:text-sm tracking-wider leading-6'>Trizo isn’t just a digital agency; we’re your creative compass. Our team of visionary designers, problem solvers, and passionate collaborators believes in the synergy of strategy and creativity. We’re committed to:

Business Growth: Tailoring strategies to propel your brand forward.
User-Centric Experiences: Crafting seamless, intuitive designs.
Innovation: Pushing boundaries with future-proof solutions.
Join us on this journey where imagination and precision converge to shape remarkable digital experiences! </p>
            </div>
            

            {/*green box  */}
            <div className='flex flex-col lg:flex-row py-10 px-4 shadow-lg hover:shadow-xl hover:scale-105 hover:duration-150 hover:ease-in-out items-center text-center bg-brand-primary rounded-xl text-white space-x-2'>
                <div className='flex flex-col items-center px-4 content-center'>
                    <BsMouse className='text-white' size={40} />
                    <h1 className='text-lg font-semibold text-brand-primary'>Creative Ideas</h1>
                    <h1 className='font-light '>Content Strategy: Develop a content strategy that is aligned with the target audience and business goals, and create content that is engaging, informative, and shareable.</h1>
                </div>
                <div className='flex flex-col items-center px-4 content-center'>
                    <AiOutlineLike className='text-white' size={40} />
                    <h1 className='text-lg font-semibold text-brand-primary'>Quality First</h1>
                    <h1 className='font-light '>Content Strategy: Develop a content strategy that is aligned with the target audience and business goals, and create content that is engaging, informative, and shareable.</h1>
                </div>
                <div className=' flex flex-col items-center'>
                    <GiMiniSubmarine className='text-white' size={40} />
                    <h1 className='text-lg font-semibold text-brand-primary'>Ontime Submission</h1>
                    <h1 className='font-light '>Content Strategy: Develop a content strategy that is aligned with the target audience and business goals, and create content that is engaging, informative, and shareable.</h1>
                </div>
                <div className='flex flex-col items-center px-4 content-center'>
                    <SlUserFemale className='text-white' size={40} />
                    <h1 className='text-lg font-semibold text-brand-primary'>Website Development</h1>
                    <h1 className='font-light '>Content Strategy: Develop a content strategy that is aligned with the target audience and business goals, and create content that is engaging, informative, and shareable.</h1>
                </div>
            </div>

            {/* highlight text */}
            <div className="container overflow-hidden relative">
                <div className='flex flex-col lg:flex-row justify-center gap-4 text-6xl md:8xl'>
                    <h1 className="text-slate-400 animated-header">WE ARE <span className="font-bold text-green-900">TRIZO</span></h1>
                </div>
                <h1 className="text-sm text-center p-3 text-slate-400 animated-subheader">
                    Our goal is not only to create designs that look good, but designs that serve a purpose. We examine your brand from every angle. We look at the smallest details, bringing together market insights and business goals, to create a focused solution.
                </h1>
            </div>

            <div className='flex flex-col lg:flex-row  gap-2 py-20 px-5 md:px-0 space-x-3  text-start'>
                <div className='items-start flex flex-col gap-2.5 content-center shadow-green-100 shadow-lg p-5 hover:shadow-lg rounded-sm '>
                    <h1 className='text-3xl font-bold text-green-900 p-3'>Why Choose Us?</h1>
                    <h1 className=' text-sm text-slate-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, totam cupiditate reiciendis eos iusto adipisci facilis quisquam sequi ab fugiat unde quas consequuntur eligendi iste odit? Illo debitis atque soluta.</h1>
                    <h1 className='text-sm py-10 text-slate-600'>Our clients are involved in every step along the way. because we are wired for long-term contracts and retained customers.</h1>
                </div>
                <div className='items-start flex flex-col gap-2.5 content-center shadow-green-100 shadow-lg p-5 hover:shadow-lg rounded-sm '>
                    <h1 className='text-3xl font-bold text-green-900 p-3'>Our Team Persuit</h1>
                    <h1 className=' text-sm text-slate-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum, totam cupiditate reiciendis eos iusto adipisci facilis quisquam sequi ab fugiat unde quas consequuntur eligendi iste odit? Illo debitis atque soluta.</h1>
                    <h1 className='text-sm py-10 text-slate-600'>Our clients are involved in every step along the way. because we are wired for long-term contracts and retained customers.</h1>
                </div>
            </div>
            

        </div>
    )
}

export default About;
