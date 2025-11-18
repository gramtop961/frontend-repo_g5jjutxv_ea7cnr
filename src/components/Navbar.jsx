import { Link, NavLink } from 'react-router-dom'
import { Menu, PhoneCall, MessageCircle } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/routes-pricing', label: 'Routes & Pricing' },
  { to: '/booking', label: 'Book' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+27700000000'

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 to-amber-600 ring-2 ring-amber-400/40" />
            <span className="font-semibold tracking-tight text-white">Urban<span className="text-amber-400">Executive</span> Shuttle</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map(i => (
              <NavLink key={i.to} to={i.to} className={({isActive}) => `text-sm ${isActive ? 'text-amber-400' : 'text-gray-300 hover:text-white'} transition`}>{i.label}</NavLink>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g,'')}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white text-sm transition">
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </a>
            <a href="tel:+27700000000" className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-amber-500 hover:bg-amber-600 text-black font-semibold text-sm transition">
              <PhoneCall className="w-4 h-4" /> Call Now
            </a>
          </div>

          <button className="md:hidden text-white" onClick={() => setOpen(v => !v)}>
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map(i => (
              <NavLink key={i.to} to={i.to} onClick={() => setOpen(false)} className={({isActive}) => `block px-3 py-2 rounded ${isActive ? 'bg-white/10 text-amber-400' : 'text-gray-200 hover:bg-white/5'}`}>{i.label}</NavLink>
            ))}
            <div className="flex gap-2 pt-2">
              <a href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g,'')}`} target="_blank" rel="noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-emerald-500 text-white text-sm">
                <MessageCircle className="w-4 h-4" /> WhatsApp
              </a>
              <a href="tel:+27700000000" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded bg-amber-500 text-black font-semibold text-sm">
                <PhoneCall className="w-4 h-4" /> Call
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
