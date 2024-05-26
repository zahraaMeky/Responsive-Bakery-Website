import Banner from '@/components/Banner'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import OurBread from '@/components/OurBread'
import OurMenu from '@/components/OurMenu'
import WhyUs from '@/components/WhyUs'
import React from 'react'

const page = () => 
  (
    <>
      <Header/>
      <Hero/>
      <OurBread/>
      <WhyUs/>
      <OurMenu/>
      <Banner/>
      <Clients/>
     <Contact/>
     <Footer/>


    </>
  )


export default page
