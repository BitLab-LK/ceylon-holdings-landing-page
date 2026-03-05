'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <span className="text-accent font-bold text-sm">CH</span>
          </div>
          <span className="text-xl font-bold text-primary hidden sm:block">Ceylon Holdings</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#amenities" className="text-foreground hover:text-primary transition">
            Amenities
          </a>
          <a href="#properties" className="text-foreground hover:text-primary transition">
            Properties
          </a>
          <a href="#why" className="text-foreground hover:text-primary transition">
            Why Us
          </a>
          <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
            Contact Us
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border py-4">
          <div className="flex flex-col gap-4 px-4">
            <a href="#amenities" className="text-foreground hover:text-primary">
              Amenities
            </a>
            <a href="#properties" className="text-foreground hover:text-primary">
              Properties
            </a>
            <a href="#why" className="text-foreground hover:text-primary">
              Why Us
            </a>
            <Button className="w-full bg-accent text-accent-foreground">
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
