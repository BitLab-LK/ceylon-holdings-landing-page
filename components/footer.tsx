'use client'

import { Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center">
                <span className="text-secondary font-bold text-sm">CH</span>
              </div>
              <span className="font-bold">Ceylon Holdings</span>
            </div>
            <p className="text-white/60 text-sm">
              Finding comfort, convenience, and home in Sri Lanka since day one.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-accent transition">Properties</a></li>
              <li><a href="#" className="hover:text-accent transition">Amenities</a></li>
              <li><a href="#" className="hover:text-accent transition">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-accent" />
                <span>+94 77 399 3964</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <span>ceylonholdings@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-white/60 text-sm mb-3">
              Subscribe for updates on new properties and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-l text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-accent"
              />
              <button className="px-4 py-2 bg-accent hover:bg-accent/90 rounded-r text-secondary font-semibold text-sm transition">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-white/60 gap-4">
            <p>&copy; 2026 Ceylon Holdings. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition">Privacy Policy</a>
              <a href="#" className="hover:text-accent transition">Terms of Service</a>
              <a href="#" className="hover:text-accent transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
