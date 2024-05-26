'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import { menus } from "@/export";

const backrondImage = {
  backgroundImage: 'url("/banner10.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const OurMenu = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section id="menu" style={backrondImage} className="w-full h-fit bg-cover bg-center flex flex-col gap-10 px-10 lg:px-20 py-20 items-center">
      <h2 data-aos="zoom-in" data-aos-delay="200" className="text-[50px] text-white font-semibold text-center">Our Fresh Menus</h2>
      <div data-aos="zoom-in" data-aos-delay="200" className="w-full grid lg:grid-cols-3 grid-cols-1 gap-4 justify-center items-center">
        {menus.map((menu) => (
          <div key={menu.title} className="p-10 bg-black opacity-75  rounded-xl flex flex-col gap-4 justify-start h-60">

            <h3 className="text-2xl font-semibold text-white">{menu.title}</h3>
            <p className="text-lg text-slate-200">{menu.about}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMenu;
