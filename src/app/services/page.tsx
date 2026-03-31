import React from "react";
import {
  Laptop,
  Tablet,
  Monitor,
  Smartphone,
  Cpu,
  ShieldAlert,
  Database,
  Gamepad2,
  Apple,

  Briefcase,
  GraduationCap,
  ChevronRight,
  Clock,
  Sparkles
} from "lucide-react";
import { servicesData, hardwareData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const iconMap: Record<string, any> = {
  REPAIR: Laptop,
  APPLE: Apple,
  CUSTOM: Gamepad2,
  SECURITY: ShieldAlert,
  DATA: Database,
  DESKTOP: Monitor,
  OFFICE: Briefcase,
  WORKSTATION: Cpu,
  STUDENT: GraduationCap,
};

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/assets/iphone-repair.jpg" 
            alt="Professional Repair Service" 
            fill
            className="object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-blue-950/85 backdrop-blur-[2px]"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl 2xl:max-w-[1550px] mx-auto px-6 relative z-20 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-bold uppercase tracking-widest mb-6 border border-blue-400/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" /> Premium Solutions
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight drop-shadow-2xl">
            Check Out Our <span className="text-blue-400">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed font-medium text-center">
            From expert repairs to custom PC builds, we provide high-end technical solutions for all your personal and business needs.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 max-w-7xl 2xl:max-w-[1550px] mx-auto px-6">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-10 w-2 bg-blue-600 rounded-full"></div>
          <h2 className="text-3xl font-bold text-slate-900">Expert Repair & Technical Services</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => {
            const Icon = iconMap[service.category] || Laptop;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed min-h-[80px]">
                  {service.description}
                </p>
                <div className="mt-8 flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider group-hover:gap-2 transition-all">
                  Expert Service <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Hardware Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl 2xl:max-w-[1550px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-10 w-2 bg-purple-600 rounded-full"></div>
            <h2 className="text-3xl font-bold text-slate-900">Check Out Our Hardware</h2>
          </div>

          <p className="text-slate-500 mb-12 max-w-2xl">
            We stock a wide variety of high-performance devices and workstations. Whether you're a student, a gamer, or a professional, we've got you covered.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareData.map((item, index) => {
              const Icon = iconMap[item.category] || Monitor;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-purple-100 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-500/5 rounded-bl-[100%] transition-transform group-hover:scale-150 duration-500"></div>

                  <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-slate-200/50 flex justify-between items-center">
                    <span className="text-[10px] font-black text-slate-400 tracking-[0.2em] uppercase">In Store Now</span>
                    <Link href="https://icloudwireless.setmore.com/" className="text-purple-600 hover:text-purple-700 transition-colors">
                      <ChevronRight className="w-5 h-5 bg-purple-50 rounded-full p-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust & CTA Section */}
      <section className="py-20 bg-blue-50 border-y border-blue-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-8">
            <Clock className="w-4 h-4" /> No Appointment Needed for Repairs
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-blue-900 mb-6 leading-tight">
            Ready to Upgrade or Repair Your Tech?
          </h2>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            Visit us today at any of our Dallas locations or book your specialized service online to get a priority slot.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild className="px-10 py-7 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl text-lg font-bold shadow-xl shadow-blue-200">
              <Link href="https://icloudwireless.setmore.com/">Book Service Now</Link>
            </Button>
            <Button variant="outline" asChild className="px-10 py-7 rounded-2xl text-lg font-bold border-2">
              <Link href="/servicearea">Our Locations</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
