// "use client";
// import React, { useState, useEffect, useRef } from 'react';
// import { CheckCircle, Plus, ArrowRight, Clock } from 'lucide-react';
// import Buttombar from './Buttombar';

// const ServiceOverview: React.FC = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY + window.innerHeight / 2 + 50;

//       stepRefs.current.forEach((ref, index) => {
//         if (ref) {
//           const rect = ref.getBoundingClientRect();
//           const elementTop = rect.top + window.scrollY;
//           const elementBottom = elementTop + rect.height;

//           if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
//             setActiveStep(index);
//           }
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     setActiveStep(0);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

  const features = [
    {
      title: "Same-Day Instore Repair",
      description:
        "iCloudwireless provides fast, reliable phone and tablet repair right in our stores. With locations in Dallas, our certified technicians deliver high-quality service using genuine spare parts backed by a 30-day warranty.",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Free Parking & Convenient Walk-ins",
      description:
        "Visit either of our two convenient Dallas locations. Enjoy free parking right outside our stores while you experience a friendly, quick, and professional repair process.",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
  ];

//                   {/* Content */}
//                   <div
//                     className={`flex-1 pb-8 transition-all duration-500 ${
//                       activeStep === index ? 'transform translate-x-2' : ''
//                     }`}
//                   >
//                     <h3
//                       className={`text-xl font-semibold mb-3 transition-colors duration-500 ${
//                         activeStep === index ? 'text-blue-600' : 'text-gray-900'
//                       }`}
//                     >
//                       {step.title}
//                     </h3>
//                     <p
//                       className={`leading-relaxed transition-colors duration-500 ${
//                         activeStep === index ? 'text-gray-800' : 'text-gray-600'
//                       }`}
//                     >
//                       {step.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* New Section: Faults We Repair - Added Below */}
//       <div className="max-w-7xl mx-auto px-6 py-16">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             Faults We Repair – Mobiles & Tablets
//           </h2>
//           <p className="text-gray-600 max-w-3xl mx-auto">
//             We fix all common hardware and software issues across all major brands. From cracked screens to software glitches, we've got you covered.
//           </p>
//         </div>

//         {/* Grid of Faults */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {faultsWeRepair.map((fault, index) => (
//             <div
//               key={index}
//               className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-center"
//             >
//               <div className="flex justify-center mb-4">{fault.icon}</div>
//               <h3 className="text-lg font-semibold text-gray-900 mb-2">
//                 {fault.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {fault.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServiceOverview;



"use client";
import React from 'react';
import { CheckCircle2, Wrench, CalendarClock, ShieldCheck, ArrowRight } from 'lucide-react';
import Buttombar from './Buttombar';

export default function ServiceOverview() {
  const mainBenefits = [
    {
      icon: <CalendarClock className="w-10 h-10 text-blue-600" />,
      title: "We Come to You — Same Day",
      desc: "Fast mobile repair service delivered to your home or office in Dallas, Plano, Richardson and nearby areas."
    },
    {
      title: "Certified Fast Instore Repairs",
      description:
        "Walk in without an appointment! Our certified technicians begin your repair using genuine parts while you wait in our comfortable store environment.",
      icon: <Plus className="w-6 h-6 text-white" />,
    },
    {
      title: "Quality Assurance & Peace of Mind",
      description:
        "Enjoy peace of mind with a 30-day warranty on parts and labor. Pay only after the repair is complete and fully tested—quick, convenient, and worry-free.",
      icon: <Plus className="w-6 h-6 text-white" />,
    },
  ];

  const commonRepairs = [
    "Cracked / Broken Screen", "Battery Replacement", "Charging Port Issues",
    "Camera Not Working", "Water / Liquid Damage", "Speaker & Microphone Problems",
    "Power / Volume Buttons", "Software & iCloud Issues"
  ];

  return (
    <div className="bg-gradient-to-br from-white via-blue-50/50 to-slate-50 relative overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        <Buttombar />

        {/* Main Service Section (Original Design) */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Service Description */}
            <div className="space-y-8">
              <div>
                <p className="text-sm font-medium text-gray-600 tracking-wider uppercase mb-4">
                  EXPERT TECH REPAIRS
                </p>
                <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-8">
                  Expert Phone Repair,<br />
                  Always Fast, Always Reliable
                </h1>
              </div>

              {/* Features */}
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                        {index === 1 && (
                          <span className="text-blue-600 underline ml-1">
                            booking your appointment
                          </span>
                        )}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <button className="group flex items-center text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors duration-200">
                  <span className="underline">Kickstart Your Repair!</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Right Side - Timeline */}
            <div className="relative">
              <div className="space-y-12">
                {timelineSteps.map((step, index) => (
                  <div
                    key={index}
                    ref={(el) => (stepRefs.current[index] = el)}
                    className="flex items-start space-x-6"
                  >
                    {/* Timeline Icon */}
                    <div className="relative flex-shrink-0">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${activeStep === index
                            ? 'bg-blue-600 scale-110 shadow-lg shadow-blue-600/30'
                            : 'bg-gray-400 scale-100'
                          }`}
                      >
                        {step.icon}
                      </div>
                      {index < timelineSteps.length - 1 && (
                        <div
                          className={`absolute top-12 left-1/2 w-0.5 h-16 transform -translate-x-1/2 transition-colors duration-500 ${activeStep > index ? 'bg-blue-600' : 'bg-gray-300'
                            }`}
                        ></div>
                      )}
                    </div>

                    {/* Content */}
                    <div
                      className={`flex-1 pb-8 transition-all duration-500 ${activeStep === index ? 'transform translate-x-2' : ''
                        }`}
                    >
                      <h3
                        className={`text-xl font-semibold mb-3 transition-colors duration-500 ${activeStep === index ? 'text-blue-600' : 'text-gray-900'
                          }`}
                      >
                        {step.title}
                      </h3>
                      <p
                        className={`leading-relaxed transition-colors duration-500 ${activeStep === index ? 'text-gray-800' : 'text-gray-600'
                          }`}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* New Section: Faults We Repair - Added Below */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Faults We Repair – Mobiles & Tablets
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We fix all common hardware and software issues across all major brands. From cracked screens to software glitches, we've got you covered.
            </p>
          </div>

          {/* Grid of Faults */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {faultsWeRepair.map((fault, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-100 hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 group flex flex-col items-center text-center cursor-pointer"
              >
                <div className="flex justify-center mb-6 w-14 h-14 bg-blue-50 rounded-xl items-center group-hover:scale-110 transition-transform duration-300">
                  {fault.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {fault.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {fault.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <a
            href="https://icloudwireless.setmore.com/"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all group"
          >
            Book Your Repair Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}