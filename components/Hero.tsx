'use client';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from 'next/image';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section id="hero" className="flex flex-col lg:flex-row w-full justify-between items-start">
      <div className="w-full lg:w-[50%]">
        <Image src="/hero.jpg" width={800} height={500} alt="hero" className="bg-cover bg-center"/>
      </div>
      <div className="w-full lg:w-[50%] flex flex-col gap-10 p-20 justify-center items-center">
        <Image src="/logo.png" data-aos="zoom-in" data-aos-delay="200" width={120} height={100} alt="logo" />
        <h1 data-aos="zoom-in" data-aos-delay="400" className="text-[50px] text-black text-center leading-[55px]">
          Fresh breads <br/> handcrafted daily
        </h1>
        <p data-aos="fade-up" data-aos-delay="600" className="text-center text-xl text-slate-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius nihil harum amet consequuntur facilis sint tempore iusto necessitatibus illum fuga.
        </p>
        <button  data-aos="fade-up" data-aos-delay="800" className="border-2 border-black px-14 py-4 rounded-full font-bold uppercase">read more</button>
      </div>
    </section>
  );
};

export default Hero;
