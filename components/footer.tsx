'use client'

import { Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h4 className="font-bold text-lg mb-4">Ceylon Holdings</h4>
            <p className="text-white/70 mb-6">
              Finding comfort, convenience, and home in Sri Lanka's most prestigious residential developments.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <a href="tel:+94773993964" className="text-white/70 hover:text-accent transition">
                  +94 77 399 3964
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <a href="mailto:ceylonholdings@gmail.com" className="text-white/70 hover:text-accent transition">
                  ceylonholdings@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/60">
          <p>&copy; 2026 Ceylon Holdings. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
