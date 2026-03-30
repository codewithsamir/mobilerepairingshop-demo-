import React from "react";
import { ArrowRight, MapPin, MessageCircle, Phone, Mail } from "lucide-react";
import Link from "next/link";



const ContactInfoCards: React.FC = () => {
  const cards = [
    {
      title: "Get in Touch",
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
            <div className="text-gray-600 text-sm leading-relaxed space-y-3 pt-0.5">
              <p>
                <strong className="text-gray-900 font-semibold block">Plano Rd (Primary)</strong>
                9658 Plano Rd, Suite 100<br />
                Dallas, TX 75238 (Primary)
              </p>
              <div className="h-px bg-gray-200 w-12 rounded-full"></div>
              <p>
                <strong className="text-gray-900 font-semibold block">Spring Valley Rd</strong>
                8702 Spring Valley Rd, Suite D<br />
                Dallas, TX 75240 (Inside Valley Mart)
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-500 flex-shrink-0" />
            <p className="text-gray-600 text-sm font-medium">(214) 436-7998</p>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-500 flex-shrink-0" />
            <p className="text-blue-600 text-sm font-medium">itech@icloudwireless.com</p>
          </div>
        </div>
      ),
      buttonLabel: "Call a Specialist",
      buttonHref: "tel:2144367998",
      buttonIcon: <Phone className="w-4 h-4" />,
      isExternal: true,
      iconHover: "group-hover:bg-blue-500 group-hover:text-white",
      buttonHover: "group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25"
    },
    {
      title: "Our Locations",
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      content: (
        <div className="space-y-4">
          <p className="text-gray-900 font-bold text-lg leading-tight">
            Serving the Greater <br />
            Dallas-Fort Worth Area
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Plano, Richardson, Irving, Garland, Mesquite, Carrollton,
            and all surrounding North Texas communities.
          </p>
        </div>
      ),
      buttonLabel: "View All Locations",
      buttonHref: "/servicearea",
      buttonIcon: <ArrowRight className="w-4 h-4" />,
      isExternal: false,
      iconHover: "group-hover:bg-blue-500 group-hover:text-white",
      buttonHover: "group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-500/25"
    },
    {
      title: "WhatsApp Support",
      icon: <MessageCircle className="w-6 h-6 text-green-600" />,
      content: (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="bg-green-50 p-4 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
            <MessageCircle className="w-10 h-10 text-green-600" />
          </div>
          <p className="text-gray-900 font-bold text-lg mb-1">Message Us</p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Reach out via WhatsApp at (214) 436-7998 for quick repair questions and estimates.
          </p>
        </div>
      ),
      buttonLabel: "Chat on WhatsApp",
      buttonHref: "https://wa.me/12144367998",
      buttonIcon: <MessageCircle className="w-4 h-4" />,
      isExternal: true,
      iconHover: "group-hover:bg-green-500 group-hover:text-white",
      buttonHover: "group-hover:bg-green-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-green-500/25"
    },
  ];


  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Decorative fluid blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-cyan-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          Our <span className="text-blue-600">Locations</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Visit one of our convenient locations in Dallas or reach out to us online.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 px-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="group bg-white border border-gray-100 rounded-[2rem] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-500 flex flex-col p-10 overflow-hidden relative"
          >
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
                  {card.title}
                </span>
                <div className={`p-2 bg-gray-50 rounded-xl transition-colors duration-300 `}>
                  {card.icon}
                </div>
              </div>

              <div className="flex-1 mb-10 min-h-[140px]">
                {card.content}
              </div>

              {card.isExternal ? (
                <a
                  href={card.buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl font-bold bg-gray-50 text-gray-900 transition-all duration-300 ${card.buttonHover}`}
                >
                  {card.buttonIcon}
                  <span>{card.buttonLabel}</span>
                </a>
              ) : (
                <Link
                  href={card.buttonHref}
                  className={`flex items-center justify-center gap-2 w-full px-6 py-4 rounded-2xl font-bold bg-gray-50 text-gray-900 transition-all duration-300 ${card.buttonHover}`}
                >
                  {card.buttonIcon}
                  <span>{card.buttonLabel}</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfoCards;
