import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import bgpic from '../assets/this.jpg'


function Hero() {

  return (
    <div className='h-[800px] bg-zinc-200'>
    <div className="relative flex flex-col-reverse h-full py-16 lg:pt-0 lg:flex-col lg:pb-0">
      <div className="inset-y-0 top-0 right-0 z-0  w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-[-5px] hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <img
          className="object-cover w-full h-56 rounded  shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src={bgpic}
          alt=""
        />
      </div>
      <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
        <div className="mb-16 ml-[-100px] lg:my-40 ml-[-200px] lg:max-w-lg lg:pr-5">
          <h2 className='ml-[0px] mt-[60px] w-[800px] font-black  text-[70px] '>Step up your fashion really quick with our <span class="text-blue-500">bags</span>.</h2>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero