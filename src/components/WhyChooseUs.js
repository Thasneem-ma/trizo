import React from 'react'

function WhyChooseUs() {
  return (
    <section className="relative w-full top-9 py-12 px-20">
      <div className="container lg:flex w-full  mx-auto ">
        <div className=' lg:max-w-[16%] lg:h-fit md:mx-auto'>

        <h2 className="text-3xl md:text-4xl text-center lg:text-start font-bold mb-8 lg:mb-0 lg:relative ">Why Choose Us</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-[60%] md:max-w-xl md:mx-auto gap-8">
          {/* Expertise */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Expertise</h3>
            <p className="text-gray-700">
              Our team consists of skilled professionals who excel in their respective fields, ensuring top-notch solutions for every project.
            </p>
          </div>
          
          {/* Experience */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Experience</h3>
            <p className="text-gray-700">
              With years of industry experience, we have a deep understanding of what it takes to deliver outstanding results.
            </p>
          </div>
          
          {/* Quality */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Quality</h3>
            <p className="text-gray-700">
              We pride ourselves on delivering high-quality work that meets and exceeds our clients' expectations.
            </p>
          </div>
          
          {/* Customer Satisfaction */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Customer Satisfaction</h3>
            <p className="text-gray-700">
              Our commitment to exceptional customer service ensures a smooth and enjoyable collaboration from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>

  )
}

export default WhyChooseUs
