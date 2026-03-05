'use client'

import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-primary to-secondary flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_1px)] bg-[length:40px_40px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6">
            <span className="text-accent font-semibold text-sm">Welcome to Luxury Living</span>
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
          Find Comfort.
          <br />
          Find Convenience.
          <br />
          <span className="text-accent">Find Home.</span>
        </h1>

        <p className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto text-balance">
          Experience the perfect blend of luxury, security, and community at Ceylon Holdings. Your dream home awaits in Sri Lanka's most prestigious residential developments.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-base font-semibold">
            Explore Properties
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-base font-semibold">
            Learn More
          </Button>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  )
}
