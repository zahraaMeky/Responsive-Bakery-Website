'use client';
import React from "react";
import { Link } from "react-scroll";
import { FaCopyright } from "react-icons/fa";
import { FaArrowPointer } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <section className="bg-black w-full text-white flex justify-center items-center gap-4 p-3">
        <FaCopyright />
        <h5 className="text-lg font-semibold">Copyright 2024, Crave Bakes, All Rights Reserved</h5>
      </section>
      <div className="bg-orange-500 text-black p-3 rounded-full cursor-pointer hover:bg-white fixed right-6 bottom-6">
        <Link to="hero" spy={true} smooth={true} offset={-100}>
          <FaArrowPointer className="w-[30px] h-[30px]"/>
        </Link>
      </div>
    </>
  );
}

export default Footer;
