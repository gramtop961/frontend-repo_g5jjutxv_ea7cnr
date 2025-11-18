import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import BookingWidget from '../components/BookingWidget'

export default function Booking(){
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="pt-24">
        <BookingWidget />
      </div>
      <Footer />
    </div>
  )
}
