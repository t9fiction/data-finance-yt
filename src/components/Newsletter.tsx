import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3">
        <div className="md:col-span-2">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold md:py-2 py-1">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="space-y-2 md:py-2 py-1 flex flex-col">
          <input
            type="email"
            placeholder="Enter Email"
            className="rounded-sm w-[80%] max-w-sm mt-3"
          />
          <button className="bg-[#00df9a] hover:shadow-sm hover:shadow-white text-black w-[100px] rounded-sm font-medium hover:bg-transparent hover:text-[#00df9a]">
            Notify Me
          </button>
          <p className="md:text-sm text-[10px]">
            We care about the protection of your data. Read our{' '}
            <span className='text-[#00df9a]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
