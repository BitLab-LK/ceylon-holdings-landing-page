'use client'

import { MapPin, Home, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Property {
  name: string
  location: string
  units: string
  description: string
  featured: boolean
}

const properties: Property[] = [
  {
    name: 'Colombo Heights',
    location: 'Colombo 9, Colombo',
    units: '120+ Units',
    description: 'Modern apartment complex with panoramic city views and luxury amenities',
    featured: true
  },
  {
    name: 'The Residences',
    location: 'Battaramulla, Colombo',
    units: '85+ Units',
    description: 'Contemporary living spaces designed for the discerning urban resident',
    featured: false
  },
  {
    name: 'Lakeside Villas',
    location: 'Colombo 4, Colombo',
    units: '45+ Units',
    description: 'Exclusive villa community with serene lakeside settings and green spaces',
    featured: true
  }
]

export function Properties() {
  return (
    <section id="properties" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4 text-balance">
            Featured Developments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our curated selection of premium residential projects across Sri Lanka's most desirable locations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={index}
              className={`rounded-lg overflow-hidden border transition-all duration-300 ${
                property.featured
                  ? 'border-accent bg-accent/5 lg:col-span-1 lg:row-span-2 flex flex-col'
                  : 'border-border hover:border-accent'
              }`}
            >
              <div className={`bg-gradient-to-br from-primary to-secondary p-8 text-white flex items-center justify-center ${
                property.featured ? 'flex-1' : 'h-48'
              }`}>
                <Home size={property.featured ? 80 : 48} className="opacity-20" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-primary mb-4">{property.name}</h3>

                <div className="space-y-3 mb-6 flex-1">
                  <div className="flex items-start gap-3">
                    <MapPin size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{property.location}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users size={18} className="text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{property.units}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{property.description}</p>

                <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  View Details
                </Button>
              </div>

              {property.featured && (
                <div className="px-6 py-3 bg-accent/10 border-t border-accent/20">
                  <span className="text-accent font-semibold text-sm">Featured Property</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
