export default function PriceTable(){
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-semibold mb-6">Quick Prices (Gauteng ↔ Venda)</h2>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <div className="grid grid-cols-2 sm:grid-cols-4 bg-white/5 text-sm">
            <div className="p-3">Route</div>
            <div className="p-3">Shared Ride</div>
            <div className="p-3">Private Ride</div>
            <div className="p-3">Parcels</div>
          </div>
          <div className="divide-y divide-white/10">
            {[
              ['Pretoria','Thohoyandou','R350','R3000','From R120'],
              ['Johannesburg','Makhado','R350','R3000','From R120'],
              ['Sandton','Sibasa','R350','R3000','From R120'],
            ].map((r,i)=> (
              <div key={i} className="grid grid-cols-2 sm:grid-cols-4">
                <div className="p-3 text-gray-300">{r[0]} → {r[1]}</div>
                <div className="p-3">{r[2]}</div>
                <div className="p-3">{r[3]}</div>
                <div className="p-3">{r[4]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
