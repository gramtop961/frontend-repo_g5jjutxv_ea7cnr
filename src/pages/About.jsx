import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function About(){
  return (
    <div className="bg-black text-white">
      <Navbar />
      <section className="pt-24 pb-12 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="mt-3 text-gray-300">UrbanExecutive Shuttle is a premium long‑distance transport service connecting Gauteng and Venda daily. We focus on safety, comfort and reliability with professional drivers and a modern fleet.</p>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {['Mission','Vision','Values'].map((t,i)=> (
              <div key={t} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <h3 className="font-semibold">{t}</h3>
                <p className="text-sm text-gray-300 mt-2">{i===0? 'Deliver a safe, executive travel experience at fair prices.': i===1? 'Be the most trusted shuttle for Gauteng ↔ Venda.':'Safety, professionalism, comfort, reliability.'}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {[1,2,3].map(i => (
              <div key={i} className="aspect-video rounded-2xl bg-white/5 border border-white/10" />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
