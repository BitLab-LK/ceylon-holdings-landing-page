'use client'

import { Shield, Zap, Trees, Car, Dumbbell, Leaf } from 'lucide-react'

interface Amenity {
  icon: React.ComponentType<{ size: number; className: string }>
  title: string
  description: string
}

const amenities: Amenity[] = [
  {
    icon: Shield,
    title: '24/7 Security',
    description: 'CCTV surveillance and professional security personnel'
  },
  {
    icon: Zap,
    title: 'Power Backup',
    description: 'Uninterrupted power supply and emergency generators'
  },
  {
    icon: Trees,
    title: 'Green Spaces',
    description: 'Beautifully landscaped gardens and outdoor areas'
  },
  {
    icon: Car,
    title: 'Parking',
    description: 'Dedicated underground and open parking spaces'
  },
  {
    icon: Dumbbell,
    title: 'Fitness Center',
    description: 'State-of-the-art gym and wellness facilities'
  },
  {
    icon: Leaf,
    title: 'Water Supply',
    description: 'Advanced water treatment and reserve systems'
  }
]

export function Amenities() {
  return (
    <section id="amenities" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-12 text-center">
          What We Offer
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div key={index} className="flex flex-col items-start gap-3">
                <Icon size={32} className="text-accent" />
                <h3 className="text-lg font-semibold text-primary">
                  {amenity.title}
                </h3>
                <p className="text-muted-foreground">
                  {amenity.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
