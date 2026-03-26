import React from "react";
import { ArrowRight, Home, MessageCircle } from "lucide-react";



const ContactInfoCards: React.FC = () => {
  const cards: CardData[] = [
    {
      title: "Contact Us",
      content: (
        <>
          <p className="font-semibold">iCloudwireless</p>
          <p className="text-gray-600 mt-2">
            9658 Plano Rd, Suite 100, Dallas, TX 75238<br/>
            8702 Spring Valley Road, Suite D, Dallas, TX 75240
          </p>
          <p className="mt-4 font-medium">Phone Numbers</p>
          <p className="text-gray-600">(214) 436-7998</p>
          <p className="text-gray-600">(469) 544-7447</p>
          <p className="mt-4 font-medium">Support Email</p>
          <p className="text-blue-600">itech@icloudwireless.com</p>
        </>
      ),
      buttonLabel: "Speak with a Tech",
      buttonIcon: <ArrowRight className="w-5 h-5" />,
      buttonBg: "bg-white",
    },
    {
      title: "Our Service Areas",
      content: (
        <>
          <p className="font-semibold">Primary Service Locations</p>
          <p className="text-gray-600 mt-2">
            Dallas, Plano, Richardson, Irving, Garland, Mesquite, Carrollton, 
            and surrounding communities in Texas.
          </p>
        </>
      ),
      buttonLabel: "View Service Areas",
      buttonIcon: <Home className="w-5 h-5" />,
      buttonBg: "bg-blue-50",
    },
    {
      title: "Live Chat Support",
      content: (
        <div className="flex flex-col items-center justify-center flex-1 text-center">
          <p className="text-4xl font-bold text-gray-900">
            We're online, ready to help!
          </p>
          <div className="mt-6 flex justify-center">
            <div className="bg-blue-100 p-4 rounded-full">
              <MessageCircle className="w-10 h-10 text-blue-600" />
            </div>
          </div>
        </div>
      ),
      buttonLabel: "Start a Chat",
      buttonIcon: <MessageCircle className="w-5 h-5" />,
      buttonBg: "bg-blue-50",
    },
  ];
  

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-slate-50 relative overflow-hidden">
      {/* Decorative fluid blob */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-80 h-80 bg-cyan-100/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 px-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col p-8"
            style={{ minHeight: "100%" }}
          >
            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-6 border-b border-gray-100 pb-4">
              {card.title}
            </h3>
            <div className="text-md flex-1">{card.content}</div>
            <button
              className={`mt-8 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-semibold transition-colors duration-200 ${card.buttonBg} ${card.buttonBg === 'bg-white' ? 'border border-gray-200 hover:bg-gray-50 text-gray-800' : 'hover:bg-blue-100 text-blue-700'}`}
            >
              {card.buttonIcon}
              {card.buttonLabel}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfoCards;
