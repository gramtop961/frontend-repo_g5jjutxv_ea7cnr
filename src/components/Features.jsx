import { ShieldCheck, Wifi, MapPin, Users } from 'lucide-react'

const features = [
  { icon: ShieldCheck, title: 'Safe & Licensed', desc: 'Fully compliant, insured and professionally operated.' },
  { icon: Wifi, title: 'Free WiFi + Charging', desc: 'Stay connected and powered throughout your trip.' },
  { icon: MapPin, title: 'Door-to-Door Pickup', desc: 'We collect and drop at your exact address.' },
  { icon: Users, title: 'Professional Drivers', desc: 'Experienced drivers with excellent safety record.' },
]

export default function Features() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({icon:Icon,title,desc}) => (
            <div key={title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-amber-500/40 transition">
              <Icon className="w-6 h-6 text-amber-400" />
              <h3 className="mt-4 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-gray-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
