'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';

const WhyUs = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section id="about" className="flex flex-col lg:flex-row justify-between items-center w-full">
      <div className="w-full lg:w-[50%] flex flex-col gap-10 p-20 justify-center items-center">
        <h1 data-aos="zoom-in" data-aos-delay="400" className="text-[50px] text-black text-center leading-[55px]">
        Where Every Treat <br/> Tells a Tale
        </h1>
        <p data-aos="fade-up" data-aos-delay="600" className="text-center text-xl text-slate-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil harum amet consequuntur facilis sint tempore iusto necessitatibus illum fuga.
        </p>
        <button data-aos="flip-up" data-aos-delay="400" className="border-2 border-black px-14 py-4 rounded-full font-bold uppercase">
          read more
        </button>
      </div>
      <div className="w-full lg:w-[50%]" data-aos="zoom-in" data-aos-delay="600">
        <Image src="/banner6.jpg" width={800} height={500} alt="hero" className="bg-cover bg-center"/>
      </div>
    </section>
  );
};

export default WhyUs;
