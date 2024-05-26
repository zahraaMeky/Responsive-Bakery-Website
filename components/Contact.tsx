'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';

const backgroundImageStyle = {
  backgroundImage: 'url("/banner.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Contact = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section id="contact"
      style={backgroundImageStyle}
      className="w-full flex flex-col justify-start items-end gap-20 h-fit lg:py-20 py-10 px-10 lg:px-20"
    >
      <div className="w-full lg:w-[40%]"></div>
      <div className="w-full lg:w-[60%] flex flex-col justify-start items-center gap-10">
        <h2 data-aos="zoom-in" className="text-[50px] text-black font-semibold text-center">
          Contact Us
        </h2>
        <p
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-center text-xl text-black"
        >
          Lorem ipsum dolor sit, amet consectetur
          <br />
          adipisicing elit. Quod velit sunt possimus unde doloribus dolores voluptatem officia,
        </p>
        <div className="flex flex-col justify-center items-center gap-6 lg:w-[80%] w-full">
          <div id="form-box" className="grid lg:grid-cols-2 grid-cols-1 justify-center items-center gap-4 w-full">
            <div id="input-container" className="flex flex-col justify-center items-start gap-2">
              <h6 className="text-lg font-semibold text-black">Full Name</h6>
              <input
                className="bg-white text-black px-6 py-3 w-full rounded-full border-2 border-slate-400"
                placeholder="Enter Your Name"
              />
            </div>
            <div id="input-container" className="flex flex-col justify-center items-start gap-2">
              <h6 className="text-lg font-semibold text-black">Email</h6>
              <input
                className="bg-white text-black px-6 py-3 w-full rounded-full border-2 border-slate-400"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <button className="w-full bg-black px-6 py-3 rounded-full font-semibold text-white">
            Submit
          </button>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400" className="w-full grid lg:grid-cols-3 grid-cols-1 justify-end items-start gap-6 mt-10">
          <div className="flex flex-col justify-center items-start gap-3">
            <h6 className="text-2xl font-semibold text-black">FIND US</h6>
            <p className="text-xl">121 Rock Sreet, 21 <br/>Avenue, New York, NY 92103-9000</p>

          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <h6 className="text-2xl font-semibold text-black">HOURS</h6>
            <p className="text-xl">
              <span className="font-bold">Monday – Saturday</span><br/>9am – 7pm
            </p>
            <p className="text-xl">
              <span className="font-bold">Sunday</span><br/>10am – 6pm
            </p>


          </div>
          <div className="flex flex-col justify-center items-start gap-3">
            <h6 className="text-2xl font-semibold text-black">CALL US</h6>
            <p className="text-xl font-semibold">7382 9320 8393</p>
            <p className="text-xl font-semibold">7382 9320 8393</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
