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
    <section id="amenities" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">
            Premium Amenities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the world-class facilities and services that make our properties truly exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon
            return (
              <div
                key={index}
                className="p-8 bg-card rounded-lg border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-block p-3 bg-accent/10 rounded-lg">
                  <Icon size={28} className="text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">
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
