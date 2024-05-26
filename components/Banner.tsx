'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import { menus } from "@/export";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section id="banner" className="flex flex-col w-full justify-center items-center px-10 lg:px-20 py-20 gap-6">
      <div className="text-center">
        <h2 data-aos="zoom-in" className="text-[50px] text-black font-semibold leading-[60px]">
          Our freshly baked bread is the<br/>hero of our breakfast menu
        </h2>
        <p data-aos="zoom-in" data-aos-delay="200" className="text-xl text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil harum<br/>
          amet consequuntur facilis sint tempore iusto necessitatibus illum fuga.
        </p>
        <button data-aos="zoom-in" data-aos-delay="400" className="border-2 border-black px-14 py-4 rounded-full font-bold uppercase mt-4">
          Read more
        </button>
      </div>
      
      <div>
        <Image src="/banner3.jpg" data-aos="zoom-in" data-aos-delay="600" width={800} height={600} alt="Banner Image" />
      </div>
    </section>
  );
};

export default Banner;
