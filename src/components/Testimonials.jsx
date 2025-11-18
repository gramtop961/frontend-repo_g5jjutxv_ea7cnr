import { useEffect, useState } from 'react'

const items = [
  { name: 'Lerato M.', text: 'Professional and on time. The WiFi and charging made the trip so easy.', route: 'Johannesburg → Thohoyandou' },
  { name: 'Thendo R.', text: 'Door-to-door pickup is a lifesaver. Highly recommend UrbanExecutive.', route: 'Pretoria → Makhado' },
  { name: 'Sibusiso K.', text: 'Comfortable, safe, and great drivers. Will book again.', route: 'Sandton → Sibasa' },
]

export default function Testimonials(){
  const [index, setIndex] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setIndex(i => (i+1)%items.length), 4000)
    return () => clearInterval(id)
  }, [])

  const active = items[index]
  return (
    <section className="bg-gradient-to-b from-black to-zinc-950 text-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold mb-8">What riders say</h2>
        <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10">
          <p className="text-lg leading-relaxed text-gray-200">“{active.text}”</p>
          <div className="mt-4 text-sm text-gray-400">{active.name} • {active.route}</div>
          <div className="mt-6 flex gap-2">
            {items.map((_,i)=> (
              <span key={i} className={`h-1 rounded-full transition-all ${i===index?'w-10 bg-amber-500':'w-6 bg-white/20'}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
