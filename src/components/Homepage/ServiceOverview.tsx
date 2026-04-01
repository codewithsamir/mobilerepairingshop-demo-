"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Wrench,
  CalendarClock,
  ShieldCheck,
  ArrowRight,
  Clock,
  Plus,
  Laptop,
  Apple,
  Gamepad2,
  ShieldAlert,
  Database,
  Smartphone
} from 'lucide-react';
import Buttombar from './Buttombar';
import { servicesData } from '@/lib/data';

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
      icon: <CheckCircle2 className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Free Parking & Convenient Walk-ins",
      description:
        "Visit either of our two convenient Dallas locations. Enjoy free parking right outside our stores while you experience a friendly, quick, and professional repair process.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    },
  ];

  const timelineSteps = [
    {
      title: "Free Diagnostic",
      description:
        "Get a fast, no-hassle diagnosis of your device. If you choose to proceed with the repair, the diagnostic fee is applied to the total cost—so you only pay once.",
      icon: <Wrench className="w-6 h-6 text-white" />,
    },
    {
      title: "Certified Fast Instore Repairs",
      description:
        "Walk in without an appointment! Our certified technicians begin your repair using genuine parts while you wait in our comfortable store environment.",
      icon: <Clock className="w-6 h-6 text-white" />,
    },
    {
      title: "Quality Assurance & Peace of Mind",
      description:
        "Enjoy peace of mind with a 30-day warranty on parts and labor. Pay only after the repair is complete and fully tested—quick, convenient, and worry-free.",
      icon: <ShieldCheck className="w-6 h-6 text-white" />,
    },
  ];


  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/30 py-12 px-6 overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-100/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-[1536px] mx-auto">


        {/* Main Service Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32 pt-16">
          {/* Left Side - Service Description */}
          <div className="space-y-10">
            <div>
              <p className="inline-block px-4 py-1.5 bg-blue-50 text-blue-700 text-xs font-bold tracking-widest uppercase rounded-full mb-6 border border-blue-100 shadow-sm">
                EXPERT TECH REPAIRS
              </p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-8">
                Your device is <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">in safe hands.</span>
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
                <span>Book Your Repair!</span>
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
                  <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 border-4 border-white shadow-md ${activeStep === index ? 'bg-blue-600 scale-110' : 'bg-gray-200'
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

        {/* Full Services Section */}
        <div className="pt-24 border-t border-gray-100">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              Our Specialized Repair Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From mobile devices to high-end gaming consoles and data recovery, we handle it all with certified expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => {
              const iconMap: Record<string, any> = {
                REPAIR: <Laptop className="w-6 h-6" />,
                APPLE: <Apple className="w-6 h-6" />,
                CONSOLE: <Gamepad2 className="w-6 h-6" />,
                SECURITY: <ShieldAlert className="w-6 h-6" />,
                DATA: <Database className="w-6 h-6" />,
              };
              
              const icon = iconMap[service.category] || <Smartphone className="w-6 h-6" />;
              
              return (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="group bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer block"
                >
                  <div className="mb-6 w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-gradient-to-br group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
                    {icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-8 flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-20">
          <a
            href="https://icloudwireless.setmore.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all group lg:px-20 lg:py-7 lg:text-2xl"
          >
            Book Your Repair Now
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;