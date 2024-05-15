import React from 'react';
import Link from 'next/link';

function Page() {
  return (
    <div className='flex-col md:flex-row items-center py-12 px-16 md:px-44 space-x-6'>
      <div className='flex items-center justify-center'>
        <h1 className='text-5xl md:text-9xl font-bold text-brand-primary opacity-10'>PORTFOLIO</h1>
      </div>
      <div className='flex gap-5 justify-center items-center py-10 cursor-pointer text-slate-500'>
        <Link href="/all" className='transition ease-in-out delay-150 hover:translate-y-1  hover:text-brand-secondary duration-300'>
          All
        </Link>
        <Link href="/brand-identity" className='transition ease-in-out delay-150 hover:translate-y-1  hover:text-brand-secondary duration-300'>
          Brand Identity
        </Link>
        <Link href="/brochure" className='transition ease-in-out delay-150 hover:translate-y-1  hover:text-brand-secondary duration-300'>
          Brochure
        </Link>
        <Link href="/social-media" className='transition ease-in-out delay-150 hover:translate-y-1  hover:text-brand-secondary duration-300'>
          Social Media
        </Link>
        <Link href="/web-designing" className='transition ease-in-out delay-150 hover:translate-y-1  hover:text-brand-secondary duration-300'>
          Web designing
        </Link>
      </div>
    </div>
  );
}

export default Page;