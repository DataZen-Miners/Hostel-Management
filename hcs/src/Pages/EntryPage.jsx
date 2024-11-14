import React from 'react'
import Hero from '../Components/Entry Page/Hero/Hero'
import Features from '../Components/Entry Page/Features/Features'
import { HowItWorks } from '../Components/Entry Page/HowItWorks/HowItWorks'
import { Testimonails } from '../Components/Entry Page/Testimonials/Testimonails'
import Newsletter from '../Components/Entry Page/Newletter/Newsletter'

export const EntryPage = () => {
  return (
    <div >
      <Hero/>
      <Features/>
      <Testimonails/>
    </div>
  )
}