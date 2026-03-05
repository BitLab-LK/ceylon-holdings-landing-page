'use client'

import Image from 'next/image'
import { Phone } from 'lucide-react'

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Ceylon Holdings"
            width={48}
            height={48}
            className="h-12 w-12"
          />
          <span className="text-xl font-bold text-primary hidden sm:block">Ceylon Holdings</span>
        </div>

        <div className="flex items-center gap-3">
          <a href="tel:+94773993964" className="flex items-center gap-2 text-accent hover:text-accent/80 transition font-semibold">
            <Phone size={20} />
            <span className="hidden sm:inline">+94 77 399 3964</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
