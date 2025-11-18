import { useEffect, useRef, useState } from 'react'

// Helper to load Google Maps script if key present
function useGoogleMaps(apiKey){
  const [loaded, setLoaded] = useState(false)
  useEffect(()=>{
    if(!apiKey){ return }
    const id = 'gmaps-script'
    if(document.getElementById(id)) { setLoaded(true); return }
    const s = document.createElement('script')
    s.id = id
    s.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`
    s.async = true
    s.onload = () => setLoaded(true)
    document.head.appendChild(s)
  },[apiKey])
  return loaded
}

export default function BookingWidget(){
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_KEY
  const loaded = useGoogleMaps(apiKey)
  const pickupRef = useRef(null)
  const dropoffRef = useRef(null)
  const mapRef = useRef(null)
  const [g, setG] = useState(null)
  const [distanceKm, setDistanceKm] = useState(null)
  const [durationMin, setDurationMin] = useState(null)
  const [fare, setFare] = useState(null)

  useEffect(()=>{
    if(!loaded || !window.google) return
    const google = window.google
    setG(google)
    const options = { componentRestrictions: { country: 'za' } }
    const pickup = new google.maps.places.Autocomplete(pickupRef.current, options)
    const dropoff = new google.maps.places.Autocomplete(dropoffRef.current, options)

    const map = new google.maps.Map(mapRef.current, { center: { lat: -26.2041, lng: 28.0473 }, zoom: 6, disableDefaultUI: true, styles: [ { elementType: 'geometry', stylers: [{color:'#0b0b0b'}] }, { elementType:'labels.text.fill', stylers:[{color:'#e0e0e0'}] }, { elementType:'labels.text.stroke', stylers:[{color:'#0b0b0b'}] } ] })
    const directionsService = new google.maps.DirectionsService()
    const directionsRenderer = new google.maps.DirectionsRenderer({ suppressMarkers:false, polylineOptions:{ strokeColor:'#f59e0b', strokeWeight:5 } })
    directionsRenderer.setMap(map)

    function updateRoute(){
      const origin = pickupRef.current.value
      const destination = dropoffRef.current.value
      if(!origin || !destination) return
      directionsService.route({ origin, destination, travelMode: google.maps.TravelMode.DRIVING }, (result, status) => {
        if(status === 'OK'){
          directionsRenderer.setDirections(result)
          const leg = result.routes[0].legs[0]
          const km = leg.distance.value / 1000
          const min = Math.round(leg.duration.value / 60)
          setDistanceKm(km.toFixed(1))
          setDurationMin(min)
          // Fare: base R150 + R3.8 per km, min R350
          const calculated = Math.max(350, 150 + km * 3.8)
          setFare(Math.round(calculated))
        }
      })
    }

    pickup.addListener('place_changed', updateRoute)
    dropoff.addListener('place_changed', updateRoute)

    return () => {
      // no cleanup required for simple demo
    }
  }, [loaded])

  const [form, setForm] = useState({
    name: '', phone: '', date: '', time: '', passengers: 1, type: 'oneway', notes: ''
  })

  function handleSubmit(e){
    e.preventDefault()
    const text = `UrbanExecutive Shuttle Booking%0A%0A`+
      `Name: ${form.name}%0A`+
      `Phone: ${form.phone}%0A`+
      `Pickup: ${pickupRef.current?.value || ''}%0A`+
      `Drop-off: ${dropoffRef.current?.value || ''}%0A`+
      `Date: ${form.date} ${form.time}%0A`+
      `Passengers: ${form.passengers}%0A`+
      `Trip: ${form.type}%0A`+
      `Distance: ${distanceKm || '-'} km%0A`+
      `ETA: ${durationMin || '-'} min%0A`+
      `Estimated Fare: R${fare || '-'}%0A`+
      `Notes: ${form.notes}`

    const phone = (import.meta.env.VITE_WHATSAPP_NUMBER || '+27700000000').replace(/[^\d]/g,'')
    const url = `https://wa.me/${phone}?text=${text}`
    window.open(url, '_blank')
  }

  return (
    <section className="bg-gradient-to-b from-zinc-950 to-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8">
        <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-xl font-semibold mb-4">Book your ride</h2>
          {!apiKey && (
            <div className="mb-4 text-amber-400 text-sm">Add your Google Maps API key to enable autocomplete and live route preview.</div>
          )}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-sm text-gray-300">Pickup Location</label>
              <input ref={pickupRef} placeholder="Enter pickup..." className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div>
              <label className="text-sm text-gray-300">Drop-off Location</label>
              <input ref={dropoffRef} placeholder="Enter drop-off..." className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-gray-300">Date</label>
                <input type="date" value={form.date} onChange={e=>setForm(f=>({...f,date:e.target.value}))} className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm text-gray-300">Time</label>
                <input type="time" value={form.time} onChange={e=>setForm(f=>({...f,time:e.target.value}))} className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2" />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm text-gray-300">Passengers</label>
                <input type="number" min={1} value={form.passengers} onChange={e=>setForm(f=>({...f,passengers:e.target.value}))} className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2" />
              </div>
              <div>
                <label className="text-sm text-gray-300">Trip Type</label>
                <select value={form.type} onChange={e=>setForm(f=>({...f,type:e.target.value}))} className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2">
                  <option value="oneway">One-way</option>
                  <option value="return">Return</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-300">Special Requests</label>
              <textarea rows="3" value={form.notes} onChange={e=>setForm(f=>({...f,notes:e.target.value}))} className="mt-1 w-full rounded-lg bg-black/40 border border-white/10 px-3 py-2" />
            </div>

            <div className="pt-2 grid sm:grid-cols-3 gap-3 text-sm">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-gray-400">Distance</div>
                <div className="text-xl font-semibold">{distanceKm ? `${distanceKm} km` : '-'}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-gray-400">ETA</div>
                <div className="text-xl font-semibold">{durationMin ? `${durationMin} min` : '-'}</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                <div className="text-gray-400">Est. Fare</div>
                <div className="text-xl font-semibold">{fare ? `R${fare}` : '-'}</div>
              </div>
            </div>

            <button type="submit" className="w-full mt-2 px-6 py-3 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition">Send to WhatsApp</button>
          </form>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10 h-[420px] bg-zinc-900">
          <div ref={mapRef} className="w-full h-full" />
        </div>
      </div>
    </section>
  )
}
