import React from 'react';

const Aboutus = () => {
  return (
    <div className="w-full relative py-[4rem] min-h-screen bg-[#004733]">
      <div className="mx-[12rem] max-sm:mx-4 h-[90%] flex flex-col justify-center items-center">
        <h1 className="text-2xl max-sm:text-xl text-[#1ee07f]">Our Mission</h1>
        <h3 className="text-4xl mt-4 font-semibold max-sm:text-xl text-white max-sm:mx-0 mx-32 text-center">
          We’re making homeownership simpler, faster — and most importantly, more accessible for all Americans.
        </h3>
      </div>

      <div className="mx-[17rem] max-sm:mx-4 mt-[70px] flex gap-10 max-sm:flex-wrap max-sm:gap-4">
        <div className="w-1/2 max-sm:w-full h-[280px]">
          <h1 className="text-left mt-1 text-[20px] text-[#1ee07f]">The status quo is broken</h1>
          <p className="mt-6 text-left text-[#727473]">
            The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you.
          </p>
          <button className="text-center hover:bg-[#004733] hover:text-white font-semibold rounded-3xl p-4 mt-3 bg-[#1ee07f]">
            Read Vishal Story
          </button>
        </div>
        <div className="w-1/2 max-sm:mt-6 max-sm:w-full h-[280px]">
          <img
            src="https://media.better.com/video/vishal-mission.jpg"
            className="w-full h-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
