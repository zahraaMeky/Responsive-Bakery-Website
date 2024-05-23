import Banner from '@/components/Banner'
import Clients from '@/components/Clients'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero'
import OurBread from '@/components/OurBread'
import OurMenu from '@/components/OurMenu'
import WhyUs from '@/components/WhyUs'
import React from 'react'

const page = () => 
  (
    <>
      <Hero/>
      <OurBread/>
      <WhyUs/>
      <OurMenu/>
      <Banner/>
      <Clients/>
     <Contact/>


    </>
  )


export default page
