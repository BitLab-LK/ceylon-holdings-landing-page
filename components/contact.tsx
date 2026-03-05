'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

export function Contact() {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-balance">
              Get In Touch
            </h2>
            <p className="text-white/80 mb-12 text-lg">
              Ready to find your dream home? Contact our team today for personalized assistance and expert guidance.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <Phone size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <p className="text-white/80">+94 77 399 3964</p>
                  <p className="text-white/80">+94 77 399 3964</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <Mail size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-white/80">ceylonholdings@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 pt-1">
                  <MapPin size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-white/80">Wattegadara Road</p>
                  <p className="text-white/80">Maharagama, Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
            <form className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-white mb-2 block">
                  Full Name
                </Label>
                <Input
                  id="name"
                  placeholder="Your name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-white mb-2 block">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-white mb-2 block">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your property needs..."
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-accent resize-none"
                />
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
