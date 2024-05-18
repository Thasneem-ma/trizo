import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { BsMouse } from "react-icons/bs";
import { GiMiniSubmarine } from "react-icons/gi";
import { SlUserFemale } from "react-icons/sl";
function About() {
    return (
        <div className=' flex-col md:flex-row items-center  py-12 px-16 md:px-44 space-x-6'>
            <div className='flex items-center justify-center'>
                <h1 className='text-5xl md:text-9xl font-bold text-brand-primary opacity-10'>About Us</h1>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-3xl md:5xl text-slate-500 font-bold'>Design, Development & Web design </h1>
                <h1 className='text-3xl md:5xl text-slate-500 font-bold'>All Under One Roof!</h1>
                <h1 className='text-sm font-sans p-2 text-gray-500'>All reasons why Trizo is a wise option</h1>
            </div>
            <div className='flex  items-center  flex-col lg:flex-row py-36 '>
                <div className=''>
                    <h1 className='text-zinc-400'>Who We Are</h1>
                    <h1 className='text-green-900 font-bold text-6xl md:text-5xl'>TRIZO IS A CREATIVE DIGITAL AGENCY</h1>
                </div>
                <p className='w-full lg:w-1/2 text-sm md:text-sm tracking-wider leading-6'> Trizo is a team of visionary designers, curious problem solvers, and passionate collaborators, who believe that great designs are made when strategy and creativity work together.</p>
            </div>
            <div class="container overflow-hidden relative">
                <div class='flex flex-col lg:flex-row justify-center gap-4 text-6xl md:8xl'>
                    <h1 class="text-slate-400 animated-header">WEARE<span class="font-bold text-black">TZORI</span></h1>
                </div>
                <h1 class="text-sm text-center p-3 text-slate-400 animated-subheader">
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
            <div className='flex flex-col lg:flex-row   gap-2 py-10 px-2 space-x-3 items-center text-center content-center'>
                <div className='flex flex-col items-center shadow-green-700 hover:shadow-lg'>
                    <BsMouse className='text-brand-primary' size={40} />
                    <h1 className='text-lg font-semibold text-brand-primary'>Creative Ideas</h1>
                    <h1 className='font-light pt-2'>Content Strategy: Develop a content strategy that is aligned with the target audience and business goals, and create content that is engaging, informative, and shareable.</h1>
                </div>
                <div className='flex flex-col items-center shadow-green-700 hover:shadow-lg'>
                    <AiOutlineLike className='text-brand-primary' size={40} />
                    <h1 className='text-lg font-semibold text-brand-primary'>Quality First</h1>
                    <h1 className='font-light pt-2'>Content Strategy: Develop a content strategy that is aligned with the target audience and business goals, and create content that is engaging, informative, and shareable.</h1>
                </div>
                <div className=' flex flex-col items-center shadow-green-700 hover:shadow-lg'>
                    <GiMiniSubmarine className='text-brand-primary' size={40} />
                    <h1 className='text-lg font-semibold text-brand-primary'>Ontime Submission</h1>
                    <h1 className='font-light pt-2'>Content Strategy: Develop a content strategy that is aligned with the target audience and business goals, and create content that is engaging, informative, and shareable.</h1>
                </div>
                <div className='flex flex-col items-center shadow-green-700 hover:shadow-lg'>
                    <SlUserFemale className='text-brand-primary' size={40} />
                    <h1 className='text-lg font-semibold text-brand-primary'>Website Development</h1>
                    <h1 className='font-light pt-2'>Content Strategy: Develop a content strategy that is aligned with the target audience and business goals, and create content that is engaging, informative, and shareable.</h1>
                </div>
            </div>

        </div>
    )
}

export default About;
