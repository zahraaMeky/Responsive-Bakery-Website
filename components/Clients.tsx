'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';
import { clients } from "@/export";
import { FaQuoteLeft } from 'react-icons/fa';

const backgroundImageStyle = {
  backgroundImage: 'url("/banner1.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
};

const Clients = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 500,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section id="testimonial"
      className="w-full h-fit flex flex-col gap-20 px-10 lg:px-20 py-20 items-center justify-center"
      style={backgroundImageStyle}
    >
      <h2
        data-aos="zoom-in"
        data-aos-delay="200"
        className="text-[50px] text-white font-semibold text-center"
      >
        Read what our clients say
      </h2>
      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-full grid grid-cols-1 lg:grid-cols-4 gap-20 lg:gap-8 justify-center items-center"
      >
        {clients.map((client) => (
          <div
            key={client.name}
            className="p-10 bg-orange-600 relative rounded-xl flex flex-col gap-4 justify-center items-start h-[350px]"
          >
            <div className="bg-white rounded-full p-4 absolute -top-10 text-orange-600">
              <FaQuoteLeft className="text-4xl" />
            </div>
            <p className="text-lg text-white">{client.about}</p>
            <h3 className="text-xl font-bold text-white">{client.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
