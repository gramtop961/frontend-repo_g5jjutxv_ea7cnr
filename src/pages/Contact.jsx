import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact(){
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER || '+27700000000'
  return (
    <div className="bg-black text-white">
      <Navbar />
      <section className="pt-24 pb-12 bg-gradient-to-b from-zinc-950 to-black">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Contact</h1>
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h3 className="font-semibold">Get in touch</h3>
              <ul className="mt-3 text-sm text-gray-300 space-y-2">
                <li>WhatsApp: <a className="text-white underline" href={`https://wa.me/${whatsappNumber.replace(/[^\\d]/g,'')}`} target="_blank" rel="noreferrer">Chat now</a></li>
                <li>Phone: <a className="text-white" href="tel:+27700000000">+27 70 000 0000</a></li>
                <li>Email: <a className="text-white" href="mailto:bookings@urbanexecutive.co.za">bookings@urbanexecutive.co.za</a></li>
                <li>Hours: 06:00 – 21:00 daily</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <iframe title="map" className="w-full h-[300px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114570.66972645006!2d28.0003515!3d-26.171504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950bf2029511b1%3A0x4e0f26f9f1e2a4a4!2sJohannesburg!5e0!3m2!1sen!2sza!4v1700000000000" loading="lazy" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
