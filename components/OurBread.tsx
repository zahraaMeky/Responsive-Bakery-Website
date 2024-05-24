'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ourbreads } from "@/export";
import Image from 'next/image';
const backrondImage = {
  backgroundImage: 'url("/banner4.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};



const OurBread = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section
      id="breads"
      className="w-full flex flex-col  justify-center items-center py-20 px-20 h-fit gap-10"
      style={backrondImage}
    >
      <h2 data-aos="zoom-in" className="text-[55px] text-white font-semibold">Our Breads</h2>
      <div className="grid grid-cols-1 lg:grid-cols-4 items-center justify-between gap-6" data-aos="zoom-in" data-aos-delay="200">
        {ourbreads.map((bread) => (
          <div key={bread.title} className="p-8 bg-white  rounded-lg flex flex-col gap-10 justify-center items-center">
            <Image src={bread.image} width={300} height={400} alt="hero" className="w-[300px] h-[200px] rounded-lg transform transition-transform hover:scale-110 duration-300 cursor-pointer"/>

            <h3 className="text-[20px] font-semibold text-black">{bread.title}</h3>
            <p className="text-center">{bread.desc}</p>
            <button className="border-2 border-black px-8 py-2 rounded-full font-semibold uppercase text-sm transform transition-transform hover:scale-110 duration-300 cursor-pointer">{bread.label}</button>

          </div>
        ))}
      </div>
    </section>
  );
};

export default OurBread;
