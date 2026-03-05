'use client'

import { Check } from 'lucide-react'

interface Reason {
  title: string
  description: string
}

const reasons: Reason[] = [
  {
    title: 'Expert Guidance',
    description: 'Our experienced team understands the Sri Lankan real estate market inside and out'
  },
  {
    title: 'Premium Properties',
    description: 'Carefully curated selection of luxury residential developments in prime locations'
  },
  {
    title: 'Transparent Process',
    description: 'Clear communication and ethical practices throughout your property journey'
  },
  {
    title: 'Lifestyle Investment',
    description: 'Properties designed for modern living with world-class amenities and facilities'
  },
  {
    title: 'Strong Support',
    description: 'Dedicated post-purchase support and maintenance for your peace of mind'
  },
  {
    title: 'Vision & Values',
    description: 'We are committed to helping you find more than a house—we help you find a home'
  }
]

export function WhyChooseUs() {
  return (
    <section id="why" className="py-20 bg-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6 text-balance">
              Why Choose Ceylon Holdings?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With years of experience in Sri Lanka's luxury real estate market, we deliver properties and service that exceed expectations.
            </p>

            <div className="grid gap-4">
              {reasons.map((reason, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary mb-1">{reason.title}</h3>
                    <p className="text-muted-foreground text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl"></div>
            <div className="relative p-8 sm:p-12 bg-card rounded-2xl border border-accent/20">
              <div className="text-center">
                <div className="text-5xl font-bold text-accent mb-4">Vision</div>
                <div className="text-2xl font-bold text-primary mb-6">Venture</div>
                <div className="text-5xl font-bold text-accent">Value</div>
                <p className="text-muted-foreground mt-8 leading-relaxed">
                  Three core principles that guide every decision we make and every property we offer. We believe in creating spaces where people don't just live, but thrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
