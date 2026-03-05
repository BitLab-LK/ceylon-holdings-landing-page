'use client'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-[600px] bg-gradient-to-r from-primary via-primary/80 to-secondary flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          Find Comfort.
          <br />
          Find Convenience.
          <br />
          <span className="text-accent">Find Home.</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Discover premium residential properties in Sri Lanka. Experience luxury living with world-class amenities and unmatched security.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
            Contact Us
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
