'use client'

import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Amenities } from '@/components/amenities'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="bg-background">
      <Header />
      <Hero />
      <Amenities />
      <Footer />
    </div>
  )
}
