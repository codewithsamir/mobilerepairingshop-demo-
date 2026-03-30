"use client";
import { MapPin, Phone, Clock, ArrowRight, CheckCircle, Car } from "lucide-react";

const locations = [
  {
    id: 1,
    name: "iCloudwireless – Plano Rd",
    address: "9658 Plano Rd, Suite 100",
    city: "Dallas, TX 75238 (Primary)",
    phone: "214-436-7998",
    hours: "Mon–Fri 10:30AM–8PM | Sat 11AM–8PM | Sun 11AM–4PM",
    features: ["Free Parking", "Walk-ins Welcome", "Same-Day Repair"],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3352.2786793!2d-96.7098!3d32.8746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea1f0b9c66f8f%3A0x0!2s9658+Plano+Rd%2C+Dallas%2C+TX+75238!5e0!3m2!1sen!2sus!4v1699999999",
    color: "from-blue-600 to-cyan-500",
  },
  {
    id: 2,
    name: "iKloudwireless – Spring Valley",
    address: "8702 Spring Valley Rd, Suite D",
    city: "Dallas, TX 75240 (Inside Valley Mart)",
    phone: "214-436-7998",
    hours: "Mon–Fri 10:30AM–8PM | Sat 11AM–8PM | Sun 11AM–4PM",
    features: ["Free Parking Outside", "Walk-ins Welcome", "Expert Technicians"],
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.3!2d-96.8283!3d32.9337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c3b4!2s8702+Spring+Valley+Rd%2C+Dallas%2C+TX+75240!5e0!3m2!1sen!2sus!4v1699999998",
    color: "from-violet-600 to-blue-500",
  },
];

const ServiceAreaPage = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50/40 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-blue-600 text-sm font-bold tracking-widest uppercase mb-4">
            VISIT US IN DALLAS
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Two Convenient{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
              Store Locations
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Walk in or call ahead. Our certified technicians at both iCloudwireless Dallas stores are ready to fix your device — fast.
          </p>
        </div>

        {/* Location Cards */}
        <div className="space-y-16">
          {locations.map((loc, idx) => (
            <div
              key={loc.id}
              className={`grid lg:grid-cols-2 gap-8 items-stretch ${idx % 2 === 1 ? "lg:[direction:rtl]" : ""}`}
            >
              {/* Info Card */}
              <div className="[direction:ltr] bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.05)] border border-gray-100 flex flex-col justify-between">
                <div>
                  {/* Location badge */}
                  <div className={`inline-flex items-center space-x-2 bg-gradient-to-r ${loc.color} text-white px-4 py-2 rounded-full text-sm font-semibold mb-6`}>
                    <MapPin className="w-4 h-4" />
                    <span>Location {loc.id}</span>
                  </div>

                  <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{loc.name}</h2>

                  {/* Address */}
                  <div className="flex items-start space-x-3 mb-3">
                    <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800">{loc.address}</p>
                      <p className="text-gray-600">{loc.city}</p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-3 mb-3">
                    <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
                    <a href={`tel:${loc.phone}`} className="font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                      {loc.phone}
                    </a>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-3 mb-8">
                    <Clock className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                    <p className="text-gray-600">{loc.hours}</p>
                  </div>

                  {/* Features */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {loc.features.map((f) => (
                      <div key={f} className="flex items-center space-x-2 bg-blue-50 px-3 py-1.5 rounded-full">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-800">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://icloudwireless.setmore.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 text-center"
                  >
                    <span>Book a Repair</span>
                    <ArrowRight className="w-5 h-5" />
                  </a>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address + " " + loc.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 text-center"
                  >
                    <Car className="w-5 h-5" />
                    <span>Get Directions</span>
                  </a>
                </div>
              </div>

              {/* Map */}
              <div className="[direction:ltr] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 min-h-[400px] lg:min-h-[500px]">
                <iframe
                  title={`Map for ${loc.name}`}
                  src={loc.mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "400px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-[2rem] p-10 md:p-14 text-center text-white shadow-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Not Sure Which Location to Visit?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Call us and we'll direct you to the store closest to you. Both locations offer the same expert, same-day repair service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:214-436-7998"
              className="inline-flex items-center space-x-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow"
            >
              <Phone className="w-5 h-5" />
              <span>214-436-7998</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaPage;
