import About from '@/components/About'
import HomeDashboard from '@/components/HomeDashboard'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Services from '@/components/Services'
import WhyChooseUs from '@/components/WhyChooseUs'
import Action from '@/components/Action'

export default function Home() {
  return (
   <div className='font-[roboto] w-full '>
   <Navbar/>
   <section className='w-full md:space-y-3'>

   <HomeDashboard/>
   <About/>
   <Services/>
   <Action/>
   <WhyChooseUs/>
   </section>
   </div>
  )
}
