import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import RoutesPricing from './pages/RoutesPricing'
import Booking from './pages/Booking'
import Contact from './pages/Contact'

export default function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/routes-pricing" element={<RoutesPricing />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}
