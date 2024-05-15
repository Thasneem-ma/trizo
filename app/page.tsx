'use client'
import Image from "next/image";
import OurClients from '@/components/OurClients.js'
import Banner from '@/components/Banner.js'
import Banner2 from '@/components/Banner2.js'
import ServiceBox from '@/components/ServiceBox.js'
import WhatWe from '@/components/WhatWe.jsx'
import Portfolio from '@/components/Portfolio.jsx'



export default function Home() {
  

  return (
    <main className="flex min-h-screen flex-col space-y-14 ">
      <div className="space-y-0 md:space-y-8  top-28 md:top-20">
      <div className="flex flex-col space-y-3 mx-auto items-center py-12 md:py-20 px-20 md:px-44">
      <h1 className="text-5xl font-semibold max-w-lg text-center">Transforming Ideas Into Stunning Designs</h1>
      <h1 className="max-w-lg text-center">We provide the complete solution for your Needs</h1>
      <button className="bg-brand-primary text-white text-lg font-semibold px-4 py-1.5 relative top-3 rounded-full">Explore</button>
      </div>
      <OurClients/>
      </div>
     <div className="z-50">
      <Banner />
      <Banner2/>
     </div>
    <ServiceBox/>
    <WhatWe/>
    <Portfolio/>
    </main>
  );
}
