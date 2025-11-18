import { Facebook, Instagram, MessageCircle, PhoneCall } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer(){
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+27700000000'
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 ring-2 ring-amber-400/40" />
            <div className="font-semibold">UrbanExecutive Shuttle</div>
          </div>
          <p className="mt-3 text-sm text-gray-400">Premium long‑distance shuttle between Gauteng and Venda. Safe, reliable, and comfortable.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="font-semibold mb-2">Quick Links</div>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/routes-pricing">Routes & Pricing</Link></li>
              <li><Link to="/booking">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-2">Contact</div>
            <ul className="space-y-1 text-sm text-gray-300">
              <li><a href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g,'')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2"><MessageCircle className="w-4 h-4"/>WhatsApp</a></li>
              <li><a href="tel:+27700000000" className="inline-flex items-center gap-2"><PhoneCall className="w-4 h-4"/>+27 70 000 0000</a></li>
              <li><a href="mailto:bookings@urbanexecutive.co.za">bookings@urbanexecutive.co.za</a></li>
            </ul>
          </div>
        </div>
        <div>
          <div className="font-semibold mb-2">Follow</div>
          <div className="flex gap-3 text-gray-300">
            <a href="#" aria-label="Facebook"><Facebook className="w-5 h-5"/></a>
            <a href="#" aria-label="Instagram"><Instagram className="w-5 h-5"/></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-400">© {new Date().getFullYear()} UrbanExecutive Shuttle. All rights reserved.</div>

      <a href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g,'')}`} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 inline-flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-500 text-white shadow-lg">
        <MessageCircle className="w-4 h-4"/> Chat on WhatsApp
      </a>
    </footer>
  )
}
