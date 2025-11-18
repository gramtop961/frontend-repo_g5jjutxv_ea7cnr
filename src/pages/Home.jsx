import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import PriceTable from '../components/PriceTable'
import Footer from '../components/Footer'

export default function Home(){
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <PriceTable />
      <section className="bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">How booking works</h2>
          <ol className="grid sm:grid-cols-3 gap-4">
            {[['Choose Route','Pick your pickup and drop-off'],['Choose Time','Select the date and time'],['Confirm Booking','We confirm instantly on WhatsApp']].map(([t,s],i)=> (
              <li key={t} className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-500 text-black font-bold">{i+1}</div>
                <h3 className="mt-3 font-semibold">{t}</h3>
                <p className="text-sm text-gray-300">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Footer />
    </div>
  )
}
