"use client";
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Plus, ArrowRight, Clock } from 'lucide-react';
import Buttombar from './Buttombar';

const ServiceOverview: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2 + 50;

      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveStep(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    setActiveStep(0);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const timelineSteps = [
    {
      title: "Free Diagnostic Fee Applied to Repair",
      description:
        "Get a fast, no-hassle diagnosis of your device. If you choose to proceed with the repair, the diagnostic fee is applied to the total cost—so you only pay once.",
      icon: <Clock className="w-6 h-6 text-white" />,
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

  // Faults We Repair Data
  const faultsWeRepair = [
    {
      title: "LCD Repair / Replacement",
      description: "Broken LCD, lines on screen, blank display, backlight issues",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Battery Replacement",
      description: "Swollen battery, fast drain, not charging, overheating",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Charging Port Repair",
      description: "Loose connection, not charging, debris damage",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Camera Repair",
      description: "Blurry image, black screen, front/rear camera not working",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Water Damage Repair",
      description: "Liquid contact, corrosion, power failure, silent device",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Speaker & Microphone",
      description: "No sound, low volume, mic not working, echo issues",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Button Repair",
      description: "Power, volume, home, mute button stuck or not responding",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Software Issues",
      description: "Stuck on boot, iOS/Android update, virus, unlocking",
      icon: <CheckCircle className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-24 px-6 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <Buttombar />

        {/* Main Service Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32 pt-16">
          {/* Left Side - Service Description */}
          <div className="space-y-10">
            <div>
              <p className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-blue-100 shadow-sm">
                EXPERT TECH REPAIRS
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-8">
                Your Device, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Fixed Perfectly.</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                We combine 15+ years of expertise with premium parts and certified care to bring your electronics back to life — often within the hour.
              </p>
            </div>

            {/* Features */}
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-5 p-6 bg-white rounded-3xl border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300">
                  <div className="mt-1 bg-blue-50 p-3 rounded-2xl text-blue-600">{feature.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a 
                href="https://icloudwireless.setmore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-2xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <span>Kickstart Your Repair!</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side - Refined Timeline */}
          <div className="relative p-8 md:p-12 bg-white rounded-[3rem] border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
            <h3 className="text-2xl font-extrabold text-gray-900 mb-12 flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-base">3</div>
              Our Repair Process
            </h3>
            <div className="space-y-10 relative">
              {/* Vertical Progress Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-100"></div>

              {timelineSteps.map((step, index) => (
                <div
                  key={index}
                  ref={(el) => (stepRefs.current[index] = el)}
                  className="flex items-start space-x-8 relative group"
                >
                  {/* Indicator Icon */}
                  <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-4 border-white shadow-md ${
                    activeStep === index ? 'bg-blue-600 scale-110' : 'bg-gray-200'
                  }`}>
                    <div className={activeStep === index ? 'text-white' : 'text-gray-400'}>{step.icon}</div>
                  </div>

                  <div className={`flex-1 transition-all duration-500 ${activeStep === index ? 'opacity-100 translate-x-2' : 'opacity-60'}`}>
                    <h4 className={`text-xl font-bold mb-2 transition-colors ${activeStep === index ? 'text-blue-600' : 'text-gray-900'}`}>
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Faults We Repair Grid */}
        <div className="pt-24 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Full Range of Expert Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whatever the issue, our certified Dallas technicians have the tools and experience to fix it fast.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {faultsWeRepair.map((fault, index) => (
              <div
                key={index}
                className="group bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer text-center"
              >
                <div className="mx-auto mb-6 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
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
      </div>
    </section>
  );
};

export default ServiceOverview;