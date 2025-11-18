import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+27700000000'
  return (
    <section className="relative h-[78vh] min-h-[560px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/NoYj4XN8s0IlixJM/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/60 to-black/90 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
            Travel Smart. Travel Safe. UrbanExecutive Shuttle.
          </h1>
          <p className="mt-4 text-lg text-gray-200">Daily long-distance shuttle service between Gauteng and Venda.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/booking" className="px-6 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition">Book a Ride</Link>
            <a href={`https://wa.me/${whatsappNumber.replace(/[^\d]/g,'')}`} target="_blank" rel="noreferrer" className="px-6 py-3 rounded-full bg-emerald-500 text-white hover:bg-emerald-600 transition">WhatsApp Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
