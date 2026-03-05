'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Amenities } from '@/components/amenities'
import { Properties } from '@/components/properties'
import { WhyChooseUs } from '@/components/why-choose-us'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <Hero />
      <Amenities />
      <WhyChooseUs />
      <Properties />
      <Contact />
      <Footer />
    </div>
  )
}
