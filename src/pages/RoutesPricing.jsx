import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const gauteng = ['Pretoria','Johannesburg','Midrand','Sandton','Kempton Park','Randburg','Centurion','Soweto']
const venda = ['Thohoyandou','Sibasa','Makhado','Malamulele','Nzhelele','Dzanani','Vuwani']

export default function RoutesPricing(){
  return (
    <div className="bg-black text-white">
      <Navbar />
      <section className="pt-24 pb-12 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Routes & Pricing</h1>
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-semibold">Suggested Main Pickup Points (Gauteng)</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-300">
                {gauteng.map(x => <li key={x} className="px-3 py-2 rounded-lg bg-white/5">{x}</li>)}
              </ul>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-semibold">Suggested Main Drop‑off Points (Venda)</h3>
              <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-gray-300">
                {venda.map(x => <li key={x} className="px-3 py-2 rounded-lg bg-white/5">{x}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-semibold mb-2">Two‑way Pricing</h3>
              <div className="text-sm text-gray-300 space-y-1">
                <div>Shared ride: from <span className="text-white">R350</span> per person</div>
                <div>Private ride: from <span className="text-white">R3000</span> per trip</div>
                <div>Parcels: from <span className="text-white">R120</span> depending on size</div>
              </div>
            </div>
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-semibold mb-2">FAQ</h3>
              <ul className="text-sm text-gray-300 space-y-2">
                <li><span className="text-white">Luggage policy:</span> One medium bag + small carry‑on per passenger. Extra at small fee.</li>
                <li><span className="text-white">Children:</span> Child seats available on request.</li>
                <li><span className="text-white">Pickup times:</span> Morning and evening trips daily. Door‑to‑door available.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
