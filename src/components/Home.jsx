import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { CiStopwatch } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { FcRating } from "react-icons/fc";



const Home = () => {
  return (
    <div className='relative w-full h-[105vh] bg-[#004733]'>
      <div className='absolute  z-20 flex max-sm:justify-end  justify-between top-[-40px] p-2 right-0 mx-5 h-[3.5em] w-[12rem] bg-[#004733]'>
        <div className='bg-[#004733] max-sm:hidden w-fit p-[0.5rem] rounded-full border-2 border-white'> 
          <FiPhoneCall className='text-xl text-white'  />
        </div>
        <div>
          <h1 className='text-2xl text-white max-sm:mt-[-10px] '>Sign in</h1>
        </div>
      </div>
      <div>
        <div className='text-whit z-10 absolute max-sm:top-[4%] font-sans max-sm:left-[12%] top-[6%] left-[29%] '>
          <h1 className='font-bold text-[100px] max-sm:text-5xl  text-[#1ee07f] leading-none'><span className='max-sm:ml-5 ml-10'>Mortgages</span> <br /> made simple</h1>
        </div>

        <div className="flex h-[500px] max-sm:flex-col relative mx-56 max-sm:mx-4">
  <div className="max-sm:relative max-sm:h-auto">
    <button className="absolute bottom-10 left-36 p-5 rounded-[2.5rem] hover:bg-[#004733] hover:text-white font-semibold text-black bg-[#1ee07f] max-sm:static  max-sm:ml-[65px] max-sm:w-[200px] max-sm:mt-[150px]">
      Start My Approval
    </button>
    <div className="flex absolute bottom-[-5px] text-white left-44 max-sm:static max-sm:justify-center max-sm:mt-2">
      <h1 className="text-[12px]  max-sm:text-[15px] max-sm:text-center">
        <span className='text-white'> 3 Min | No Timer</span>
      </h1>
    </div>
  </div>
  <div className="max-sm:flex max-sm:justify-center max-sm:mt-[-80px]">
    <img
      className="absolute left-[300px] top-[135px] max-sm:static max-sm:w-full max-sm:h-auto"
      src="https://media.better.com/better-com/homepage/hero-variant-c.webp"
      width={400}
      alt=""
    />
  </div>
  <div className="absolute right-28 bottom-24 max-sm:static max-sm:flex max-sm:flex-col max-sm:items-center max-sm:mt-4">
    <div className="flex gap-2 max-sm:justify-center">
      <div className="text-2xl">
        <FcGoogle />
      </div>
      <div className="text-2xl flex">
        <FcRating />
        <FcRating />
        <FcRating />
        <FcRating />
        <FcRating />
      </div>
    </div>
    <h1 className="text-[12px] text-white max-sm:text-center">
      4.6 Stars | 3177 Google Reviews
    </h1>
  </div>
</div>

      </div>
    </div>
  )
}

export default Home;